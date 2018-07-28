$(function(){
	//查询数据
	search(1,"鑫鑫园林");

	$("#queryByMenu").click(function(){
		var bggl = '办公管理';
		$.ajax({
			url : path + '/allTask/getDep',
			type : 'post',
			data:{'parentNameStr':bggl},
			dataType : "json",
			success:function(result){
				$("#forCla").empty();
				$.each(result, function(index, item){
					var forCla = $("<option></option>").append(item.jName);
					$("#forCla").append("请输入表单类型").append(forCla);
				});
			}
		});	
		})

		$("#queryByMenus").click(function(){
			var cwgl = "财务管理";
			$.ajax({
				url : path + '/allTask/getDep',
				type : 'post',
				data:{'parentNameStr':cwgl},
				dataType : "json",
				success:function(result){
					$("#forCla").empty();
					$.each(result, function(index, item){
						var forCla = $("<option></option>").append(item.jName);
						$("#forCla").append("请输入表单类型").append(forCla);
					});
				}
			});	
			})
	//父级菜单过滤
	$("#queryByMenu").click(function(){
		searchTaskBy(1, "鑫鑫园林",'办公管理');
	});
	$("#queryByMenus").click(function(){
		searchTaskBy(1, "鑫鑫园林",'财务管理');
	});
	
	$("#intoHq").click(function(){
		$("#page").empty();
		$("#page2").empty();
		search(1,"金迈衡器");
		window.location.href = path + "/allTask/GetHq";
	})
	$("#intoHb").click(function(){
		$("#page").empty();
		$("#page2").empty();
		search(1,"环保");
		window.location.href = path + "/allTask/GetHb";
	})
	$("#intoJtzs").click(function(){
		$("#page").empty();
		$("#page2").empty();
		search(1,"集团直属");
		window.location.href = path + "/allTask/GetJtzs";
	})
	$("#intoYl").click(function(){
		$("#page").empty();
		$("#page2").empty();
		search(1,"鑫鑫园林");
	})
});

     //查询数据
	function search(page,company){
		$.ajax({
		url : path + '/allTask/queryAll',
		type : 'post',
		data : {'page':page,'company':company},
		dataType : "json",
		success:function(result){
			$("#dat").empty();
			$.each(result.list, function(index, item){
				if(item.hisVariable!=null&&item.hisVariable!=""){
						var id = $("<td></td>").append(item.id);
						var forCla = $("<td></td>").append(item.name);
						var assignee = $("<td></td>").append(item.assignee);
						var cName = $("<td></td>").append(item.hisVariable.applyCompany);
						var dName = $("<td></td>").append(item.hisVariable.applyDept);
						var startTime = $("<td></td>").append(item.startTime);
						var endTime = $("<td></td>").append(item.endTime);
						var emergency = $("<td></td>").append(item.hisVariable.inLineOptions1);
						var message = $("<td></td>").append(item.hisVariable.message);
						var opinion = $("<td style='display:none;'></td>").append(item.hisVariable.opinion);
						var processInstanceId = $("<td style='display:none;'></td>").append(item.processInstanceId);
						$("<tr></tr>").append(id).append(forCla).append(assignee).append(cName).append(dName).append(startTime)
									.append(endTime).append(emergency).append(message).append(opinion).append(processInstanceId).appendTo("#dat");
						
						var pa = result.pageCount; //总页数
						var cu = result.curPage; //当前页
						laypage({
					        cont:$("#page"),//容器
					        pages:pa,  //总页数
					        curr: cu,   //当前页
					        skip: true,     //是否开启跳页
					        skin:"molv",   //皮肤
					        first: '首页',
					        last:'尾页',
					        groups:3,    //多少页进行分组
					        prev: '<', //若不显示，设置false即可
					        next: '>', //若不显示，设置false即可
					        jump: function(obj,first){//触发分页后的回调
					        	if(!first){  //一定要加此判断，否则初始化会无线刷新
					        		$('#dat').html('');
					        		 search(obj.curr,company);
					        		}
								}
							});
				}
			});
		}
	});	
}		

	//条件查询
	$("#search").click(function(){
		var startTime1 = $("#startTime").val();
		var star = $("#startTime1").val();
		var eName = $("#eName").val();
		var forCla1 = $("#forCla").val();
		var message1 = $("#message").val();
		searchTaskByCondition(1, startTime1, star, eName, forCla1, message1,"鑫鑫园林");
	});

	function searchTaskByCondition(page, startTime1, star, eName, forCla1, message1,company)
	{
		$.ajax({
			url : path + '/allTask/Search',
			type : 'POST',
			data : {"page" : page, "startTime" : startTime1, "startTime1" : star, "eName" : eName, "forCla" : forCla1, "message" : message1, "company":company},
			success : function(result){
				$("#dat").empty();
				$("#page").empty();
				$.each(result.list, function(index, item){
					if(item.hisVariable!=null&&item.hisVariable!=""){
							var id = $("<td></td>").append(item.id);
							var forCla = $("<td></td>").append(item.name);
							var assignee = $("<td></td>").append(item.assignee);
							var cName = $("<td></td>").append(item.hisVariable.applyCompany);
							var dName = $("<td></td>").append(item.hisVariable.applyDept);
							var startTime = $("<td></td>").append(item.startTime);
							var endTime = $("<td></td>").append(item.endTime);
							var emergency = $("<td></td>").append(item.hisVariable.inLineOptions1);
							var message = $("<td></td>").append(item.hisVariable.message);
							var opinion = $("<td style='display:none;'></td>").append(item.hisVariable.opinion);
							var processInstanceId = $("<td style='display:none;'></td>").append(item.processInstanceId);
							$("<tr></tr>").append(id).append(forCla).append(assignee).append(cName).append(dName).append(startTime)
										.append(endTime).append(emergency).append(message).append(opinion).append(processInstanceId).appendTo("#dat");
							
							var pa = result.pageCount; //总页数
							var cu = result.curPage; //当前页
							
							laypage({
						        cont:$("#page2"),//容器
						        pages: pa,  //总页数
						        curr: cu,   //当前页
						        skip: true,     //是否开启跳页
						        skin:"molv",   //皮肤
						        first: '首页',
						        last:'尾页',
						        groups:3,    //多少页进行分组
						        prev: '<', //若不显示，设置false即可
						        next: '>', //若不显示，设置false即可
						        jump: function(obj,first){//触发分页后的回调
						        	if(!first){  //一定要加此判断，否则初始化会无线刷新
						        		$('#dat').html('');
						        		searchTaskByCondition(obj.curr, startTime1, star, eName, forCla1, message1,company);
						        		}
									}
								});
					}
				});
			}
		});
	}


