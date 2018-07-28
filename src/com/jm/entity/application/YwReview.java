package com.jm.entity.application;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

public class YwReview {
	private String eName;
	private String company;
	private String dept;
	private String eManager;
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date applyTime;//申请时间
	private String taskId;
	private String inlineRadioOptions1;//紧急程度
	private String customerName;//客户姓名
	private String position;//安装地点
	private String useRange;//应用范围
	private String customRequire;//定制需求
	private String inlineRadioOptions2;//是否需要技术部与业务部电话沟通
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date responseTime;//需技术部回复时间
	private String tecContactNum;//客户主要技术负责人及联系方式
	private String regionalManager;//制表人/区域经理
	private String saleManager;//主要业务负责人
	private String inlineRadioOptions3;//技术评审方式 tecMethod
	private String parts;//需采购的配件
	private String timeLimit;//工期要求及预计加工周期
	private String product;//定制产品具体配置
	private String tecPlans;//技术方案及要求
	private String auditStaff;//审批技术员
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date auditDate;//审批日期
	private String tecOpinion;//建议及意见
	private String accountPrice;//核算成本价
	private String purchasCycle;//采购周期
	private String costAccount;//成本会计
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date cDate1;//成本会计日期
	private String buyer;//采购人员
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date cDate2;//日期2
	private String cgOpinion;//采购意见
	private String conversionCost;//加工成本
	private String processCycle;//加工周期
	private String deliveryCost;//运送成本
	private String deliveryCycle;//运送周期
	private String facProvider;//工厂提供者
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date nqDate;//日期
	private String proisClear;//产品是否清晰
	private String conisClear;//配置是否清晰
	private String proInformation;//产品信息及要求通知厂部
	private String consignee;//报货人
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date nqDate2;//日期
	private String supplyCost;//供货成本①+②+③
	private String supplyCycle;//供货周期
	private String cwOpinion;//财务意见
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date cwDate;//财务日期
	private String inlineRadioOptions4;//副总经理或授权人意见 lzMethod
	private String lzOpinion;//副总经理或授权人签名意见
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date lzDate;//签字日期
	private String state;//状态
	public Date getApplyTime() {
		return applyTime;
	}
	public void setApplyTime(Date applyTime) {
		this.applyTime = applyTime;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getInlineRadioOptions1() {
		return inlineRadioOptions1;
	}
	public void setInlineRadioOptions1(String inlineRadioOptions1) {
		this.inlineRadioOptions1 = inlineRadioOptions1;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public String getUseRange() {
		return useRange;
	}
	public void setUseRange(String useRange) {
		this.useRange = useRange;
	}
	public String getCustomRequire() {
		return customRequire;
	}
	public void setCustomRequire(String customRequire) {
		this.customRequire = customRequire;
	}
	public String getInlineRadioOptions2() {
		return inlineRadioOptions2;
	}
	public void setInlineRadioOptions2(String inlineRadioOptions2) {
		this.inlineRadioOptions2 = inlineRadioOptions2;
	}
	public Date getResponseTime() {
		return responseTime;
	}
	public void setResponseTime(Date responseTime) {
		this.responseTime = responseTime;
	}
	public String getTecContactNum() {
		return tecContactNum;
	}
	public void setTecContactNum(String tecContactNum) {
		this.tecContactNum = tecContactNum;
	}
	public String getRegionalManager() {
		return regionalManager;
	}
	public void setRegionalManager(String regionalManager) {
		this.regionalManager = regionalManager;
	}
	public String getSaleManager() {
		return saleManager;
	}
	public void setSaleManager(String saleManager) {
		this.saleManager = saleManager;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getInlineRadioOptions3() {
		return inlineRadioOptions3;
	}
	public void setInlineRadioOptions3(String inlineRadioOptions3) {
		this.inlineRadioOptions3 = inlineRadioOptions3;
	}
	public String getParts() {
		return parts;
	}
	public void setParts(String parts) {
		this.parts = parts;
	}
	public String getTimeLimit() {
		return timeLimit;
	}
	public void setTimeLimit(String timeLimit) {
		this.timeLimit = timeLimit;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public String getTecPlans() {
		return tecPlans;
	}
	public void setTecPlans(String tecPlans) {
		this.tecPlans = tecPlans;
	}
	public String getAuditStaff() {
		return auditStaff;
	}
	public void setAuditStaff(String auditStaff) {
		this.auditStaff = auditStaff;
	}
	public Date getAuditDate() {
		return auditDate;
	}
	public void setAuditDate(Date auditDate) {
		this.auditDate = auditDate;
	}
	public String getTecOpinion() {
		return tecOpinion;
	}
	public void setTecOpinion(String tecOpinion) {
		this.tecOpinion = tecOpinion;
	}
	public String getAccountPrice() {
		return accountPrice;
	}
	public void setAccountPrice(String accountPrice) {
		this.accountPrice = accountPrice;
	}
	public String getPurchasCycle() {
		return purchasCycle;
	}
	public void setPurchasCycle(String purchasCycle) {
		this.purchasCycle = purchasCycle;
	}
	public String getCostAccount() {
		return costAccount;
	}
	public void setCostAccount(String costAccount) {
		this.costAccount = costAccount;
	}
	public Date getcDate1() {
		return cDate1;
	}
	public void setcDate1(Date cDate1) {
		this.cDate1 = cDate1;
	}
	public String getBuyer() {
		return buyer;
	}
	public void setBuyer(String buyer) {
		this.buyer = buyer;
	}
	public Date getcDate2() {
		return cDate2;
	}
	public void setcDate2(Date cDate2) {
		this.cDate2 = cDate2;
	}
	public String getCgOpinion() {
		return cgOpinion;
	}
	public void setCgOpinion(String cgOpinion) {
		this.cgOpinion = cgOpinion;
	}
	public String getConversionCost() {
		return conversionCost;
	}
	public void setConversionCost(String conversionCost) {
		this.conversionCost = conversionCost;
	}
	public String getProcessCycle() {
		return processCycle;
	}
	public void setProcessCycle(String processCycle) {
		this.processCycle = processCycle;
	}
	public String getDeliveryCost() {
		return deliveryCost;
	}
	public void setDeliveryCost(String deliveryCost) {
		this.deliveryCost = deliveryCost;
	}
	public String getDeliveryCycle() {
		return deliveryCycle;
	}
	public void setDeliveryCycle(String deliveryCycle) {
		this.deliveryCycle = deliveryCycle;
	}
	public String getFacProvider() {
		return facProvider;
	}
	public void setFacProvider(String facProvider) {
		this.facProvider = facProvider;
	}
	public Date getNqDate() {
		return nqDate;
	}
	public void setNqDate(Date nqDate) {
		this.nqDate = nqDate;
	}
	public String getProisClear() {
		return proisClear;
	}
	public void setProisClear(String proisClear) {
		this.proisClear = proisClear;
	}
	public String getConisClear() {
		return conisClear;
	}
	public void setConisClear(String conisClear) {
		this.conisClear = conisClear;
	}
	public String getProInformation() {
		return proInformation;
	}
	public void setProInformation(String proInformation) {
		this.proInformation = proInformation;
	}
	public String getConsignee() {
		return consignee;
	}
	public void setConsignee(String consignee) {
		this.consignee = consignee;
	}
	public Date getNqDate2() {
		return nqDate2;
	}
	public void setNqDate2(Date nqDate2) {
		this.nqDate2 = nqDate2;
	}
	public String getSupplyCost() {
		return supplyCost;
	}
	public void setSupplyCost(String supplyCost) {
		this.supplyCost = supplyCost;
	}
	public String getSupplyCycle() {
		return supplyCycle;
	}
	public void setSupplyCycle(String supplyCycle) {
		this.supplyCycle = supplyCycle;
	}
	public String getCwOpinion() {
		return cwOpinion;
	}
	public void setCwOpinion(String cwOpinion) {
		this.cwOpinion = cwOpinion;
	}
	public Date getCwDate() {
		return cwDate;
	}
	public void setCwDate(Date cwDate) {
		this.cwDate = cwDate;
	}
	public String getInlineRadioOptions4() {
		return inlineRadioOptions4;
	}
	public void setInlineRadioOptions4(String inlineRadioOptions4) {
		this.inlineRadioOptions4 = inlineRadioOptions4;
	}
	public String getLzOpinion() {
		return lzOpinion;
	}
	public void setLzOpinion(String lzOpinion) {
		this.lzOpinion = lzOpinion;
	}
	public Date getLzDate() {
		return lzDate;
	}
	public void setLzDate(Date lzDate) {
		this.lzDate = lzDate;
	}
	public String geteName() {
		return eName;
	}
	public void seteName(String eName) {
		this.eName = eName;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public String geteManager() {
		return eManager;
	}
	public void seteManager(String eManager) {
		this.eManager = eManager;
	}
	public String getTaskId() {
		return taskId;
	}
	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}
	public YwReview(Date applyTime, String customerName, String inlineRadioOptions1, String position, String useRange,
			String customRequire, String inlineRadioOptions2, Date responseTime, String tecContactNum,
			String regionalManager, String saleManager, String state, String inlineRadioOptions3, String parts,
			String timeLimit, String product, String tecPlans, String auditStaff, Date auditDate, String tecOpinion,
			String accountPrice, String purchasCycle, String costAccount, Date cDate1, String buyer, Date cDate2,
			String cgOpinion, String conversionCost, String processCycle, String deliveryCost, String deliveryCycle,
			String facProvider, Date nqDate, String proisClear, String conisClear, String proInformation,
			String consignee, Date nqDate2, String supplyCost, String supplyCycle, String cwOpinion, Date cwDate,
			String inlineRadioOptions4, String lzOpinion, Date lzDate, String eName, String company, String dept,
			String eManager, String taskId) {
		super();
		this.applyTime = applyTime;
		this.customerName = customerName;
		this.inlineRadioOptions1 = inlineRadioOptions1;
		this.position = position;
		this.useRange = useRange;
		this.customRequire = customRequire;
		this.inlineRadioOptions2 = inlineRadioOptions2;
		this.responseTime = responseTime;
		this.tecContactNum = tecContactNum;
		this.regionalManager = regionalManager;
		this.saleManager = saleManager;
		this.state = state;
		this.inlineRadioOptions3 = inlineRadioOptions3;
		this.parts = parts;
		this.timeLimit = timeLimit;
		this.product = product;
		this.tecPlans = tecPlans;
		this.auditStaff = auditStaff;
		this.auditDate = auditDate;
		this.tecOpinion = tecOpinion;
		this.accountPrice = accountPrice;
		this.purchasCycle = purchasCycle;
		this.costAccount = costAccount;
		this.cDate1 = cDate1;
		this.buyer = buyer;
		this.cDate2 = cDate2;
		this.cgOpinion = cgOpinion;
		this.conversionCost = conversionCost;
		this.processCycle = processCycle;
		this.deliveryCost = deliveryCost;
		this.deliveryCycle = deliveryCycle;
		this.facProvider = facProvider;
		this.nqDate = nqDate;
		this.proisClear = proisClear;
		this.conisClear = conisClear;
		this.proInformation = proInformation;
		this.consignee = consignee;
		this.nqDate2 = nqDate2;
		this.supplyCost = supplyCost;
		this.supplyCycle = supplyCycle;
		this.cwOpinion = cwOpinion;
		this.cwDate = cwDate;
		this.inlineRadioOptions4 = inlineRadioOptions4;
		this.lzOpinion = lzOpinion;
		this.lzDate = lzDate;
		this.eName = eName;
		this.company = company;
		this.dept = dept;
		this.eManager = eManager;
		this.taskId = taskId;
	}
	public YwReview() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "YwReview [applyTime=" + applyTime + ", customerName=" + customerName + ", inlineRadioOptions1="
				+ inlineRadioOptions1 + ", position=" + position + ", useRange=" + useRange + ", customRequire="
				+ customRequire + ", inlineRadioOptions2=" + inlineRadioOptions2 + ", responseTime=" + responseTime
				+ ", tecContactNum=" + tecContactNum + ", regionalManager=" + regionalManager + ", saleManager="
				+ saleManager + ", state=" + state + ", inlineRadioOptions3=" + inlineRadioOptions3 + ", parts=" + parts
				+ ", timeLimit=" + timeLimit + ", product=" + product + ", tecPlans=" + tecPlans + ", auditStaff="
				+ auditStaff + ", auditDate=" + auditDate + ", tecOpinion=" + tecOpinion + ", accountPrice="
				+ accountPrice + ", purchasCycle=" + purchasCycle + ", costAccount=" + costAccount + ", cDate1="
				+ cDate1 + ", buyer=" + buyer + ", cDate2=" + cDate2 + ", cgOpinion=" + cgOpinion + ", conversionCost="
				+ conversionCost + ", processCycle=" + processCycle + ", deliveryCost=" + deliveryCost
				+ ", deliveryCycle=" + deliveryCycle + ", facProvider=" + facProvider + ", nqDate=" + nqDate
				+ ", proisClear=" + proisClear + ", conisClear=" + conisClear + ", proInformation=" + proInformation
				+ ", consignee=" + consignee + ", nqDate2=" + nqDate2 + ", supplyCost=" + supplyCost + ", supplyCycle="
				+ supplyCycle + ", cwOpinion=" + cwOpinion + ", cwDate=" + cwDate + ", inlineRadioOptions4="
				+ inlineRadioOptions4 + ", lzOpinion=" + lzOpinion + ", lzDate=" + lzDate + ", eName=" + eName
				+ ", company=" + company + ", dept=" + dept + ", eManager=" + eManager + ", taskId=" + taskId + "]";
	}
	
	
	
}
