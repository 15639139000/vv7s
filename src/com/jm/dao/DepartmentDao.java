package com.jm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.jm.entity.Department;

/**
 * 部门接口
 */
public interface DepartmentDao {

	/**
	 * 根据部门编号查询部门记录
	 * @param dId 部门编号
	 * @return 部门记录
	 */
	public Department getDepartmentByDid(@Param("dId") Integer dId);
	
	public List<Department> getDepartmentByCid(@Param("cId") Integer cId);
	
	public List<Department> query();
}
