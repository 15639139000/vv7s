package com.jm.service.impl;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.activiti.engine.HistoryService;
import org.activiti.engine.ProcessEngine;
import org.activiti.engine.RepositoryService;
import org.activiti.engine.TaskService;
import org.activiti.engine.history.HistoricTaskInstance;
import org.activiti.engine.history.HistoricVariableInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jm.dao.AllTaskDao;
import com.jm.entity.Deployment;
import com.jm.entity.HistoryModel;
import com.jm.entity.Jurisdiction;
import com.jm.entity.PageModel;
import com.jm.entity.Variables;
import com.jm.service.AllTaskService;
import com.jm.utils.IsInDate;
/**
 * 业务接口实现层
 */
@Service
public class AllTaskServiceImpl implements AllTaskService {

	//任务管理
	@Autowired
	private TaskService taskService;
	
	//历史管理
	@Autowired
	private HistoryService historyService;
	
	//是Activiti的仓库服务类。所谓的仓库指流程定义文档的两个文件：bpmn文件和流程图片
	@Autowired
	private RepositoryService repositoryService;
	
	@Autowired
	private ProcessEngine processEngine;
	
	@Autowired
	private AllTaskDao allTaskDao;
	
	
	/**
	 * id查询名称
	 */
	@Transactional
	@Override
	public String getProcdefName(String id) {
		return allTaskDao.getProcdefName(id);
	}



	/**
	 * 查询任务总数
	 */
	@Transactional
	@Override
	public Integer count() {
		return allTaskDao.count();
	}



	/**
	 * 查询出所有流程定义的名称
	 */
	@Transactional
	@Override
	public List<Deployment> getDeployment() {
		return allTaskDao.getDeployment();
	}
	
	/**
	 * 所有申请状态
	 */
	@Transactional
	@Override
	public List<Variables> getMessage() {
		return allTaskDao.getMessage();
	}

	
	    /**
	     * 查询全部并分页
	     */
		@Override
		public PageModel<HistoryModel> queryAl(Integer page,String company) {
			String compan = company;
			List<HistoryModel> AllTasks = new ArrayList<HistoryModel>();
			List<HistoricTaskInstance> list = processEngine.getHistoryService() // 历史任务Service  
		            .createHistoricTaskInstanceQuery()
		            .list();
			@SuppressWarnings("unused")
			int count = count();
			//遍历历史任务
			for(HistoricTaskInstance hti:list){
				HistoryModel allTask = new HistoryModel();
				allTask.setId(hti.getId()); //任务id
				//获取流程定义id 并传入getProcdefName(id);方法中，得到流程定义name
				String id = hti.getProcessDefinitionId();//流程定义id
				String name = getProcdefName(id);
				allTask.setName(name); //流程定义name
				allTask.setStartTime(hti.getStartTime());//开始时间
				allTask.setEndTime(hti.getEndTime());//结束时间
				allTask.setProcessInstanceId(hti.getProcessInstanceId());//流程实例Id
			    List<HistoricVariableInstance> hisList = historyService.createHistoricVariableInstanceQuery().processInstanceId(hti.getProcessInstanceId()).list();
				Map<String, Object> hisVariables = new HashMap<String, Object>();
				for(HistoricVariableInstance historicVariableInstance : hisList){
					hisVariables.put(historicVariableInstance.getVariableName(), historicVariableInstance.getValue());
				}
				allTask.setAssignee((String)hisVariables.get("applicant"));  //审批人
				if (!hisVariables.isEmpty()&&hisVariables.get("applyCompany").toString().equals(compan)) {
					allTask.setHisVariable(hisVariables);//变量集合
					AllTasks.add(allTask);
				}
			}
			
			PageModel<HistoryModel> pageModel = new PageModel<HistoryModel>(AllTasks.size());//初始化pageModel对象  
			List<HistoryModel> subList = new ArrayList<HistoryModel>();
			//设置当前页
			pageModel.setCurPage(page);//这里page是从页面上获取的一个参数，代表页数  
			//获得分页大小
			int pagesize = pageModel.getPageSize();
			//获得分页数据在list集合中的索引 
			int firstIndex=(page-1)*pagesize;  
			int toIndex=page*pagesize; 
			if(toIndex>AllTasks.size()){  
				     toIndex=AllTasks.size();
				 }  
				if(firstIndex>toIndex){  
				    firstIndex=0;  
				    pageModel.setCurPage(1);  
				}
				int cur = pageModel.getCurPage();
				int pc = pageModel.getPageCount();
		        //截取数据集合，获得分页数据  
				subList=AllTasks.subList(firstIndex, toIndex);
				pageModel.setList(subList);
				pageModel.setCurPage(cur);
				pageModel.setPageCount(pc);
				pageModel.setPageSize(pagesize);
			return pageModel;
		}

