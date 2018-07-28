package com.jm.entity;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * 操作实体类，用户所拥有的操作
 */
@SuppressWarnings("serial")
public class Operation implements Serializable{

	private Integer oId; // 编号
	private String oName; // 所操作的名称
	private String oDesc; //操作描述
	private boolean isAssign = false;
	public Integer getoId() {
		return oId;
	}
	public void setoId(Integer oId) {
		this.oId = oId;
	}
	public String getoName() {
		return oName;
	}
	public void setoName(String oName) {
		this.oName = oName;
	}
	public String getoDesc() {
		return oDesc;
	}
	public void setoDesc(String oDesc) {
		this.oDesc = oDesc;
	}
	@JsonProperty("LAY_CHECKED")
    public boolean isAssign() {
        return isAssign;
    }
    public void setAssign(boolean isAssign) {
        this.isAssign = isAssign;
    }
	public Operation(Integer oId, String oName, String oDesc) {
		super();
		this.oId = oId;
		this.oName = oName;
		this.oDesc = oDesc;
	}
	public Operation(String oName, String oDesc) {
		super();
		this.oName = oName;
		this.oDesc = oDesc;
	}
	public Operation() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Operation [oId=" + oId + ", oName=" + oName + ", oDesc=" + oDesc + "]";
	}
	
}
