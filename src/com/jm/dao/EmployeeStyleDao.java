package com.jm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.jm.entity.EmployeeStyle;

/**
 * 员工风采接口
 */
public interface EmployeeStyleDao {

	/**
	 * 获取所有的员工风采
	 * @return 员工风采集合
	 */
	public List<EmployeeStyle> getAll();
	
	/**
	 * 根据时间降序返回去前七条
	 * @return 员工风采集合根据时间
	 */
	public List<EmployeeStyle> getEmployeeStyleByDate();
	
	/**
	 * 添加员工风采
	 * @param employeeStyle 员工风采实体
	 * @return 受影响的行数
	 */
	public Integer insertEmployeeStyle(EmployeeStyle employeeStyle);
	
	/**
	 * 删除员工风采
	 * @param nId 员工风采编号
	 * @return 受影响的行数
	 */
	public Integer delEmployeeStyleById(@Param("esId") Integer esId);
	
	/**
	 * 编辑员工风采
	 * @param employeeStyle 员工风采实体
	 * @return 受影响的行数
	 */
	public Integer editEmployeeStyleById(EmployeeStyle employeeStyle);
	/**
	 * 根据id查询员工风采详情
	 * @param id
	 * @return
	 */
	public EmployeeStyle getEmployeeStyleById(Integer esId);
}
