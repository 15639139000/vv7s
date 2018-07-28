package com.jm.service.impl;

import java.util.List;

import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.jm.dao.EmployeeStyleDao;
import com.jm.entity.Employee;
import com.jm.entity.EmployeeStyle;
import com.jm.service.EmployeeStyleService;

/**
 * 通知业务逻辑公告接口实现
 */
@Service
public class EmployeeStyleServiceImpl implements EmployeeStyleService{

	@Autowired
	private EmployeeStyleDao employeeStyleDao;
	
	@Transactional(readOnly = true)
	@Override
	public PageInfo<EmployeeStyle> getAll(Integer pageNo,Integer num)
	{
		PageHelper.startPage(pageNo, num);
		List<EmployeeStyle> list = employeeStyleDao.getAll();
		PageInfo<EmployeeStyle> pageInfo = new PageInfo<EmployeeStyle>(list);
		return pageInfo;
	}

	@Transactional(readOnly = true)
	@Override
	public List<EmployeeStyle> getEmployeeStyleByDate() {
		return employeeStyleDao.getEmployeeStyleByDate();
	}

	@Transactional
	@Override
	public Integer insertEmployeeStyle(EmployeeStyle employeeStyle) {
		Employee employee = (Employee) SecurityUtils.getSubject().getSession().getAttribute("employee");
		employeeStyle.setCompany(employee.getDept().getCompany());
		employeeStyle.setDept(employee.getDept());
		employeeStyle.setEmployee(employee);
		return employeeStyleDao.insertEmployeeStyle(employeeStyle);
	}

	@Transactional
	@Override
	public Integer delEmployeeStyleById(Integer esId) {
		return employeeStyleDao.delEmployeeStyleById(esId);
	}

	@Transactional
	@Override
	public Integer editEmployeeStyleById(EmployeeStyle employeeStyle) {
		Employee employee = (Employee) SecurityUtils.getSubject().getSession().getAttribute("employee");
		employeeStyle.setCompany(employee.getDept().getCompany());
		employeeStyle.setDept(employee.getDept());
		employeeStyle.setEmployee(employee);
		return employeeStyleDao.editEmployeeStyleById(employeeStyle);
	}
	@Transactional(readOnly = true)
	@Override
	public EmployeeStyle getEmployeeStyleById(Integer esId) {
		return employeeStyleDao.getEmployeeStyleById(esId);
	}
}
