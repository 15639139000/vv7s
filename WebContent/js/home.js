$(function(){
	
	build_home();
	
	$(document).ready(function(){  
	    //定时弹出  
		//获取cookie字符串
		var strCookie=document.cookie;
		//将多cookie切割为多个名/值对
		var arrCookie=strCookie.split("; ");
		var isRemind;
		//遍历cookie数组，处理每个cookie对
		for(var i=0;i<arrCookie.length;i++){
             var arr=arrCookie[i].split("=");
             //找到名称为isRemind的cookie，并返回它的值
             if("isRemind"==arr[0]){
            	 isRemind=arr[1];
                 break;
             }
		}
		if(!isRemind){
			timingRemind(); 
		}
	    
	});  
		//定时提醒  
		var timeout = false;
		function timingRemind(){
			if(timeout){
				return;
			}
			if("9" == new Date().getHours()){
				remind();  
			}else if(new Date().getHours()>9){
				timeout = true
				return;
			}
				timer = setTimeout(function(){
		    	timingRemind(); 
		    },1000*60*10);
		}  
		//提醒  
		function remind(){
				var exp = new Date();
				exp.setTime(exp.getTime() + 1000*60*60);//过期时间
				document.cookie = "isRemind=true;expires="+exp.toGMTString();
				timeout = true;
	    		var reContent = "";
	    		var now = new Date();
	    		var nowDate = now.getFullYear()+"-"+((now.getMonth()+1)<10?"0":"")+
	    		(now.getMonth()+1)+"-"+(now.getDate()<10?"0":"")+now.getDate();
				$.ajax({
					url : path + '/remark/getRemarkByDate',
					type : 'POST',
					data : {"reDate" : nowDate},
					success : function(data){
						if("" !=data&&null!=data){
							$.each(data, function(index, item){
								reContent = reContent + item.reContent;
							});
							alert("今日备忘提醒："+reContent);
						}
					}
				});
			
		}  
		
	//获取龙虎榜
	getBillboard(1);
	//获取通知
	getAllData(1,path + '/noticeBulletin/getAll',"#tzgg ",'/noticeBulletin/getNoticeBulletinById?nbId=');
	
	$("#tzggTab").click(function(){
		getAllData(1,path + '/noticeBulletin/getAll',"#tzgg ",'/noticeBulletin/getNoticeBulletinById?nbId=');
	});
	$("#gszdTab").click(function(){
		getAllData(1,path + '/companyRules/getAll',"#gszd ",'/companyRules/getCompanyRulesById?crId=');
	});
	$("#zhxwTab").click(function(){
		getAllData(1,path + '/news/getAll',"#zhxw ",'/news/getNewsById?newsId=');
	});
	$("#ygfcTab").click(function(){
		getAllData(1,path + '/employeeStyle/getAll',"#ygfc ",'/employeeStyle/getEmployeeStyleById?esId=');
	});
	//封装方法 获取首页切换不同页签时的数据
	function getAllData(pageNo,url,signTab,surl)
	{
		$.ajax({
			url : url,
			type : 'POST',
//			async: false,
			data : {"pageNo" : pageNo,"num" : 7},
			success : function(data){
				$(signTab+"table tbody").empty();
				if(data.list.length == 0){
					var tr = $("<tr></tr>").append($("<td  colspan='8'></td>").append("<h4>暂时没有数据</h4>").css("text-align","center"));
					$(signTab+"table tbody").append(tr);
				}else{
					build_table(data,signTab);
					$('.tzTab').click(function(){
						$(this).parent().find('tr').removeClass('trSelected');
						$(this).addClass('trSelected'); 
						var id = $(".trSelected").find("td:eq(0)").text();
						$(this).parent().find('tr').removeClass('trSelected');
						var href = path+surl+id;
						window.open(href);
					});
					var tab = signTab+"#pageNav";
					$(tab).empty();
					if(data.total > 7){
						build_pagenav(data,signTab,pageNo,url,surl);
					}
					var num = data.pageNum;
					var nums = data.navigatepageNums.length;
					pageInfo(num, nums);
				}
			}
		});
		
	}
	
	function getBillboard(pageNo){
		$.ajax({
			url : path + '/billboard/getAll',
			type : 'POST',
			data : {"pageNo" : pageNo,"num" : 7},
			success : function(data){
				build_Billboard(data);
			}
		});
	}
	//龙虎榜显示
	function build_Billboard(result){
		var billboards = result.list;
		$.each(billboards, function(index, billboard){
			if (billboard.rank == 1) {
				$("#inbox-item1 .inbox-item-author").html(billboard.name);
				$("#inbox-item1 .inbox-item-img .img-circle").attr("src",path+billboard.photo);
				$("#inbox-item1 .inbox-item-date").html(billboard.bDate);
			}else if (billboard.rank == 2) {
				$("#inbox-item2 .inbox-item-author").html(billboard.name);
				$("#inbox-item2 .inbox-item-img .img-circle").attr("src",path+billboard.photo);
				$("#inbox-item2 .inbox-item-date").html(billboard.bDate);
			}else if (billboard.rank == 3) {
				$("#inbox-item3 .inbox-item-author").html(billboard.name);
				$("#inbox-item3 .inbox-item-img .img-circle").attr("src",path+billboard.photo);
				$("#inbox-item3 .inbox-item-date").html(billboard.bDate);
			}
		})
	}
	//构建表格
	function build_table(result,signTab)
	{
		var noticeObject = result.list;
		$.each(noticeObject, function(index, item){
			if(signTab == "#tzgg "){
				var id = $("<td></td>").append(item.nbId).css("display","none");
				var title = $("<td></td>").append(icon).append(item.nbTitle);
				var content = $("<td></td>").append(item.nbContent).css("display","none");
				var date = $("<td></td>").append(item.nbDate);
			}else if(signTab == "#gszd "){
				var id = $("<td></td>").append(item.crId).css("display","none");
				var title = $("<td></td>").append(icon).append(item.crTitle);
				var content = $("<td></td>").append(item.crContent).css("display","none");
				var date = $("<td></td>").append(item.crDate);
			}else if(signTab == "#zhxw "){
				var id = $("<td></td>").append(item.newsId).css("display","none");
				var title = $("<td></td>").append(icon).append(item.newsTitle);
				var content = $("<td></td>").append(item.newsContent).css("display","none");
				var date = $("<td></td>").append(item.newsDate);
			}else if(signTab == "#ygfc "){
				var id = $("<td></td>").append(item.esId).css("display","none");
				var title = $("<td></td>").append(icon).append(item.esTitle);
				var content = $("<td></td>").append(item.esContent).css("display","none");
				var date = $("<td></td>").append(item.esDate);
			}
			var icon = $("<span></span>").addClass("icon-double-angle-right");
			var dept = $("<td></td>").append(item.dept.dName);
			var emp = $("<td></td>").append(item.employee.eName);
			$("<tr class='tzTab'></tr>").append(id).append(title).append(dept).append(emp).append(date).appendTo(signTab+"table tbody");
			
		});
	}
	
	//构建分页条
	function build_pagenav(result,signTab,pageNo,url,surl)
	{
		var ul = $("<ul></ul>").addClass("pagination fy");
		var firstLi=$("<li></li>").append($("<a></a>").append("首页").attr("href","javascript:void(0)"));
		var preLi=$("<li></li>").append($("<a></a>").append("&laquo;").attr("href","javascript:void(0)"));
		ul.append(firstLi).append(preLi);
		if(result.hasPreviousPage==false)
		{
			firstLi.addClass("disabled");
			preLi.addClass("disabled");
		}
		else
		{
			firstLi.click(function(){
				getAllData(1,url,signTab,surl);
			});
			preLi.click(function(){
				getAllData(result.pageNum - 1,url,signTab,surl);
			});
		}
		var nextLi=$("<li></li>").append($("<a></a>").append("&raquo;").attr("href","javascript:void(0)"));
		var lastLi=$("<li></li>").append($("<a></a>").append("末页").attr("href","javascript:void(0)"));
		if(result.hasNextPage==false)
		{
			nextLi.addClass("disabled");
			lastLi.addClass("disabled");
		}
		else
		{
			nextLi.click(function(){
				getAllData(result.pageNum + 1,url,signTab,surl);
			});
			lastLi.click(function(){
				getAllData(result.pages,url,signTab,surl);
			});
		}
		$.each(result.navigatepageNums,function(index,item){
			var numLi=$("<li></li>").append($("<a></a>").append(item).attr("href","javascript:void(0)"));
			if(result.pageNum==item)
			{
				numLi.addClass("active");
			}
			numLi.click(function(){
				getAllData(item,url,signTab,surl);
			});
			if(result.navigatepageNums.length > 10){
				if(index > 10){
					$(numLi).css("display","none");
				}
			}
			ul.append(numLi);
		});
		ul.append(nextLi).append(lastLi);
		$("<nav></nav>").attr("aria-label","Page navigation").append(ul).appendTo(signTab+"#pageNav");
	}
	
	
	
	function pageInfo(num, nums)
	{
		var size = $("#pageNav nav ul").find("li").size();
		$("#pageNav nav ul").find("li").css("display","none");
		$("#pageNav nav ul").find("li:eq(0)").css("display","inline");
		$("#pageNav nav ul").find("li:eq(1)").css("display","inline");
		$("#pageNav nav ul").find("li:eq(" + (size-1) + ")").css("display","inline");
		$("#pageNav nav ul").find("li:eq(" + (size-2) + ")").css("display","inline");
		if( num <= 6){
			$("#pageNav nav ul").find("li:lt("+13+")").css("display","inline");
		}else if(num > 6 && num <= 44){
			$("#pageNav nav ul").find("li:gt("+(num-5)+")").css("display","inline");
			$("#pageNav nav ul").find("li:gt("+(num+6)+")").css("display","none");
			$("#pageNav nav ul").find("li:eq(" + (size-1) + ")").css("display","inline");
			$("#pageNav nav ul").find("li:eq(" + (size-2) + ")").css("display","inline");
		}else if(num > 44){
			$("#pageNav nav ul").find("li:gt("+40+")").css("display","inline");
		}
	}
	

	/*$('.tzTab').click(function(){
		$(this).parent().find('tr').removeClass('trSelected');
		$(this).addClass('trSelected'); 
		var id = $(".trSelected").find("td:eq(0)").text();
		var href = path+surl+id;
		window.location.href = href;
	});*/
	/*function getAllNews(pageNo)
	{
		$.ajax({
			url : path + '/news/getAll',
			type : 'POST',
			data : {"pageNo" : pageNo,"num" : 7},
			success : function(data){
				build_news_table(data);
				var tab = "#zhxw #pageNav";
				build_pagenav(data,tab);
				var num = data.pageNum;
				var nums = data.navigatepageNums.length;
				pageInfo(num, nums);
			}
		});
		
	}*/
	
	/*function getAllNoticeBulletin(pageNo)
	{
		$.ajax({
			url : path + '/noticeBulletin/getAll',
			type : 'POST',
			data : {"pageNo" : pageNo,"num" : 7},
			success : function(data){
				$("#tzgg table tbody").empty();
				if(data.list.length == 0){
					var tr = $("<tr></tr>").append($("<td  colspan='8'></td>").append("<h4>暂时没有数据</h4>").css("text-align","center"));
					$("#tzgg table tbody").append(tr);
				}else{
					build_noticeBulletin_table(data);
					$('.tzTab').click(function(){
						$(this).parent().find('tr').removeClass('trSelected');
						$(this).addClass('trSelected'); 
						var id = $(".trSelected").find("td:eq(0)").text();
						var href = path+'/noticeBulletin/getNoticeBulletinById?nbId='+id;
						window.location.href = href;
					});
					var tab = "#tzgg #pageNav";
					build_pagenav(data,tab);
					var num = data.pageNum;
					var nums = data.navigatepageNums.length;
					pageInfo(num, nums);
				}
			}
		});
		
	}*/
		
	/*function getAllCompanyRules(pageNo)
	{
		$.ajax({
			url : path + '/companyRules/getAll',
			type : 'POST',
			data : {"pageNo" : pageNo,"num" : 7},
			success : function(data){
				build_companyRules_table(data);
				var tab = "#gszd #pageNav";
				build_pagenav(data,tab);
//				build_companyRules_pageInfo(data);
				var num = data.pageNum;
				var nums = data.navigatepageNums.length;
				pageInfo(num, nums);
			}
		});
		
	}*/
	
	/*function build_companyRules_table(result)
	{
		$("#gszd table tbody").empty();
		var noticeBulletin = result.list;
		$.each(noticeBulletin, function(index, item){
			var icon = $("<span></span>").addClass("icon-double-angle-right");
			var content = $("<td></td>").append(item.crContent).css("display","none");
			var href = path+"/companyRules/getCompanyRulesById?crId="+item.crId;
			var title = $("<td></td>").append(icon).append("<a href='"+href+"' style='color: dimgray'>"+item.crTitle+"</a>");
			var dept = $("<td></td>").append(item.dept.dName);
			var emp = $("<td></td>").append(item.employee.eName);
			var date = $("<td></td>").append(item.crDate);
			$("<tr></tr>").append(title).append(dept).append(emp).append(date).appendTo("#gszd table tbody");
		});
	}*/
	

	/*//构建新闻表格
	function build_news_table(result)
	{
		$("#zhxw table tbody").empty();
		var news = result.list;
		$.each(news, function(index, item){
			var icon = $("<span></span>").addClass("icon-double-angle-right");
			var content = $("<td></td>").append(item.newsContent).css("display","none");
			var href = path+"/news/getNewsById?newsId="+item.newsId;
			var title = $("<td></td>").append(icon).append("<a href='"+href+"' style='color: dimgray'>"+item.newsTitle+"</a>");
			var dept = $("<td></td>").append(item.dept.dName);
			var emp = $("<td></td>").append(item.employee.eName);
			var date = $("<td></td>").append(item.newsDate);
			$("<tr></tr>").append(title).append(dept).append(emp).append(date).appendTo("#zhxw table tbody");
		});
	}
	*/
	$(".vertical-nav a[href='/JMOA/javascrip:void(0)']").attr("data-toggle","modal").attr("data-target","#myModal");
	
	$("#ok").click(function(){
		var name = $("#name").val()
		var key = $("#key").val()
		var desc = $("#desc").val()
		$.ajax({
			url : path + '/activiti/create',
			type : 'POST',
			async: false,
			data : {"name":name, "key":key, "description":desc},
			success : function(data){
				if(data != "false"){
					window.location.href = path + "/modeler.html?modelId=" + data;
				}
			}
		});
		$(this).attr("data-dismiss", "modal");
	});
	
	$(document).on('click', '#homeTable1 tbody tr', function(){
		if($(this).find("td:eq(0)").text() == "暂时没有模型数据"){
			return;
		}
		getData(this);
		var temp_page = jumpPage(processName);
		sendData(temp_page)
	});
	
	$(document).on('click', '#homeTable2 tbody tr', function(){
		if($(this).find("td:eq(0)").text() == "暂时没有模型数据"){
			return;
		}
		getData(this);
		var tamp_page = jumpPage2(processName);
		sendHisData(tamp_page)
	});
	
	$(document).on('click', '#homeTable3 tbody tr', function(){
		if($(this).find("td:eq(0)").text() == "暂时没有模型数据"){
			return;
		}
		getData(this);
		var tamp_page = jumpPage2(processName);
		sendHisData(tamp_page)
	});
	
	$(document).on('click', '#homeTable3 tbody tr a', function(){
		getData($(this).parent().parent())
		$.ajax({
			url : path + '/activiti/deleteFollowByTaskId',
			type : 'POST',
			data : {"id" : id},
			success : function(data){
				window.location.reload();
			}
		});
		return false;
	});
	
	var processName, id, applicant, applyCompany, applyDept, apply, inLineOptions1, message;
	var inLineOptions2, inLineOptions3, inLineOptions4;
	var reserve1, reserve2, reserve3, reserve4, reserve5, reserve6, reserve7;
	var reserve8, reserve9, reserve10, reserve11, reserve12, reserve13, reserve14, reserve15;
	var reserve16, reserve17, reserve18, reserve19, reserve12, reserve20, reserve21, reserve22;
	var reserve23, reserve24, reserve25, reserve26, reserve27, reserve28, reserve29, reserve30;
	var reserve31, reserve32, reserve33, reserve34, reserve35, reserve36, reserve37, reserve38,
	reserve39,reserve40,reserve41,reserve42,reserve43;
	var tableData1, tableData2, tableData3, tableData4, opinions, applyManager, condition;
	var processInstanceId, nextPerson;
	
	function getData(object)
	{
		processName = $(object).find("td:eq(0)").text();
		inLineOptions1 = $(object).find("td:eq(1)").text();
		applicant = $(object).find("td:eq(2)").text();
		id = $(object).find("td:eq(3)").text();
		applyCompany = $(object).find("td:eq(4)").text();
		applyDept = $(object).find("td:eq(5)").text();
		apply = $(object).find("td:eq(6)").text();
		message = $(object).find("td:eq(7)").text();
		
		inLineOptions2 = $(object).find("td:eq(8)").text();
		inLineOptions3 = $(object).find("td:eq(9)").text();
		inLineOptions4 = $(object).find("td:eq(10)").text();
		
		reserve1 = $(object).find("td:eq(11)").text();
		reserve2 = $(object).find("td:eq(12)").text();
		reserve3 = $(object).find("td:eq(13)").text(); 
		reserve4 = $(object).find("td:eq(14)").text();
		reserve5 = $(object).find("td:eq(15)").text();
		reserve6 = $(object).find("td:eq(16)").text(); 
		reserve7 = $(object).find("td:eq(17)").text();
		reserve8 = $(object).find("td:eq(18)").text();
		reserve9 = $(object).find("td:eq(19)").text(); 
		reserve10 = $(object).find("td:eq(20)").text(); 
		reserve11 = $(object).find("td:eq(21)").text();
		reserve12 = $(object).find("td:eq(22)").text();
		reserve13 = $(object).find("td:eq(23)").text(); 
		reserve14 = $(object).find("td:eq(24)").text(); 
		reserve15 = $(object).find("td:eq(25)").text(); 

		tableData1 = $(object).find("td:eq(26)").text();
		tableData2 = $(object).find("td:eq(27)").text();
		tableData3 = $(object).find("td:eq(28)").text();
		tableData4 = $(object).find("td:eq(29)").text();
		
		opinions = $(object).find("td:eq(30)").text();
		applyManager = $(object).find("td:eq(31)").text();
		condition = $(object).find("td:eq(32)").text();
		
		processInstanceId = $(object).find("td:eq(33)").text();
		nextPerson = $(object).find("td:eq(34)").text();
		
		reserve16 = $(object).find("td:eq(35)").text(); 
		reserve17 = $(object).find("td:eq(36)").text(); 
		reserve18 = $(object).find("td:eq(37)").text(); 
		reserve19 = $(object).find("td:eq(38)").text(); 
		reserve20 = $(object).find("td:eq(39)").text(); 
		reserve21 = $(object).find("td:eq(40)").text(); 
		reserve22 = $(object).find("td:eq(41)").text(); 
		reserve23 = $(object).find("td:eq(42)").text(); 
		reserve24 = $(object).find("td:eq(43)").text(); 
		reserve25 = $(object).find("td:eq(44)").text(); 
		reserve26 = $(object).find("td:eq(45)").text(); 
		reserve27 = $(object).find("td:eq(46)").text(); 
		reserve28 = $(object).find("td:eq(47)").text(); 
		reserve29 = $(object).find("td:eq(48)").text(); 
		reserve30 = $(object).find("td:eq(49)").text(); 
		reserve31 = $(object).find("td:eq(50)").text(); 
		reserve32 = $(object).find("td:eq(51)").text(); 
		reserve33 = $(object).find("td:eq(52)").text(); 
		reserve34 = $(object).find("td:eq(53)").text(); 
		reserve35 = $(object).find("td:eq(54)").text(); 
		reserve36 = $(object).find("td:eq(55)").text(); 
		reserve37 = $(object).find("td:eq(56)").text(); 
		reserve38 = $(object).find("td:eq(57)").text(); 
		reserve39 = $(object).find("td:eq(58)").text(); 
		reserve40 = $(object).find("td:eq(59)").text(); 
		reserve41 = $(object).find("td:eq(60)").text(); 
		reserve42 = $(object).find("td:eq(61)").text(); 
		reserve43 = $(object).find("td:eq(62)").text(); 
	}
	
	function sendData(temp_page)
	{
		$.ajax({
			url : path + '/activiti/sendAllData',
			type : 'POST',
			data : {
				"id" : id, "applicant" : applicant, "applyCompany" : applyCompany, "applyDept" : applyDept, "processInstanceId" : processInstanceId, "message" : message, 
				"apply" : apply, "inLineOptions1" : inLineOptions1, "inLineOptions2" : inLineOptions2, "inLineOptions3" : inLineOptions3, "inLineOptions4" : inLineOptions4, 
				"applyManager" : applyManager, "tableData1" : tableData1, "tableData2" : tableData2, "tableData3" : tableData3, "tableData4" : tableData4, "opinions" : opinions,
				"nextPerson" : nextPerson, "condition" : condition, "reserve1" : reserve1, "reserve2" : reserve2, "reserve3" : reserve3, "reserve4" : reserve4, "reserve5" : reserve5, 
				"reserve6" : reserve6, "reserve6" : reserve6, "reserve7" : reserve7, "reserve8" : reserve8, "reserve9" : reserve9, "reserve10" : reserve10,
				"reserve11" : reserve11, "reserve12" : reserve12, "reserve13" : reserve13, "reserve14" : reserve14, "reserve15" : reserve15,
				"reserve16" : reserve16, "reserve17" : reserve17, "reserve18" : reserve18, "reserve19" : reserve19, "reserve20" : reserve20,
				"reserve21" : reserve21, "reserve22" : reserve22, "reserve23" : reserve23, "reserve24" : reserve24, "reserve25" : reserve25,
				"reserve26" : reserve26, "reserve27" : reserve27, "reserve28" : reserve28, "reserve29" : reserve29, "reserve30" : reserve30,
				"reserve31" : reserve31, "reserve32" : reserve32, "reserve33" : reserve33, "reserve34" : reserve34, "reserve35" : reserve35,
				"reserve36" : reserve36, "reserve37" : reserve37, "reserve38" : reserve38, "reserve39" : reserve39, "reserve40" : reserve40,
				"reserve41" : reserve41,"reserve42" : reserve42,"reserve43" : reserve43
			},
			success : function(data){
				if(data == "success"){
					window.open(path + "/views/" + temp_page);
				}
			}
		});
	}
	
	function sendHisData(temp_page)
	{
		$.ajax({
			url : path + '/activiti/sendHistoryAllData',
			type : 'POST',
			data : {
				"id" : id, 
				"name" : name, 
				"applicant" : applicant, 
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
				"reserve41" : reserve41,"reserve42" : reserve42,"reserve43" : reserve43,
				"processInstanceId" : processInstanceId, "nextPerson" : nextPerson, "name" : processName, "procdefId" : processInstanceId
			},
			success : function(data){
				if(data == "success"){
					window.open(path + "/views/" + temp_page);
				}
			}
		});
	}
	
	function jumpPage(procdefName)
	{
		var temp_page;
		if(procdefName == "请假申请"){
			temp_page = "leave_qjsq.jsp";
		}else if(procdefName == "出差申请"){
			temp_page = "travel_ccsq.jsp";
		}else if(procdefName == "加班申请"){
			temp_page = "overtime_jbsq.jsp";
		}else if(procdefName == "用车申请"){
			temp_page = "car_ycsq.jsp";
		}else if(procdefName == "名片印刷申请"){
			temp_page = "card_mpyssq.jsp";
		}else if(procdefName == "固定资产借出申请"){
			temp_page = "assets_gdzc.jsp";
		}else if(procdefName == "办公用品申请"){
			temp_page = "office_bgypsq.jsp";
		}else if(procdefName == "超额补贴申请"){
			temp_page = "excess_cebt.jsp";
		}else if(procdefName == "招聘申请"){
			temp_page = "recruit_zpsq.jsp";
		}else if(procdefName == "礼品申请"){
			temp_page = "gift_lpsq.jsp";
		}else if(procdefName == "离职申请"){
			temp_page = "quit_lzsq.jsp";
		}else if(procdefName == "用章申请"){
			temp_page = "chapter_yzsq.jsp";
		}else if(procdefName == "印刷品印刷申请"){
			temp_page = "printing_yspsq.jsp";
		}else if(procdefName == "员工转正申请"){
			temp_page = "correction_ygzz.jsp";
		}else if(procdefName == "人事异动申请"){
			temp_page = "changeOfPersonal_rsyd.jsp";
		}else if(procdefName == "投标保证金申请"){
			temp_page = "margin_tbbzj.jsp";
		}else if(procdefName == "特殊发货申请"){
			temp_page = "special_tsfh.jsp";
		}else if(procdefName == "业务招待申请"){
			temp_page = "business_ywzd.jsp";
		}else if(procdefName == "借款管理"){
			temp_page = "lendMoney_jksq.jsp";
		}else if(procdefName == "付款管理"){
			temp_page = "payment_fkgl.jsp";
		}else if(procdefName == "发票管理"){
			temp_page = "invoice_fpgl.jsp";
		}else if(procdefName == "开户管理"){
			temp_page = "account_khgl.jsp";
		}else if(procdefName == "信息费管理"){
			temp_page = "informationFee_xxfgl.jsp";
		}else if(procdefName == "报销管理"){
			temp_page = "reimbursement_bxsq.jsp";
		}else if(procdefName == "非标技术评审"){
			temp_page = "tecReviewDetail.jsp";
		}
		return temp_page;
	}
	
	function jumpPage2(procdefName)
	{
		var page;
		if(procdefName == "请假申请"){
			page = "leave_qjsq_his.jsp";
		}else if(procdefName == "出差申请"){
			page = "travel_ccsq_his.jsp";
		}else if(procdefName == "加班申请"){
			page = "overtime_jbsq_his.jsp";
		}else if(procdefName == "用车申请"){
			page = "car_ycsq_his.jsp";
		}else if(procdefName == "名片印刷申请"){
			page = "card_mpyssq_his.jsp";
		}else if(procdefName == "固定资产借出申请"){
			page = "assets_gdzc_his.jsp";
		}else if(procdefName == "办公用品申请"){
			page = "office_bgypsq_his.jsp";
		}else if(procdefName == "超额补贴申请"){
			page = "excess_cebt_his.jsp";
		}else if(procdefName == "招聘申请"){
			page = "recruit_zpsq_his.jsp";
		}else if(procdefName == "礼品申请"){
			page = "gift_lpsq_his.jsp";
		}else if(procdefName == "离职申请"){
			page = "quit_lzsq_his.jsp";
		}else if(procdefName == "用章申请"){
			page = "chapter_yzsq_his.jsp";
		}else if(procdefName == "印刷品印刷申请"){
			page = "printing_yspsq_his.jsp";
		}else if(procdefName == "员工转正申请"){
			page = "correction_ygzz_his.jsp";
		}else if(procdefName == "人事异动申请"){
			page = "changeOfPersonal_rsyd_his.jsp";
		}else if(procdefName == "投标保证金申请"){
			page = "margin_tbbzj_his.jsp";
		}else if(procdefName == "特殊发货申请"){
			page = "special_tsfh_his.jsp";
		}else if(procdefName == "业务招待申请"){
			page = "business_ywzd_his.jsp";
		}else if(procdefName == "借款管理"){
			page = "lendMoney_jksq_his.jsp";
		}else if(procdefName == "付款管理"){
			page = "payment_fkgl_his.jsp";
		}else if(procdefName == "发票管理"){
			page = "invoice_fpgl_his.jsp";
		}else if(procdefName == "开户管理"){
			page = "account_khgl_his.jsp";
		}else if(procdefName == "信息费管理"){
			page = "informationFee_xxfgl_his.jsp";
		}else if(procdefName == "报销管理"){
			page = "reimbursement_bxsq_his.jsp";
		}else if(procdefName == "非标技术评审"){
			page = "tecReview_his.jsp";
		}
		return page;
	}
});
