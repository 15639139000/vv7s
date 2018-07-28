package com.jm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.jm.entity.Operation;
import com.jm.entity.RoleOperation;

/**
 * 角色操作权限接口
 */
public interface RoleOperationDao {
	/**
	 * 根据角色id和操作id查询角色操作关系
	 * @param rId
	 * @param oId
	 * @return
	 */
	public RoleOperation getRoleOperationById(@Param("rId") Integer rId,@Param("oId") Integer oId);
	/**
	 * 添加角色操作权限关系
	 * @param roleOperation
	 */
	public void addRoleOperation(RoleOperation roleOperation);
	/**
	 * 根据角色id和操作id删除对应关系
	 * @param rId
	 * @param oId
	 */
	public void delRoleOperation(@Param("rId") Integer rId,@Param("oId") Integer oId);
	

}
