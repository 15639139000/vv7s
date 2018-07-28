package com.jm.entity;

import java.io.Serializable;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 员工风采类
 */
@SuppressWarnings("serial")
public class EmployeeStyle implements Serializable {

	private Integer esId; // 编号
	private String esTitle; // 标题
	private String esContent; // 内容
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date esDate; // 发布日期
	private Company company; // 发布公司
	private Department dept; // 发布部门
	private Employee employee; // 发布人
	public Integer getEsId() {
		return esId;
	}
	public void setEsId(Integer esId) {
		this.esId = esId;
	}
	public String getEsTitle() {
		return esTitle;
	}
	public void setEsTitle(String esTitle) {
		this.esTitle = esTitle;
	}
	public String getEsContent() {
		return esContent;
	}
	public void setEsContent(String esContent) {
		this.esContent = esContent;
	}
	public Date getEsDate() {
		return esDate;
	}
	public void setEsDate(Date esDate) {
		this.esDate = esDate;
	}
	public Company getCompany() {
		return company;
	}
	public void setCompany(Company company) {
		this.company = company;
	}
	public Department getDept() {
		return dept;
	}
	public void setDept(Department dept) {
		this.dept = dept;
	}
	public Employee getEmployee() {
		return employee;
	}
	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
	public EmployeeStyle(Integer esId, String esTitle, String esContent, Date esDate, Company company, Department dept,
			Employee employee) {
		super();
		this.esId = esId;
		this.esTitle = esTitle;
		this.esContent = esContent;
		this.esDate = esDate;
		this.company = company;
		this.dept = dept;
		this.employee = employee;
	}
	public EmployeeStyle(String esTitle, String esContent, Date esDate, Company company, Department dept,
			Employee employee) {
		super();
		this.esTitle = esTitle;
		this.esContent = esContent;
		this.esDate = esDate;
		this.company = company;
		this.dept = dept;
		this.employee = employee;
	}
	public EmployeeStyle() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "EmployeeStyle [esId=" + esId + ", esTitle=" + esTitle + ", esContent=" + esContent + ", esDate="
				+ esDate + ", company=" + company + ", dept=" + dept + ", employee=" + employee + "]";
	}
	
}
