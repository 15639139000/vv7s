package com.jm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.jm.entity.Role;
import com.jm.entity.RoleEmployee;
import com.jm.entity.Employee;

/**
 * 职员接口
 */
public interface EmployeeDao {

	/**
	 * 验证过用户名
	 * @param username 用户名
	 * @return 条数
	 */
	public Integer checkUsername(@Param("username") String username);
	
	/**
	 * 根据职员编号返回职员记录
	 * @param eId 职员编号
	 * @return 职员记录
	 */
	public Employee getEmployeeByEid(@Param("eId") Integer eId);
	public Employee getEmployeeByName(@Param("username") String username);
	public List<Employee> getEmployeeByDid(@Param("dId") Integer dId);
	/**
	 * 添加员工信息
	 * @param employee
	 * @return
	 */
	public int addEmp(Employee employee);
	
	/**
	 * 查询所有用户
	 * @return
	 */
	public List<Employee> queryEmA(@Param("eName")String eName);
	public List<Employee> queryB();
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
	public int changeEmp(Employee employee);
	
	/**
	 * 修改密码
	 * @param employee
	 * @return
	 */
	/*public String queryChangePwd(String username);*/
	/*public int changePwd(Employee employee);*/
	
	/**
	 * 删除员工信息
	 * @param employee
	 * @return
	 */
	public int deleEmp(int id);
	/*public int deleE(int eId,int rId);*/
	
	/**
   	 * 根据用户名查询当前用户角色
   	 */
       public List<Role> getByEmpName(String username);
       public Role get(Integer id);
	/**
	 * 通过用户名查找用户信息
	 * @return
	 */
	public Employee selectById(int eId);
	/**
	 * 通过用户id查找所有的角色
	 * @param id
	 * @return
	 */
	 public List<Role> findAllRole(@Param("eId")int eId);
	 
	 public RoleEmployee get2(@Param("eId")int eId, @Param("rId")int rId);
	 
	 public void add2(RoleEmployee roleEmployee);
	 
	 public void del2(@Param("eId")int eId,@Param("rId")int rId);

	 public void cancleAllRole(@Param("eId")int eId);

	 public void assignAllRole(@Param("eId")int eId); 
	 
	 public Employee getEmployeeByEname(@Param("eName") String eName);
}
