package com.jm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.jm.entity.Deployment;
import com.jm.entity.HistoryModel;
import com.jm.entity.Jurisdiction;
import com.jm.entity.Variables;

public interface AllTaskDao {

	/**
	 * 
	 * 
	 * @return 条数
	 */
	public Integer count();


	/**
	 * 根据id查询流程定义名称
	 */
	public String getProcdefName(@Param("id")String id);
	
	/**
	 * 查询所有流程定义的名称  
	 */
	public List<Deployment> getDeployment();
	
	/**
	 * 所有申请状态
	 */
	public List<Variables> getMessage();
	
	
	/**
	 * 查询所有任务
	 * @return
	 */
	public List<HistoryModel> queryAl();
	
	
	/**
	 * 按条件查询
	 * @param startTime
	 * @param endTime
	 * @param eName
	 * @param forCla
	 * @param state
	 * @return 集合
	 */
	public List<HistoryModel> queryAl(@Param("startTime")String startTime,@Param("endTime")String endTime,@Param("eName")String eName,@Param("forCla")String forCla,@Param("state")String state);
	
	
	/**
	 * 查询子菜单name
	 * @param parentNames 
	 * @param string
	 * @return
	 */
	public List<Jurisdiction> queryMenu(@Param("parentNames")List<String> parentNames);
}
