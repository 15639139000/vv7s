package com.jm.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.jm.dao.VisitDao;
import com.jm.entity.Visit;
import com.jm.service.VisitService;

@Component
public class VisitServiceImpl implements VisitService{

	@Autowired
	private VisitDao visitDao;
	
	@Override
	public List<Visit> getAllVisit() {
		return visitDao.getAllVisit();
	}
	
	@Override
	public PageInfo<Visit> getAllVisit(Integer pageNo, Integer pageSize, String stime, String etime, String ename, String company) {
		PageHelper.startPage(pageNo, pageSize);
		List<Visit> visits = visitDao.getAll(stime, etime, ename, company);
		PageInfo<Visit> pageInfos = new PageInfo<Visit>(visits, pageSize);
		return pageInfos;
	}

	@Override
	public PageInfo<Visit> advancedSearch(Integer pageNo, Integer pageSize, String customer, String customerNature,
			String indestry, String product1, String product2, String visit, String returnTime, String nextReturnTime) {
		PageHelper.startPage(pageNo, pageSize);
		List<Visit> visits = visitDao.advancedSearch(customer, customerNature, indestry, product1, product2, visit, returnTime, nextReturnTime);
		PageInfo<Visit> pageInfos = new PageInfo<Visit>(visits, pageSize);
		return pageInfos;
	}

	@Override
	public void insertBatch(List<Visit> visits) {
		visitDao.insertBatch(visits);
	}

}
