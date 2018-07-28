package com.jm.entity;

import java.math.BigInteger;
import java.util.Date;
/**
 * 
 * @author 所有任务展示实体类
 *
 */
public class HinTask {
	
	private String id;
	private String procDefId;
	private String taskDefKey;
	private String procInstId;
	private String executionId;
	private String name;
	private String parentTaskId;
	private String description;
	private String owner;
	private String assignee;
	private String startTime;
	private Date claimTime;
	private Date endTime;
	private BigInteger duraTion; 
	private String deleteReason;
    private Integer priority;
    private Date dueDate;
    private String formKey;
    private String cateGory;
    private String tenantId;
    
    private Department department; //所属部门
    
    private Deployment deploy;  //所属流程定义
    
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getProcDefId() {
		return procDefId;
	}
	public void setProcDefId(String procDefId) {
		this.procDefId = procDefId;
	}
	public String getTaskDefKey() {
		return taskDefKey;
	}
	public void setTaskDefKey(String taskDefKey) {
		this.taskDefKey = taskDefKey;
	}
	public String getProcInstId() {
		return procInstId;
	}
	public void setProcInstId(String procInstId) {
		this.procInstId = procInstId;
	}
	public String getExecutionId() {
		return executionId;
	}
	public void setExecutionId(String executionId) {
		this.executionId = executionId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getParentTaskId() {
		return parentTaskId;
	}
	public void setParentTaskId(String parentTaskId) {
		this.parentTaskId = parentTaskId;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	public String getAssignee() {
		return assignee;
	}
	public void setAssignee(String assignee) {
		this.assignee = assignee;
	}
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public Date getClaimTime() {
		return claimTime;
	}
	public void setClaimTime(Date claimTime) {
		this.claimTime = claimTime;
	}
	public Date getEndTime() {
		return endTime;
	}
	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}
	public BigInteger getDuraTion() {
		return duraTion;
	}
	public void setDuraTion(BigInteger duraTion) {
		this.duraTion = duraTion;
	}
	public String getDeleteReason() {
		return deleteReason;
	}
	public void setDeleteReason(String deleteReason) {
		this.deleteReason = deleteReason;
	}
	public Integer getPriority() {
		return priority;
	}
	public void setPriority(Integer priority) {
		this.priority = priority;
	}
	public Date getDueDate() {
		return dueDate;
	}
	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}
	public String getFormKey() {
		return formKey;
	}
	public void setFormKey(String formKey) {
		this.formKey = formKey;
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
	public Department getDepartment() {
		return department;
	}
	public void setDepartment(Department department) {
		this.department = department;
	}
	public Deployment getDeploy() {
		return deploy;
	}
	public void setDeploy(Deployment deploy) {
		this.deploy = deploy;
	}
	public HinTask() {
		super();
		// TODO Auto-generated constructor stub
	}
	public HinTask(String id, String procDefId, String taskDefKey,
			String procInstId, String executionId, String name,
			String parentTaskId, String description, String owner,
			String assignee, String startTime, Date claimTime, Date endTime,
			BigInteger duraTion, String deleteReason, Integer priority,
			Date dueDate, String formKey, String cateGory, String tenantId,
			Department department, Deployment deploy) {
		super();
		this.id = id;
		this.procDefId = procDefId;
		this.taskDefKey = taskDefKey;
		this.procInstId = procInstId;
		this.executionId = executionId;
		this.name = name;
		this.parentTaskId = parentTaskId;
		this.description = description;
		this.owner = owner;
		this.assignee = assignee;
		this.startTime = startTime;
		this.claimTime = claimTime;
		this.endTime = endTime;
		this.duraTion = duraTion;
		this.deleteReason = deleteReason;
		this.priority = priority;
		this.dueDate = dueDate;
		this.formKey = formKey;
		this.cateGory = cateGory;
		this.tenantId = tenantId;
		this.department = department;
		this.deploy = deploy;
	}
	@Override
	public String toString() {
		return "HinTask [id=" + id + ", procDefId=" + procDefId
				+ ", taskDefKey=" + taskDefKey + ", procInstId=" + procInstId
				+ ", executionId=" + executionId + ", name=" + name
				+ ", parentTaskId=" + parentTaskId + ", description="
				+ description + ", owner=" + owner + ", assignee=" + assignee
				+ ", startTime=" + startTime + ", claimTime=" + claimTime
				+ ", endTime=" + endTime + ", duraTion=" + duraTion
				+ ", deleteReason=" + deleteReason + ", priority=" + priority
				+ ", dueDate=" + dueDate + ", formKey=" + formKey
				+ ", cateGory=" + cateGory + ", tenantId=" + tenantId
				+ ", department=" + department + ", deploy=" + deploy + "]";
	}
    
    
}
