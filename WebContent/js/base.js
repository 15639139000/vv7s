var procdefId;

function ready() // 窗体记载后默认的操作
{
	$("#leave1").attr("class","tab-pane fade in active")
	$("#leave2").attr("class","tab-pane fade")
	$("#leave3").attr("class","tab-pane fade nryc")
	$("#dw").css("color", "#019ee1");
	
	$("#dw").click(function(){
		$("#leave1").attr("class","tab-pane fade in active")
		$("#leave2").attr("class","tab-pane fade")
		$("#leave3").attr("class","tab-pane fade nryc")
		$("#pageInfo1").css("display","block");
		$("#pageInfo2").css("display","none");
		$("#dw").css("color", "#019ee1");
		$("#dw").css("background-color", "#ffffff");
		$("#fqsq").css("color", "#666");
		getAllTaskByName(1, "未处理");
	});
	
	setProcdefId(name);
	
	$("#fqzt").click(function(){
		window.location.href = path + "/views/historyTask.jsp?name=" + procdefId;
	});
	
	$("#fqsq").click(function(){
		$("#leave1").attr("class","tab-pane fade")
		$("#leave2").attr("class","tab-pane fade")
		$("#leave3").attr("class","tab-pane fade nryc in active")
		$("#pageInfo1").css("display","none");
		$("#pageInfo2").css("display","none");
		$("#follow").val("关注");
		$("#fqsq").css("color", "#019ee1");
		$("#fqsq").css("background-color", "#ffffff");
		$("#dw").css("color", "#666");
	});
}

function setProcdefId(name)
{
	if(name == "请假申请"){
		procdefId = "process:29:1222880";
	}else if(name == "出差申请"){
		procdefId = "process:22:1165368";
	}else if(name == "加班申请"){
		procdefId = "process:23:1172504";
	}else if(name == "用车申请"){
		procdefId = "process:8:1125010";
	}else if(name == "名片印刷申请"){
		procdefId = "process:9:1142509";
	}else if(name == "固定资产借出申请"){
		procdefId = "process:11:1145235";
	}else if(name == "办公用品申请"){
		procdefId = "process:21:1162534";
	}else if(name == "超额补贴申请"){
		procdefId = "process:20:1162530";
	}else if(name == "招聘申请"){
		procdefId = "process:24:1177641";
	}else if(name == "礼品申请"){
		procdefId = "process:17:1157656";
	}else if(name == "离职申请"){
		procdefId = "process:18:1162509";
	}else if(name == "用章申请"){
		procdefId = "process:27:1192509";
	}else if(name == "印刷品印刷申请"){
		procdefId = "process:10:1145228";
	}else if(name == "员工转正申请"){
		procdefId = "process:25:1185005";
	}else if(name == "人事异动申请"){
		procdefId = "process:26:1190082";
	}else if(name == "投标保证金申请"){
		procdefId = "process:12:1147949";
	}else if(name == "特殊发货申请"){
		procdefId = "process:28:1195328";
	}else if(name == "业务招待申请"){
		procdefId = "process:15:1152523";
	}else if(name == "借款管理"){
		procdefId = "process:4:1105228";
	}else if(name == "付款管理"){
		procdefId = "process:1:1090009";
	}else if(name == "发票管理"){
		procdefId = "process:3:1102651";
	}else if(name == "开户管理"){
		procdefId = "process:6:1107756";
	}else if(name == "信息费管理"){
		procdefId = "process:16:1155169";
	}else if(name == "报销管理"){
		procdefId = "process:7:1110088";
	}else if(name == "回款管理"){
		procdefId = "process:44:895007";
	}
}

function editOperation() // 编辑超链接
{
	$("#leave1").attr("class","tab-pane fade")
	$("#leave2").attr("class","tab-pane fade")
	$("#leave3").attr("class","tab-pane fade nryc in active")
	$("#pageInfo1").css("display","none");
	$("#pageInfo2").css("display","none");
	$("#save").val("确定");
	$("#sub").val("提 交");
	
	//操作单选/复选按钮
	if(undefined != inLineOptions1){
		checkedRadioAndCheckbox("inLineOptions1", inLineOptions1);
	}
	if(undefined != inLineOptions2){
		checkedRadioAndCheckbox("inLineOptions2", inLineOptions2);	
	}
	if(undefined != inLineOptions3){
		checkedRadioAndCheckbox("inLineOptions3", inLineOptions3);
	}
	if(undefined != inLineOptions4){
		checkedRadioAndCheckbox("inLineOptions4", inLineOptions4);
	}
	
	if(undefined != tableData1){
		if(tableData1 != ""){
			var tableDatas = JSON.parse(tableData1);
			$(document.getElementById('tabProduct1')).find("tr:gt(0)").remove();
			$.each(tableDatas, function(index, item){
				AddRows1(document.getElementById('tabProduct1'), 1, item);
			})
		}
	}
	
	if(undefined != tableData2){
		if(tableData2 != ""){
			var tableDatas = JSON.parse(tableData2);
			$(document.getElementById('tabProduct2')).find("tr:gt(0)").remove();
			$.each(tableDatas, function(index, item){
				AddRows2(document.getElementById('tabProduct2'), 1, item);
			})
		}
	}
	
	if(undefined != tableData3){
		if(tableData3 != ""){
			var tableDatas = JSON.parse(tableData3);
			$(document.getElementById('tabProduct3')).find("tr:gt(0)").remove();
			$.each(tableDatas, function(index, item){
				AddRows3(document.getElementById('tabProduct3'), 1, item);
			})
		}
	}
	
	if(undefined != tableData4){
		if(tableData4 != ""){
			var tableDatas = JSON.parse(tableData4);
			$(document.getElementById('tabProduct4')).find("tr:gt(0)").remove();
			$.each(tableDatas, function(index, item){
				AddRows4(document.getElementById('tabProduct4'), 1, item);
			})
		}
	}
	
	$("#apply").val(apply);
	
	$("#reserve1").val(reserve1);
	$("#reserve2").val(reserve2);
	$("#reserve3").val(reserve3);
	$("#reserve4").val(reserve4);
	$("#reserve5").val(reserve5);
	$("#reserve6").val(reserve6);
	$("#reserve7").val(reserve7);
	$("#reserve8").val(reserve8);
	$("#reserve9").val(reserve9);
	$("#reserve10").val(reserve10);
	$("#reserve11").val(reserve11);
	$("#reserve12").val(reserve12);
	$("#reserve13").val(reserve13);
	$("#reserve14").val(reserve14);
	$("#reserve15").val(reserve15);
	
	$("#taskId").val(id);
	$("#message").val(message);
	$("#nextPerson").val(nextPerson);
	checkFollowTask(id);
}

function checkFollowTask(id)
{
	$.ajax({
		url : path + '/activiti/checkFollowTask',
		type : 'POST',
		data : {"taskId" : id},
		success : function(data){
			if(data == 1){
				$("#follow").val("已关注");
				$("input[name=follow]").val("已关注");
			}
		}
	});
}

function submitOperation(taskId, follow) //提交超链接
{
	$.ajax({
		url : path + "/activiti/submitTask",
		type : 'POST',
		data : {"taskId" : taskId, "follow" : follow},
		success : function(data){
			if(data == "success"){
				window.location.reload();
			}
		}
	});
}

