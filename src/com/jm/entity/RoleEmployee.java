package com.jm.entity;

public class RoleEmployee {

	private int rId;   //角色id
	private int eId;    //用户id
	
	
	
	public int getrId() {
		return rId;
	}
	public void setrId(int rId) {
		this.rId = rId;
	}
	public int geteId() {
		return eId;
	}
	public void seteId(int eId) {
		this.eId = eId;
	}
	public RoleEmployee(int rId, int eId) {
		super();
		this.rId = rId;
		this.eId = eId;
	}
	public RoleEmployee() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "RoleEmployee [rId=" + rId + ", eId=" + eId + "]";
	}
	
	
	
}
