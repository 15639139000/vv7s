package com.jm.controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.github.pagehelper.PageInfo;
import com.jm.entity.Company;
import com.jm.entity.Contract;
import com.jm.entity.Order;
import com.jm.entity.Visit;
import com.jm.service.CompanyService;
import com.jm.service.ContractService;
import com.jm.service.OrderService;
import com.jm.service.VisitService;
import com.jm.utils.DownLoad;
import com.jm.utils.ExcelUtils;

@Controller
@RequestMapping(value = "customer")
public class CustomerController {

	@Autowired
	private OrderService orderService;
	
	@Autowired
	private CompanyService companyService;
	
	@Autowired
	private VisitService visitService;
	
	@Autowired
	private ContractService contractService;
	
	@ResponseBody
	@RequestMapping(value = "fillCompanyData", method = RequestMethod.POST)
	public List<Company> fillCompanyData()
	{
		return companyService.getAll();
	}
	
	@ResponseBody
	@RequestMapping(value = "order/getAll", method = RequestMethod.POST)
	public PageInfo<Order> getAll(@RequestParam(value = "pageNo", required = false, defaultValue = "1") Integer pageNo)
	{
		return orderService.getAll(13, pageNo);
	}
	
	@ResponseBody
	@RequestMapping(value = "order/getAllOrderByCondition", method = RequestMethod.POST)
	public PageInfo<Order> getAllOrderByCondition(@RequestParam(value = "pageNo", required = false, defaultValue = "1") Integer pageNo,
			@RequestParam(value = "stime") String stime, @RequestParam(value = "etime") String etime,
			@RequestParam(value = "ename") String ename, @RequestParam(value = "company") String company)
	{
		return orderService.getAllOrderByCondition(13, pageNo, stime, etime, ename, company);
	}
	
	@ResponseBody
	@RequestMapping(value = "order/advancedSearch", method = RequestMethod.POST)
	public PageInfo<Order> advancedSearch(@RequestParam(value = "number") String number, @RequestParam(value = "salesman") String salesman,
			@RequestParam(value = "customer") String customer, @RequestParam(value = "agent") String agent,
			@RequestParam(value = "delivery") String delivery, @RequestParam(value = "issuance") String issuance,
			@RequestParam(value = "sales") String sales, @RequestParam(value = "information") String information,
			@RequestParam(value = "payments") String payments, @RequestParam(value = "contacts") String contacts,
			@RequestParam(value = "lavel") String lavel, @RequestParam(value = "phone") String phone,
			@RequestParam(value = "statu") String statu, @RequestParam(value = "pageNo", required = false, defaultValue = "1") Integer pageNo)
	{
		return orderService.advancedSearch(pageNo, 15, number, salesman, customer, agent, delivery, issuance, sales, information, payments, contacts, lavel, phone, statu);
	}
	
	@ResponseBody
	@RequestMapping(value = "excelImportOrder", method = RequestMethod.POST, produces = "text/html;charset=utf-8")
	public String excelImportOrder(@RequestParam(value = "file") MultipartFile[] multipartFiles) throws IOException
	{
		InputStream inputStream = null;
		try {
			for (MultipartFile multipartFile : multipartFiles) {
				if(multipartFile != null && multipartFile.getSize() > 0){
					inputStream = multipartFile.getInputStream();
					String originalFilename = multipartFile.getOriginalFilename();
					String suffix = originalFilename.substring(originalFilename.indexOf("."), originalFilename.length());
					if(suffix.equals(".xlsx") || suffix.equals(".xls")){
						List<Map<String,Object>> importExcel =  ExcelUtils.importExcel(inputStream, suffix);
						List<Order> orders = new ArrayList<Order>();
						for (Map<String, Object> maps : importExcel) {
							Order order = new Order(maps.get("0"), maps.get("1"), maps.get("2"), maps.get("3"), maps.get("4"), maps.get("5"), maps.get("6"), maps.get("7"), maps.get("8"));
							orders.add(order);	
						}
						orderService.insertBatch(orders);
					}else{
						return "no excel";
					}
				}else{
					return "excel is null";
				}
			}
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
			return "fail";
		} finally {
			if(inputStream != null){
				inputStream.close();
			}
		}
	}
	