function saveAndSubmitBtn(text)
{
	if(text == "保存"){
		$("input[name=state]").val("保存");
	}
	if(text == "提交"){
		$("input[name=state]").val("提交");
	}
	$.ajaxFileUpload({
		url:path + '/activiti/starLeave?datetime=' + new Date().getTime(),
		secureuri:false,
		fileElementId:'fileName',
		dataType: 'text',
		contentType: "text/html;charset=utf-8",
		data:{
			apply : $("#apply").val(), 
			reserve1 : $("#reserve1").val() == undefined ? null : $("#reserve1").val(),
			reserve2 : $("#reserve2").val() == undefined ? null : $("#reserve2").val(),
			reserve3 : $("#reserve3").val() == undefined ? null : $("#reserve3").val(),
			reserve4 : $("#reserve4").val() == undefined ? null : $("#reserve4").val(),
			reserve5 : $("#reserve5").val() == undefined ? null : $("#reserve5").val(),
			reserve6 : $("#reserve6").val() == undefined ? null : $("#reserve6").val(),
			reserve7 : $("#reserve7").val() == undefined ? null : $("#reserve7").val(),
			reserve8 : $("#reserve8").val() == undefined ? null : $("#reserve8").val(),
			reserve9 : $("#reserve9").val() == undefined ? null : $("#reserve9").val(),
			reserve10 : $("#reserve10").val() == undefined ? null : $("#reserve10").val(),
			reserve11 : $("#reserve11").val() == undefined ? null : $("#reserve11").val(),
			reserve12 : $("#reserve12").val() == undefined ? null : $("#reserve12").val(),
			reserve13 : $("#reserve13").val() == undefined ? null : $("#reserve13").val(),
			reserve14 : $("#reserve14").val() == undefined ? null : $("#reserve14").val(),
			reserve15 : $("#reserve15").val() == undefined ? null : $("#reserve15").val(),
			inLineOptions1 : $("input[name=inLineOptions1]:checked").val() == undefined ? $("#inLineOptions1").val() == undefined ? null : $("#inLineOptions1").val() : $("input[name=inLineOptions1]:checked").val(),
			inLineOptions2 : $("input[name=inLineOptions2]:checked").val() == undefined ? $("#inLineOptions2").val() == undefined ? null : $("#inLineOptions2").val() : $("input[name=inLineOptions2]:checked").val(),
			inLineOptions3 : $("input[name=inLineOptions3]:checked").val() == undefined ? $("#inLineOptions3").val() == undefined ? null : $("#inLineOptions3").val() : $("input[name=inLineOptions3]:checked").val(),
			inLineOptions4 : $("input[name=inLineOptions4]:checked").val() == undefined ? $("#inLineOptions4").val() == undefined ? null : $("#inLineOptions4").val() : $("input[name=inLineOptions4]:checked").val(),
			tableData1 : $("#tableData1").val() == undefined ? null : encodeURIComponent($("#tableData1").val()),
			tableData2 : $("#tableData2").val() == undefined ? null : encodeURIComponent($("#tableData2").val()),
			tableData3 : $("#tableData3").val() == undefined ? null : encodeURIComponent($("#tableData3").val()),
			tableData4 : $("#tableData4").val() == undefined ? null : encodeURIComponent($("#tableData4").val()),
			state : $("input[name=state]").val() == undefined ? null : $("input[name=state]").val(),
			opinion : $("#opinion").val() == undefined ? null : $("#opinion").val(),
			opinions : $("#opinions").val() == undefined ? null : $("#opinions").val(),
			condition : $("#condition").val() == undefined ? null : $("#condition").val(),
			follow : $("input[name=follow]").val() == undefined ? null : $("input[name=follow]").val()
		},
		success : function (data){
			if(data.indexOf("success") > -1){
				window.location.href = path + "/views/historyTask.jsp?name=" + procdefId;
			}
		},
		error : function(data){
			alert(JSON.stringify(data));
		}
	}
)
	
//	var formData = new FormData($("#form")[0]);
//	$.ajax({
//		url : path + '/activiti/startProcess?datetime=' + new Date().getTime(),
//		type : 'POST',
//		dataType : 'text',
//		data : formData,  
//		async: false,  
//		cache: false,  
//		contentType: false,  
//		processData: false, 
//		success: function(data) {  
//			if(data == "success"){
//				window.location.href = path + "/views/historyTask.jsp?name=" + procdefId;
//			}
//		}
//	});
//	$.ajax({
//		url : path + '/activiti/test?datetime=' + new Date().getTime(), // 解决ajaxIE下无效的问题
//		type : 'POST',
//		data : {"param" : "张三"}, //IE下传递中文问题
//		contentType: "application/x-www-form-urlencoded; charset=utf-8",
//		success : function(data){
//			if(data == "success"){
//				window.location.href = path + "/home.jsp";
//			}
//		}
//	});
}

function determineAndSubmitBtn(text, name)
{
	var follow = $("input[name=follow]").val();
//	var formData = new FormData($("#form")[0]);
	if(text == "确定"){
//		$.ajax({
//			url : path + '/activiti/updateAllTask',
//			type : 'POST',
//			dataType : 'text',
//			data : formData,  
//			async: false,  
//			cache: false,  
//			contentType: false,  
//			processData: false,  
//			success: function(data) {  
//				if(data == "success"){
//					window.location.href = path + "/views/historyTask.jsp?name=" + procdefId;
//				}
//			}
//		});
		$("input[name=state]").val("保存")
		$.ajaxFileUpload({
			url:path + '/activiti/updateAllTask?datetime=' + new Date().getTime(),
			secureuri:false,
			fileElementId:'fileName',
			dataType : 'text',
			contentType: "text/html;charset=utf-8",
			data:{
				apply : $("#apply").val(), 
				reserve1 : $("#reserve1").val() == undefined ? null : $("#reserve1").val(),
				reserve2 : $("#reserve2").val() == undefined ? null : $("#reserve2").val(),
				reserve3 : $("#reserve3").val() == undefined ? null : $("#reserve3").val(),
				reserve4 : $("#reserve4").val() == undefined ? null : $("#reserve4").val(),
				reserve5 : $("#reserve5").val() == undefined ? null : $("#reserve5").val(),
				reserve6 : $("#reserve6").val() == undefined ? null : $("#reserve6").val(),
				reserve7 : $("#reserve7").val() == undefined ? null : $("#reserve7").val(),
				reserve8 : $("#reserve8").val() == undefined ? null : $("#reserve8").val(),
				reserve9 : $("#reserve9").val() == undefined ? null : $("#reserve9").val(),
				reserve10 : $("#reserve10").val() == undefined ? null : $("#reserve10").val(),
				reserve11 : $("#reserve11").val() == undefined ? null : $("#reserve11").val(),
				reserve12 : $("#reserve12").val() == undefined ? null : $("#reserve12").val(),
				reserve13 : $("#reserve13").val() == undefined ? null : $("#reserve13").val(),
				reserve14 : $("#reserve14").val() == undefined ? null : $("#reserve14").val(),
				reserve15 : $("#reserve15").val() == undefined ? null : $("#reserve15").val(),
				inLineOptions1 : $("input[name=inLineOptions1]:checked").val() == undefined ? $("#inLineOptions1").val() == undefined ? null : $("#inLineOptions1").val() : $("input[name=inLineOptions1]:checked").val(),
				inLineOptions2 : $("input[name=inLineOptions2]:checked").val() == undefined ? $("#inLineOptions2").val() == undefined ? null : $("#inLineOptions2").val() : $("input[name=inLineOptions2]:checked").val(),
				inLineOptions3 : $("input[name=inLineOptions3]:checked").val() == undefined ? $("#inLineOptions3").val() == undefined ? null : $("#inLineOptions3").val() : $("input[name=inLineOptions3]:checked").val(),
				inLineOptions4 : $("input[name=inLineOptions4]:checked").val() == undefined ? $("#inLineOptions4").val() == undefined ? null : $("#inLineOptions4").val() : $("input[name=inLineOptions4]:checked").val(),
				tableData1 : $("#tableData1").val() == undefined ? null : encodeURIComponent($("#tableData1").val()),
				tableData2 : $("#tableData2").val() == undefined ? null : encodeURIComponent($("#tableData2").val()),
				tableData3 : $("#tableData3").val() == undefined ? null : encodeURIComponent($("#tableData3").val()),
				tableData4 : $("#tableData4").val() == undefined ? null : encodeURIComponent($("#tableData4").val()),
				message : $("#message").val(),
				taskId : $("#taskId").val(),
				state : $("input[name=state]").val(),
				condition : $("#condition").val() == undefined ? null : $("#condition").val(),
				follow : $("input[name=follow]").val() == undefined ? null : $("input[name=follow]").val()
			},
			success : function (data){
				if(data.indexOf("success") > -1){
					window.location.href = path + "/views/historyTask.jsp?name=" + procdefId;
				}
			},
			error : function(data){
				alert(JSON.stringify(data));
			}
		}
	)
	}else if(text == "提 交"){
		$("input[name=state]").val("提 交")
//		$.ajax({
//			url : path + '/activiti/updateAllTask',
//			type : 'POST',
//			dataType : 'text',
//			data : formData,  
//			async: false,  
//			cache: false,  
//			contentType: false,  
//			processData: false,  
//			success: function(data) {  
//				$.ajax({
//					url : path + "/activiti/submitTask",
//					type : 'POST',
//					data : {"taskId" : $("#taskId").val(), "follow" : follow},
//					success : function(data){
//						if(data == "success"){
//							window.location.href = path + "/views/historyTask.jsp?name=" + procdefId;
//						}
//					}
//				});
//			}
//		});
		$.ajaxFileUpload({
			url:path + '/activiti/updateAllTask?datetime=' + new Date().getTime(),
			secureuri:false,
			fileElementId:'fileName',
			dataType: 'text',
			contentType: "text/html;charset=utf-8",
			data:{
				apply : $("#apply").val(), 
				reserve1 : $("#reserve1").val() == undefined ? null : $("#reserve1").val(),
				reserve2 : $("#reserve2").val() == undefined ? null : $("#reserve2").val(),
				reserve3 : $("#reserve3").val() == undefined ? null : $("#reserve3").val(),
				reserve4 : $("#reserve4").val() == undefined ? null : $("#reserve4").val(),
				reserve5 : $("#reserve5").val() == undefined ? null : $("#reserve5").val(),
				reserve6 : $("#reserve6").val() == undefined ? null : $("#reserve6").val(),
				reserve7 : $("#reserve7").val() == undefined ? null : $("#reserve7").val(),
				reserve8 : $("#reserve8").val() == undefined ? null : $("#reserve8").val(),
				reserve9 : $("#reserve9").val() == undefined ? null : $("#reserve9").val(),
				reserve10 : $("#reserve10").val() == undefined ? null : $("#reserve10").val(),
				reserve11 : $("#reserve11").val() == undefined ? null : $("#reserve11").val(),
				reserve12 : $("#reserve12").val() == undefined ? null : $("#reserve12").val(),
				reserve13 : $("#reserve13").val() == undefined ? null : $("#reserve13").val(),
				reserve14 : $("#reserve14").val() == undefined ? null : $("#reserve14").val(),
				reserve15 : $("#reserve15").val() == undefined ? null : $("#reserve15").val(),
				inLineOptions1 : $("input[name=inLineOptions1]:checked").val() == undefined ? $("#inLineOptions1").val() == undefined ? null : $("#inLineOptions1").val() : $("input[name=inLineOptions1]:checked").val(),
				inLineOptions2 : $("input[name=inLineOptions2]:checked").val() == undefined ? $("#inLineOptions2").val() == undefined ? null : $("#inLineOptions2").val() : $("input[name=inLineOptions2]:checked").val(),
				inLineOptions3 : $("input[name=inLineOptions3]:checked").val() == undefined ? $("#inLineOptions3").val() == undefined ? null : $("#inLineOptions3").val() : $("input[name=inLineOptions3]:checked").val(),
				inLineOptions4 : $("input[name=inLineOptions4]:checked").val() == undefined ? $("#inLineOptions4").val() == undefined ? null : $("#inLineOptions4").val() : $("input[name=inLineOptions4]:checked").val(),
				tableData1 : $("#tableData1").val() == undefined ? null : encodeURIComponent($("#tableData1").val()),
				tableData2 : $("#tableData2").val() == undefined ? null : encodeURIComponent($("#tableData2").val()),
				tableData3 : $("#tableData3").val() == undefined ? null : encodeURIComponent($("#tableData3").val()),
				tableData4 : $("#tableData4").val() == undefined ? null : encodeURIComponent($("#tableData4").val()),
				message : $("#message").val(),
				taskId : $("#taskId").val(),
				state : $("input[name=state]").val(),
				condition : $("#condition").val() == undefined ? null : $("#condition").val(),
				follow : $("input[name=follow]").val() == undefined ? null : $("input[name=follow]").val()
			},
			success : function (data){
				if(data.indexOf("success") > -1){
					$.ajax({
						url : path + "/activiti/submitTask",
						type : 'POST',
						data : {"taskId" : $("#taskId").val(), "follow" : follow},
						success : function(data){
							if(data == "success"){
								window.location.href = path + "/views/historyTask.jsp?name=" + procdefId;
							}
						}
					});
				}
			},
			error : function(data){
				alert(JSON.stringify(data));
			}
		});
	}
}

