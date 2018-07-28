package com.jm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jm.entity.Company;
import com.jm.entity.Department;
import com.jm.entity.Employee;
import com.jm.service.CompanyService;
import com.jm.service.DepartmentService;
import com.jm.service.EmployeeService;

@Controller
@RequestMapping("company")
public class CompanyController {

	@Autowired
	private CompanyService companyService;
	
	@Autowired
	private DepartmentService departmentService;
	
	@Autowired
	private EmployeeService employeeService;
	
	@ResponseBody
	@RequestMapping(value = "getAllCompany", method = RequestMethod.POST)
	public List<Company> getAllCompany()
	{
		return companyService.getAll();
	}
	
	@ResponseBody
	@RequestMapping(value = "getDepartmentByCid", method = RequestMethod.POST)
	public List<Department> getDepartmentByCid(@RequestParam(value = "cId") Integer cId)
	{
		return departmentService.getDepartmentByCid(cId);
	}
	
	@ResponseBody
	@RequestMapping(value = "getEmployeeByDid", method = RequestMethod.POST)
	public List<Employee> getEmployeeByDid(@RequestParam(value = "dId") Integer dId)
	{
		return employeeService.getEmployeeByDid(dId);
	}
	
}
