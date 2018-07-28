package com.jm.service.impl;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.jm.dao.JurisdictionRoleDao;
import com.jm.dao.RoleDao;
import com.jm.dao.RoleOperationDao;
import com.jm.entity.Jurisdiction;
import com.jm.entity.JurisdictionRole;
import com.jm.entity.Operation;
import com.jm.entity.Role;
import com.jm.entity.RoleOperation;
import com.jm.service.RoleService;


/**
 * 角色接口实现类，实现业务逻辑
 */
@Service
public class RoleServiceImpl implements RoleService{

	@Autowired
	private RoleDao roleDao;
	
	@Autowired
	private RoleOperationDao roleOperDao;
	
	@Autowired
	private JurisdictionRoleDao jurisdictionRoleDao;
	
	@Transactional(readOnly = true)
	@Override
	public List<String> getRoleByJid(Integer jId) {
		return roleDao.getRoleByJid(jId);
	}
	@Transactional(readOnly = true)
	@Override
	public PageInfo<Role> getAll(Integer pageNo,Integer num)
	{
		PageHelper.startPage(pageNo, num);
		List<Role> list = roleDao.getAll();
		PageInfo<Role> pageInfo = new PageInfo<Role>(list);
		return pageInfo;
	}

	@Transactional(readOnly = true)
	@Override
	public List<Role> getRoleByDate() {
		return roleDao.getRoleByDate();
	}

	@Transactional
	@Override
	public Integer insertRole(Role role) {
		return roleDao.insertRole(role);
	}

	@Transactional
	@Override
	public Integer delRoleById(Integer rId) {
		return roleDao.delRoleById(rId);
	}

	@Transactional
	@Override
	public Integer editRoleById(Role role) {
		return roleDao.editRoleById(role);
	}
	@Override
	public Role getRoleById(Integer rId) {
		return roleDao.getRoleById(rId);
	}
	@Override
	public List<Operation> findAllOperation(Integer rId) {
		return roleDao.findAllOperation(rId);
	}
	@Override
	public void updateRoleOper(Integer rId, Integer oId, boolean isAssigned) {
		Role role = roleDao.getRoleById(rId);
        if(role == null){
            return;
        }
        if(isAssigned){
            RoleOperation roleOperation = this.roleOperDao.getRoleOperationById(rId,oId);
            if(roleOperation == null){
            	roleOperation = new RoleOperation(role.getrId(),oId);
                this.roleOperDao.addRoleOperation(roleOperation);
            }
        }else{
            this.roleOperDao.delRoleOperation(role.getrId(), oId);
        }
	}
	@Override
	public void assignAllOperation(Integer rId) {
		roleDao.assignAllOperation(rId);
	}
	@Override
	public void cancleAllOperation(Integer rId) {
		roleDao.cancleAllOperation(rId);
	}
	@Override
	public List<Jurisdiction> queryAllMenu() {
		List<Jurisdiction> menus = roleDao.queryAllMenu();
		return menus;
	}
	@Override
	public String getRoleIdsByEId(Integer eId) {
		List<Role> roles = roleDao.getRoleIdsByEId(eId);   	
		StringBuffer buffer = new StringBuffer();
		if(roles != null && roles.size()>0){
			for (Role role : roles) {
				buffer.append(role.getrId()).append(",");
			}
		}
		String roleId = buffer.toString();
		
		if(!StringUtils.isEmpty(roleId)){
			roleId = roleId.substring(0, roleId.lastIndexOf(","));
		}
		return roleId;
	}
	@Override
	public List<Jurisdiction> queryAllMenuByRolrIds(Integer[] roleIds) {
		return roleDao.queryAllMenuByRolrIds(roleIds);
	}
	@Override
	public List<Jurisdiction> queryAllMenuByRolrId(Integer rId) {
		return roleDao.queryAllMenuByRolrId(rId);
	}
	@Override
	public JSONObject roleAuth(Integer rId, String menuIds) {
		JSONObject rs = new JSONObject();
		boolean isSuccess = false;
		String msg = "";
		try {
			if(rId == null || menuIds == null) {
				throw new Exception("the rId or menuIds must be not null...");
			}
			//首先删除原有角色与菜单的关系
			jurisdictionRoleDao.delJurisdictionRole(rId);			
			//添加新的角色与菜单的关系
			String[] menusStr = menuIds.split(",");
			Integer menus[] = new Integer[menusStr.length];  
    		for(int i=0;i<menusStr.length;i++){  
    			menus[i]=Integer.parseInt(menusStr[i]); 
    		}
			JurisdictionRole jurisdictionRole = null;			
			for (Integer jId : menus) {
				jurisdictionRole = new JurisdictionRole(rId, jId);;
				jurisdictionRoleDao.addJurisdictionRole(jurisdictionRole);				
			}
			isSuccess = true;
			msg = "授权成功！";
		}catch(Exception e) {
			e.printStackTrace();
			msg = "操作失败！" + e.getMessage();
		}
		rs.put("success", isSuccess);
		rs.put("msg", msg);
		return rs;
	}
}