function checkedRadioAndCheckbox(inLineOption, string)
{
	$("input[name= " + inLineOption + "]").each(function(index, item){
		var val =$(item).val();
		if(string.indexOf(",") > -1){
			var strs = string.split(",");
			for(var i = 0; i < strs.length; i++){
				if(val == strs[i]){
					$(item).attr("checked","checked");
				}
			}
			
		}else{
			if(val == string){
				$(item).attr("checked","checked");
			}
		}
	});	
}

var id, applicant, applyCompany, applyDept, apply, inLineOptions1, message;
var inLineOptions2, inLineOptions3, inLineOptions4;
var reserve1, reserve2, reserve3, reserve4, reserve5, reserve6, reserve7;
var reserve8, reserve9, reserve10, reserve11, reserve12, reserve13, reserve14, reserve15;
var tableData1, tableData2, tableData3, tableData4, opinions, applyManager, condition;
var processInstanceId, nextPerson;

function getData(object)
{
	id = $(object).find("td:eq(0)").text();
	applicant = $(object).find("td:eq(1)").text();
	applyCompany = $(object).find("td:eq(2)").text();
	applyDept = $(object).find("td:eq(3)").text();
	apply = $(object).find("td:eq(4)").text();
	inLineOptions1 = $(object).find("td:eq(5)").text();
	message = $(object).find("td:eq(6)").text();
	
	inLineOptions2 = $(object).find("td:eq(7)").text();
	inLineOptions3 = $(object).find("td:eq(8)").text();
	inLineOptions4 = $(object).find("td:eq(9)").text();
	
	reserve1 = $(object).find("td:eq(10)").text();
	reserve2 = $(object).find("td:eq(11)").text();
	reserve3 = $(object).find("td:eq(12)").text(); 
	reserve4 = $(object).find("td:eq(13)").text();
	reserve5 = $(object).find("td:eq(14)").text();
	reserve6 = $(object).find("td:eq(15)").text(); 
	reserve7 = $(object).find("td:eq(16)").text();
	reserve8 = $(object).find("td:eq(17)").text();
	reserve9 = $(object).find("td:eq(18)").text(); 
	reserve10 = $(object).find("td:eq(19)").text(); 
	reserve11 = $(object).find("td:eq(20)").text();
	reserve12 = $(object).find("td:eq(21)").text();
	reserve13 = $(object).find("td:eq(22)").text(); 
	reserve14 = $(object).find("td:eq(23)").text(); 
	reserve15 = $(object).find("td:eq(24)").text(); 

	tableData1 = $(object).find("td:eq(25)").text();
	tableData2 = $(object).find("td:eq(26)").text();
	tableData3 = $(object).find("td:eq(27)").text();
	tableData4 = $(object).find("td:eq(28)").text();
	
	opinions = $(object).find("td:eq(29)").text();
	applyManager = $(object).find("td:eq(30)").text();
	condition = $(object).find("td:eq(31)").text();
	
	processInstanceId = $(object).find("td:eq(32)").text();
	nextPerson = $(object).find("td:eq(33)").text();
}

function sendData(page)
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
			"reserve11" : reserve11, "reserve12" : reserve12, "reserve13" : reserve13, "reserve14" : reserve14, "reserve15" : reserve15
		},
		success : function(data){
			if(data == "success"){
				//window.location.href = path + "/views/" + page;
				window.open(path + "/views/" + page);
			}
		}
	});
}

function getAllTaskByName(pageNo, state)
{
	$.ajax({
		url : path + '/activiti/findTask',
		type : 'POST',
		data : {"pageNo" : pageNo, "state" : state},
		success : function(data){
			if(state == "未处理"){
				if(data.list.length == 0){
					$("#home1 tbody").empty();
					var td = $("<td  colspan='8'></td>").append("<h4>暂时没有模型数据</h4>").css("text-align","center");
					var tr = $("<tr></tr>").append(td).appendTo("#home1 tbody");
				}else{
					build_task_table(data, state);
					build_pageInfo(data, state);
					build_task_pagenav(data, state);
					$("#dw").append("<span>(" + data.total + ")</span>");
				}
			}else if(state == "未提交"){
				if(data.list.length == 0){
					$("#home2 tbody").empty();
					var td = $("<td  colspan='8'></td>").append("<h4>暂时没有模型数据</h4>").css("text-align","center");
					var tr = $("<tr></tr>").append(td).appendTo("#home2 tbody");
				}else{
					build_task_table(data, state);
					build_pageInfo(data, state);
					build_task_pagenav(data, state);
				}
			}
		}	
	});
}

