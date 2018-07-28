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
import com.jm.entity.CompanyRules;
import com.jm.service.CompanyRulesService;

@Controller
@RequestMapping(value = "companyRules")
public class CompanyRulesController {

	@Lazy
	@Autowired
	private CompanyRulesService CompanyRulesService;
	
	
	@RequestMapping(value = "getCompanyRulesById", method = RequestMethod.GET, produces = "application/json;charset=utf-8")
	public String getCompanyRulesById(@RequestParam(value = "crId") Integer crId,Model model)
	{
		CompanyRules companyRules = CompanyRulesService.getCompanyRulesById(crId);
		model.addAttribute("companyRules",companyRules);
		return "companyRulesDetail";
	}
	
	@ResponseBody
	@RequestMapping(value = "getAll", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public PageInfo<CompanyRules> getAll(@RequestParam(value = "pageNo", required = false, defaultValue = "1") Integer pageNo,Integer num)
	{
		return CompanyRulesService.getAll(pageNo,num);
	}
	
	@ResponseBody
	@RequestMapping(value = "getCompanyRulesByDate", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public List<CompanyRules> getCompanyRulesByDate()
	{
		return CompanyRulesService.getCompanyRulesByDate();
	}
	
	@ResponseBody
	@RequestMapping(value = "editCompanyRulesById", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer editCompanyRulesById(CompanyRules CompanyRules)
	{
		return CompanyRulesService.editCompanyRulesById(CompanyRules);
	}
	
	@ResponseBody
	@RequestMapping(value = "delCompanyRulesById", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer delCompanyRulesById(@RequestParam(value = "crId") Integer crId)
	{
		return CompanyRulesService.delCompanyRulesById(crId);
	}
	
	@ResponseBody
	@RequestMapping(value = "insertCompanyRules", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer insertCompanyRules(CompanyRules CompanyRules)
	{
		return CompanyRulesService.insertCompanyRules(CompanyRules);
	}
}
