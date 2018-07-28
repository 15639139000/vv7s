package com.jm.entity;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

public class CompanyRules {
	private Integer crId;//制度编号
	private String crTitle; // 公司制度标题
	private String crContent; // 公司制度内容
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date crDate; // 公司制度发布日期
	private Company company; // 公司制度发布公司
	private Department dept; // 公司制度发布部门
	private Employee employee; // 公司制度发布人
	public Integer getCrId() {
		return crId;
	}
	public void setCrId(Integer crId) {
		this.crId = crId;
	}
	public String getCrTitle() {
		return crTitle;
	}
	public void setCrTitle(String crTitle) {
		this.crTitle = crTitle;
	}
	public String getCrContent() {
		return crContent;
	}
	public void setCrContent(String crContent) {
		this.crContent = crContent;
	}
	public Date getCrDate() {
		return crDate;
	}
	public void setCrDate(Date crDate) {
		this.crDate = crDate;
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
	public CompanyRules() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CompanyRules(Integer crId, String crTitle, String crContent, Date crDate, Company company, Department dept,
			Employee employee) {
		super();
		this.crId = crId;
		this.crTitle = crTitle;
		this.crContent = crContent;
		this.crDate = crDate;
		this.company = company;
		this.dept = dept;
		this.employee = employee;
	}
	public CompanyRules(String crTitle, String crContent, Date crDate, Company company, Department dept,
			Employee employee) {
		super();
		this.crTitle = crTitle;
		this.crContent = crContent;
		this.crDate = crDate;
		this.company = company;
		this.dept = dept;
		this.employee = employee;
	}
	@Override
	public String toString() {
		return "CompanyRules [crId=" + crId + ", crTitle=" + crTitle + ", crContent=" + crContent + ", crDate=" + crDate
				+ ", company=" + company + ", dept=" + dept + ", employee=" + employee + "]";
	}
	
	
}
