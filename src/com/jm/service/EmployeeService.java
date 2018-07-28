package com.jm.service;

import java.util.List;

import com.jm.entity.Employee;
import com.jm.entity.PageModel;
import com.jm.entity.Role;

/**
 * 职员接口，处理逻辑
 */
public interface EmployeeService {

	/**
	 * 验证用户名
	 * @param username 用户名
	 * @return 条数
	 */
	public Integer checkUsername(String username);
	
	
	/**
	 * 根据职员编号返回职员记录
	 * @param eId 职员编号
	 * @return 职员记录
	 */
	public Employee getEmployeeByEid(Integer eId);
	
	/**
	 * 添加员工信息
	 * @param employee
	 * @return
	 */
	public boolean addEmp(Employee employee);
	
	/**
	 * 查询所有用户并分页
	 * @param page
	 * @return
	 */
	public PageModel<Employee> queryEmpA(Integer page,String eName);
	
	/**
	 * 查询员工信息
	 * @param id
	 * @return
	 */
	public List<Employee> queryEmp(int id);
	
	/**
	 * 修改员工信息
	 * @param employee
	 * @return
	 */
	public boolean changeEmp(Employee employee);
	
	/**
	 * 修改密码
	 * @param employee
	 * @return
	 */
	/*public boolean changePwd(Employee employee);*/
	
	/**
	 * 删除员工信息
	 * @param employee
	 * @return
	 */
	public boolean deleEmp(int id);
	
	public List<Employee> queryEmp(String eName);
	
	public Employee getById(int eId); 
	/**
	 * 改变用户  角色中间表的状态
	 * @param userId
	 * @param roleId
	 * @param isAssigned
	 */
	public void changeUserRole(int eId,int rId,boolean isAssigned);
	 
	/**
	  * 根据用户id查询所有的角色
	  * @return
      */
	public List<Role> findAllRole(int eId);
		
	public void assignAllRole(int eId);
		
	public void cancleAllRole(int eId);

	public List<Employee> getEmployeeByDid(Integer dId);
}
