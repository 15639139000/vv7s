package com.jm.service;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.jm.entity.Order;

/**
 * 订单业务逻辑接口
 */
public interface OrderService {

	public List<Order> getAll();

	public PageInfo<Order> getAll(Integer pageSize, Integer pageNo);

	public PageInfo<Order> getAllOrderByCondition(Integer pageSize, Integer pageNo, String stime, String etime, String ename, String company);

	public void insertBatch(List<Order> orders);

	public PageInfo<Order> advancedSearch(Integer pageNo, Integer pageSize, String number, String salesman, String customer,
			String agent, String delivery, String issuance, String sales, String information, String payments,
			String contacts, String lavel, String phone, String statu);

}