		//条件查询
		@Override
		public PageModel<HistoryModel> queryAl(Integer page, String startTime,
				String startTime1, String eName, String forCla, String message,String company) throws ParseException {
			// TODO Auto-generated method stub
			//查询所有历史任务的集合
			List<HistoricTaskInstance> hisTasks = processEngine.getHistoryService() // 历史任务Service  
		            .createHistoricTaskInstanceQuery()
		            .list();
			List<HistoryModel> AllTasks = new ArrayList<HistoryModel>();
			//判断集合不等于空
			if(hisTasks != null && hisTasks.size() > 0){
				//遍历集合
				for (HistoricTaskInstance histask : hisTasks) {
					    //得到历史变量集合并遍历 
					    List<HistoricVariableInstance> hisList = historyService.createHistoricVariableInstanceQuery().processInstanceId(histask.getProcessInstanceId()).list();
						Map<String, Object> hisVariables = new HashMap<String, Object>();
						for(HistoricVariableInstance historicVariableInstance : hisList){
							hisVariables.put(historicVariableInstance.getVariableName(), historicVariableInstance.getValue());
						}
					    HistoryModel historyModel = new HistoryModel();
					    String id = histask.getProcessDefinitionId();//流程定义id
						String name = getProcdefName(id);
						historyModel.setName(name); //流程定义name
						if(!hisVariables.isEmpty()){
							if(!startTime.equals("") && !startTime1.equals("") && !eName.equals("") && !forCla.equals("") && !message.equals("")) {
								String applyTime = (String) hisVariables.get("applyTime");
								if(!IsInDate.isDate(applyTime, startTime, startTime1) ||!hisVariables.get("applicant").equals(eName) || !historyModel.getName().equals(forCla) || !hisVariables.get("message").equals(message)){
									continue;
								}
							}else if(!startTime.equals("") && !startTime1.equals("") && !eName.equals("") && !forCla.equals("")) {
								String applyTime = (String) hisVariables.get("applyTime");
								if(!IsInDate.isDate(applyTime, startTime, startTime1) ||!hisVariables.get("applicant").equals(eName) || !historyModel.getName().equals(forCla)){
									continue;
								}
							}else if(!startTime.equals("") && !startTime1.equals("") && !eName.equals("")) {
								String applyTime = (String) hisVariables.get("applyTime");
								if(!IsInDate.isDate(applyTime, startTime, startTime1) ||!hisVariables.get("applicant").equals(eName)){
									continue;
								}
							}else if(!startTime.equals("") && !startTime1.equals("") && !forCla.equals("")) {
								String applyTime = (String) hisVariables.get("applyTime");
								if(!IsInDate.isDate(applyTime, startTime, startTime1) ||!historyModel.getName().equals(forCla)){
									continue;
								}
							}else if(!startTime.equals("") && !startTime1.equals("") && !message.equals("")) {
								String applyTime = (String) hisVariables.get("applyTime");
								if(!IsInDate.isDate(applyTime, startTime, startTime1) || !hisVariables.get("message").equals(message)){
									continue;
								}
							}else if(!eName.equals("") && !forCla.equals("") && !message.equals("")) {
								if(!hisVariables.get("applicant").equals(eName) || !historyModel.getName().equals(forCla) || !hisVariables.get("message").equals(message)){
									continue;
								}
							}else if(!eName.equals("") && !forCla.equals("")) {
								if(!hisVariables.get("applicant").equals(eName) || !historyModel.getName().equals(forCla)){
									continue;
								}
							}else if(!eName.equals("") && !message.equals("")) {
								if(!hisVariables.get("applicant").equals(eName) || !hisVariables.get("message").equals(message)){
									continue;
								}
							}else if(!forCla.equals("") && !message.equals("")) {
								if(!historyModel.getName().equals(forCla) || !hisVariables.get("message").equals(message)){
									continue;
								}
							}else if(!startTime.equals("") && !startTime1.equals("")){ //开始时间  结束时间
								String applyTime = (String) hisVariables.get("applyTime");
								if(!IsInDate.isDate(applyTime, startTime, startTime1)){
									continue;
								}
							}else if(!eName.equals("")){ // 申请人
								if(!hisVariables.get("applicant").equals(eName)){
									continue;
								}
							}else if(!message.equals("")){ // 状态
								if(!hisVariables.get("message").equals(message)){
									continue;
								}
							}else if(!forCla.equals("")){ //表单类型
								if(!historyModel.getName().equals(forCla)){
									continue;
								}
							}else if(!(message.isEmpty() || forCla.isEmpty())) {
								if(!(hisVariables.get("message").equals(message) && historyModel.getName().equals(forCla))){
									continue;
								}
							}
							historyModel.setAssignee((String)hisVariables.get("applicant"));// 申请人
							historyModel.setId(histask.getId());// 标识
							historyModel.setStartTime(histask.getStartTime());//开始时间
							historyModel.setEndTime(histask.getEndTime());//结束时间
							historyModel.setProcessInstanceId(histask.getProcessInstanceId());// 流程实例Id
							historyModel.setProcessDefinitionId(histask.getProcessDefinitionId());// 流程定义id
							historyModel.setHisVariable(hisVariables);
							
							if (!hisVariables.isEmpty()&&hisVariables.get("applyCompany").toString().equals(company)) {
								historyModel.setHisVariable(hisVariables);//变量集合
								AllTasks.add(historyModel);
							}
						}
				}
			}
			PageModel<HistoryModel> pageModel = new PageModel<HistoryModel>(AllTasks.size());//初始化pageModel对象  
			List<HistoryModel> subList = new ArrayList<HistoryModel>();
			//设置当前页
			pageModel.setCurPage(page);//这里page是从页面上获取的一个参数，代表页数  
			//获得分页大小
			int pagesize = pageModel.getPageSize();
			//获得分页数据在list集合中的索引 
			int firstIndex=(page-1)*pagesize;  
			int toIndex=page*pagesize; 
			if(toIndex>AllTasks.size()){  
				     toIndex=AllTasks.size();
				 }  
				if(firstIndex>toIndex){  
				    firstIndex=0;  
				    pageModel.setCurPage(1);  
				}
				int cur = pageModel.getCurPage();
				int pc = pageModel.getPageCount();
		        //截取数据集合，获得分页数据  
				subList=AllTasks.subList(firstIndex, toIndex);
				pageModel.setList(subList);
				pageModel.setCurPage(cur);
				pageModel.setPageCount(pc);
				pageModel.setPageSize(pagesize);
			return pageModel;
		}

		
		//根据菜单过滤
		@Override
		public PageModel<HistoryModel> queryAl(Integer page,String company,List<String> parentNames) {
			String compan = company;
			List<HistoryModel> AllTasks = new ArrayList<HistoryModel>();
			List<HistoricTaskInstance> list = processEngine.getHistoryService() // 历史任务Service  
		            .createHistoricTaskInstanceQuery()
		            .list();
			//根据页面传进来的父级菜单查询子菜单名称
			List<Jurisdiction> queryMenu = allTaskDao.queryMenu(parentNames);
			//遍历历史任务
			for(Jurisdiction qu:queryMenu){
			for(HistoricTaskInstance hti:list){
				HistoryModel allTask = new HistoryModel();
				allTask.setId(hti.getId()); //任务id
				//获取流程定义id 并传入getProcdefName(id);方法中，得到流程定义name
				String id = hti.getProcessDefinitionId();//流程定义id
				String name = getProcdefName(id);
				/*allTask.setName(name); //流程定义name*/
				if(!qu.getjName().equals(name)){
					continue;
				}
				allTask.setName(qu.getjName());
				allTask.setStartTime(hti.getStartTime());//开始时间
				allTask.setEndTime(hti.getEndTime());//结束时间
				allTask.setProcessInstanceId(hti.getProcessInstanceId());//流程实例Id
			    List<HistoricVariableInstance> hisList = historyService.createHistoricVariableInstanceQuery().processInstanceId(hti.getProcessInstanceId()).list();
				Map<String, Object> hisVariables = new HashMap<String, Object>();
				for(HistoricVariableInstance historicVariableInstance : hisList){
					hisVariables.put(historicVariableInstance.getVariableName(), historicVariableInstance.getValue());
				}
				allTask.setAssignee((String)hisVariables.get("applicant"));  //审批人
				if (!hisVariables.isEmpty()&&hisVariables.get("applyCompany").toString().equals(compan)) {
					allTask.setHisVariable(hisVariables);//变量集合
					AllTasks.add(allTask);
				}
			}
		}
			PageModel<HistoryModel> pageModel = new PageModel<HistoryModel>(AllTasks.size());//初始化pageModel对象  
			List<HistoryModel> subList = new ArrayList<HistoryModel>();
			//设置当前页
			pageModel.setCurPage(page);//这里page是从页面上获取的一个参数，代表页数
			//获得分页大小
			int pagesize = pageModel.getPageSize();
			//获得分页数据在list集合中的索引 
			int firstIndex=(page-1)*pagesize;  
			int toIndex=page*pagesize; 
			if(toIndex>AllTasks.size()){  
				     toIndex=AllTasks.size();
				 }  
				if(firstIndex>toIndex){  
				    firstIndex=0;  
				    pageModel.setCurPage(1);  
				}
				int cur = pageModel.getCurPage();
				int pc = pageModel.getPageCount();
		        //截取数据集合，获得分页数据  
				subList=AllTasks.subList(firstIndex, toIndex);
				pageModel.setList(subList);
				pageModel.setCurPage(cur);
				pageModel.setPageCount(pc);
				pageModel.setPageSize(pagesize);
			return pageModel;
		}

		@Override
		public List<Jurisdiction> queryMenu(List<String> parentNames) {
			// TODO Auto-generated method stub
			List<Jurisdiction> LS = allTaskDao.queryMenu(parentNames);
			return LS;
		}

		
}
