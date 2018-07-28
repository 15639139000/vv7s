package com.jm.service;

import java.text.ParseException;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.xml.stream.XMLStreamException;

import org.activiti.bpmn.model.FlowElement;
import org.activiti.engine.history.HistoricActivityInstance;
import org.activiti.engine.impl.persistence.entity.ProcessDefinitionEntity;

import com.jm.entity.ActivitiModel;
import com.jm.entity.ByteArray;
import com.jm.entity.HistoryModel;
import com.jm.entity.PageInfo;
import com.jm.entity.ProcessModel;
import com.jm.entity.TaskModel;
import com.jm.entity.application.Car;
import com.jm.entity.application.Leave;
import com.jm.entity.application.YwReview;

/**
 * 模型业务逻辑接口
 */
public interface TecReviewService {

	

	
	/**
	 * 根据text的值决定对任务id为taskId的任务操作(通过/驳回)
	 * @param taskId 任务Id
	 * @param text 
	 * @return
	 */
	public String completeTask(String taskId, String text, YwReview opinion) throws XMLStreamException;
	
	
}
