package com.jm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.github.pagehelper.PageInfo;
import com.jm.entity.Remark;
import com.jm.service.RemarkService;

@Controller
@RequestMapping(value = "remark")
public class RemarkController {

	@Lazy
	@Autowired
	private RemarkService remarkService;
	
	
	@RequestMapping(value = "getRemarkById", method = RequestMethod.GET, produces = "application/json;charset=utf-8")
	public String getRemarkById(@RequestParam(value = "nbId") Integer nbId,Model model)
	{
		Remark remark = remarkService.getRemarkById(nbId);
		model.addAttribute("remark",remark);
		return "noticeDetail";
	}
	
	@ResponseBody
	@RequestMapping(value = "getAll", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public PageInfo<Remark> getAll(@RequestParam(value = "pageNo", required = false, defaultValue = "1") Integer pageNo,Integer num)
	{
		return remarkService.getAll(pageNo,num);
	}
	
	@ResponseBody
	@RequestMapping(value = "getRemarkByDate", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public List<Remark> getRemarkByDate(@RequestParam(value = "reDate", required = true) String redateStr)
	{
		return remarkService.getRemarkByDate(redateStr);
	}
	
	@ResponseBody
	@RequestMapping(value = "editRemarkByDate", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer editRemarkByDate(Remark remark)
	{
		return remarkService.editRemarkByDate(remark);
	}
	
	
	@RequestMapping(value = "delRemarkById", method = RequestMethod.GET, produces = "application/json;charset=utf-8")
	public String delRemarkById(@RequestParam(value = "reId") Integer reId)
	{
		remarkService.delRemarkById(reId);
		return "../home";
	}
	
	
	@ResponseBody
	@RequestMapping(value = "insertRemark", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer insertRemark(Remark remark)
	{
		return remarkService.insertRemark(remark);
	}
}
