package com.jm.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageInfo;
import com.jm.entity.Employee;
import com.jm.entity.Jurisdiction;
import com.jm.entity.Operation;
import com.jm.entity.ResultDo;
import com.jm.entity.Role;
import com.jm.service.EmployeeService;
import com.jm.service.RoleService;

@Controller
@RequestMapping(value = "role")
public class RoleController {

	@Autowired
	private RoleService roleService;
	
	@Autowired
	private EmployeeService employeeService;
	
	
	
	@ResponseBody
	@RequestMapping(value = "getAll", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public PageInfo<Role> getAll(@RequestParam(value = "pageNo", required = false, defaultValue = "1") Integer pageNo,Integer num)
	{
		return roleService.getAll(pageNo,num);
	}
	
	
	@ResponseBody
	@RequestMapping(value = "editRoleById", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer editRoleById(Role role)
	{
		return roleService.editRoleById(role);
	}
	
	@ResponseBody
	@RequestMapping(value = "delRoleById", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer delRoleById(@RequestParam(value = "rId") Integer rId)
	{
		return roleService.delRoleById(rId);
	}
	
	@ResponseBody
	@RequestMapping(value = "insertRole", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer insertRole(Role role)
	{
		return roleService.insertRole(role);
	}
	
	@RequestMapping(value = "operationPage")
	public String operationPage(ModelMap model,@RequestParam(name="rId")Integer rId)
	{	
		model.put("rId", rId);
        model.put("role", this.roleService.getRoleById(rId));
		return "/employee/operationPage";
	}
	@ResponseBody
	@RequestMapping(value = "findOperByRId")
	public ResultDo<List<Operation>> findOperByRId(ModelMap model,@RequestParam(name="rId")Integer rId)
	{	
		List<Operation> list = this.roleService.findAllOperation(rId);
        ResultDo<List<Operation>> res = new ResultDo<>();
        res.setCode(0);
        res.setMsg("");
        res.setData(list);
        res.setCount(list.size());
        return res;
	}
    @ResponseBody
    @RequestMapping(value = "updateRoleOper")
    public Map<String,Object> updateRoleOper(Integer rId,Integer oId,
            @RequestParam(name="type")String type,
            @RequestParam(name="isAssigned")boolean isAssigned){
        Map<String,Object> res = new HashMap<>();
        if("one".equals(type)){
            roleService.updateRoleOper(rId,oId,isAssigned);
        }
        if("all".equals(type)){
            if(isAssigned){
            	this.roleService.cancleAllOperation(rId);
                this.roleService.assignAllOperation(rId);
            }else{
                this.roleService.cancleAllOperation(rId);
            }
        }
        
        res.put("success", true);
        return res;
    }
    //角色信息和菜单的关系
    @RequestMapping(value = "menu")
    public String menu(ModelMap model,@RequestParam(name="rId")Integer rId){
        model.put("rId", rId);
        model.put("role", this.roleService.getRoleById(rId));
        return "/employee/menuRole";
    }
    //角色拿到所有的菜单
    @ResponseBody    
    @RequestMapping(value = "/menu/data")
    public JSONObject userMenu(@RequestParam(name="rId")Integer rId){
    	
    	Subject subject = SecurityUtils.getSubject();
    	Object principal = subject.getPrincipal();
    	Employee employee = (Employee) SecurityUtils.getSubject().getSession().getAttribute("employee");
    	List<Jurisdiction> allRolesMenu=null;
    	allRolesMenu = roleService.queryAllMenu();	
    	JSONArray user_arr = new JSONArray();
		JSONObject user_json = null;
    	for (Jurisdiction jurisdiction : allRolesMenu) {			
    		if(!(jurisdiction.getjIsParent() == 0 && jurisdiction.getjParent() == null)){
    			user_json = new JSONObject();
    			
    			user_json.put("id", jurisdiction.getjId());
    			user_json.put("name", jurisdiction.getjName());
    			user_json.put("pId",jurisdiction.getjParent());
    			user_arr.add(user_json);
    		}
		}
    	
    	JSONObject rs = new JSONObject();
    	List<Jurisdiction> queryAllMenuByRolrId = roleService.queryAllMenuByRolrId(rId);
    	JSONArray role_arr = new JSONArray();
		JSONObject role_json = null;
    	for (Jurisdiction jurisdiction : queryAllMenuByRolrId) {	
    		if(!(jurisdiction.getjIsParent() == 0 && jurisdiction.getjParent() == null)){
	    		role_json = new JSONObject();
				role_json.put("id",jurisdiction.getjId());
				role_json.put("name",jurisdiction.getjName());
				role_json.put("pId", jurisdiction.getjParent());   		
				role_arr.add(role_json);
    		}
		}
    	rs.put("data", user_arr);
    	rs.put("cur_role_data", role_arr);
		return rs;
    }
    @ResponseBody
    @RequestMapping(value = "/roleMenu/change")
    public JSONObject roleAuth(Integer rId, String menuIds) {
		return roleService.roleAuth(rId,menuIds);
	} 
}
