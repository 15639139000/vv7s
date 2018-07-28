package com.jm.entity;

public class RoleOperation {
	private Integer id;
	private Integer rId;
	private Integer oId;
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
	public Integer getoId() {
		return oId;
	}
	public void setoId(Integer oId) {
		this.oId = oId;
	}
	public RoleOperation(Integer id, Integer rId, Integer oId) {
		super();
		this.id = id;
		this.rId = rId;
		this.oId = oId;
	}
	public RoleOperation(Integer rId, Integer oId) {
		super();
		this.rId = rId;
		this.oId = oId;
	}
	public RoleOperation() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "RoleOperation [id=" + id + ", rId=" + rId + ", oId=" + oId + "]";
	}
	
}
