package com.jm.service;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.jm.entity.CompanyRules;

/**
 * 公司制度业务逻辑接口
 */
public interface CompanyRulesService {

	/**
	 * 获取所有的公司制度
	 * @param pageNo 
	 * @param num 
	 * @return 公司制度集合
	 */
	public PageInfo<CompanyRules> getAll(Integer pageNo, Integer num);
	
	/**
	 * 根据时间降序返回去前七条
	 * @return 公司制度集合根据时间
	 */
	public List<CompanyRules> getCompanyRulesByDate();
	
	/**
	 * 添加公司制度
	 * @param CompanyRules 公司制度实体
	 * @return 受影响的行数
	 */
	public Integer insertCompanyRules(CompanyRules CompanyRules);
	
	/**
	 * 删除公司制度
	 * @param nId 公司制度编号
	 * @return 受影响的行数
	 */
	public Integer delCompanyRulesById(Integer nbId);
	
	/**
	 * 编辑公司制度
	 * @param CompanyRules 公司制度实体
	 * @return 受影响的行数
	 */
	public Integer editCompanyRulesById(CompanyRules CompanyRules);
	
	/**
	 * 根据id查询公告详情
	 * @param id
	 * @return
	 */
	public CompanyRules getCompanyRulesById(Integer nbId);
	
}
