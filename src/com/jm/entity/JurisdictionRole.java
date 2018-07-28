package com.jm.entity;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * 菜单权限关系实体类
 */
@SuppressWarnings("serial")
public class JurisdictionRole implements Serializable{
	private Integer id;
	private Integer rId;
	private Integer jId;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getrId() {
		return rId;
	}
	public void setrId(Integer rId) {
		this.rId = rId;
	}
	public Integer getjId() {
		return jId;
	}
	public void setjId(Integer jId) {
		this.jId = jId;
	}
	public JurisdictionRole(Integer id, Integer rId, Integer jId) {
		super();
		this.id = id;
		this.rId = rId;
		this.jId = jId;
	}
	public JurisdictionRole(Integer rId, Integer jId) {
		super();
		this.rId = rId;
		this.jId = jId;
	}
	@Override
	public String toString() {
		return "JurisdictionRole [id=" + id + ", rId=" + rId + ", jId=" + jId + "]";
	}
	
}
