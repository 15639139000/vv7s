package com.jm.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.jm.entity.Operation;
import com.jm.service.OperationService;

@Controller
@RequestMapping(value = "operation")
public class OperationController {

	@Autowired
	private OperationService operationService;
	
	
	@RequestMapping(value = "getOperationById", method = RequestMethod.GET, produces = "application/json;charset=utf-8")
	public String getOperationById(@RequestParam(value = "oId") Integer oId,Model model)
	{
		Operation operation = operationService.getOperationById(oId);
		model.addAttribute("operation",operation);
		return "noticeDetail";
	}
	
	@ResponseBody
	@RequestMapping(value = "getAll", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public PageInfo<Operation> getAll(@RequestParam(value = "pageNo", required = false, defaultValue = "1") Integer pageNo,Integer num)
	{
		return operationService.getAll(pageNo,num);
	}
	
	
	@ResponseBody
	@RequestMapping(value = "editOperationById", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer editOperationById(Operation operation)
	{
		return operationService.editOperationById(operation);
	}
	
	@ResponseBody
	@RequestMapping(value = "delOperationById", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer delOperationById(@RequestParam(value = "oId") Integer oId)
	{
		return operationService.delOperationById(oId);
	}
	
	@ResponseBody
	@RequestMapping(value = "insertOperation", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer insertOperation(Operation operation)
	{
		return operationService.insertOperation(operation);
	}
}
