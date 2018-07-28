package com.jm.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.jm.entity.EmployeeStyle;
import com.jm.service.EmployeeStyleService;

@Controller
@RequestMapping(value = "employeeStyle")
public class EmployeeStyleController {

	@Lazy
	@Autowired
	private EmployeeStyleService employeeStyleService;
	
	
	@RequestMapping(value = "getEmployeeStyleById", method = RequestMethod.GET, produces = "application/json;charset=utf-8")
	public String getEmployeeStyleById(@RequestParam(value = "esId") Integer esId,Model model)
	{
		EmployeeStyle employeeStyle = employeeStyleService.getEmployeeStyleById(esId);
		model.addAttribute("employeeStyle",employeeStyle);
		return "employeeStyleDetail";
	}
	
	@ResponseBody
	@RequestMapping(value = "getAll", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public PageInfo<EmployeeStyle> getAll(@RequestParam(value = "pageNo", required = false, defaultValue = "1") Integer pageNo,Integer num)
	{
		return employeeStyleService.getAll(pageNo,num);
	}
	
	@ResponseBody
	@RequestMapping(value = "getEmployeeStyleByDate", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public List<EmployeeStyle> getEmployeeStyleByDate()
	{
		return employeeStyleService.getEmployeeStyleByDate();
	}
	
	@ResponseBody
	@RequestMapping(value = "editEmployeeStyleById", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer editEmployeeStyleById(EmployeeStyle employeeStyle)
	{
		return employeeStyleService.editEmployeeStyleById(employeeStyle);
	}
	
	@ResponseBody
	@RequestMapping(value = "delEmployeeStyleById", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer delEmployeeStyleById(@RequestParam(value = "esId") Integer esId)
	{
		return employeeStyleService.delEmployeeStyleById(esId);
	}
	
	@ResponseBody
	@RequestMapping(value = "insertEmployeeStyle", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer insertEmployeeStyle(EmployeeStyle employeeStyle)
	{
		return employeeStyleService.insertEmployeeStyle(employeeStyle);
	}
}
