package com.jm.service.impl;

import java.io.ByteArrayInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;

import org.activiti.bpmn.converter.BpmnXMLConverter;
import org.activiti.bpmn.model.BpmnModel;
import org.activiti.bpmn.model.FlowElement;
import org.activiti.bpmn.model.UserTask;
import org.activiti.editor.constants.ModelDataJsonConstants;
import org.activiti.editor.language.json.converter.BpmnJsonConverter;
import org.activiti.engine.FormService;
import org.activiti.engine.HistoryService;
import org.activiti.engine.IdentityService;
import org.activiti.engine.ManagementService;
import org.activiti.engine.ProcessEngine;
import org.activiti.engine.ProcessEngineConfiguration;
import org.activiti.engine.ProcessEngines;
import org.activiti.engine.RepositoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.history.HistoricActivityInstance;
import org.activiti.engine.history.HistoricProcessInstance;
import org.activiti.engine.history.HistoricTaskInstance;
import org.activiti.engine.history.HistoricVariableInstance;
import org.activiti.engine.impl.cfg.ProcessEngineConfigurationImpl;
import org.activiti.engine.impl.context.Context;
import org.activiti.engine.impl.persistence.entity.ExecutionEntity;
import org.activiti.engine.impl.persistence.entity.ProcessDefinitionEntity;
import org.activiti.engine.impl.pvm.PvmTransition;
import org.activiti.engine.impl.pvm.process.ActivityImpl;
import org.activiti.engine.repository.Deployment;
import org.activiti.engine.repository.Model;
import org.activiti.engine.repository.ProcessDefinition;
import org.activiti.engine.task.Task;
import org.activiti.image.ProcessDiagramGenerator;
import org.activiti.validation.ProcessValidator;
import org.activiti.validation.ProcessValidatorFactory;
import org.activiti.validation.ValidationError;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.jm.dao.EmployeeDao;
import com.jm.entity.ActivitiModel;
import com.jm.entity.ByteArray;
import com.jm.entity.Description;
import com.jm.entity.Employee;
import com.jm.entity.HistoryModel;
import com.jm.entity.PageInfo;
import com.jm.entity.ProcessModel;
import com.jm.entity.TaskModel;
import com.jm.entity.application.Car;
import com.jm.entity.application.Leave;
import com.jm.entity.application.YwReview;
import com.jm.service.ActivitiService;
import com.jm.service.TecReviewService;
import com.jm.utils.IsInDate;

/**
 * 模型Service接口实现类
 */
@Service
public class TecReviewServiceImpl implements TecReviewService {

	@Autowired
	private RepositoryService repositoryService;

	@Autowired
	private RuntimeService runtimeService;

	@Autowired
	private TaskService taskService;

	@Autowired
	private FormService formService;

	@Autowired
	private HistoryService historyService;

	@Autowired
	private ManagementService managementService;

	@Autowired
	private IdentityService identityService;
	
	@Autowired
	private ProcessEngine processEngine;

	
	@Autowired
	private ActivitiService activitiService;

	
	
	@SuppressWarnings("unused")
	@Transactional
	@Override
	public String completeTask(String taskId, String text, YwReview opinion) throws XMLStreamException {
		Task task = taskService.createTaskQuery().taskId(taskId).singleResult();
		Map<String, Object> variables = runtimeService.getVariables(task.getProcessInstanceId());
		Set<String> keysSet = variables.keySet();
		Iterator<String> keySet = keysSet.iterator();
		String assignee = task.getAssignee();
		if(null != variables){
			while (keySet.hasNext()) {
				String key = keySet.next();
				if(assignee.equals(variables.get(key))){
					Iterator<FlowElement> iterator = activitiService.findFlow(task.getProcessDefinitionId());
					while (iterator.hasNext()) {
						FlowElement flowElement = iterator.next();
						String classNames = flowElement.getClass().getSimpleName();
						if (classNames.equals("UserTask")){
							UserTask userTask = (UserTask) flowElement;
							String assginee11 = userTask.getAssignee();
							if(assignee.equals(assginee11)){
								FlowElement flowElement2 = iterator.next();
								String classNames1 = flowElement2.getClass().getSimpleName();
								if(classNames1.equals("EndEvent")){
									text = "完成";
								}
							}
						}
					}
				}
			}
			if(text.equals("同意")){
				variables.put("message", "通过");
				variables.put("applyTime", opinion.getApplyTime()); // 申请时间
				variables.put("customerName", opinion.getCustomerName()); //
				variables.put("emergency", opinion.getInlineRadioOptions1()); // 紧急程度
				variables.put("position", opinion.getPosition()); // 
				variables.put("useRange", opinion.getUseRange()); // 
				variables.put("customRequire", opinion.getCustomRequire()); // 
				variables.put("isContect", opinion.getInlineRadioOptions2()); //是否需要技术部与业务部电话沟通
				variables.put("responseTime", opinion.getResponseTime()); // 
				variables.put("tecContactNum", opinion.getTecContactNum());
				variables.put("applicant", opinion.getRegionalManager());//制表人/区域经理/申请人
				variables.put("saleManager", opinion.getSaleManager());
				variables.put("tecMethod", opinion.getInlineRadioOptions3() );
				variables.put("parts", opinion.getParts());
				variables.put("timeLimit", opinion.getTimeLimit());
				variables.put("product", opinion.getProduct());
				variables.put("tecPlans", opinion.getTecPlans());
				variables.put("auditStaff", opinion.getAuditStaff());
				variables.put("auditDate", opinion.getAuditDate());
				variables.put("tecOpinion", opinion.getTecOpinion());
				variables.put("accountPrice", opinion.getAccountPrice());
				variables.put("purchasCycle", opinion.getPurchasCycle());
				variables.put("costAccount", opinion.getCostAccount());
				variables.put("cDate1", opinion.getcDate1());
				variables.put("buyer", opinion.getBuyer());
				variables.put("cDate2", opinion.getcDate2());
				variables.put("cgOpinion", opinion.getCgOpinion());
				variables.put("conversionCost", opinion.getConversionCost());
				variables.put("processCycle", opinion.getProcessCycle());
				variables.put("deliveryCost", opinion.getDeliveryCost());
				variables.put("deliveryCycle", opinion.getDeliveryCycle());
				variables.put("facProvider", opinion.getFacProvider());
				variables.put("nqDate", opinion.getNqDate());
				variables.put("proisClear", opinion.getProisClear());
				variables.put("conisClear", opinion.getConisClear());
				variables.put("proInformation", opinion.getProInformation());
				variables.put("consignee", opinion.getConsignee());
				variables.put("nqDate2", opinion.getNqDate2());
				variables.put("supplyCost", opinion.getSupplyCost());
				variables.put("supplyCycle", opinion.getSupplyCycle());
				variables.put("cwOpinion", opinion.getCwOpinion());
				variables.put("cwDate", opinion.getCwDate());
				variables.put("lzMethod", opinion.getInlineRadioOptions4());
				variables.put("lzOpinion", opinion.getLzOpinion());
				variables.put("lzDate", opinion.getLzDate());
				variables.put("state", opinion.getState());
			}else if(text.equals("退回")){
				variables.put("message", "退回");
//				variables.put("opinion", opinion);
			}else{
				variables.put("message", "完成");
			}
			taskService.complete(taskId, variables);
			return "success";
		}else{
			return "fail";
		}
	}

	

	
}
