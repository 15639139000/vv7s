package com.jm.service;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageInfo;
import com.jm.entity.Jurisdiction;
import com.jm.entity.Operation;
import com.jm.entity.Role;

/**
 * 角色接口，处理逻辑
 */
public interface RoleService {

	/**
	 * 拥有指定权限编号的所有角色集合
	 * @param jId 权限编号
	 * @return 角色集合
	 */
	public List<String> getRoleByJid(Integer jId);
	/**
	 * 获取所有的角色
	 * @param pageNo 
	 * @param num 
	 * @return 角色集合
	 */
	public PageInfo<Role> getAll(Integer pageNo, Integer num);
	
	/**
	 * 根据时间降序返回去前七条
	 * @return 角色集合根据时间
	 */
	public List<Role> getRoleByDate();
	
	/**
	 * 添加角色
	 * @param role 角色实体
	 * @return 受影响的行数
	 */
	public Integer insertRole(Role role);
	
	/**
	 * 删除角色
	 * @param nId 角色编号
	 * @return 受影响的行数
	 */
	public Integer delRoleById(Integer rId);
	
	/**
	 * 编辑角色
	 * @param role 角色实体
	 * @return 受影响的行数
	 */
	public Integer editRoleById(Role role);
	/**
	 * 根据角色id获取角色实体
	 * @param rId
	 * @return
	 */
	public Role getRoleById(Integer rId);
	/**
	 * 根据角色id查询所有的操作权限
	 * @param rId
	 * @return
	 */
	public List<Operation> findAllOperation(Integer rId);
	/**
	 * 保存针对角色权限的操作
	 * @param rId
	 * @param id
	 * @param isAssigned
	 */
	public void updateRoleOper(Integer rId, Integer id, boolean isAssigned);
	/**
	 * 选中所有
	 * @param rId
	 */
	public void assignAllOperation(Integer rId);
	/**
	 * 取消所有
	 * @param rId
	 */
	public void cancleAllOperation(Integer rId);
	/**
	 * 获取所有的菜单
	 * @return
	 */
	public List<Jurisdiction> queryAllMenu();
	/**
	 * 根据员工id获取其所有角色
	 * @param geteId
	 * @return
	 */
	public String getRoleIdsByEId(Integer geteId);
	/**
	 * 根据角色id获取对应菜单
	 * @param roleIds
	 * @return
	 */
	public List<Jurisdiction> queryAllMenuByRolrIds(Integer[] roleIds);
	/**
	 * 根据角色id获取对应菜单权限
	 * @param rId
	 * @return
	 */
	public List<Jurisdiction> queryAllMenuByRolrId(Integer rId);
	/**
	 * 为角色赋菜单权限
	 * @param rId
	 * @param menuIds
	 * @return
	 */
	public JSONObject roleAuth(Integer rId, String menuIds);
	
}
