package com.jm.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.jm.dao.OrderDao;
import com.jm.entity.Order;
import com.jm.service.OrderService;

/**
 * 订单Service接口实现类
 */
@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderDao orderDao;

	@Override
	public List<Order> getAll() {
		return orderDao.getAll(null, null, null, null);
	}

	@Override
	public PageInfo<Order> getAll(Integer pageSize, Integer pageNo) {
		PageHelper.startPage(pageNo, pageSize);
		List<Order> orders = orderDao.getAll(null, null, null, null);
		PageInfo<Order> pageInfos = new PageInfo<Order>(orders, pageSize);
		return pageInfos;
	}

	@Override
	public PageInfo<Order> getAllOrderByCondition(Integer pageSize, Integer pageNo, String stime, String etime,
			String ename, String company) {
		PageHelper.startPage(pageNo, pageSize);
		List<Order> orders = orderDao.getAll(stime, etime, ename, company);
		PageInfo<Order> pageInfos = new PageInfo<Order>(orders, pageSize);
		return pageInfos;
	}

	@Override
	public void insertBatch(List<Order> orders) {
		orderDao.insertBatch(orders);
	}

	@Override
	public PageInfo<Order> advancedSearch(Integer pageNo, Integer pageSize, String number, String salesman,
			String customer, String agent, String delivery, String issuance, String sales, String information,
			String payments, String contacts, String lavel, String phone, String statu) {
		PageHelper.startPage(pageNo, pageSize);
		List<Order> orders = orderDao.advancedSearch(number, salesman, customer, agent, delivery, issuance, sales,
				information, payments, contacts, lavel, phone, statu);
		PageInfo<Order> pageInfos = new PageInfo<Order>(orders, pageSize);
		return pageInfos;
	}

}
