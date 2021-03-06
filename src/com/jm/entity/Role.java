package com.jm.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * 角色实体类
 */
@SuppressWarnings("serial")
public class Role implements Serializable{

	private Integer rId; // 角色编号
	private String rName; // 角色名称
	private String rDesc; // 角色描述
	private String rExt; // 预留字段
	private Integer rOrder; // 排序号
	@JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
	@DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
	private Date rDate; // 创建时间
    private List<Employee> employee;
    private boolean isAssign = false;//
    @JsonProperty("LAY_CHECKED")
	public boolean isAssign() {
		return isAssign;
	}
	public void setAssign(boolean isAssign) {
		this.isAssign = isAssign;
	}
    
    
    


	public List<Employee> getEmployee() {
		return employee;
	}

	public void setEmployee(List<Employee> employee) {
		this.employee = employee;
	}

	public Integer getrId() {
		return rId;
	}

	public void setrId(Integer rId) {
		this.rId = rId;
	}

	public String getrName() {
		return rName;
	}

	public void setrName(String rName) {
		this.rName = rName;
	}

	public String getrDesc() {
		return rDesc;
	}

	public void setrDesc(String rDesc) {
		this.rDesc = rDesc;
	}

	public String getrExt() {
		return rExt;
	}

	public void setrExt(String rExt) {
		this.rExt = rExt;
	}

	public Integer getrOrder() {
		return rOrder;
	}

	public void setrOrder(Integer rOrder) {
		this.rOrder = rOrder;
	}

	public Date getrDate() {
		return rDate;
	}

	public void setrDate(Date rDate) {
		this.rDate = rDate;
	}

	

	

	public Role() {
		super();
	}
	@Override
	public String toString() {
		return "Role [rId=" + rId + ", rName=" + rName + ", rDesc=" + rDesc
				+ ", rExt=" + rExt + ", rOrder=" + rOrder + ", rDate=" + rDate
				+ ", employee=" + employee + ", isAssign=" + isAssign + "]";
	}
	public Role(Integer rId, String rName, String rDesc, String rExt,
			Integer rOrder, Date rDate, List<Employee> employee,
			boolean isAssign) {
		super();
		this.rId = rId;
		this.rName = rName;
		this.rDesc = rDesc;
		this.rExt = rExt;
		this.rOrder = rOrder;
		this.rDate = rDate;
		this.employee = employee;
		this.isAssign = isAssign;
	}

	
	
	

}
