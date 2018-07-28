package com.jm.entity;

public class Variables {

	public Integer id; //变量id
	public String text; //变量名称
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public Variables(Integer id, String text) {
		super();
		this.id = id;
		this.text = text;
	}
	public Variables() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Variables [id=" + id + ", text=" + text + "]";
	}
	
	
	
	
}
