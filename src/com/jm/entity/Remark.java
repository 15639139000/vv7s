package com.jm.entity;

import java.io.Serializable;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

@SuppressWarnings("serial")
public class Remark implements Serializable{
	
	private Integer reId;//备注编号
	private String reContent;//备注内容
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date reDate;//备注时间
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date reCallDate;//提醒时间
	private Employee employee;//备注人
	public Integer getReId() {
		return reId;
	}
	public void setReId(Integer reId) {
		this.reId = reId;
	}
	public String getReContent() {
		return reContent;
	}
	public void setReContent(String reContent) {
		this.reContent = reContent;
	}
	public Date getReDate() {
		return reDate;
	}
	public void setReDate(Date reDate) {
		this.reDate = reDate;
	}
	public Date getReCallDate() {
		return reCallDate;
	}
	public void setReCallDate(Date reCallDate) {
		this.reCallDate = reCallDate;
	}
	public Employee getEmployee() {
		return employee;
	}
	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
	public Remark(Integer reId, String reContent, Date reDate, Date reCallDate, Employee employee) {
		super();
		this.reId = reId;
		this.reContent = reContent;
		this.reDate = reDate;
		this.reCallDate = reCallDate;
		this.employee = employee;
	}
	public Remark(String reContent, Date reDate, Date reCallDate, Employee employee) {
		super();
		this.reContent = reContent;
		this.reDate = reDate;
		this.reCallDate = reCallDate;
		this.employee = employee;
	}
	public Remark() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Remark [reId=" + reId + ", reContent=" + reContent + ", reDate=" + reDate + ", reCallDate=" + reCallDate
				+ ", employee=" + employee + "]";
	}
	
}
