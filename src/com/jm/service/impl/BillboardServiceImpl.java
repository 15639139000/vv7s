package com.jm.service.impl;

import java.util.List;

import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.jm.dao.BillboardDao;
import com.jm.entity.Employee;
import com.jm.entity.News;
import com.jm.entity.Billboard;
import com.jm.service.BillboardService;

/**
 * 龙虎榜逻辑公告接口实现
 */
@Service
public class BillboardServiceImpl implements BillboardService{

	@Autowired
	private BillboardDao billboardDao;
	
	@Transactional(readOnly = true)
	@Override
	public PageInfo<Billboard> getAll(Integer pageNo, Integer num)
	{	
		PageHelper.startPage(pageNo, num);
		List<Billboard> list = billboardDao.getAll();
		PageInfo<Billboard> pageInfo = new PageInfo<Billboard>(list);
		return pageInfo;
	}

	@Transactional(readOnly = true)
	@Override
	public List<Billboard> getBillboardByDate() {
		return billboardDao.getBillboardByDate();
	}

	@Transactional
	@Override
	public Integer insertBillboard(Billboard billboard) {
		Employee employee = (Employee) SecurityUtils.getSubject().getSession().getAttribute("employee");
		return billboardDao.insertBillboard(billboard);
	}

	@Transactional
	@Override
	public Integer delBillboardById(Integer nbId) {
		return billboardDao.delBillboardById(nbId);
	}

	@Transactional
	@Override
	public Integer editBillboardById(Billboard billboard) {
		Employee employee = (Employee) SecurityUtils.getSubject().getSession().getAttribute("employee");
		return billboardDao.editBillboardById(billboard);
	}
	@Transactional(readOnly = true)
	@Override
	public Billboard getBillboardById(Integer nbId) {
		return billboardDao.getBillboardById(nbId);
	}
}
