package com.jm.controller;

import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.ParseException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.xml.stream.XMLStreamException;

import org.activiti.engine.RuntimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.jm.entity.ActivitiModel;
import com.jm.entity.Employee;
import com.jm.entity.HistoryModel;
import com.jm.entity.PageInfo;
import com.jm.entity.ProcessModel;
import com.jm.entity.TaskModel;
import com.jm.entity.application.Leave;
import com.jm.entity.application.YwReview;
import com.jm.service.ActivitiService;
import com.jm.service.TecReviewService;

@RequestMapping(value = "tecReview")
@Scope(value = "prototype")
@Controller
public class TecReviewController {

	@Lazy
	@Autowired
	private TecReviewService tecReviewService;
	
	@Lazy
	@Autowired
	private ActivitiService activitiService;
	
	@Autowired
	private RuntimeService runtimeService;
	
	//启动流程
	@ResponseBody
	@RequestMapping(value = "startRecProcess", method = RequestMethod.POST)
	public String leaveStartProcess(HttpSession session, YwReview ywReview) throws XMLStreamException
	{
 		ProcessModel processModel = (ProcessModel) session.getAttribute("processModel");
		Employee employee = (Employee) session.getAttribute("employee");
		Map<String, Object> varables = new LinkedHashMap<String, Object>();
		varables.put("applyTime", ywReview.getApplyTime()); // 申请时间
		varables.put("customerName", ywReview.getCustomerName()); //
		varables.put("emergency", ywReview.getInlineRadioOptions1()); // 紧急程度
		varables.put("position", ywReview.getPosition()); // 
		varables.put("useRange", ywReview.getUseRange()); // 
		varables.put("customRequire", ywReview.getCustomRequire()); // 
		varables.put("isContect", ywReview.getInlineRadioOptions2()); //是否需要技术部与业务部电话沟通
		varables.put("responseTime", ywReview.getResponseTime()); // 
		varables.put("tecContactNum", ywReview.getTecContactNum());
		varables.put("applicant", ywReview.getRegionalManager());//制表人/区域经理/申请人
		varables.put("saleManager", ywReview.getSaleManager());
		varables.put("state", ywReview.getState());
		varables.put("company", employee.getDept().getCompany().getcName()); // company
		varables.put("dept", employee.getDept().getdName()); // dept
		return activitiService.startProcess(processModel, varables, null);
	}

	/**
	 * 根据text的值决定对任务id为taskId的任务操作(通过/驳回)
	 */
	@ResponseBody
	@RequestMapping(value = "/completeTask", method = RequestMethod.POST)
	public String completeTask(YwReview ywReview)
	{
		try {
			return tecReviewService.completeTask(ywReview.getTaskId(),ywReview.getState(), ywReview);
		} catch (XMLStreamException e) {
			e.printStackTrace();
			return "fail";
		}
	}
	
}