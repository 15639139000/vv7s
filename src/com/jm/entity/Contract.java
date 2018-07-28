package com.jm.entity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 合同实体
 */
public class Contract {

	private Integer id;
	private String number;
	private String companyName;
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date startTime;
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date endTime;
	private String classs;
	private String statu;
	private Float totalMoney;
	private String employeeName;
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date inDate;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	public String getClasss() {
		return classs;
	}

	public void setClasss(String classs) {
		this.classs = classs;
	}

	public String getStatu() {
		return statu;
	}

	public void setStatu(String statu) {
		this.statu = statu;
	}

	public Float getTotalMoney() {
		return totalMoney;
	}

	public void setTotalMoney(Float totalMoney) {
		this.totalMoney = totalMoney;
	}

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}

	public Date getInDate() {
		return inDate;
	}

	public void setInDate(Date inDate) {
		this.inDate = inDate;
	}

	public Contract(Integer id, String number, String companyName, Date startTime, Date endTime, String classs,
			String statu, Float totalMoney, String employeeName, Date inDate) {
		super();
		this.id = id;
		this.number = number;
		this.companyName = companyName;
		this.startTime = startTime;
		this.endTime = endTime;
		this.classs = classs;
		this.statu = statu;
		this.totalMoney = totalMoney;
		this.employeeName = employeeName;
		this.inDate = inDate;
	}

	public Contract() {
		super();
	}

	public Contract(Object id, Object number, Object companyName, Object startTime, Object endTime, Object classs,
			Object totalMoney, Object employeeName, Object inDate) throws ParseException {
		super();
		this.id = Integer.valueOf((String) id);
		this.number = (String) number;
		this.companyName = (String) companyName;
		this.startTime = new SimpleDateFormat("yyyy-MM-dd").parse((String) startTime);
		this.endTime =new SimpleDateFormat("yyyy-MM-dd").parse((String) endTime);
		this.classs = (String) classs;
		this.totalMoney = Float.valueOf((String) totalMoney);
		this.employeeName = (String) employeeName;
		this.inDate = new SimpleDateFormat("yyyy-MM-dd").parse((String) inDate);
	}

	@Override
	public String toString() {
		return "Contract [id=" + id + ", number=" + number + ", companyName=" + companyName + ", startTime=" + startTime
				+ ", endTime=" + endTime + ", classs=" + classs + ", statu=" + statu + ", totalMoney=" + totalMoney
				+ ", employeeName=" + employeeName + ", inDate=" + inDate + "]";
	}

}
