package com.jm.controller;

import java.io.File;
import java.sql.Date;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.github.pagehelper.PageInfo;
import com.jm.entity.Billboard;
import com.jm.entity.News;
import com.jm.service.BillboardService;

@Controller
@RequestMapping(value = "billboard")
public class BillboredController {

	@Lazy
	@Autowired
	private BillboardService billboardService;
	
	
	@RequestMapping(value = "getBillboardById", method = RequestMethod.GET, produces = "application/json;charset=utf-8")
	public String getBillboardById(@RequestParam(value = "bId") Integer bId,Model model)
	{
		Billboard billboard = billboardService.getBillboardById(bId);
		model.addAttribute("billboard",billboard);
		return "noticeDetail";
	}
	
	@ResponseBody
	@RequestMapping(value = "getAll", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public PageInfo<Billboard> getAll(@RequestParam(value = "pageNo", required = false, defaultValue = "1") Integer pageNo,Integer num)
	{
		return billboardService.getAll(pageNo,num);
	}
	
	@ResponseBody
	@RequestMapping(value = "getBillboardByDate", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public List<Billboard> getBillboardByDate()
	{
		return billboardService.getBillboardByDate();
	}
	
	@ResponseBody
	@RequestMapping(value = "editBillboardById", method = RequestMethod.POST,produces = "text/html;charset=utf-8")
	public String editBillboardById(Integer bId,String name,String team,Integer rank,MultipartFile photo,Date bDate,HttpServletRequest request)
	{
		Billboard billboard = new Billboard();
		try {
			//获取文件名  
			String fileName = photo.getOriginalFilename();
			//文件存入存放图片地址  
			String path = request.getSession().getServletContext().getRealPath("/images");  
//			String path = "D:\\images"; 
			File dir = new File(path);  
	        if(!dir.exists()){  
	            dir.mkdirs();  
	        }  
			//判断接收的文件为不为空  
			if (!photo.isEmpty()) {
				//获取新的文件名字  
				String newName = UUID.randomUUID() + fileName.substring(fileName.lastIndexOf("."));
				File newFile = new File(path +"/"+ newName);
				
				//将文件写入到存放的地址  
				photo.transferTo(newFile);
				billboard.setPhoto("/images/"+newName);
				
			} 
		} catch (Exception e) {
			e.printStackTrace();
		}
		billboard.setbId(bId);;
		billboard.setName(name);
		billboard.setTeam(team);
		billboard.setbDate(bDate);
		billboard.setRank(rank);
		Integer integer = billboardService.editBillboardById(billboard);
		if (integer == 1) {
			return "success";
		}
		return "fail";
	}
	
	@ResponseBody
	@RequestMapping(value = "delBillboardById", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer delBillboardById(@RequestParam(value = "bId") Integer bId)
	{
		return billboardService.delBillboardById(bId);
	}
	//, produces = "text/html;charset=utf-8"
	@ResponseBody
	@RequestMapping(value = "insertBillboard", method = RequestMethod.POST,produces = "text/html;charset=utf-8")
	public String insertBillboard(String name,String team,Integer rank,MultipartFile photo,Date bDate,HttpServletRequest request)
	{	
		Billboard billboard = new Billboard();
		String sqlPath; 
		try {
			//获取文件名  
			String fileName = photo.getOriginalFilename();
			//文件存入存放图片地址  (服务器地址)
			String path = request.getSession().getServletContext().getRealPath("/images");  
			//本地地址
//			String path = "D:\\images"; 
			File dir = new File(path);  
	        if(!dir.exists()){  
	            dir.mkdirs();  
	        }  
			//判断接收的文件为不为空  
			if (!photo.isEmpty()) {
				//获取新的文件名字  
				String newName = UUID.randomUUID() + fileName.substring(fileName.lastIndexOf("."));
				File newFile = new File(path +"/"+ newName);
				
				//将文件写入到存放的地址  
				photo.transferTo(newFile);
				billboard.setPhoto("/images/"+newName);
				
			} 
		} catch (Exception e) {
			e.printStackTrace();
		}
		billboard.setName(name);
		billboard.setTeam(team);
		billboard.setbDate(bDate);
		billboard.setRank(rank);
		Integer integer = billboardService.insertBillboard(billboard);
		if (integer == 1) {
			return "success";
		}
		return "fail";
	}
}
