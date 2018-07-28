package com.jm.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.shiro.authz.annotation.Logical;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jm.dao.DepartmentDao;
import com.jm.dao.EmployeeDao;
import com.jm.entity.Employee;
import com.jm.entity.PageModel;
import com.jm.entity.Role;
import com.jm.entity.RoleEmployee;
import com.jm.service.EmployeeService;
import com.jm.utils.CipherEncryption;

/**
 * 职员接口实现类，处理逻辑
 */
@Service
public class EmployeeServiceImpl implements EmployeeService{

	@Autowired
	private EmployeeDao employeeDao; // 注入dao层
	
	
	@Transactional(readOnly = true)
	@Override
	public Integer checkUsername(String username) {
		return employeeDao.checkUsername(username);
	}

	/*@RequiresPermissions(value = {"超级管理员:entry", "管理员:entry"}, logical = Logical.OR)
	@Transactional
	@Override
	public Integer entry(Employee employee){
		String password = employee.getPassword();
		String username = employee.getUsername();
		Object md5 = CipherEncryption.MD5(password, username);
		employee.setPassword(md5.toString());
		return employeeDao.entry(employee);
	}*/

	@Transactional(readOnly = true)
	@Override
	public Employee getEmployeeByEid(Integer eId) {
		return employeeDao.getEmployeeByEid(eId);
	}

	/**
	 * 添加用户
	 */
	@Override
	public boolean addEmp(Employee employee) {
		String password = employee.getPassword();
		String username = employee.getUsername();
		Object md5 = CipherEncryption.MD5(password, username);
		employee.setPassword(md5.toString());
		int add = employeeDao.addEmp(employee);
		if(add > 0 ){
			return true;
		}else{
			return false;
		}
	}

	/**
	 * 查询用户
	 */
	@Override
	public List<Employee> queryEmp(int id) {
		List<Employee> list = employeeDao.queryEmp(id);
		return list;
	}

	/**
	 * 修改用户信息
	 */
	@Override
	public boolean changeEmp(Employee employee) {
		String password = employee.getPassword();
		Employee emp = employeeDao.getEmployeeByName(employee.getUsername());
		if(password .equals(emp.getPassword())) {
			employee.setPassword(emp.getPassword());
		}else {
			String username = employee.getUsername();
			Object md5 = CipherEncryption.MD5(password, username);
			employee.setPassword(md5.toString());
		}
		int up = employeeDao.changeEmp(employee);
		if(up > 0 ){
			return true;
		}else{
			return false;
		}
	}

	/**
	 * 修改密码
	 */
	/*@Override
	public boolean changePwd(Employee employee) {
		String password = employee.getPassword();
		String username = employee.getUsername();
		Object md5 = CipherEncryption.MD5(password, username);
		employee.setPassword(md5.toString());
		int upd = employeeDao.changePwd(employee);
		if(upd > 0){
			return true;
		}else{
			return false;
		}
	}*/

	/**
	 * 删除用户
	 */
	@Override
	public boolean deleEmp(int id) {
		int dele = employeeDao.deleEmp(id);
		if(dele > 0 ){
			return true;
		}else{
			return false;
		}
	}

	/**
	 * 分页展示所有员工信息
	 */
	@Override
	public PageModel<Employee> queryEmpA(Integer page,String eName) {
		List<Employee> All = new ArrayList<Employee>();
		List<Employee> le = employeeDao.queryEmA(eName);
		for(Employee e : le){
			Employee emp = new Employee();
			emp.seteId(e.geteId());
			emp.setUsername(e.getUsername());
			String username = e.getUsername();//得到用户名
			List<Role> lr = employeeDao.getByEmpName(username);//根据用户名查询到角色信息
			for(Role role : lr){
				Role ro = employeeDao.get(role.getrId());
				emp.setrName(ro.getrName());
			}
			emp.seteName(e.geteName());
			emp.seteSex(e.geteSex());
			All.add(emp);
		}
		PageModel<Employee> pageModel = new PageModel<Employee>(All.size());//初始化pageModel对象  
		List<Employee> subList = new ArrayList<Employee>();
		//设置当前页
		pageModel.setCurPage(page);//这里page是从页面上获取的一个参数，代表页数  
		//获得分页大小
		int pagesize = pageModel.getPageSize();
		//获得分页数据在list集合中的索引 
		int firstIndex=(page-1)*pagesize;  
		int toIndex=page*pagesize; 
		if(toIndex>All.size()){  
			     toIndex=All.size();
			 }  
			if(firstIndex>toIndex){  
			    firstIndex=0;  
			    pageModel.setCurPage(1);  
			}
			int cur = pageModel.getCurPage();
			int pc = pageModel.getPageCount();
	        //截取数据集合，获得分页数据  
			subList=All.subList(firstIndex, toIndex);
			pageModel.setList(subList);
			pageModel.setCurPage(cur);
			pageModel.setPageCount(pc);
			pageModel.setPageSize(pagesize);
		return pageModel;
	}

	@Override
	public List<Employee> queryEmp(String eName) {
		List<Employee> empl = employeeDao.queryEmA(eName);
		for (Employee e : empl) {			
			String username = e.getUsername();//得到用户名
			List<Role> lr = employeeDao.getByEmpName(username);//根据用户名查询到角色信息
			for(Role role : lr){
				Role ro = employeeDao.get(role.getrId());
				e.setrName(ro.getrName());
			}
		}
		return empl;
	}
	
	/**
	 * 
	 */
	@Override
	public void changeUserRole(int eId, int rId, boolean isAssigned) {
		Employee employee = employeeDao.selectById(eId);
		if(employee==null){
			return;
		}
		if(isAssigned){//true
			   RoleEmployee get2 = employeeDao.get2(eId, rId);
	            if(get2 == null){	               
	            	get2 = new RoleEmployee(rId,employee.geteId());
	            		employeeDao.add2(get2);
	            }
	        }else{
	        	employeeDao.del2(employee.geteId(), rId);
	        }
		
	}

	@Override
	public List<Role> findAllRole(int eId) {
		return employeeDao.findAllRole(eId);
	}

	@Override
	public void assignAllRole(int eId) {
		this.employeeDao.cancleAllRole(eId);
        this.employeeDao.assignAllRole(eId);
	}

	@Override
	public void cancleAllRole(int eId) {
		this.employeeDao.cancleAllRole(eId);
	}

	@Override
	public Employee getById(int eId) {
		return employeeDao.selectById(eId);
	}

	@Override
	public List<Employee> getEmployeeByDid(Integer dId) {
		return employeeDao.getEmployeeByDid(dId);
	}

	
	
}
