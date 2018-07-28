package com.jm.entity;

import java.util.Date;
/**
 * 
 * @author 流程定义实体类
 *
 */
public class Deployment {

	private String id;
	private String name;
	private String cateGory;
	private String tenantId;
	private Date deployTime;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCateGory() {
		return cateGory;
	}
	public void setCateGory(String cateGory) {
		this.cateGory = cateGory;
	}
	public String getTenantId() {
		return tenantId;
	}
	public void setTenantId(String tenantId) {
		this.tenantId = tenantId;
	}
	public Date getDeployTime() {
		return deployTime;
	}
	public void setDeployTime(Date deployTime) {
		this.deployTime = deployTime;
	}
	public Deployment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Deployment(String id, String name, String cateGory, String tenantId,
			Date deployTime) {
		super();
		this.id = id;
		this.name = name;
		this.cateGory = cateGory;
		this.tenantId = tenantId;
		this.deployTime = deployTime;
	}
	@Override
	public String toString() {
		return "Deployment [id=" + id + ", name=" + name + ", cateGory="
				+ cateGory + ", tenantId=" + tenantId + ", deployTime="
				+ deployTime + "]";
	}
	
	
	
}