function searchTaskBy(page,company,parentNameStr)
{
	$.ajax({
		url : path + '/allTask/queryByMenu',
		type : 'POST',
		data : {"page" : page, "company" : company, "parentNameStr":parentNameStr},
		success : function(result){
			$("#dat").empty();
			$("#page").empty();
			$.each(result.list, function(index, item){
				if(item.hisVariable!=null&&item.hisVariable!=""){
						var id = $("<td></td>").append(item.id);
						var forCla = $("<td></td>").append(item.name);
						var assignee = $("<td></td>").append(item.assignee);
						var cName = $("<td></td>").append(item.hisVariable.applyCompany);
						var dName = $("<td></td>").append(item.hisVariable.applyDept);
						var startTime = $("<td></td>").append(item.startTime);
						var endTime = $("<td></td>").append(item.endTime);
						var emergency = $("<td></td>").append(item.hisVariable.inLineOptions1);
						var message = $("<td></td>").append(item.hisVariable.message);
						var opinion = $("<td style='display:none;'></td>").append(item.hisVariable.opinion);
						var processInstanceId = $("<td style='display:none;'></td>").append(item.processInstanceId);
						$("<tr></tr>").append(id).append(forCla).append(assignee).append(cName).append(dName).append(startTime)
									.append(endTime).append(emergency).append(message).append(opinion).append(processInstanceId).appendTo("#dat");
						
						var pa = result.pageCount; //总页数
						var cu = result.curPage; //当前页
						laypage({
					        cont:$("#page2"),//容器
					        pages: pa,  //总页数
					        curr: cu,   //当前页
					        skip: true,     //是否开启跳页
					        skin:"molv",   //皮肤
					        first: '首页',
					        last:'尾页',
					        groups:3,    //多少页进行分组
					        prev: '<', //若不显示，设置false即可
					        next: '>', //若不显示，设置false即可
					        jump: function(obj,first){//触发分页后的回调
					        	if(!first){  //一定要加此判断，否则初始化会无线刷新
					        		$('#dat').html('');
					        		searchTaskBy(obj.curr,company,parentNameStr)
					        		}
								}
							});
				}
			});
		}
	});
}
	//跳转进详情页
	$(document).on('click','#dat tr',function(){
		var id = $(this).find("td:eq(0)").text();
		var forCla = $(this).find("td:eq(1)").text();
		var assignee = $(this).find("td:eq(2)").text();
		var cName = $(this).find("td:eq(3)").text();
		var dName = $(this).find("td:eq(4)").text();
		var startTime = $(this).find("td:eq(5)").text();
		var endTime = $(this).find("td:eq(6)").text();
		var emergency = $(this).find("td:eq(7)").text();
		var message = $(this).find("td:eq(8)").text();
		var opinion = $(this).find("td:eq(9)").text();
		var processInstanceId = $(this).find("td:eq(10)").text();


		window.open(path + "/views/bgsq/ysp.jsp?id=" + id + "&forCla=" + forCla + 
				"&assignee=" + assignee + "&cName=" + cName + "&dName=" + dName + "&startTime=" + startTime + 
				"&endTime=" + endTime + "&emergency=" + emergency + "&message=" + message + "&opinion=" + opinion + "&processInstanceId=" + processInstanceId);  
	});