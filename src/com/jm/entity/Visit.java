package com.jm.entity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 回访实体类
 */
public class Visit {

	private Integer id; // 编号
	private String customer; // 客户
	private String customerNature; // 客户性质
	private String indestry; // 所在行业
	private String contacts; // 联系人
	private String product1; // 主营产品
	private String product2; // 需求产品
	private String lavel; // 原客户级别
	private String visit; // 回访人
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date returnTime; // 回访时间
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date nextReturnTime; // 下次回访时间
	private String person; // 负责人
	private String information; // 信息转接人

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCustomer() {
		return customer;
	}

	public void setCustomer(String customer) {
		this.customer = customer;
	}

	public String getCustomerNature() {
		return customerNature;
	}

	public void setCustomerNature(String customerNature) {
		this.customerNature = customerNature;
	}

	public String getIndestry() {
		return indestry;
	}

	public void setIndestry(String indestry) {
		this.indestry = indestry;
	}

	public String getContacts() {
		return contacts;
	}

	public void setContacts(String contacts) {
		this.contacts = contacts;
	}

	public String getProduct1() {
		return product1;
	}

	public void setProduct1(String product1) {
		this.product1 = product1;
	}

	public String getProduct2() {
		return product2;
	}

	public void setProduct2(String product2) {
		this.product2 = product2;
	}

	public String getLavel() {
		return lavel;
	}

	public void setLavel(String lavel) {
		this.lavel = lavel;
	}

	public String getVisit() {
		return visit;
	}

	public void setVisit(String visit) {
		this.visit = visit;
	}

	public Date getReturnTime() {
		return returnTime;
	}

	public void setReturnTime(Date returnTime) {
		this.returnTime = returnTime;
	}

	public Date getNextReturnTime() {
		return nextReturnTime;
	}

	public void setNextReturnTime(Date nextReturnTime) {
		this.nextReturnTime = nextReturnTime;
	}

	public String getPerson() {
		return person;
	}

	public void setPerson(String person) {
		this.person = person;
	}

	public String getInformation() {
		return information;
	}

	public void setInformation(String information) {
		this.information = information;
	}

	public Visit(Integer id, String customer, String customerNature, String indestry, String contacts, String product1,
			String product2, String lavel, String visit, Date returnTime, Date nextReturnTime, String person,
			String information) {
		super();
		this.id = id;
		this.customer = customer;
		this.customerNature = customerNature;
		this.indestry = indestry;
		this.contacts = contacts;
		this.product1 = product1;
		this.product2 = product2;
		this.lavel = lavel;
		this.visit = visit;
		this.returnTime = returnTime;
		this.nextReturnTime = nextReturnTime;
		this.person = person;
		this.information = information;
	}

	public Visit() {
		super();
	}

	public Visit(Object id, Object customer, Object customerNature, Object indestry, Object contacts, Object lavel,
			Object nextReturnTime, Object person, Object information) throws ParseException {
		super();
		this.id = Integer.valueOf((String) id);
		this.customer = String.valueOf(customer);
		this.customerNature = String.valueOf(customerNature);
		this.indestry = String.valueOf(indestry);
		this.contacts = String.valueOf(contacts);
		this.lavel = String.valueOf(lavel);
		this.nextReturnTime = new SimpleDateFormat("yyyy-MM-dd").parse((String) nextReturnTime);
		this.person = String.valueOf(person);
		this.information = String.valueOf(information);
	}

	@Override
	public String toString() {
		return "Visist [id=" + id + ", customer=" + customer + ", customerNature=" + customerNature + ", indestry="
				+ indestry + ", contacts=" + contacts + ", product1=" + product1 + ", product2=" + product2 + ", lavel="
				+ lavel + ", visit=" + visit + ", returnTime=" + returnTime + ", nextReturnTime=" + nextReturnTime
				+ ", person=" + person + ", information=" + information + "]";
	}

}
