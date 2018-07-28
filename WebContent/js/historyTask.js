$(function(){
	
	var procdefName = $("#tname").val();
	var page;
	var procdefId;
	
	setTitle();
	
	function setTitle()
	{
		$.ajax({
			url : path + '/activiti/selectProcessNameById',
			type : 'POST',
			data : {"procdefId" : procdefName},
			success : function(data){
				$("#t").text(data);
			}
		});
	}
	
	jumpPage(procdefName);
	
	function jumpPage(procdefName)
	{
		if(procdefName == "process:29:1222880"){
			page = "leave_qjsq_his.jsp";
		}else if(procdefName == "process:22:1165368"){
			page = "travel_ccsq_his.jsp";
		}else if(procdefName == "process:23:1172504"){
			page = "overtime_jbsq_his.jsp";
		}else if(procdefName == "process:8:1125010"){
			page = "car_ycsq_his.jsp";
		}else if(procdefName == "process:9:1142509"){
			page = "card_mpyssq_his.jsp";
		}else if(procdefName == "process:11:1145235"){
			page = "assets_gdzc_his.jsp";
		}else if(procdefName == "process:21:1162534"){
			page = "office_bgypsq_his.jsp";
		}else if(procdefName == "process:20:1162530"){
			page = "excess_cebt_his.jsp";
		}else if(procdefName == "process:24:1177641"){
			page = "recruit_zpsq_his.jsp";
		}else if(procdefName == "process:17:1157656"){
			page = "gift_lpsq_his.jsp";
		}else if(procdefName == "process:18:1162509"){
			page = "quit_lzsq_his.jsp";
		}else if(procdefName == "process:27:1192509"){
			page = "chapter_yzsq_his.jsp";
		}else if(procdefName == "process:10:1145228"){
			page = "printing_yspsq_his.jsp";
		}else if(procdefName == "process:25:1185005"){
			page = "correction_ygzz_his.jsp";
		}else if(procdefName == "process:26:1190082"){
			page = "changeOfPersonal_rsyd_his.jsp";
		}else if(procdefName == "process:12:1147949"){
			page = "margin_tbbzj_his.jsp";
		}else if(procdefName == "process:28:1195328"){
			page = "special_tsfh_his.jsp";
		}else if(procdefName == "process:15:1152523"){
			page = "business_ywzd_his.jsp";
		}else if(procdefName == "process:4:1105228"){
			page = "lendMoney_jksq_his.jsp";
		}else if(procdefName == "process:1:1090009"){
			page = "payment_fkgl_his.jsp";
		}else if(procdefName == "process:3:1102651"){
			page = "invoice_fpgl_his.jsp";
		}else if(procdefName == "process:6:1107756"){
			page = "account_khgl_his.jsp";
		}else if(procdefName == "process:16:1155169"){
			page = "informationFee_xxfgl_his.jsp";
		}else if(procdefName == "process:7:1110088"){
			page = "reimbursement_bxsq_his.jsp";
		}if(procdefName == "process:2:1097504"){
			page = "tecReview_his.jsp";
		}
	}
	
	$("#dw").click(function(){
		var temp_page = jumpPage2(procdefName);
		window.location.href = path + "/views/" + temp_page;
	});
	
	$("#fqsq").click(function(){
		var temp_page = jumpPage2(procdefName);
		window.location.href = path + "/views/" + temp_page + "?flag=fqsq";
	});
	
	function jumpPage2(procdefName)
	{
		var temp_page;
		if(procdefName == "process:29:1222880"){
			temp_page = "leave.jsp";
		}else if(procdefName == "process:22:1165368"){
			temp_page = "travel.jsp";
		}else if(procdefName == "process:23:1172504"){
			temp_page = "overtime.jsp";
		}else if(procdefName == "process:8:1125010"){
			temp_page = "car.jsp";
		}else if(procdefName == "process:9:1142509"){
			temp_page = "card.jsp";
		}else if(procdefName == "process:11:1145235"){
			temp_page = "assets.jsp";
		}else if(procdefName == "process:21:1162534"){
			temp_page = "office.jsp";
		}else if(procdefName == "process:20:1162530"){
			temp_page = "excess.jsp";
		}else if(procdefName == "process:24:1177641"){
			temp_page = "recruit.jsp";
		}else if(procdefName == "process:17:1157656"){
			temp_page = "gift.jsp";
		}else if(procdefName == "process:18:1162509"){
			temp_page = "quit.jsp";
		}else if(procdefName == "process:27:1192509"){
			temp_page = "chapter.jsp";
		}else if(procdefName == "process:10:1145228"){
			temp_page = "printing.jsp";
		}else if(procdefName == "process:25:1185005"){
			temp_page = "correction.jsp";
		}else if(procdefName == "process:26:1190082"){
			temp_page = "changeOfPersonal.jsp";
		}else if(procdefName == "process:12:1147949"){
			temp_page = "margin.jsp";
		}else if(procdefName == "process:28:1195328"){
			temp_page = "special.jsp";
		}else if(procdefName == "process:15:1152523"){
			temp_page = "business.jsp";
		}else if(procdefName == "process:4:1105228"){
			temp_page = "lendMoney.jsp";
		}else if(procdefName == "process:1:1090009"){
			temp_page = "payment.jsp";
		}else if(procdefName == "process:3:1102651"){
			temp_page = "invoice.jsp";
		}else if(procdefName == "process:6:1107756"){
			temp_page = "account.jsp";
		}else if(procdefName == "process:16:1155169"){
			temp_page = "informationFee.jsp";
		}else if(procdefName == "process:7:1110088"){
			temp_page = "reimbursement.jsp";
		}else if(procdefName == "process:2:1097504"){
			temp_page = "tecReview.jsp";
		}
		return temp_page;
	}
	
	getProdefIdByName(procdefName);
	
	function getProdefIdByName(procdefName)
	{
		$.ajax({
			url : path + '/activiti/getProdefIdByName',
			type : 'POST',
			data : {"name" : procdefName},
			success : function(data){
				procdefId = procdefName;
				getAllHistoryTask(1, procdefId);
			}
		});
	}
	
	function getAllHistoryTask(pageNo, processId)
	{
		$.ajax({
			url : path + '/activiti/hisTask',
			type : 'POST',
			data : {"processId" : processId, "pageNo" : pageNo},
			success : function(data){
				if(data.list.length == 0){
					$("#home tbody").empty();
					var tr = $("<tr></tr>").append($("<td  colspan='12'></td>").append("<h4>暂时没有模型数据</h4>").css("text-align","center"));
					$("#home tbody").append(tr);
				}else{
					build_hisTask_table(data);
					build_hisTask_pageInfo(data);
					build_hisTask_pagenav(data);
				}
			}
		});
	}

	//构建表格
	function build_hisTask_table(result)
	{
		$("#home tbody").empty();
		var processs = result.list;
		$.each(processs, function(index, item){
			var id = $("<td></td>").append(item.id);
			var name = $("<td></td>").append(item.name);
			var applicant = $("<td style='display:none;'></td>").append(item.hisVariable.applicant);
			var assignee = $("<td style='display:none;'></td>").append(item.assignee);
			var startTime = $("<td style='display:none;'></td>").append(item.startTime);
			var endTime = $("<td style='display:none;'></td>").append(item.endTime);
			var message;
			var values;
			if(item.hisVariable.message == "驳回"){
				message = $("<td></td>").append(item.hisVariable.message);
				values = "撤销&nbsp;&nbsp;&nbsp;&nbsp;";
			}else if(item.hisVariable.message == "完成"){
				message = $("<td></td>").append(item.hisVariable.message);
				values = "撤销&nbsp;&nbsp;&nbsp;&nbsp;";
			}else if(item.hisVariable.message == "通过"){
				message = $("<td></td>").append("审批中");
				values = "";
			}else{
				message = $("<td></td>").append("未提交");
				values = "撤销&nbsp;&nbsp;&nbsp;&nbsp;";
			}
			var applyCompany = $("<td></td>").append(item.hisVariable.applyCompany);
			var applyDept = $("<td></td>").append(item.hisVariable.applyDept);
			var apply = $("<td></td>").append(item.hisVariable.applyTime);
			var applyManager = $("<td style='display:none;'></td>").append(item.hisVariable.applyManager);
			
			var inLineOptions1 = $("<td></td>").append(item.hisVariable.inLineOptions1);
			var inLineOptions2 = $("<td style='display:none;'></td>").append(item.hisVariable.inLineOptions2);
			var inLineOptions3 = $("<td style='display:none;'></td>").append(item.hisVariable.inLineOptions3);
			var inLineOptions4 = $("<td style='display:none;'></td>").append(item.hisVariable.inLineOptions4);
			
			var reserve1 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve1); 
			var reserve2 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve2); 
			var reserve3 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve3); 
			var reserve4 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve4); 
			var reserve5 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve5); 
			var reserve6 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve6); 
			var reserve7 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve7); 
			var reserve8 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve8); 
			var reserve9 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve9); 
			var reserve10 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve10); 
			var reserve11 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve11); 
			var reserve12 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve12); 
			var reserve13 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve13); 
			var reserve14 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve14); 
			var reserve15 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve15); 
			var reserve16 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve16); 
			var reserve17 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve17); 
			var reserve18 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve18); 
			var reserve19 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve19); 
			var reserve20 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve20); 
			var reserve21 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve21); 
			var reserve22 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve22); 
			var reserve23 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve23); 
			var reserve24 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve24); 
			var reserve25 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve25); 
			var reserve26 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve26); 
			var reserve27 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve27); 
			var reserve28 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve28); 
			var reserve29 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve29); 
			var reserve30 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve30); 
			var reserve31 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve31); 
			var reserve32 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve32); 
			var reserve33 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve33); 
			var reserve34 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve34); 
			var reserve35 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve35); 
			var reserve36 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve36); 
			var reserve37 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve37); 
			var reserve38 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve38); 
			var reserve39 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve39); 
			var reserve40 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve40); 
			var reserve41 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve41); 
			var reserve42 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve42); 
			var reserve43 = $("<td style='display:none;'></td>").append(item.hisVariable.reserve43);
			
			var tableData1 = $("<td style='display:none;'></td>").append(item.hisVariable.tableData1);
			var tableData2 = $("<td style='display:none;'></td>").append(item.hisVariable.tableData2);
			var tableData3 = $("<td style='display:none;'></td>").append(item.hisVariable.tableData3);
			var tableData4 = $("<td style='display:none;'></td>").append(item.hisVariable.tableData4);

			var opinions = $("<td style='display:none;'></td>").append(item.hisVariable.opinions);
			var processInstanceId = $("<td style='display:none;'></td>").append(item.processInstanceId);
			var nextPerson = $("<td style='display:none;'></td>").append(item.hisVariable.nextPerson);
			var condition = $("<td style='display:none;'></td>").append(item.hisVariable.condition);
			
			var btndel = $("<a></a>").attr("href","javascript:void(0)").css("color","#317EEB").append(values);
			var btn = $("<td></td>").append(btndel);

			$("<tr></tr>").append(id).append(name).append(applicant).append(assignee).append(startTime).append(endTime)
			.append(applyCompany).append(applyDept).append(apply).append(applyManager)
			.append(inLineOptions1).append(inLineOptions2).append(inLineOptions3).append(inLineOptions4).append(message)
			.append(reserve1).append(reserve2).append(reserve3).append(reserve4).append(reserve5)
			.append(reserve6).append(reserve7).append(reserve8).append(reserve9).append(reserve10)
			.append(reserve11).append(reserve12).append(reserve13).append(reserve14).append(reserve15)
			.append(tableData1).append(tableData2).append(tableData3).append(tableData4)
			.append(opinions).append(processInstanceId).append(nextPerson).append(btn)
			.append(reserve16).append(reserve17).append(reserve18).append(reserve19).append(reserve20).append(reserve21).append(reserve22).append(reserve23)
			.append(reserve24).append(reserve25).append(reserve26).append(reserve27).append(reserve28).append(reserve29).append(reserve30).append(reserve31)
			.append(reserve32).append(reserve33).append(reserve34).append(reserve35).append(reserve36).append(reserve37).append(reserve38).append(reserve39)
			.append(reserve40).append(reserve41).append(reserve42).append(reserve43).append(condition)
			.appendTo("#home tbody");
		});
	}
	
	var currentPageNo;
	
	//构建分页信息
	function build_hisTask_pageInfo(result)
	{
		$("#pageInfo").empty();
		$("#pageInfo").append("当前第" + result.pageNum + "页,总共" + result.pages + "页,总共" + result.total + "记录");
		currentPageNo = result.pageNum;
	}
	
	//构建分页条
	function build_hisTask_pagenav(result)
	{
		$("#pageNav").empty();
		var ul = $("<ul></ul>").addClass("pagination fy");
		var firstLi=$("<li></li>").append($("<a></a>").append("首页").attr("href","javascript:void(0)"));
		var preLi=$("<li></li>").append($("<a></a>").append("&laquo;").attr("href","javascript:void(0)"));
		ul.append(firstLi).append(preLi);
		if(result.pageNum == 1){
			firstLi.addClass("disabled");
			preLi.addClass("disabled");
		}else{
			firstLi.click(function(){
				getAllHistoryTask(1, procdefId);
			});
			preLi.click(function(){
				getAllHistoryTask(result.pageNum - 1, procdefId);
			});
		}
		var nextLi=$("<li></li>").append($("<a></a>").append("&raquo;").attr("href","javascript:void(0)"));
		var lastLi=$("<li></li>").append($("<a></a>").append("末页").attr("href","javascript:void(0)"));
		if(result.pageNum == result.pages){
			nextLi.addClass("disabled");
			lastLi.addClass("disabled");
		}else{
			nextLi.click(function(){
				getAllHistoryTask(result.pageNum + 1, procdefId);
			});
			lastLi.click(function(){
				getAllHistoryTask(result.pages, procdefId);
			});
		}
		$.each(result.pageNums,function(index,item){
			var numLi=$("<li></li>").append($("<a></a>").append(item).attr("href","javascript:void(0)"));
			if(result.pageNum==item)
			{
				numLi.addClass("active");
			}
			numLi.click(function(){
				getAllHistoryTask(item, procdefId);
			});
			ul.append(numLi);
		});
		ul.append(nextLi).append(lastLi);
		$("<nav></nav>").attr("aria-label","Page navigation").append(ul).appendTo("#pageNav");
	}
	
	$(document).on('click','#home td a',function(){
		getData($(this).parent().parent())
		var hisTaskId = $(this).parent().parent().find("td:eq(0)").text();
		$.ajax({
			url : path + '/activiti/deleteHisTask',
			type : 'POST',
			data :{"hisTaskId" : hisTaskId, "message" : message},
			success : function(data){
				getAllHistoryTask(currentPageNo, procdefId);
			}
		});
		
		return false;
	})
	
	$(document).on('click','#home tr',function(){
		if($(this).find("td:eq(0)").text() == "暂时没有模型数据"){
			return;
		}
		getData(this);
		sendData(page);
	})
	
	/*****************************************************************************************************************/		
	var id, name, applicant, assignee, startTime, endTime, message;
	var applyCompany, applyDept, apply, applyManager;
	var inLineOptions1, inLineOptions2, inLineOptions3, inLineOptions4;
	var reserve1, reserve2, reserve3, reserve4, reserve5, reserve6, reserve7;
	var reserve8, reserve9, reserve10, reserve11, reserve12, reserve13, reserve14, reserve15;
	var reserve16, reserve17, reserve18, reserve19, reserve12, reserve20, reserve21, reserve22;
	var reserve23, reserve24, reserve25, reserve26, reserve27, reserve28, reserve29, reserve30;
	var reserve31, reserve32, reserve33, reserve34, reserve35, reserve36, reserve37, reserve38,
	reserve39,reserve40,reserve41,reserve42,reserve43;
	var tableData1, tableData2, tableData3, tableData4, opinions, condition;
	var processInstanceId, nextPerson;
	
	function getData(object)
	{
		id = $(object).find("td:eq(0)").text();
		name = $(object).find("td:eq(1)").text();
		applicant = $(object).find("td:eq(2)").text();
		assignee = $(object).find("td:eq(3)").text();
		startTime = $(object).find("td:eq(4)").text();
		endTime = $(object).find("td:eq(5)").text();
		applyCompany = $(object).find("td:eq(6)").text();
		
		applyDept = $(object).find("td:eq(7)").text();
		apply = $(object).find("td:eq(8)").text();
		applyManager = $(object).find("td:eq(9)").text();
		message = $(object).find("td:eq(14)").text();
		
		inLineOptions1 = $(object).find("td:eq(10)").text();
		inLineOptions2 = $(object).find("td:eq(11)").text();
		inLineOptions3 = $(object).find("td:eq(12)").text();
		inLineOptions4 = $(object).find("td:eq(13)").text();
		
		reserve1 = $(object).find("td:eq(15)").text();
		reserve2 = $(object).find("td:eq(16)").text();
		reserve3 = $(object).find("td:eq(17)").text(); 
		reserve4 = $(object).find("td:eq(18)").text();
		reserve5 = $(object).find("td:eq(19)").text();
		reserve6 = $(object).find("td:eq(20)").text(); 
		reserve7 = $(object).find("td:eq(21)").text();
		reserve8 = $(object).find("td:eq(22)").text();
		reserve9 = $(object).find("td:eq(23)").text(); 
		reserve10 = $(object).find("td:eq(24)").text(); 
		reserve11 = $(object).find("td:eq(25)").text();
		reserve12 = $(object).find("td:eq(26)").text();
		reserve13 = $(object).find("td:eq(27)").text(); 
		reserve14 = $(object).find("td:eq(28)").text(); 
		reserve15 = $(object).find("td:eq(29)").text(); 
	
		tableData1 = $(object).find("td:eq(30)").text();
		tableData2 = $(object).find("td:eq(31)").text();
		tableData3 = $(object).find("td:eq(32)").text();
		tableData4 = $(object).find("td:eq(33)").text();
		
		opinions = $(object).find("td:eq(34)").text();
		processInstanceId = $(object).find("td:eq(35)").text();
		nextPerson = $(object).find("td:eq(36)").text();
		
		reserve16 = $(object).find("td:eq(38)").text(); 
		reserve17 = $(object).find("td:eq(39)").text(); 
		reserve18 = $(object).find("td:eq(40)").text(); 
		reserve19 = $(object).find("td:eq(41)").text(); 
		reserve20 = $(object).find("td:eq(42)").text(); 
		reserve21 = $(object).find("td:eq(43)").text(); 
		reserve22 = $(object).find("td:eq(44)").text(); 
		reserve23 = $(object).find("td:eq(45)").text(); 
		reserve24 = $(object).find("td:eq(46)").text(); 
		reserve25 = $(object).find("td:eq(47)").text(); 
		reserve26 = $(object).find("td:eq(48)").text(); 
		reserve27 = $(object).find("td:eq(49)").text(); 
		reserve28 = $(object).find("td:eq(50)").text(); 
		reserve29 = $(object).find("td:eq(51)").text(); 
		reserve30 = $(object).find("td:eq(52)").text(); 
		reserve31 = $(object).find("td:eq(53)").text(); 
		reserve32 = $(object).find("td:eq(54)").text(); 
		reserve33 = $(object).find("td:eq(55)").text(); 
		reserve34 = $(object).find("td:eq(56)").text(); 
		reserve35 = $(object).find("td:eq(57)").text(); 
		reserve36 = $(object).find("td:eq(58)").text(); 
		reserve37 = $(object).find("td:eq(59)").text(); 
		reserve38 = $(object).find("td:eq(60)").text(); 
		reserve39 = $(object).find("td:eq(61)").text(); 
		reserve40 = $(object).find("td:eq(62)").text(); 
		reserve41 = $(object).find("td:eq(63)").text(); 
		reserve42 = $(object).find("td:eq(64)").text(); 
		reserve43 = $(object).find("td:eq(65)").text(); 
		condition  = $(object).find("td:eq(66)").text(); 
	}
	
	function sendData(page)
	{
		$.ajax({
			url : path + '/activiti/sendHistoryAllData',
			type : 'POST',
			data : {
				"id" : id, 
				"name" : name, 
				"applicant" : applicant, 
				"assignee" : assignee, 
//				"startTime" : startTime, 
//				"endTime" : endTime, 
				"message" : message, 
				"applyCompany" : applyCompany, "applyDept" : applyDept, "apply" : apply, "applyManager" : applyManager,
				"inLineOptions1" : inLineOptions1, "inLineOptions2" : inLineOptions2, "inLineOptions3" : inLineOptions3, "inLineOptions4" : inLineOptions4, 
				"tableData1" : tableData1, "tableData2" : tableData2, "tableData3" : tableData3, "tableData4" : tableData4, "opinions" : opinions,
				"reserve1" : reserve1, "reserve2" : reserve2, "reserve3" : reserve3, "reserve4" : reserve4, "reserve5" : reserve5, 
				"reserve6" : reserve6, "reserve7" : reserve7, "reserve8" : reserve8, "reserve9" : reserve9, "reserve10" : reserve10,
				"reserve11" : reserve11, "reserve12" : reserve12, "reserve13" : reserve13, "reserve14" : reserve14, "reserve15" : reserve15,
				"reserve16" : reserve16, "reserve17" : reserve17, "reserve18" : reserve18, "reserve19" : reserve19, "reserve20" : reserve20,
				"reserve21" : reserve21, "reserve22" : reserve22, "reserve23" : reserve23, "reserve24" : reserve24, "reserve25" : reserve25,
				"reserve26" : reserve26, "reserve27" : reserve27, "reserve28" : reserve28, "reserve29" : reserve29, "reserve30" : reserve30,
				"reserve31" : reserve31, "reserve32" : reserve32, "reserve33" : reserve33, "reserve34" : reserve34, "reserve35" : reserve35,
				"reserve36" : reserve36, "reserve37" : reserve37, "reserve38" : reserve38, "reserve39" : reserve39, "reserve40" : reserve40,
				"reserve41" : reserve41,"reserve42" : reserve42, "reserve43" : reserve43, "condition" : condition,
				"processInstanceId" : processInstanceId, "nextPerson" : nextPerson, "name" : procdefName, "procdefId" : procdefId
			},
			success : function(data){
				if(data == "success"){
					//window.location.href = path + "/views/" + page;
					window.open(path + "/views/" + page);	
				}
			}
		});
	}
	/*****************************************************************************************************************/	
	
	
	$(".vertical-nav a[href='/JMOA/javascrip:void(0)']").attr("data-toggle","modal").attr("data-target","#myModal");
	
	$("#ok").click(function(){
		var name = $("#name").val()
		var key = $("#key").val()
		var desc = $("#desc").val()
		$.ajax({
			url : path + '/activiti/create',
			type : 'POST',
			data : {"name":name, "key":key, "description":desc},
			success : function(data){
				if(data != "false"){
					window.location.href = path + "/modeler.html?modelId=" + data;
				}
			}
		});
		$(this).attr("data-dismiss", "modal");
	});
	
	function deleteOperation(taskId) //删除超链接
	{
		$.ajax({
			url : path + '/activiti/deleteTask',
			type : 'POST',
			data : {"taskId" : taskId},
			success : function(data){
				if(data == "success"){
					 window.location.reload();
				}
			}
		});
	}
	
	$("#search").click(function(){
		var stime = $("#stime").val();
		var etime = $("#etime").val();
		if(stime == "开始时间..." && etime == "结束时间..."){
			getAllHistoryTask(1, procdefId);
		}else if(stime == "开始时间..."){
			alert("请选择开始时间...")
		}else if(etime == "结束时间..."){
			alert("请选择结束时间...")
		}else{
			var date1 = new Date(stime);
			var date2 = new Date(etime);
			var curVal = (Date.parse(date2) - Date.parse(date1)) / 1000 / 60 / 60 / 24;
			if(curVal<0){
				alert("开始时间不能大于结束时间...");
			}else{
				getAllHistoryTaskByCondition(1, procdefId, stime, etime);
			}
		}
	});
	
	function getAllHistoryTaskByCondition(pageNo, processId, stime, etime)
	{
		$.ajax({
			url : path + '/activiti/hisTaskByCondition',
			type : 'POST',
			data : {"processId" : processId, "pageNo" : pageNo, "stime" : stime, "etime" : etime},
			success : function(data){
				if(data.list.length == 0){
					$("#home tbody").empty();
					var tr = $("<tr></tr>").append($("<td  colspan='12'></td>").append("<h4>暂时没有模型数据</h4>").css("text-align","center"));
					$("#home tbody").append(tr);
				}else{
					build_hisTask_table(data);
					build_hisTask_pageInfo(data);
					build_hisTask_pagenav(data);
				}
			}
		});
	}
});