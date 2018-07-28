package com.jm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.jm.entity.Order;

/**
 * 订单接口
 */
public interface OrderDao {

	public List<Order> getAll(@Param("stime") String stime, @Param("etime") String etime, @Param("ename") String ename ,@Param("company") String company);
	
	public void insertBatch(@Param("orders") List<Order> orders);
	
	public List<Order> advancedSearch(@Param("number") String number, @Param("salesman") String salesman,
			@Param("customer") String customer, @Param("agent") String agent,
			@Param("delivery") String delivery, @Param("issuance") String issuance,
			@Param("sales") String sales, @Param("information") String information,
			@Param("payments") String payments, @Param("contacts") String contacts,
			@Param("lavel") String lavel, @Param("phone") String phone, @Param("statu") String statu);
	
}
