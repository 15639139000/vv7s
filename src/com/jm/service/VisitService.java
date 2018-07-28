package com.jm.service;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.jm.entity.Visit;

/**
 * 回访业务逻辑接口
 */
public interface VisitService {

	public List<Visit> getAllVisit();
	
	public PageInfo<Visit> getAllVisit(Integer pageNo, Integer pageSize, String stime, String etime, String ename, String company);
	
	public PageInfo<Visit> advancedSearch(Integer pageNo, Integer pageSize, String customer, String customerNature, String indestry,
			String product1, String product2, String visit, String returnTime, String nextReturnTime);
	
	public void insertBatch(List<Visit> visits);
	
}
