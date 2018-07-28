package com.jm.service;

import java.text.ParseException;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.jm.entity.Deployment;
import com.jm.entity.HistoryModel;
import com.jm.entity.Jurisdiction;
import com.jm.entity.PageModel;
import com.jm.entity.Variables;

/**
 *  业务接口
 */
public interface AllTaskService {

	
	/**
	 * 根据菜单过滤
	 * @param page
	 * @param company
	 * @param list
	 * @return
	 */
	public PageModel<HistoryModel> queryAl(Integer page, String company,List<String> list);
	
	/**
	 * 查找所有任务
	 */
	public PageModel<HistoryModel> queryAl(Integer page, String company);
	/**
	 * 按条件查询任务
	 * @param page
	 * @param startTime
	 * @param startTime1
	 * @param eName
	 * @param forCla
	 * @param state
	 * @return
	 * @throws ParseException 
	 */
	public PageModel<HistoryModel> queryAl(Integer page,@Param("startTime")String startTime,@Param("startTime1")String startTime1,@Param("eName")String eName,@Param("forCla")String forCla,@Param("message")String message,String company) throws ParseException;

	/**
	 * @return 任务总数
	 */
	public Integer count();
	
	/**
	 * 根据流程定义id查询对应的name值
	 * @param id 流程定义id
	 * @return String
	 */
	public String getProcdefName(@Param("id")String id);

	/**
	 * 查询所有流程定义名称
	 * @return List<Deployment>
	 */
	public List<Deployment> getDeployment();
	
	/**
	 * 所有申请状态
	 * @return
	 */
	public List<Variables> getMessage();
	
	/**
	 * 查询子菜单name
	 * @param list 
	 * @param list
	 * @return
	 */
	public List<Jurisdiction> queryMenu(List<String> list);

}
