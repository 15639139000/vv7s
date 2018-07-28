package com.jm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.jm.entity.Jurisdiction;
import com.jm.entity.Operation;
import com.jm.entity.Role;

/**
 * 角色接口
 */
public interface RoleDao {

	/**
	 * 拥有指定权限编号的所有角色集合
	 * @param jId 权限编号
	 * @return 角色集合
	 */
	public List<String> getRoleByJid(@Param("jId") Integer jId);
	/**
	 * 获取所有的角色
	 * @return 角色集合
	 */
	public List<Role> getAll();
	
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
	public Integer delRoleById(@Param("rId") Integer rId);
	
	/**
	 * 编辑角色
	 * @param role 角色实体
	 * @return 受影响的行数
	 */
	public Integer editRoleById(Role role);
	/**
	 * 根据id查找角色
	 * @param rId
	 * @return
	 */
	public Role getRoleById(@Param("rId") Integer rId);
	/**
	 * 根据角色id查找所有权限
	 * @param rId
	 * @return
	 */
	public List<Operation> findAllOperation(@Param("rId") Integer rId);
	/**
	 * 选中所有
	 * @param rId
	 */
	public void assignAllOperation(@Param("rId") Integer rId);
	/**
	 * 取消所有
	 * @param rId
	 */
	public void cancleAllOperation(@Param("rId") Integer rId);
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
	public List<Role> getRoleIdsByEId(@Param("eId") Integer eId);
	/**
	 * 根据角色获取对应菜单
	 * @param roleIds
	 * @return
	 */
	public List<Jurisdiction> queryAllMenuByRolrIds(@Param("roleIds") Integer[] roleIds);
	/**
	 * 根据当前角色获取对应菜单
	 * @param rId
	 * @return
	 */
	public List<Jurisdiction> queryAllMenuByRolrId(Integer rId);
}
