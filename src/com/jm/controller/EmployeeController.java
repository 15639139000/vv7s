package com.jm.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FileUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.jm.dao.CompanyDao;
import com.jm.dao.DepartmentDao;
import com.jm.dao.EmployeeDao;
import com.jm.dao.NationDao;
import com.jm.dao.StateDao;
import com.jm.entity.Company;
import com.jm.entity.Department;
import com.jm.entity.Employee;
import com.jm.entity.Jurisdiction;
import com.jm.entity.Nation;
import com.jm.entity.PageModel;
import com.jm.entity.ResultDo;
import com.jm.entity.Role;
import com.jm.entity.State;
import com.jm.service.EmployeeService;
import com.jm.service.JurisdictionService;

@Controller
@RequestMapping(value = "employee")
public class EmployeeController {

	@Lazy
	@Autowired
	private EmployeeService employeeService;
	@Autowired
	private EmployeeDao employeeDao; // 注入dao层
	@Autowired
	private DepartmentDao departmentDao; // 注入dao层
	@Autowired
	private NationDao nationDao; // 注入dao层
	@Autowired
	private StateDao stateDao; // 注入dao层
	@Autowired
	private CompanyDao companyDao; //注入dao层
	
	@Lazy
	@Autowired
	private JurisdictionService jurisdictionService;
	