	@RequestMapping(value = "excelExportOrder", method = RequestMethod.GET)
	public void excelExportOrder(HttpServletRequest request, HttpServletResponse response, @RequestParam(value = "fileName") String fileName)
	{
		List<Order> lists = orderService.getAll();
		FileOutputStream fileOutputStream = null;
		List<Map<String, Object>> dataLists = new ArrayList<Map<String, Object>>();
		try {
			fileName = fileName + ".xlsx";
			
			for(int i = 0; i< lists.size(); i++){
				Map<String, Object> maps = new LinkedHashMap<String, Object>();
				Order order = lists.get(i);
				maps.put("1", order.getoId());
				maps.put("2", new SimpleDateFormat("yyyy-MM-dd").format(order.getoDate()));
				maps.put("3", order.geteName());
				maps.put("4", order.getoStatu());
				maps.put("5", order.getcName());
				maps.put("6", order.getProduce());
				maps.put("7", order.getoNumber());
				maps.put("8", order.getoPrice());
				maps.put("9", order.getoRmoney());
				dataLists.add(maps);
			}
			
			DownLoad.downLoad(request, response, fileName, fileOutputStream, dataLists, "序号", "发货日期", "业务员", "销售状态", "公司名称", "产品", "称体编号", "价格", "汇款额");
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if(fileOutputStream != null){
					fileOutputStream.close();
				}
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
	}
	
	@ResponseBody
	@RequestMapping(value = "visit/getAllVisit", method = RequestMethod.POST)
	public PageInfo<Visit> getAllVisit(@RequestParam(value = "pageNo", required = false, defaultValue = "1") Integer pageNo,
			@RequestParam(value = "stime") String stime, @RequestParam(value = "etime") String etime,
			@RequestParam(value = "ename") String ename, @RequestParam(value = "company") String company)
	{
		return visitService.getAllVisit(pageNo, 13, stime, etime, ename, company);
	}
	
	@ResponseBody
	@RequestMapping(value = "visit/advancedSearch", method = RequestMethod.POST)
	public PageInfo<Visit> advancedSearch(@RequestParam(value = "customer") String customer, @RequestParam(value = "customerNature") String customerNature,
			@RequestParam(value = "indestry") String indestry, @RequestParam(value = "product1") String product1, 
			@RequestParam(value = "product2") String product2, @RequestParam(value = "visit") String visit, 
			@RequestParam(value = "returnTime") String returnTime, @RequestParam(value = "nextReturnTime") String nextReturnTime, 
			@RequestParam(value = "pageNo", required = false, defaultValue = "1") Integer pageNo)
	{
		return visitService.advancedSearch(pageNo, 15, customer, customerNature, indestry, product1, product2, visit, returnTime, nextReturnTime);
	}
	
	@ResponseBody
	@RequestMapping(value = "excelImportVisit", method = RequestMethod.POST, produces = "text/html;charset=utf-8")
	public String excelImportVisit(@RequestParam(value = "file") MultipartFile[] multipartFiles) throws IOException 
	{
		InputStream inputStream = null;
		try {
			for (MultipartFile multipartFile : multipartFiles) {
				if(multipartFile != null && multipartFile.getSize() > 0){
					inputStream = multipartFile.getInputStream();
					String originalFilename = multipartFile.getOriginalFilename();
					String suffix = originalFilename.substring(originalFilename.indexOf("."), originalFilename.length());
					if(suffix.equals(".xlsx") || suffix.equals(".xls")){
						List<Map<String,Object>> importExcel =  ExcelUtils.importExcel(inputStream, suffix);
						List<Visit> visits = new ArrayList<Visit>();
						for (Map<String, Object> maps : importExcel) {
							Visit visit = new Visit(maps.get("0"), maps.get("1"), maps.get("2"), maps.get("3"), maps.get("4"), maps.get("5"), maps.get("6"), maps.get("7"), maps.get("8"));
							visits.add(visit);
						}
						visitService.insertBatch(visits);
					}else{
						return "no excel";
					}
				}else{
					return "excel is null";
				}
			}
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
			return "fail";
		} finally {
			if(inputStream != null){
				inputStream.close();
			}
		}
	}
	
	@RequestMapping(value = "excelExportVisit", method = RequestMethod.GET)
	public void excelExportVisit(HttpServletRequest request, HttpServletResponse response, @RequestParam(value = "fileName") String fileName)
	{
		List<Visit> visits = visitService.getAllVisit();
		FileOutputStream fileOutputStream = null;
		List<Map<String, Object>> dataLists = new ArrayList<Map<String, Object>>();
		try {
			fileName = fileName + ".xlsx";
			
			for(int i = 0; i< visits.size(); i++){
				Map<String, Object> maps = new LinkedHashMap<String, Object>();
				Visit visit = visits.get(i);
				maps.put("1", visit.getId());
				maps.put("2", visit.getCustomer());
				maps.put("3", visit.getCustomerNature());
				maps.put("4", visit.getIndestry());
				maps.put("5", visit.getContacts());
				maps.put("6", visit.getLavel());
				maps.put("7", new SimpleDateFormat("yyyy-MM-dd").format(visit.getNextReturnTime()));
				maps.put("8", visit.getPerson());
				maps.put("9", visit.getInformation());
				dataLists.add(maps);
			}
			
			DownLoad.downLoad(request, response, fileName, fileOutputStream, dataLists, "序号", "客户", "客户性质", "所在行业", "联系人", "原客户等级", "下次回访时间", "负责人", "信息转接人");
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if(fileOutputStream != null){
					fileOutputStream.close();
				}
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
	}
	
	@ResponseBody
	@RequestMapping(value = "contract/getAllContract", method = RequestMethod.POST)
	public PageInfo<Contract> getAllContract(@RequestParam(value = "pageNo", required = false, defaultValue = "1") Integer pageNo,
			@RequestParam(value = "stime") String stime, @RequestParam(value = "etime") String etime,
			@RequestParam(value = "ename") String ename, @RequestParam(value = "company") String company)
	{
		return null;
	}
	
	@ResponseBody
	@RequestMapping(value = "excelImportContract", method = RequestMethod.POST, produces = "text/html;charset=utf-8")
	public String excelImportContract(@RequestParam(value = "file") MultipartFile[] multipartFiles) throws IOException 
	{
		InputStream inputStream = null;
		try {
			for (MultipartFile multipartFile : multipartFiles) {
				if(multipartFile != null && multipartFile.getSize() > 0){
					inputStream = multipartFile.getInputStream();
					String originalFilename = multipartFile.getOriginalFilename();
					String suffix = originalFilename.substring(originalFilename.indexOf("."), originalFilename.length());
					if(suffix.equals(".xlsx") || suffix.equals(".xls")){
						List<Map<String,Object>> importExcel =  ExcelUtils.importExcel(inputStream, suffix);
						List<Contract> contracts = new ArrayList<Contract>();
						for (Map<String, Object> maps : importExcel) {
							Contract contract = new Contract(maps.get("0"), maps.get("1"), maps.get("2"), maps.get("3"), maps.get("4"), maps.get("5"), maps.get("6"), maps.get("7"), maps.get("8"));
							contracts.add(contract);
						}
						contractService.insertBatch(contracts);
					}else{
						return "no excel";
					}
				}else{
					return "excel is null";
				}
			}
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
			return "fail";
		} finally {
			if(inputStream != null){
				inputStream.close();
			}
		}
	}
	
	@RequestMapping(value = "excelExportContract", method = RequestMethod.GET)
	public void excelExportContract(HttpServletRequest request, HttpServletResponse response, @RequestParam(value = "fileName") String fileName)
	{
		List<Contract> contracts = contractService.getAllContract();
		FileOutputStream fileOutputStream = null;
		List<Map<String, Object>> dataLists = new ArrayList<Map<String, Object>>();
		try {
			fileName = fileName + ".xlsx";
			
			for(int i = 0; i< contracts.size(); i++){
				Map<String, Object> maps = new LinkedHashMap<String, Object>();
				Contract contract = contracts.get(i);
				maps.put("1", contract.getId());
				maps.put("2", contract.getNumber());
				maps.put("3", contract.getCompanyName());
				maps.put("4", new SimpleDateFormat("yyyy-MM-dd").format(contract.getStartTime()));
				maps.put("5", new SimpleDateFormat("yyyy-MM-dd").format(contract.getEndTime()));
				maps.put("6", contract.getClasss());
				maps.put("7", contract.getTotalMoney());
				maps.put("8", contract.getEmployeeName());
				maps.put("9", new SimpleDateFormat("yyyy-MM-dd").format(contract.getInDate()));
				dataLists.add(maps);
			}
			
			DownLoad.downLoad(request, response, fileName, fileOutputStream, dataLists, "序号", "合同编号", "公司名称", "起始时间", "到期时间", "合同分类", "总金额", "业务员", "录入时间");
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if(fileOutputStream != null){
					fileOutputStream.close();
				}
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
	}
}
