package com.jm.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 职员实体类
 */
public class Employee implements Serializable {

	private static final long serialVersionUID = -98135769851865827L;

	private Integer eId; // 员工编号
	private String username; // 员工账号
	private String password; // 员工密码
	private String eName; // 员工姓名
	private String eSex; // 员工性别
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date eBirth; // 员工出生日期
	private String eBirth1; // 员工出生日期
	private Integer eAge; // 员工年龄
	private String eEducation; // 员工学历
	private String eOrigin; // 员工籍贯
	private Nation nation; // 员工民族
	private String eIdcard; // 员工身份证
	private String ePhone; // 员工手机号
	private String eEmail; // 员工邮箱
	private String eAddress; // 员工现住地
	private Department dept; // 所属部门
	private String eManager; // 员工职位
	private Integer eLeader; // 上级领导
	private String eRegion; // 所属区域
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date eHiredate; // 入职日期
	private String eHiredate1; // 员工出生日期
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date eFormalDate; // 转正日期
	private String eFormalDate1; // 员工出生日期
	private String eImage; // 员工头像
	private State state; // 账号状态
	private List<Role> role; //角色表
	private String rName;//角色名称
	
	
	public String geteHiredate1() {
		return eHiredate1;
	}

	public void seteHiredate1(String eHiredate1) {
		this.eHiredate1 = eHiredate1;
	}

	public String geteFormalDate1() {
		return eFormalDate1;
	}

	public void seteFormalDate1(String eFormalDate1) {
		this.eFormalDate1 = eFormalDate1;
	}

	public String geteBirth1() {
		return eBirth1;
	}

	public void seteBirth1(String eBirth1) {
		this.eBirth1 = eBirth1;
	}
	
	public String getrName() {
		return rName;
	}

	public void setrName(String rName) {
		this.rName = rName;
	}

	public List<Role> getRole() {
		return role;
	}

	public void setRole(List<Role> role) {
		this.role = role;
	}

	public Integer geteId() {
		return eId;
	}

	public void seteId(Integer eId) {
		this.eId = eId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String geteName() {
		return eName;
	}

	public void seteName(String eName) {
		this.eName = eName;
	}

	public String geteSex() {
		return eSex;
	}

	public void seteSex(String eSex) {
		this.eSex = eSex;
	}

	public Date geteBirth() {
		return eBirth;
	}

	public void seteBirth(Date eBirth) {
		this.eBirth = eBirth;
	}

	public Integer geteAge() {
		return eAge;
	}

	public void seteAge(Integer eAge) {
		this.eAge = eAge;
	}

	public String geteEducation() {
		return eEducation;
	}

	public void seteEducation(String eEducation) {
		this.eEducation = eEducation;
	}

	public String geteOrigin() {
		return eOrigin;
	}

	public void seteOrigin(String eOrigin) {
		this.eOrigin = eOrigin;
	}

	public Nation getNation() {
		return nation;
	}

	public void setNation(Nation nation) {
		this.nation = nation;
	}

	public String geteIdcard() {
		return eIdcard;
	}

	public void seteIdcard(String eIdcard) {
		this.eIdcard = eIdcard;
	}

	public String getePhone() {
		return ePhone;
	}

	public void setePhone(String ePhone) {
		this.ePhone = ePhone;
	}

	public String geteEmail() {
		return eEmail;
	}

	public void seteEmail(String eEmail) {
		this.eEmail = eEmail;
	}

	public String geteAddress() {
		return eAddress;
	}

	public void seteAddress(String eAddress) {
		this.eAddress = eAddress;
	}

	public Department getDept() {
		return dept;
	}

	public void setDept(Department dept) {
		this.dept = dept;
	}

	public String geteManager() {
		return eManager;
	}

	public void seteManager(String eManager) {
		this.eManager = eManager;
	}

	public Integer geteLeader() {
		return eLeader;
	}

	public void seteLeader(Integer eLeader) {
		this.eLeader = eLeader;
	}

	public String geteRegion() {
		return eRegion;
	}

	public void seteRegion(String eRegion) {
		this.eRegion = eRegion;
	}

	public Date geteHiredate() {
		return eHiredate;
	}

	public void seteHiredate(Date eHiredate) {
		this.eHiredate = eHiredate;
	}

	public Date geteFormalDate() {
		return eFormalDate;
	}

	public void seteFormalDate(Date eFormalDate) {
		this.eFormalDate = eFormalDate;
	}

	public String geteImage() {
		return eImage;
	}

	public void seteImage(String eImage) {
		this.eImage = eImage;
	}

	public State getState() {
		return state;
	}

	public void setState(State state) {
		this.state = state;
	}

	

	

	

	public Employee() {
		super();
	}

	@Override
	public String toString() {
		return "Employee [eId=" + eId + ", username=" + username
				+ ", password=" + password + ", eName=" + eName + ", eSex="
				+ eSex + ", eBirth=" + eBirth + ", eAge=" + eAge
				+ ", eEducation=" + eEducation + ", eOrigin=" + eOrigin
				+ ", nation=" + nation + ", eIdcard=" + eIdcard + ", ePhone="
				+ ePhone + ", eEmail=" + eEmail + ", eAddress=" + eAddress
				+ ", dept=" + dept + ", eManager=" + eManager + ", eLeader="
				+ eLeader + ", eRegion=" + eRegion + ", eHiredate=" + eHiredate
				+ ", eFormalDate=" + eFormalDate + ", eImage=" + eImage
				+ ", state=" + state + ", role=" + role + ", rName=" + rName
				+ "]";
	}

	public Employee(Integer eId, String username, String password,
			String eName, String eSex, Date eBirth, Integer eAge,
			String eEducation, String eOrigin, Nation nation, String eIdcard,
			String ePhone, String eEmail, String eAddress, Department dept,
			String eManager, Integer eLeader, String eRegion, Date eHiredate,
			Date eFormalDate, String eImage, State state, List<Role> role,
			String rName) {
		super();
		this.eId = eId;
		this.username = username;
		this.password = password;
		this.eName = eName;
		this.eSex = eSex;
		this.eBirth = eBirth;
		this.eAge = eAge;
		this.eEducation = eEducation;
		this.eOrigin = eOrigin;
		this.nation = nation;
		this.eIdcard = eIdcard;
		this.ePhone = ePhone;
		this.eEmail = eEmail;
		this.eAddress = eAddress;
		this.dept = dept;
		this.eManager = eManager;
		this.eLeader = eLeader;
		this.eRegion = eRegion;
		this.eHiredate = eHiredate;
		this.eFormalDate = eFormalDate;
		this.eImage = eImage;
		this.state = state;
		this.role = role;
		this.rName = rName;
	}

	
	

}