//构建表格
function build_task_table(result, state)
{
	if(state == "未处理"){
		$("#home1 tbody").empty();
	}else{
		$("#home2 tbody").empty();
	}	
	var processs = result.list;
	$.each(processs, function(index, item){
		var id = $("<td></td>").append(item.id);
		var applicant = $("<td></td>").append(item.applicant);
		var applyCompany = $("<td></td>").append(item.variables.applyCompany);
		var applyDept = $("<td></td>").append(item.variables.applyDept);
		var apply = $("<td></td>").append(item.variables.applyTime);
		var inLineOptions1 = $("<td></td>").append(item.variables.inLineOptions1);
		var message = $("<td></td>").append(item.variables.message == "通过" ? "已审批" : item.variables.message);
		
		var inLineOptions2 = $("<td style='display:none;'></td>").append(item.variables.inLineOptions2);
		var inLineOptions3 = $("<td style='display:none;'></td>").append(item.variables.inLineOptions3);
		var inLineOptions4 = $("<td style='display:none;'></td>").append(item.variables.inLineOptions4);
		
		var reserve1 = $("<td style='display:none;'></td>").append(item.variables.reserve1); 
		var reserve2 = $("<td style='display:none;'></td>").append(item.variables.reserve2); 
		var reserve3 = $("<td style='display:none;'></td>").append(item.variables.reserve3); 
		var reserve4 = $("<td style='display:none;'></td>").append(item.variables.reserve4); 
		var reserve5 = $("<td style='display:none;'></td>").append(item.variables.reserve5); 
		var reserve6 = $("<td style='display:none;'></td>").append(item.variables.reserve6); 
		var reserve7 = $("<td style='display:none;'></td>").append(item.variables.reserve7); 
		var reserve8 = $("<td style='display:none;'></td>").append(item.variables.reserve8); 
		var reserve9 = $("<td style='display:none;'></td>").append(item.variables.reserve9); 
		var reserve10 = $("<td style='display:none;'></td>").append(item.variables.reserve10); 
		var reserve11 = $("<td style='display:none;'></td>").append(item.variables.reserve11); 
		var reserve12 = $("<td style='display:none;'></td>").append(item.variables.reserve12); 
		var reserve13 = $("<td style='display:none;'></td>").append(item.variables.reserve13); 
		var reserve14 = $("<td style='display:none;'></td>").append(item.variables.reserve14); 
		var reserve15 = $("<td style='display:none;'></td>").append(item.variables.reserve15); 

		var tableData1 = $("<td style='display:none;'></td>").append(item.variables.tableData1);
		var tableData2 = $("<td style='display:none;'></td>").append(item.variables.tableData2);
		var tableData3 = $("<td style='display:none;'></td>").append(item.variables.tableData3);
		var tableData4 = $("<td style='display:none;'></td>").append(item.variables.tableData4);

		var opinions = $("<td style='display:none;'></td>").append(item.variables.opinions);
		
		var applyManager = $("<td style='display:none;'></td>").append(item.variables.applyManager);
		
		var condition = $("<td style='display:none;'></td>").append(item.variables.condition);
		
		var processInstanceId = $("<td style='display:none;'></td>").append(item.processInstanceId);
		var nextPerson = $("<td style='display:none;'></td>").append(item.variables.nextPerson);
		
		if(state == "未提交"){
			var btndel = $("<a></a>").attr("href","javascript:void(0)").css("color","#317EEB").append("撤销&nbsp;&nbsp;&nbsp;&nbsp;");
			var span1 = $("<span></span>").css("color","silver").append("|");
			var btnsel = $("<a></a>").attr("href","javascript:void(0)").css("color","#317EEB").append("&nbsp;&nbsp;编辑&nbsp;&nbsp;&nbsp;&nbsp;");
			var span2 = $("<span></span>").css("color","silver").append("|");
			var btnsub = $("<a></a>").attr("href","javascript:void(0)").css("color","#317EEB").append("&nbsp;&nbsp;提交");
			var btn = $("<td></td>").append(btndel).append(span1).append(btnsel).append(span2).append(btnsub);
			
			$("<tr></tr>").append(id).append(applicant).append(applyCompany).append(applyDept).append(apply).append(inLineOptions1).append(message)
			.append(inLineOptions2).append(inLineOptions3).append(inLineOptions4)
			.append(reserve1).append(reserve2).append(reserve3).append(reserve4).append(reserve5).append(reserve6).append(reserve7)
			.append(reserve8).append(reserve9).append(reserve10).append(reserve11).append(reserve12).append(reserve13).append(reserve14).append(reserve15)
			.append(tableData1).append(tableData2).append(tableData3).append(tableData4).append(opinions).append(applyManager).append(condition)
			.append(processInstanceId).append(nextPerson).append(btn).appendTo("#home2 tbody");
		}else{
			$("<tr></tr>").append(id).append(applicant).append(applyCompany).append(applyDept).append(apply).append(inLineOptions1).append(message)
			.append(inLineOptions2).append(inLineOptions3).append(inLineOptions4)
			.append(reserve1).append(reserve2).append(reserve3).append(reserve4).append(reserve5).append(reserve6).append(reserve7)
			.append(reserve8).append(reserve9).append(reserve10).append(reserve11).append(reserve12).append(reserve13).append(reserve14).append(reserve15)
			.append(tableData1).append(tableData2).append(tableData3).append(tableData4).append(opinions).append(applyManager).append(condition)
			.append(processInstanceId).append(nextPerson).appendTo("#home1 tbody");
		}
	});
}

var currentPageNo;

//构建分页信息
function build_pageInfo(result, state)
{
	if(state == "未处理"){
		$("#pageInfo1").empty();
		$("#pageInfo1").append("当前第" + result.pageNum + "页,总共" + result.pages + "页,总共" + result.total + "记录");
	}else{
		$("#pageInfo2").empty();
		$("#pageInfo2").append("当前第" + result.pageNum + "页,总共" + result.pages + "页,总共" + result.total + "记录");
	}
	currentPageNo = result.pageNum;
}

//构建分页条
function build_task_pagenav(result, state)
{
	var ul = $("<ul></ul>").addClass("pagination fy");
	var firstLi=$("<li></li>").append($("<a></a>").append("首页").attr("href","javascript:void(0)"));
	var preLi=$("<li></li>").append($("<a></a>").append("&laquo;").attr("href","javascript:void(0)"));
	ul.append(firstLi).append(preLi);
	if(result.pageNum == 1){
		firstLi.addClass("disabled");
		preLi.addClass("disabled");
	}else{
		if(state == "未处理"){
			firstLi.click(function(){
				getAllTaskByName(1, "未处理");
			});
			preLi.click(function(){
				getAllTaskByName(result.pageNum - 1, "未处理");
			});
		}else{
			firstLi.click(function(){
				getAllTaskByName(1, "未提交");
			});
			preLi.click(function(){
				getAllTaskByName(result.pageNum - 1, "未提交");
			});
		}
	}
	var nextLi=$("<li></li>").append($("<a></a>").append("&raquo;").attr("href","javascript:void(0)"));
	var lastLi=$("<li></li>").append($("<a></a>").append("末页").attr("href","javascript:void(0)"));
	if(result.pageNum == result.pages){
		nextLi.addClass("disabled");
		lastLi.addClass("disabled");
	}else{
		if(state == "未处理"){
			nextLi.click(function(){
				getAllTaskByName(result.pageNum + 1, "未处理");
			});
			lastLi.click(function(){
				getAllTaskByName(result.pages, "未处理");
			});
		}else{
			nextLi.click(function(){
				getAllTaskByName(result.pageNum + 1, "未提交");
			});
			lastLi.click(function(){
				getAllTaskByName(result.pages, "未提交");
			});
		}
	}
	$.each(result.pageNums,function(index,item){
		var numLi=$("<li></li>").append($("<a></a>").append(item).attr("href","javascript:void(0)"));
		if(result.pageNum==item)
		{
			numLi.addClass("active");
		}
		numLi.click(function(){
			if(state == "未处理"){
				getAllTaskByName(item, "未处理");
			}else{
				getAllTaskByName(item, "未提交");
			}
		});
		ul.append(numLi);
	});
	ul.append(nextLi).append(lastLi);
	if(state == "未处理"){
		$("#pageNav1").empty();
		$("<nav></nav>").attr("aria-label","Page navigation").append(ul).appendTo("#pageNav1");
	}else{
		$("#pageNav2").empty();
		$("<nav></nav>").attr("aria-label","Page navigation").append(ul).appendTo("#pageNav2");
	}
}

function today(){
    var today=new Date();
    var h=today.getFullYear();
    var m=today.getMonth()+1;
    var d=today.getDate();
    m= m<10?"0"+m:m;   //  这里判断月份是否<10,如果是在月份前面加'0'
    d= d<10?"0"+d:d;        //  这里判断日期是否<10,如果是在日期前面加'0'
    return h+"-"+m+"-"+d;
}

function hour(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    return h + ":" + m;
}

