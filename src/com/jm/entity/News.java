package com.jm.entity;

import java.io.Serializable;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 新闻实体类
 */
@SuppressWarnings("serial")
public class News implements Serializable {

	private Integer newsId; // 新闻编号
	private String newsTitle; // 新闻标题
	private String newsContent; // 新闻内容
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date newsDate; // 新闻发布日期
	private Company company; // 新闻发布公司
	private Department dept; // 新闻发布部门
	private Employee employee; // 新闻发布人
	public Integer getNewsId() {
		return newsId;
	}
	public void setNewsId(Integer newsId) {
		this.newsId = newsId;
	}
	public String getNewsTitle() {
		return newsTitle;
	}
	public void setNewsTitle(String newsTitle) {
		this.newsTitle = newsTitle;
	}
	public String getNewsContent() {
		return newsContent;
	}
	public void setNewsContent(String newsContent) {
		this.newsContent = newsContent;
	}
	public Date getNewsDate() {
		return newsDate;
	}
	public void setNewsDate(Date newsDate) {
		this.newsDate = newsDate;
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
	public News(Integer newsId, String newsTitle, String newsContent, Date newsDate, Company company, Department dept,
			Employee employee) {
		super();
		this.newsId = newsId;
		this.newsTitle = newsTitle;
		this.newsContent = newsContent;
		this.newsDate = newsDate;
		this.company = company;
		this.dept = dept;
		this.employee = employee;
	}
	public News(String newsTitle, String newsContent, Date newsDate, Company company, Department dept,
			Employee employee) {
		super();
		this.newsTitle = newsTitle;
		this.newsContent = newsContent;
		this.newsDate = newsDate;
		this.company = company;
		this.dept = dept;
		this.employee = employee;
	}
	public News() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "News [newsId=" + newsId + ", newsTitle=" + newsTitle + ", newsContent=" + newsContent + ", newsDate="
				+ newsDate + ", company=" + company + ", dept=" + dept + ", employee=" + employee + "]";
	}

	

}
