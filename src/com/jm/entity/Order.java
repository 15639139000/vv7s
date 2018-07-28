package com.jm.entity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 订单实体类
 */
public class Order {

	private Integer oId;
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date oDate;
	private String eName;
	private String oStatu;
	private String cName;
	private String produce;
	private String oNumber;
	private Float oPrice;
	private Float oRmoney;

	public Integer getoId() {
		return oId;
	}

	public void setoId(Integer oId) {
		this.oId = oId;
	}

	public Date getoDate() {
		return oDate;
	}

	public void setoDate(Date oDate) {
		this.oDate = oDate;
	}

	public String geteName() {
		return eName;
	}

	public void seteName(String eName) {
		this.eName = eName;
	}

	public String getoStatu() {
		return oStatu;
	}

	public void setoStatu(String oStatu) {
		this.oStatu = oStatu;
	}

	public String getcName() {
		return cName;
	}

	public void setcName(String cName) {
		this.cName = cName;
	}

	public String getProduce() {
		return produce;
	}

	public void setProduce(String produce) {
		this.produce = produce;
	}

	public String getoNumber() {
		return oNumber;
	}

	public void setoNumber(String oNumber) {
		this.oNumber = oNumber;
	}

	public Float getoPrice() {
		return oPrice;
	}

	public void setoPrice(Float oPrice) {
		this.oPrice = oPrice;
	}

	public Float getoRmoney() {
		return oRmoney;
	}

	public void setoRmoney(Float oRmoney) {
		this.oRmoney = oRmoney;
	}

	public Order(Integer oId, Date oDate, String eName, String oStatu, String cName, String produce, String oNumber,
			Float oPrice, Float oRmoney) {
		super();
		this.oId = oId;
		this.oDate = oDate;
		this.eName = eName;
		this.oStatu = oStatu;
		this.cName = cName;
		this.produce = produce;
		this.oNumber = oNumber;
		this.oPrice = oPrice;
		this.oRmoney = oRmoney;
	}

	public Order() {
		super();
	}


	public Order(Object oId, Object oDate, Object eName, Object oStatu, Object cName, Object produce, Object oNumber, 
			Object oPrice, Object oRmoney) throws ParseException {
		super();
		this.oId = Integer.valueOf((String) oId);
		this.oDate = new SimpleDateFormat("yyyy-MM-dd").parse((String) oDate);
		this.eName = (String) eName;
		this.oStatu = (String) oStatu;
		this.cName = (String) cName;
		this.produce = (String) produce;
		this.oNumber = (String) oNumber;
		this.oPrice = Float.valueOf((String) oPrice);
		this.oRmoney = Float.valueOf((String) oRmoney);
	}

	@Override
	public String toString() {
		return "Order [oId=" + oId + ", oDate=" + oDate + ", eName=" + eName + ", oStatu=" + oStatu + ", cName=" + cName
				+ ", produce=" + produce + ", oNumber=" + oNumber + ", oPrice=" + oPrice + ", oRmoney=" + oRmoney + "]";
	}

}