function formatNumber(num,pattern){   
	var strarr = num?num.toString().split('.'):['0'];   
	var fmtarr = pattern?pattern.split('.'):[''];   
	var retstr='';   
	   
	// 整数部分   
	var str = strarr[0];   
	var fmt = fmtarr[0];   
	var i = str.length-1;     
	var comma = false;   
	for(var f=fmt.length-1;f>=0;f--){   
		switch(fmt.substr(f,1)){   
			case '#':   
			if(i>=0 ) retstr = str.substr(i--,1) + retstr;   
			break;   
			case '0':   
			if(i>=0) retstr = str.substr(i--,1) + retstr;   
			else retstr = '0' + retstr;   
			break;   
			case ',':   
			comma = true;   
			retstr=','+retstr;   
			break;   
		}   
	}   
	
	if(i>=0){   
		if(comma){   
			var l = str.length;   
			for(;i>=0;i--){   
				retstr = str.substr(i,1) + retstr;   
				if(i>0 && ((l-i)%3)==0) retstr = ',' + retstr;    
			}   
		}   
		else retstr = str.substr(0,i+1) + retstr;   
	}   
	   
	retstr = retstr+'.';   
	// 处理小数部分   
	str=strarr.length>1?strarr[1]:'';   
	fmt=fmtarr.length>1?fmtarr[1]:'';   
	i=0;   
	for(var f=0;f<fmt.length;f++){   
		switch(fmt.substr(f,1)){   
			case '#':   
			if(i<str.length) retstr+=str.substr(i++,1);   
			break;   
			case '0':   
			if(i<str.length) retstr+= str.substr(i++,1);   
			else retstr+='0';   
			break;   
		}   
	}
	return retstr.replace(/^,+/,'').replace(/\.$/,'');  
} 

function searchTaskByCondition(pageNo, startTime, endTime, eName, company, dept, state)
{
	if(startTime != "开始时间..." && endTime == "结束时间..."){
		alert("请选择结束时间...");
		return;
	}else if(startTime == "开始时间..." && endTime != "结束时间..."){
		alert("请选择开始时间...");
		return;
	}
	$.ajax({
		url : path + '/activiti/searchTaskByCondition',
		type : 'POST',
		data : {"pageNo" : pageNo, "startTime" : startTime, "endTime" : endTime, "eName" : eName, "company" : company, "dept" : dept, "state" : state},
		success : function(data){
			if(state == "未处理"){
				if(data.list.length == 0){
					$("#home1 tbody").empty();
					$("#pageInfo1").text("");
					$("#pageNav1").empty();
					var td = $("<td  colspan='8'></td>").append("<h4>暂时没有模型数据</h4>").css("text-align","center");
					var tr = $("<tr></tr>").append(td).appendTo("#home1 tbody");
				}else{
					build_task_table(data, state);
					$("#pageInfo1").text("");
					$("#pageInfo1").text("当前第" + data.pageNum + "页,总共" + data.pages + "页,总共" + data.total + "记录");
					build_searchTask_pagenav(data, "#pageNav1", pageNo, startTime, endTime, eName, company, dept, state);
				}
			}else{
				if(data.list.length == 0){
					$("#home2 tbody").empty();
					$("#pageInfo2").text("");
					$("#pageNav2").empty();
					var td = $("<td  colspan='8'></td>").append("<h4>暂时没有模型数据</h4>").css("text-align","center");
					var tr = $("<tr></tr>").append(td).appendTo("#home2 tbody");
				}else{
					build_task_table(data, state);
					$("#pageInfo2").text("");
					$("#pageInfo2").text("当前第" + data.pageNum + "页,总共" + data.pages + "页,总共" + data.total + "记录");
					build_searchTask_pagenav(data, "#pageNav2", pageNo, startTime, endTime, eName, company, dept, state);
				}
			}
		}
	});
}

//构建分页条
function build_searchTask_pagenav(result, str, pageNo, startTime, endTime, eName, company, dept, state)
{
	$(str).empty()
	var ul = $("<ul></ul>").addClass("pagination fy");
	var firstLi=$("<li></li>").append($("<a></a>").append("首页").attr("href","javascript:void(0)"));
	var preLi=$("<li></li>").append($("<a></a>").append("&laquo;").attr("href","javascript:void(0)"));
	ul.append(firstLi).append(preLi);
	if(result.pageNum == 1){
		firstLi.addClass("disabled");
		preLi.addClass("disabled");
	}else{
		firstLi.click(function(){
			searchTaskByCondition(1, startTime, endTime, eName, company, dept, state);
		});
		preLi.click(function(){
			searchTaskByCondition(result.pageNum - 1, startTime, endTime, eName, company, dept, state);
		});
	}
	var nextLi=$("<li></li>").append($("<a></a>").append("&raquo;").attr("href","javascript:void(0)"));
	var lastLi=$("<li></li>").append($("<a></a>").append("末页").attr("href","javascript:void(0)"));
	if(result.pageNum == result.pages){
		nextLi.addClass("disabled");
		lastLi.addClass("disabled");
	}else{
		nextLi.click(function(){
			searchTaskByCondition(result.pageNum + 1, startTime, endTime, eName, company, dept, state);
		});
		lastLi.click(function(){
			searchTaskByCondition(result.pages, startTime, endTime, eName, company, dept, state);
		});
	}
	$.each(result.pageNums,function(index,item){
		var numLi=$("<li></li>").append($("<a></a>").append(item).attr("href","javascript:void(0)"));
		if(result.pageNum==item)
		{
			numLi.addClass("active");
		}
		numLi.click(function(){
			searchTaskByCondition(item, startTime, endTime, eName, company, dept, state);
		});
		ul.append(numLi);
	});
	ul.append(nextLi).append(lastLi);
	$("<nav></nav>").attr("aria-label","Page navigation").append(ul).appendTo(str);
}

function completeAllTask(form) // 完成任务
{
	$.ajax({
		url : path + '/activiti/completeAllTask',
		type : 'POST',
		data : $(form).serialize(),
		dataType : 'text',
		success: function(data) {  
			if(data == "success"){
				window.location.href = path + "/views/" + page;
			}
		}
	});
}

function opinions(opinions, opinion)
{
	$(opinion).empty()
	var strs = opinions.split(",");
	for(var i = 0; i < strs.length - 1; i++){
		var str = strs[i].split("---");
		$(opinion).append("<span class='t1'> " + str[0] + "： </span><input type='text' value='" + str[1] + "' disabled class='i-3' style='width:1000px;'></br>")
	}
}

function inLineOptions(inLineOption, String)
{
	$("input[name= " + inLineOption + "]").each(function(index, item){
		var val =$(item).val();
		if(String.indexOf(",") > -1){
			var strs = String.split(",");
			for(var i = 0; i < strs.length; i++){
				if(val == strs[i]){
					$(item).attr("checked","checked");
				}
			}
			
		}else{
			if(val == String){
				$(item).attr("checked","checked");
			}
		}
	});
}

//设置多个表格可编辑
function EditTables(){
	for(var i=0;i<arguments.length;i++){
	   SetTableCanEdit(arguments[i]);
	}
}

//设置表格是可编辑的
function SetTableCanEdit(table){
	for(var i=1; i<table.rows.length;i++){
	   SetRowCanEdit(table.rows[i]);
	}
}

function SetRowCanEdit(row){
	for(var j=0;j<row.cells.length; j++){
		//如果当前单元格指定了编辑类型，则表示允许编辑
		var editType = row.cells[j].getAttribute("EditType");
		if(!editType){
			//如果当前单元格没有指定，则查看当前列是否指定
			editType = row.parentNode.rows[0].cells[j].getAttribute("EditType");
		}
		if(editType){
			row.cells[j].onclick = function (){
				EditCell(this);
			}
		}
	}
}

//设置指定单元格可编辑
function EditCell(element, editType){
	var editType = element.getAttribute("EditType");
	if(!editType){
	   //如果当前单元格没有指定，则查看当前列是否指定
	   editType = element.parentNode.parentNode.rows[0].cells[element.cellIndex].getAttribute("EditType");
	}
	switch(editType){
		case "TextBox":
		CreateTextBox(element, element.innerHTML);
		break;
		case "DropDownList":
		CreateDropDownList(element);
		break;
		default:
		break;
	}
}

//为单元格创建可编辑输入框
function CreateTextBox(element, value){
	//检查编辑状态，如果已经是编辑状态，跳过
	var editState = element.getAttribute("EditState");
	if(editState != "true"){
		//创建文本框
		var textBox = document.createElement("INPUT");
		textBox.type = "text";
		textBox.className="EditCell_TextBox";
		//设置文本框当前值
		if(!value){
			value = element.getAttribute("Value");
		}  
		textBox.value = value;
		//设置文本框的失去焦点事件
		textBox.onblur = function (){
			CancelEditCell(this.parentNode, this.value);
		}
		//向当前单元格添加文本框
		ClearChild(element);
		element.appendChild(textBox);
		textBox.focus();
		textBox.select();
		//改变状态变量
		element.setAttribute("EditState", "true");
		element.parentNode.parentNode.setAttribute("CurrentRow", element.parentNode.rowIndex);
	}
}

