package com.jm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.jm.entity.CompanyRules;

/**
 * 公司制度接口
 */
public interface CompanyRulesDao {

	/**
	 * 获取所有的公司制度
	 * @return 公司制度集合
	 */
	public List<CompanyRules> getAll();
	
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
	public Integer delCompanyRulesById(@Param("nbId") Integer nbId);
	
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
