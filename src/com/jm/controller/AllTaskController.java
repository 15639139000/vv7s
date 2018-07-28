package com.jm.controller;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jm.entity.Deployment;
import com.jm.entity.HistoryModel;
import com.jm.entity.Jurisdiction;
import com.jm.entity.PageModel;
import com.jm.service.AllTaskService;

@RequestMapping(value = "allTask")
@Controller
public class AllTaskController {
	
	@Autowired
	private AllTaskService allTaskService;
	


            /**
             * 查询所有任务并分页
             * @param page
             * @return
             */
			@ResponseBody
			@RequestMapping(value="/queryAll")
			public PageModel<HistoryModel> query2(@RequestParam(name="page",required = true, defaultValue = "1") Integer page,String company){
				PageModel<HistoryModel> list = allTaskService.queryAl(page,company);
				if( list != null){
					return  list;
				}else{
					return null;
				}
			}
			/**
			 * 左侧父级菜单过滤
			 * @param page
			 * @param company
			 * @param parentNameStr
			 * @return
			 */
			@ResponseBody
			@RequestMapping(value="/queryByMenu")
			public PageModel<HistoryModel> query2(@RequestParam(name="page",required = true, defaultValue = "1") Integer page,String company,String parentNameStr){
				List<String> list = new ArrayList<>();
				if(parentNameStr!=null){
					String[] split = parentNameStr.split(",");
					for (String string : split) {
						list.add(string);
					}
				}else{
					list.add("办公管理");
					list.add("财务管理");
				}
				PageModel<HistoryModel> lists = allTaskService.queryAl(page, company, list);
				if( lists != null){
					return  lists;
				}else{
					return null;
				}
			}

			@ResponseBody
			@RequestMapping(value="/getDep")
			public List<Jurisdiction> GetHb(String parentNameStr){
				List<String> list = new ArrayList<>();
				if(parentNameStr!=null){
					String[] split = parentNameStr.split(",");
					for (String string : split) {
						list.add(string);
					}
				}else{
					list.add("办公管理");
					list.add("财务管理");
				}
				List<Jurisdiction> ld = allTaskService.queryMenu(list);
				return ld;
			}

			/**
			 * 按条件查询任务并分页
			 * @param page
			 * @param startTime
			 * @param endTime
			 * @param eName
			 * @param forCla
			 * @param state
			 * @param model
			 * @return
			 * @throws ParseException 
			 */
			
			@ResponseBody
			@RequestMapping(value="/Search")
			public PageModel<HistoryModel> query(@RequestParam(name="page",required = true, defaultValue = "1") Integer page,String startTime,String startTime1,String eName,String forCla,String message,Model model,String company) throws ParseException{
				PageModel<HistoryModel> list = allTaskService.queryAl(page, startTime, startTime1, eName, forCla, message,company);
				if( list != null){
					return  list;
				}else{
					return null;
				}
			}
			
			
			/**
			 * 查询出所有流程定义的名称并跳转页面
			 * @return
			 */
			@RequestMapping(value="/GetJtzs")
			public String GetJtzs(Model model){
				List<Deployment> ld = allTaskService.getDeployment();
				List<?> message = allTaskService.getMessage();
				model.addAttribute("ld", ld);
				model.addAttribute("message", message);
				return "/bgsq/Jtzs";
			}
			@RequestMapping(value="/GetHq")
			public String GetHq(Model model){
				List<Deployment> ld = allTaskService.getDeployment();
				List<?> message = allTaskService.getMessage();
				model.addAttribute("ld", ld);
				model.addAttribute("message", message);
				return "/bgsq/Hq";
			}
			@RequestMapping(value="/GetYl")
			public String GetYl(Model model){
				List<Deployment> ld = allTaskService.getDeployment();
				List<?> message = allTaskService.getMessage();
				model.addAttribute("ld", ld);
				model.addAttribute("message", message);
				return "/bgsq/Yl";
			}
			@RequestMapping(value="/GetHb")
			public String GetHb(Model model){
				List<Deployment> ld = allTaskService.getDeployment();
				List<?> message = allTaskService.getMessage();
				model.addAttribute("ld", ld);
				model.addAttribute("message", message);
				return "/bgsq/Hb";
			}
			
			
}
