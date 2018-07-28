package com.jm.entity;

import java.io.Serializable;
import java.sql.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

public class Billboard implements Serializable{
	
	private Integer bId;
	private String name;
	private String photo;
	private Integer rank;
	private String team;
	@JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
	@DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
	private Date bDate; 
	private String ext1;
	private String ext2;
	public Integer getbId() {
		return bId;
	}
	public void setbId(Integer bId) {
		this.bId = bId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public Integer getRank() {
		return rank;
	}
	public void setRank(Integer rank) {
		this.rank = rank;
	}
	public String getTeam() {
		return team;
	}
	public void setTeam(String team) {
		this.team = team;
	}
	public Date getbDate() {
		return bDate;
	}
	public void setbDate(Date bDate) {
		this.bDate = bDate;
	}
	public String getExt1() {
		return ext1;
	}
	public void setExt1(String ext1) {
		this.ext1 = ext1;
	}
	public String getExt2() {
		return ext2;
	}
	public void setExt2(String ext2) {
		this.ext2 = ext2;
	}
	public Billboard(Integer bId, String name, String photo, Integer rank, String team, Date bDate, String ext1,
			String ext2) {
		super();
		this.bId = bId;
		this.name = name;
		this.photo = photo;
		this.rank = rank;
		this.team = team;
		this.bDate = bDate;
		this.ext1 = ext1;
		this.ext2 = ext2;
	}
	public Billboard(String name, String photo, Integer rank, String team, Date bDate, String ext1, String ext2) {
		super();
		this.name = name;
		this.photo = photo;
		this.rank = rank;
		this.team = team;
		this.bDate = bDate;
		this.ext1 = ext1;
		this.ext2 = ext2;
	}
	public Billboard() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Billboard [bId=" + bId + ", name=" + name + ", photo=" + photo + ", rank=" + rank + ", team=" + team
				+ ", bDate=" + bDate + ", ext1=" + ext1 + ", ext2=" + ext2 + "]";
	}
	
	
}