//为单元格创建选择框
function CreateDropDownList(element, value){
	//检查编辑状态，如果已经是编辑状态，跳过
	var editState = element.getAttribute("EditState");
	if(editState != "true"){
		//创建下接框
		var downList = document.createElement("Select");
		downList.className="EditCell_DropDownList";
		//添加列表项
		var items = element.getAttribute("DataItems");
		if(!items){
			items = element.parentNode.parentNode.rows[0].cells[element.cellIndex].getAttribute("DataItems");
		}
		if(items){
			items = eval("[" + items + "]");
			for(var i=0; i<items.length; i++){
				var oOption = document.createElement("OPTION");
				oOption.text = items[i].text;
				oOption.value = items[i].value;
				downList.options.add(oOption);
			}
		}
		//设置列表当前值
		if(!value){
			value = element.getAttribute("Value");
		}
		downList.value = value;
		//设置创建下接框的失去焦点事件
		downList.onblur = function (){
			CancelEditCell(this.parentNode, this.value, this.options[this.selectedIndex].text);
		}
		//向当前单元格添加创建下接框
		ClearChild(element);
		element.appendChild(downList);
		downList.focus();
		//记录状态的改变
		element.setAttribute("EditState", "true");
		element.parentNode.parentNode.setAttribute("LastEditRow", element.parentNode.rowIndex);
	}
}

//取消单元格编辑状态
function CancelEditCell(element, value, text){
	element.setAttribute("Value", value);
	if(text){
		element.innerHTML = text;
	}else{
		element.innerHTML = value;
	}
	element.setAttribute("EditState", "false");
	//检查是否有公式计算
	CheckExpression(element.parentNode);
}

//清空指定对象的所有字节点
function ClearChild(element){
	element.innerHTML = "";
}

//删除行
function DeleteRow(table, index){
	for(var i=table.rows.length - 1; i>0;i--){
		var chkOrder = table.rows[i].cells[0].firstChild;
		if(chkOrder){
			if(chkOrder.type = "CHECKBOX"){
				if(chkOrder.checked){
					//执行删除
					table.deleteRow(i);
				}
			}
		}
	}
}

//提取表格的值,JSON格式
function GetTableData(table){
	var tableData = new Array();
	for(var i=1; i<table.rows.length;i++){
		tableData.push(GetRowData(table.rows[i]));
	}
	return tableData;
}

//提取指定行的数据，JSON格式
function GetRowData(row){
	var rowData = {};
	for(var j=0;j<row.cells.length; j++){
		name = row.parentNode.rows[0].cells[j].getAttribute("Name");
		if(name){
			var value = row.cells[j].getAttribute("Value");
			if(!value){
				value = row.cells[j].innerHTML;
			}
			rowData[name] = value;
		}
	}
	return rowData;
}

//检查当前数据行中需要运行的字段
function CheckExpression(row){
	for(var j=0;j<row.cells.length; j++){
		expn = row.parentNode.rows[0].cells[j].getAttribute("Expression");
		//如指定了公式则要求计算
		if(expn){
			var result = Expression(row,expn);
			var format = row.parentNode.rows[0].cells[j].getAttribute("Format");
			if(format){
				//如指定了格式，进行字值格式化
				row.cells[j].innerHTML = formatNumber(Expression(row,expn), format);
			}else{
				row.cells[j].innerHTML = Expression(row,expn);
			}
		}
	}
}

//计算需要运算的字段
function Expression(row, expn){
	var rowData = GetRowData(row);
	//循环代值计算
	for(var j=0;j<row.cells.length; j++){
		name = row.parentNode.rows[0].cells[j].getAttribute("Name");
		if(name){
			var reg = new RegExp(name, "i");
			expn = expn.replace(reg, rowData[name].replace(/\,/g, ""));
		}
	}
	return eval(expn);
}

function formatData(sDate,eDate){  
    var stime = Date.parse(sDate.replace(/-/g,"/"));  
    var etime = Date.parse(eDate.replace(/-/g,"/"));  
    var usedTime = etime - stime;  //两个时间戳相差的毫秒数  
    var days=Math.floor(usedTime/(24*3600*1000));  
    //计算出小时数  
    var leave1=usedTime%(24*3600*1000);    //计算天数后剩余的毫秒数  
    var hours=Math.floor(leave1/(3600*1000));  
    var time = days + "天"+hours+"时";
    return time;  
} 

/**
 * var start_time = $("#start_time").val().replace(/\-/g,"/") + " " + $("#start_time1").val(); 
 * var end_time = $("#end_time").val().replace(/\-/g,"/") + " " + $("#end_time1").val(); 
 * var date1 = new Date(start_time); 
 * var date2 = new Date(end_time); 
 * var s1 = date1.getTime(),s2 = date2.getTime(); 
 * var total = (s2 - s1)/1000; 
 * var day = parseInt(total / (24*60*60));//计算整数天数 
 * var afterDay = total - day*24*60*60;//取得算出天数后剩余的秒数 
 * var hour = parseInt(afterDay/(60*60));//计算整数小时数
 * var afterHour = total - day*24*60*60 - hour*60*60;//取得算出小时数后剩余的秒数 
 * var min = parseInt(afterHour/60);//计算整数分 
 * var afterMin = total - day*24*60*60 - hour*60*60 - min*60;//取得算出分后剩余的秒数
 */

function selected(selectObject, selectValue)
{
	$(selectObject).find("option[value='" + selectValue + "']").attr("selected", "selected");
}

function createModel()
{
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
}

$(function(){
	createModel();
	follow();
});

function follow()
{
	$("#follow").click(function(){
		var value = $(this).val();
		if(value == "关注"){
			$(this).val("已关注");
			$("input[name=follow]").val("已关注");
		}else{
			$(this).val("关注");
			$("input[name=follow]").val("关注");
		}
	});
}

$(".vertical-nav a").click(function(){
	if($(this).attr("href") == "/JMOA/javascript:;"){
		return false;
	}
});

