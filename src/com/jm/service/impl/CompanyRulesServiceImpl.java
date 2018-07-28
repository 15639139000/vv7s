package com.jm.service.impl;

import java.util.List;

import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.jm.dao.CompanyRulesDao;
import com.jm.entity.Employee;
import com.jm.entity.CompanyRules;
import com.jm.service.CompanyRulesService;

/**
 * 公司制度业务逻辑接口实现
 */
@Service
public class CompanyRulesServiceImpl implements CompanyRulesService {
	


	@Autowired
	private CompanyRulesDao companyRulesDao;
	
	@Transactional(readOnly = true)
	@Override 
	public PageInfo<CompanyRules> getAll(Integer pageNo,Integer num)
	{
		PageHelper.startPage(pageNo, num);
		List<CompanyRules> list = companyRulesDao.getAll();
		PageInfo<CompanyRules> pageInfo = new PageInfo<CompanyRules>(list);
		return pageInfo;
	}

	@Transactional(readOnly = true)
	@Override
	public List<CompanyRules> getCompanyRulesByDate() {
		return companyRulesDao.getCompanyRulesByDate();
	}

	@Transactional
	@Override
	public Integer insertCompanyRules(CompanyRules CompanyRules) {
		Employee employee = (Employee) SecurityUtils.getSubject().getSession().getAttribute("employee");
		CompanyRules.setCompany(employee.getDept().getCompany());
		CompanyRules.setDept(employee.getDept());
		CompanyRules.setEmployee(employee);
		return companyRulesDao.insertCompanyRules(CompanyRules);
	}

	@Transactional
	@Override
	public Integer delCompanyRulesById(Integer nbId) {
		return companyRulesDao.delCompanyRulesById(nbId);
	}

	@Transactional
	@Override
	public Integer editCompanyRulesById(CompanyRules CompanyRules) {
		Employee employee = (Employee) SecurityUtils.getSubject().getSession().getAttribute("employee");
		CompanyRules.setCompany(employee.getDept().getCompany());
		CompanyRules.setDept(employee.getDept());
		CompanyRules.setEmployee(employee);
		return companyRulesDao.editCompanyRulesById(CompanyRules);
	}
	@Transactional(readOnly = true)
	@Override
	public CompanyRules getCompanyRulesById(Integer nbId) {
		return companyRulesDao.getCompanyRulesById(nbId);
	}

}
