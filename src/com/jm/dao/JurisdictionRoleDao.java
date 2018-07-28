package com.jm.dao;

import org.apache.ibatis.annotations.Param;

import com.jm.entity.JurisdictionRole;

/**
 * 菜单角色关系接口
 * @author Administrator
 *
 */
public interface JurisdictionRoleDao {
	/**
	 * 根据角色删除菜单权限
	 * @param rId
	 */
	public void delJurisdictionRole(@Param("rId") Integer rId);
	/**
	 * 增加菜单
	 * @param jurisdictionRole
	 */
	public void addJurisdictionRole(JurisdictionRole jurisdictionRole);
	
	    
}
