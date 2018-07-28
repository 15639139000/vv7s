package com.jm.service;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.jm.entity.EmployeeStyle;

/**
 * 员工风采业务逻辑接口
 */
public interface EmployeeStyleService {

	/**
	 * 获取所有的员工风采
	 * @param pageNo 
	 * @param num 
	 * @return 员工风采集合
	 */
	public PageInfo<EmployeeStyle> getAll(Integer pageNo, Integer num);
	
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
	public Integer delEmployeeStyleById(Integer esId);
	
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