	@ResponseBody
	@RequestMapping(value = "checkUsername", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer checkUsername(@RequestParam(value = "logname") String username)
	{
		return employeeService.checkUsername(username);
	}
	//登录
	@RequestMapping(value = "login", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public String login(@RequestParam(value = "logname") String username, @RequestParam(value = "password") String password, 
			HttpSession session, @RequestParam(value = "savesid", required = false, defaultValue = "false") String savesId)
	{
		Subject subject = SecurityUtils.getSubject();
		UsernamePasswordToken token = new UsernamePasswordToken(username, password);
		if(!subject.isAuthenticated()){
			if(savesId.equals("true")){ // 记住我
				token.setRememberMe(true);
			}
			try {
				subject.login(token);
				List<Jurisdiction> nodes = jurisdictionService.getParentNode();
				session.setAttribute("nodes", nodes);
			} catch (UnknownAccountException uae){
				uae.printStackTrace();
			} catch (LockedAccountException lae){
				lae.printStackTrace();
			} catch (AuthenticationException ae) {
				ae.printStackTrace();
			}
		}
		session.setAttribute("employee", employeeDao.getEmployeeByName(token.getUsername()));
		return "redirect:/index.jsp";
	}
	
	/*@ResponseBody
	@RequestMapping(value = "entry", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer entry(Employee employee)
	{
		return employeeService.entry(employee);
	}*/
	
	     //验证用户名
		@ResponseBody
		@RequestMapping(value = "ent")
		public List<Employee> ent() {
			return employeeDao.queryB();
		}
	
	@ResponseBody
	@RequestMapping(value = "getEmployeeByEid", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Employee getEmployeeByEid(@RequestParam(value = "eId") Integer eId)
	{
		return employeeService.getEmployeeByEid(eId);
	}
	
	
	@RequestMapping(value = "ady")
	public String ady(Model model,String eName) {
		List<Nation> ln = nationDao.query();
		List<Department> ld = departmentDao.query();
		List<Employee> lem = employeeDao.queryEmA(eName);
		List<Company> lc = companyDao.getAll();
		model.addAttribute("ln", ln);
		model.addAttribute("ld", ld);
		model.addAttribute("lem", lem);
		model.addAttribute("lc", lc);
		return "/xtgl/addEmp";
	}
	
	@ResponseBody
	@RequestMapping(value="getByDid")
	public List<Employee> getEmployeeByDid(@RequestParam(value = "dId") Integer dId) {
		return employeeDao.getEmployeeByDid(dId);
	}
	
	@ResponseBody
	@RequestMapping(value="getByCid")
	public List<Department> getEmployeeByCid(@RequestParam(value = "cId") Integer cId) {
		return departmentDao.getDepartmentByCid(cId);
	}
	
	//添加用户
	@SuppressWarnings("unused")
	@RequestMapping(value = "add")
	public String add(Employee employee,MultipartFile photo,HttpServletRequest request,Integer dId,Integer nId,Integer sId,Integer eLeader){
		    if(employee.getUsername().equals("") || employee.getPassword().equals("")){
		    	return "/xtgl/addEmp";
		    }else{
		    	Department depa = departmentDao.getDepartmentByDid(dId);
			    employee.setDept(depa);
			    Nation nation = nationDao.getNationById(nId);
			    employee.setNation(nation);
			    State state = stateDao.getStateById(sId);
			    employee.setState(state);
				if(photo!=null){
			    	String realpath=request.getSession().getServletContext().getRealPath("/images");//文件存储位置
			    	String imagePath=photo.getOriginalFilename();//获取文件名加后缀
			    	String uploadpath=realpath+"/"+photo.getOriginalFilename(); //文件保存路径
			    	try {
						photo.transferTo(new File(uploadpath));//保存到根目录
					} catch (IllegalStateException | IOException e1) {
						// TODO Auto-generated catch block
						e1.printStackTrace();
					}
			    	employee.seteImage(imagePath);
			    }
				boolean succ = employeeService.addEmp(employee);
				return "redirect:/home.jsp";
		    }
	}

	
	
	/**
     * 查询所有任务并分页
     * @param page
     * @return
     */
	@ResponseBody
	@RequestMapping(value="/queryAll")
	public PageModel<Employee> query2(@RequestParam(name="page",required = true, defaultValue = "1") Integer page,String eName){
		PageModel<Employee> list = employeeService.queryEmpA(page,eName);
		if( list != null){
			return  list;
		}else{
			return null;
		}
	}
	
	
	//查询用户
	@RequestMapping(value = "query")
	public String queryEmp(int id,Model model){
		SimpleDateFormat sdf1= new SimpleDateFormat("EEE MMM dd HH:mm:ss z yyyy", Locale.ENGLISH);
		List<Employee> lis = employeeService.queryEmp(id);
		for(Employee em:lis) {
			Employee emp = new Employee();
			if(em.geteBirth()!=null){
				String e = sdf1.format(em.geteBirth());
				emp.seteBirth1(e);
			}
			if(em.geteHiredate()!=null){
				String ee = sdf1.format(em.geteHiredate());
				emp.seteHiredate1(ee);	
			}
			if(em.geteFormalDate()!=null){
				String eee = sdf1.format(em.geteFormalDate());
				emp.seteFormalDate1(eee);
			}
		}
		List<Nation> ln = nationDao.query();
		List<Department> ld = departmentDao.query();
		List<Employee> lem = employeeDao.queryB();
		List<State> ls = stateDao.get();
		List<Company> lc = companyDao.getAll();
		model.addAttribute("ln", ln);
		model.addAttribute("ld", ld);
		model.addAttribute("lem", lem);
		model.addAttribute("lis", lis);
		model.addAttribute("ls", ls);
		model.addAttribute("lc", lc);
		return "/xtgl/changeUser";
	}
	
	
	//修改用户信息
	@SuppressWarnings("unused")
	@RequestMapping(value = "changeEmp")
	public String upda(Employee employee,MultipartFile photo,HttpServletRequest request,Integer dId,Integer nId,Integer sId,Integer eLeader){
		Department depa = departmentDao.getDepartmentByDid(dId);
	    employee.setDept(depa);
	    Nation nation = nationDao.getNationById(nId);
	    employee.setNation(nation);
	    State state = stateDao.getStateById(sId);
	    employee.setState(state);
	    String requ = request.getParameter("eee");
	    if(!requ.equals("")){
	    	employee.seteImage(requ);
	    }else if(photo!=null){
	    	String realpath=request.getSession().getServletContext().getRealPath("/images");//文件存储位置
	    	String imagePath=photo.getOriginalFilename();//获取文件名加后缀
	    	String uploadpath=realpath+"/"+photo.getOriginalFilename(); //文件保存路径
	    	try {
				photo.transferTo(new File(uploadpath));//保存到根目录
			} catch (IllegalStateException | IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
	    	employee.seteImage(imagePath);
	    }
		boolean succ = employeeService.changeEmp(employee);
		return "redirect:/home.jsp";
	}
	
	@RequestMapping(value="person")
	public String Jmp(Model model) {
		List<Employee> ll = employeeDao.queryB();
		List<Nation> ln = nationDao.query();
		model.addAttribute("ll", ll);
		model.addAttribute("ln", ln);
		return "xtgl/changePerson";
	}
	
	//个人修改
	@RequestMapping(value = "changePerson")
	public String updatePerson(Employee employee,MultipartFile photo,HttpServletRequest request,Integer dId,Integer nId,Integer sId,Integer eLeader){
		Department depa = departmentDao.getDepartmentByDid(dId);
	    employee.setDept(depa);
	    Nation nation = nationDao.getNationById(nId);
	    employee.setNation(nation);
	    State state = stateDao.getStateById(sId);
	    employee.setState(state);
	    String requ = request.getParameter("eee");
	    if(!requ.equals("")){
	    	employee.seteImage(requ);
	    }else if(photo!=null){
	    	String realpath=request.getSession().getServletContext().getRealPath("/images");//文件存储位置
	    	String imagePath=photo.getOriginalFilename();//获取文件名加后缀
	    	String uploadpath=realpath+"/"+photo.getOriginalFilename(); //文件保存路径
	    	try {
				photo.transferTo(new File(uploadpath));//保存到根目录
			} catch (IllegalStateException | IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
	    	employee.seteImage(imagePath);
	    }
		boolean succ = employeeService.changeEmp(employee);
		if(succ==true) {
			return "redirect:/login.jsp";
		}else {
			return "redirect:/views/xtgl/changePerson.jsp";
		}
	}
		
	
	//删除用户
	@SuppressWarnings("unused")
	@RequestMapping(value = "deleteEmp")
	public String delete(int id){
		boolean nn = employeeService.deleEmp(id);
		return "redirect:/views/xtgl/Empinfo.jsp";
	}
	
	
	@RequestMapping("/user/role")
    public String userRole(ModelMap model,@RequestParam(name="eId")int eId){
        model.put("id", eId);
        model.put("user", this.employeeService.getById(eId));
        return "/admin/role";
    }
	
	 @RequestMapping("/user/change")
	    @ResponseBody
	    public Map<String,Object> rolePermissionsChange(ModelMap model,@RequestParam(name="eId")Integer eId
	    		,Integer rId, @RequestParam(name="isAssigned")boolean isAssigned,
	    		@RequestParam(name="type")String type){
		  Map<String,Object> res = new HashMap<>();
		  if("one".equals(type)){
			  employeeService.changeUserRole(eId, rId, isAssigned);
	        }
	        if("all".equals(type)){
	            if(isAssigned){
	                this.employeeService.assignAllRole(eId);
	            }else{
	                this.employeeService.cancleAllRole(eId);
	            }
	        }
	        res.put("success", true);
	        return res;
	    }
	 
	 @RequestMapping("/role/data")
	    @ResponseBody
	    public ResultDo<List<Role>> rolePermissionsData(ModelMap model,@RequestParam(name="eId")int eId){
		 List<Role> findAllRole = employeeService.findAllRole(eId);
	        ResultDo<List<Role>> res = new ResultDo<>();
	        res.setCode(0);
	        res.setMsg("");
	        res.setData(findAllRole);
	        res.setCount(findAllRole.size());
	        return res;
	    }
	
	 
	 @RequestMapping("/queryE")
	    @ResponseBody
	    public Map<String,Object> al(@RequestParam(name="page",required = true, defaultValue = "0") Integer pageNum,
	            @RequestParam(name="limit",required = true, defaultValue = "10") Integer pageSize, HttpServletRequest request,
	            Model model,String eName){
	    	PageHelper.startPage(pageNum, pageSize);
	    	List<Employee> list = employeeService.queryEmp(eName);
	    	PageInfo<Employee> p = new PageInfo<Employee>(list);
	    	Map<String,Object> map = new HashMap<>();
	    	map.put("code", 0);
	    	map.put("msg", "ok");
	    	map.put("count", p.getTotal());
	    	map.put("data", list);
	    	return map;
	    }
	
}