function build_home()
{
	getTaskWithHome(1);
	
	getTaskWithHomeHis(1);
	
	getTaskWithHomeByFollow(1);
	
	function getTaskWithHome(pageNo)
	{
		$.ajax({
			url : path + '/activiti/getTaskWithHome',
			type : 'POST',
			data : {"pageNo" : pageNo},
			success : function(data){
				if(data.list.length == 0){
					var td = $("<td  colspan='4'></td>").append("<h4>暂时没有模型数据</h4>").css("text-align","center");
					var tr = $("<tr></tr>").append(td).appendTo("#homeTable1 tbody");
				}else{
					build_home(data);
					build_home_pagenav(data);
					$("#hnc span").empty();
					$("#hnc span").append("(" + data.total + ")");
				}
			}
		});
	}
	
	function getTaskWithHomeHis(pageNo)
	{
		$.ajax({
			url : path + '/activiti/getTaskWithHomeHis',
			type : 'POST',
			data : {"pageNo" : pageNo},
			success : function(data){
				if(data.list.length == 0){
					var td = $("<td  colspan='4'></td>").append("<h4>暂时没有模型数据</h4>").css("text-align","center");
					var tr = $("<tr></tr>").append(td).appendTo("#homeTable2 tbody");
				}else{
					build_home_his(data);
					build_home_his_pagenav(data);
					$("#hyc span").empty();
					//$("#hyc span").append("(" + data.total + ")");
				}
			}
		});
	}
	
	function getTaskWithHomeByFollow(pageNo)
	{
		$.ajax({
			url : path + '/activiti/getTaskWithHomeByFollow',
			type : 'POST',
			data : {"pageNo" : pageNo},
			success : function(data){
				if(data.list.length == 0){
					var td = $("<td  colspan='5'></td>").append("<h4>暂时没有模型数据</h4>").css("text-align","center");
					var tr = $("<tr></tr>").append(td).appendTo("#homeTable3 tbody");
				}else{
					build_home_follow(data);
					build_home_follow_pagenav(data);
					$("#hfc span").empty();
					$("#hfc span").append("(" + data.total + ")");
				}
			}
		});
	}
	
	function build_home(data)
	{
		$("#homeTable1 tbody").empty();
		$.each(data.list, function(index, item){
			var span = $("<span class='icon-angle-right icon-large'></span>");
			var id = $("<td style='display:none;'></td>").append(item.id);
			var applicant = $("<td></td>").append(item.applicant);
			var applyCompany = $("<td style='display:none;'></td>").append(item.variables.applyCompany);
			var applyDept = $("<td style='display:none;'></td>").append(item.variables.applyDept);
			var apply = $("<td></td>").append(item.variables.applyTime);
			var inLineOptions1 = $("<td></td>").append(item.variables.inLineOptions1);
			var message = $("<td style='display:none;'></td>").append(item.variables.message == "通过" ? "已审批" : item.variables.message);
			
			var inLineOptions2 = $("<td style='display:none;'></td>").append(item.variables.inLineOptions2);
			var inLineOptions3 = $("<td style='display:none;'></td>").append(item.variables.inLineOptions3);
			var inLineOptions4 = $("<td style='display:none;'></td>").append(item.variables.inLineOptions4);
			
			var reserve1 = $("<td style='display:none;'></td>").append(item.variables.reserve1); 
			var reserve2 = $("<td style='display:none;'></td>").append(item.variables.reserve2); 
			var reserve3 = $("<td style='display:none;'></td>").append(item.variables.reserve3); 
			var reserve4 = $("<td style='display:none;'></td>").append(item.variables.reserve4); 
			var reserve5 = $("<td style='display:none;'></td>").append(item.variables.reserve5); 
			var reserve6 = $("<td style='display:none;'></td>").append(item.variables.reserve6); 
			var reserve7 = $("<td style='display:none;'></td>").append(item.variables.reserve7); 
			var reserve8 = $("<td style='display:none;'></td>").append(item.variables.reserve8); 
			var reserve9 = $("<td style='display:none;'></td>").append(item.variables.reserve9); 
			var reserve10 = $("<td style='display:none;'></td>").append(item.variables.reserve10); 
			var reserve11 = $("<td style='display:none;'></td>").append(item.variables.reserve11); 
			var reserve12 = $("<td style='display:none;'></td>").append(item.variables.reserve12); 
			var reserve13 = $("<td style='display:none;'></td>").append(item.variables.reserve13); 
			var reserve14 = $("<td style='display:none;'></td>").append(item.variables.reserve14); 
			var reserve15 = $("<td style='display:none;'></td>").append(item.variables.reserve15); 
			var reserve16 = $("<td style='display:none;'></td>").append(item.variables.reserve16); 
			var reserve17 = $("<td style='display:none;'></td>").append(item.variables.reserve17); 
			var reserve18 = $("<td style='display:none;'></td>").append(item.variables.reserve18); 
			var reserve19 = $("<td style='display:none;'></td>").append(item.variables.reserve19); 
			var reserve20 = $("<td style='display:none;'></td>").append(item.variables.reserve20); 
			var reserve21 = $("<td style='display:none;'></td>").append(item.variables.reserve21); 
			var reserve22 = $("<td style='display:none;'></td>").append(item.variables.reserve22); 
			var reserve23 = $("<td style='display:none;'></td>").append(item.variables.reserve23); 
			var reserve24 = $("<td style='display:none;'></td>").append(item.variables.reserve24); 
			var reserve25 = $("<td style='display:none;'></td>").append(item.variables.reserve25); 
			var reserve26 = $("<td style='display:none;'></td>").append(item.variables.reserve26); 
			var reserve27 = $("<td style='display:none;'></td>").append(item.variables.reserve27); 
			var reserve28 = $("<td style='display:none;'></td>").append(item.variables.reserve28); 
			var reserve29 = $("<td style='display:none;'></td>").append(item.variables.reserve29); 
			var reserve30 = $("<td style='display:none;'></td>").append(item.variables.reserve30); 
			var reserve31 = $("<td style='display:none;'></td>").append(item.variables.reserve31); 
			var reserve32 = $("<td style='display:none;'></td>").append(item.variables.reserve32); 
			var reserve33 = $("<td style='display:none;'></td>").append(item.variables.reserve33); 
			var reserve34 = $("<td style='display:none;'></td>").append(item.variables.reserve34); 
			var reserve35 = $("<td style='display:none;'></td>").append(item.variables.reserve35); 
			var reserve36 = $("<td style='display:none;'></td>").append(item.variables.reserve36); 
			var reserve37 = $("<td style='display:none;'></td>").append(item.variables.reserve37); 
			var reserve38 = $("<td style='display:none;'></td>").append(item.variables.reserve38); 
			var reserve39 = $("<td style='display:none;'></td>").append(item.variables.reserve39); 
			var reserve40 = $("<td style='display:none;'></td>").append(item.variables.reserve40); 
			var reserve41 = $("<td style='display:none;'></td>").append(item.variables.reserve41); 
			var reserve42 = $("<td style='display:none;'></td>").append(item.variables.reserve42); 
			var reserve43 = $("<td style='display:none;'></td>").append(item.variables.reserve43); 
			var tableData1 = $("<td style='display:none;'></td>").append(item.variables.tableData1);
			var tableData2 = $("<td style='display:none;'></td>").append(item.variables.tableData2);
			var tableData3 = $("<td style='display:none;'></td>").append(item.variables.tableData3);
			var tableData4 = $("<td style='display:none;'></td>").append(item.variables.tableData4);

			var opinions = $("<td style='display:none;'></td>").append(item.variables.opinions);
			
			var applyManager = $("<td style='display:none;'></td>").append(item.variables.applyManager);
			
			var condition = $("<td style='display:none;'></td>").append(item.variables.condition);
			
			var processInstanceId = $("<td style='display:none;'></td>").append(item.processInstanceId);
			var nextPerson = $("<td style='display:none;'></td>").append(item.variables.nextPerson);
			
			var processName = $("<td></td>").append(span).append(item.taskDefinitionKey);
			
			$("<tr></tr>").append(processName).append(inLineOptions1).append(applicant).append(id).append(applyCompany).append(applyDept).append(apply).append(message)
			.append(inLineOptions2).append(inLineOptions3).append(inLineOptions4)
			.append(reserve1).append(reserve2).append(reserve3).append(reserve4).append(reserve5).append(reserve6).append(reserve7)
			.append(reserve8).append(reserve9).append(reserve10).append(reserve11).append(reserve12).append(reserve13).append(reserve14).append(reserve15)
			.append(tableData1).append(tableData2).append(tableData3).append(tableData4).append(opinions).append(applyManager).append(condition)
			.append(processInstanceId).append(nextPerson)
			.append(reserve16).append(reserve17).append(reserve18).append(reserve19).append(reserve20).append(reserve21).append(reserve22).append(reserve23)
			.append(reserve24).append(reserve25).append(reserve26).append(reserve27).append(reserve28).append(reserve29).append(reserve30).append(reserve31)
			.append(reserve32).append(reserve33).append(reserve34).append(reserve35).append(reserve36).append(reserve37).append(reserve38).append(reserve39)
			.append(reserve40).append(reserve41).append(reserve42).append(reserve43)
			.appendTo("#homeTable1 tbody");
		});
	}
	
	function build_home_his(data)
	{
		$("#homeTable2 tbody").empty();
		$.each(data.list, function(index, item){
			var span = $("<span class='icon-angle-right icon-large'></span>");
			
			var id = $("<td style='display:none;'></td>").append(item.id);
			var applicant = $("<td></td>").append(item.hisVariable.applicant);
			var applyCompany = $("<td style='display:none;'></td>").append(item.hisVariable.applyCompany);
			var applyDept = $("<td style='display:none;'></td>").append(item.hisVariable.applyDept);
			var apply = $("<td></td>").append(item.hisVariable.applyTime);
			var inLineOptions1 = $("<td></td>").append(item.hisVariable.inLineOptions1);
			var message;
			if(item.hisVariable.message == "驳回"){
				message = $("<td style='display:none;'></td>").append(item.hisVariable.message);
			}else if(item.hisVariable.message == "完成"){
				message = $("<td style='display:none;'></td>").append(item.hisVariable.message);
			}else if(item.hisVariable.message == "通过"){
				message = $("<td style='display:none;'></td>").append("审批中");
			}else{
				message = $("<td style='display:none;'></td>").append("未提交");
			}
			
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
			
			var applyManager = $("<td style='display:none;'></td>").append(item.hisVariable.applyManager);
			
			var condition = $("<td style='display:none;'></td>").append(item.hisVariable.condition);
			
			var processInstanceId = $("<td style='display:none;'></td>").append(item.processInstanceId);
			var nextPerson = $("<td style='display:none;'></td>").append(item.hisVariable.nextPerson);
			
			var processName = $("<td></td>").append(span).append(item.assignee);
			
			$("<tr></tr>").append(processName).append(inLineOptions1).append(applicant).append(id).append(applyCompany).append(applyDept).append(apply).append(message)
			.append(inLineOptions2).append(inLineOptions3).append(inLineOptions4)
			.append(reserve1).append(reserve2).append(reserve3).append(reserve4).append(reserve5).append(reserve6).append(reserve7)
			.append(reserve8).append(reserve9).append(reserve10).append(reserve11).append(reserve12).append(reserve13).append(reserve14).append(reserve15)
			.append(tableData1).append(tableData2).append(tableData3).append(tableData4).append(opinions).append(applyManager).append(condition)
			.append(processInstanceId).append(nextPerson)
			.append(reserve16).append(reserve17).append(reserve18).append(reserve19).append(reserve20).append(reserve21).append(reserve22).append(reserve23)
			.append(reserve24).append(reserve25).append(reserve26).append(reserve27).append(reserve28).append(reserve29).append(reserve30).append(reserve31)
			.append(reserve32).append(reserve33).append(reserve34).append(reserve35).append(reserve36).append(reserve37).append(reserve38).append(reserve39)
			.append(reserve40).append(reserve41).append(reserve42).append(reserve43)
			.appendTo("#homeTable2 tbody");
		});
	}
	
	function build_home_follow(data)
	{
		$("#homeTable3 tbody").empty();
		$.each(data.list, function(index, item){
			var span = $("<span class='icon-angle-right icon-large'></span>");
			
			var id = $("<td style='display:none;'></td>").append(item.id);
			var applicant = $("<td></td>").append(item.hisVariable.applicant);
			var applyCompany = $("<td style='display:none;'></td>").append(item.hisVariable.applyCompany);
			var applyDept = $("<td style='display:none;'></td>").append(item.hisVariable.applyDept);
			var apply = $("<td></td>").append(item.hisVariable.applyTime);
			var inLineOptions1 = $("<td></td>").append(item.hisVariable.inLineOptions1);
			var message;
			if(item.hisVariable.message == "驳回"){
				message = $("<td style='display:none;'></td>").append(item.hisVariable.message);
			}else if(item.hisVariable.message == "完成"){
				message = $("<td style='display:none;'></td>").append(item.hisVariable.message);
			}else if(item.hisVariable.message == "通过"){
				message = $("<td style='display:none;'></td>").append("审批中");
			}else{
				message = $("<td style='display:none;'></td>").append("未提交");
			}
			
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
			
			var applyManager = $("<td style='display:none;'></td>").append(item.hisVariable.applyManager);
			
			var condition = $("<td style='display:none;'></td>").append(item.hisVariable.condition);
			
			var processInstanceId = $("<td style='display:none;'></td>").append(item.processInstanceId);
			var nextPerson = $("<td style='display:none;'></td>").append(item.hisVariable.nextPerson);
			
			var processName = $("<td></td>").append(span).append(item.assignee);
			
			var btndel = $("<a></a>").attr("href","javascript:void(0)").css("color","#317EEB").append("撤销&nbsp;&nbsp;&nbsp;&nbsp;");
			var btn = $("<td></td>").append(btndel);
			
			$("<tr></tr>").append(processName).append(inLineOptions1).append(applicant).append(id).append(applyCompany).append(applyDept).append(apply).append(message)
			.append(inLineOptions2).append(inLineOptions3).append(inLineOptions4)
			.append(reserve1).append(reserve2).append(reserve3).append(reserve4).append(reserve5).append(reserve6).append(reserve7)
			.append(reserve8).append(reserve9).append(reserve10).append(reserve11).append(reserve12).append(reserve13).append(reserve14).append(reserve15)
			.append(tableData1).append(tableData2).append(tableData3).append(tableData4).append(opinions).append(applyManager).append(condition)
			.append(processInstanceId).append(nextPerson)
			.append(reserve16).append(reserve17).append(reserve18).append(reserve19).append(reserve20).append(reserve21).append(reserve22).append(reserve23)
			.append(reserve24).append(reserve25).append(reserve26).append(reserve27).append(reserve28).append(reserve29).append(reserve30).append(reserve31)
			.append(reserve32).append(reserve33).append(reserve34).append(reserve35).append(reserve36).append(reserve37).append(reserve38).append(reserve39)
			.append(reserve40).append(reserve41).append(reserve42).append(reserve43)
			.append(btn).appendTo("#homeTable3 tbody");
		});
	}
	
	function build_home_pagenav(data)
	{
		var ul = $("<ul></ul>").addClass("pagination fy");
		var firstLi=$("<li></li>").append($("<a></a>").append("首页").attr("href","javascript:void(0)"));
		var preLi=$("<li></li>").append($("<a></a>").append("&laquo;").attr("href","javascript:void(0)"));
		ul.append(firstLi).append(preLi);
		if(data.pageNum == 1){
			firstLi.addClass("disabled");
			preLi.addClass("disabled");
		}else{
			firstLi.click(function(){
				getTaskWithHome(1)
			});
			preLi.click(function(){
				getTaskWithHome(data.pageNum - 1);
			});
		}
		var nextLi=$("<li></li>").append($("<a></a>").append("&raquo;").attr("href","javascript:void(0)"));
		var lastLi=$("<li></li>").append($("<a></a>").append("末页").attr("href","javascript:void(0)"));
		if(data.pageNum == data.pages){
			nextLi.addClass("disabled");
			lastLi.addClass("disabled");
		}else{
			nextLi.click(function(){
				getTaskWithHome(data.pageNum + 1);
			});
			lastLi.click(function(){
				getTaskWithHome(data.pages);
			});
		}
		$.each(data.pageNums,function(index,item){
			var numLi=$("<li></li>").append($("<a></a>").append(item).attr("href","javascript:void(0)"));
			if(data.pageNum==item)
			{
				numLi.addClass("active");
			}
			numLi.click(function(){
				getTaskWithHome(item);
			});
			ul.append(numLi);
		});
		ul.append(nextLi).append(lastLi);
		$("#pageNav1").empty();
		$("<nav></nav>").attr("aria-label","Page navigation").css("position","absolute").css("right","20px").css("top","310px").append(ul).appendTo("#pageNav1");
	}
	
	function build_home_his_pagenav(data)
	{
		var ul = $("<ul></ul>").addClass("pagination fy");
		var firstLi=$("<li></li>").append($("<a></a>").append("首页").attr("href","javascript:void(0)"));
		var preLi=$("<li></li>").append($("<a></a>").append("&laquo;").attr("href","javascript:void(0)"));
		ul.append(firstLi).append(preLi);
		if(data.pageNum == 1){
			firstLi.addClass("disabled");
			preLi.addClass("disabled");
		}else{
			firstLi.click(function(){
				getTaskWithHomeHis(1)
			});
			preLi.click(function(){
				getTaskWithHomeHis(data.pageNum - 1);
			});
		}
		var nextLi=$("<li></li>").append($("<a></a>").append("&raquo;").attr("href","javascript:void(0)"));
		var lastLi=$("<li></li>").append($("<a></a>").append("末页").attr("href","javascript:void(0)"));
		if(data.pageNum == data.pages){
			nextLi.addClass("disabled");
			lastLi.addClass("disabled");
		}else{
			nextLi.click(function(){
				getTaskWithHomeHis(data.pageNum + 1);
			});
			lastLi.click(function(){
				getTaskWithHomeHis(data.pages);
			});
		}
		$.each(data.pageNums,function(index,item){
			var numLi=$("<li></li>").append($("<a></a>").append(item).attr("href","javascript:void(0)"));
			if(data.pageNum==item)
			{
				numLi.addClass("active");
			}
			numLi.click(function(){
				getTaskWithHomeHis(item);
			});
			ul.append(numLi);
		});
		ul.append(nextLi).append(lastLi);
		$("#pageNav2").empty();
		$("<nav></nav>").attr("aria-label","Page navigation").css("position","absolute").css("right","20px").css("top","310px").append(ul).appendTo("#pageNav2");
	}
	
	function build_home_follow_pagenav(data)
	{
		var ul = $("<ul></ul>").addClass("pagination fy");
		var firstLi=$("<li></li>").append($("<a></a>").append("首页").attr("href","javascript:void(0)"));
		var preLi=$("<li></li>").append($("<a></a>").append("&laquo;").attr("href","javascript:void(0)"));
		ul.append(firstLi).append(preLi);
		if(data.pageNum == 1){
			firstLi.addClass("disabled");
			preLi.addClass("disabled");
		}else{
			firstLi.click(function(){
				getTaskWithHomeByFollow(1)
			});
			preLi.click(function(){
				getTaskWithHomeByFollow(data.pageNum - 1);
			});
		}
		var nextLi=$("<li></li>").append($("<a></a>").append("&raquo;").attr("href","javascript:void(0)"));
		var lastLi=$("<li></li>").append($("<a></a>").append("末页").attr("href","javascript:void(0)"));
		if(data.pageNum == data.pages){
			nextLi.addClass("disabled");
			lastLi.addClass("disabled");
		}else{
			nextLi.click(function(){
				getTaskWithHomeByFollow(data.pageNum + 1);
			});
			lastLi.click(function(){
				getTaskWithHomeByFollow(data.pages);
			});
		}
		$.each(data.pageNums,function(index,item){
			var numLi=$("<li></li>").append($("<a></a>").append(item).attr("href","javascript:void(0)"));
			if(data.pageNum==item)
			{
				numLi.addClass("active");
			}
			numLi.click(function(){
				getTaskWithHomeByFollow(item);
			});
			ul.append(numLi);
		});
		ul.append(nextLi).append(lastLi);
		$("#pageNav3").empty();
		$("<nav></nav>").attr("aria-label","Page navigation").css("position","absolute").css("right","20px").css("top","310px").append(ul).appendTo("#pageNav3");
	}
}