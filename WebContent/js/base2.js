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
		procdefId = "process:26:800011";
	}else if(name == "出差申请"){
		procdefId = "process:27:800150";
	}else if(name == "加班申请"){
		procdefId = "process:28:800203";
	}else if(name == "用车申请"){
		procdefId = "process:30:800540";
	}else if(name == "名片印刷申请"){
		procdefId = "process:31:800682";
	}else if(name == "固定资产借出申请"){
		procdefId = "process:32:802509";
	}else if(name == "办公用品申请"){
		procdefId = "process:33:810054";
	}else if(name == "超额补贴申请"){
		procdefId = "process:34:810107";
	}else if(name == "招聘申请"){
		procdefId = "process:35:822504";
	}else if(name == "礼品申请"){
		procdefId = "process:36:847618";
	}else if(name == "离职申请"){
		procdefId = "process:37:847799";
	}else if(name == "用章申请"){
		procdefId = "process:38:850150";
	}else if(name == "印刷品印刷申请"){
		procdefId = "process:39:850379";
	}else if(name == "员工转正申请"){
		procdefId = "process:29:800386";
	}else if(name == "人事异动申请"){
		procdefId = "process:17:675004";
	}else if(name == "投标保证金申请"){
		procdefId = "process:18:677548";
	}else if(name == "特殊发货申请"){
		procdefId = "process:19:695004";
	}else if(name == "业务招待申请"){
		procdefId = "process:20:732552";
	}else if(name == "借款管理"){
		procdefId = "process:22:767507";
	}else if(name == "付款管理"){
		procdefId = "process:40:885043";
	}else if(name == "发票管理"){
		procdefId = "process:41:885363";
	}else if(name == "开户管理"){
		procdefId = "process:42:890190";
	}else if(name == "信息费管理"){
		procdefId = "process:43:890377";
	}else if(name == "报销管理"){
		procdefId = "process:21:752511";
	}else if(name == "回款管理"){
		procdefId = "process:44:895007";
	}else if(name == "非标技术评审"){
		procdefId = "process:2:1097504";
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
	$("#reserve16").val(reserve16);
	$("#reserve17").val(reserve17);
	$("#reserve18").val(reserve18);
	$("#reserve19").val(reserve19);
	$("#reserve20").val(reserve20);
	$("#reserve21").val(reserve21);
	$("#reserve22").val(reserve22);
	$("#reserve23").val(reserve23);
	$("#reserve24").val(reserve24);
	$("#reserve25").val(reserve25);
	$("#reserve26").val(reserve26);
	$("#reserve27").val(reserve27);
	$("#reserve28").val(reserve28);
	$("#reserve29").val(reserve29);
	$("#reserve30").val(reserve30);
	$("#reserve31").val(reserve31);
	$("#reserve32").val(reserve32);
	$("#reserve33").val(reserve33);
	$("#reserve34").val(reserve34);
	$("#reserve35").val(reserve35);
	$("#reserve36").val(reserve36);
	$("#reserve37").val(reserve37);
	$("#reserve38").val(reserve38);
	$("#reserve39").val(reserve39);
	$("#reserve40").val(reserve39);
	$("#reserve41").val(reserve39);
	$("#reserve42").val(reserve39);
	$("#reserve43").val(reserve39);
	
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
			reserve16 : $("#reserve16").val() == undefined ? null : $("#reserve16").val(),
			reserve17 : $("#reserve17").val() == undefined ? null : $("#reserve17").val(),
			reserve18 : $("#reserve18").val() == undefined ? null : $("#reserve18").val(),
			reserve19 : $("#reserve19").val() == undefined ? null : $("#reserve19").val(),
			reserve20 : $("#reserve20").val() == undefined ? null : $("#reserve20").val(),
			reserve21 : $("#reserve21").val() == undefined ? null : $("#reserve21").val(),
			reserve22 : $("#reserve22").val() == undefined ? null : $("#reserve22").val(),
			reserve23 : $("#reserve23").val() == undefined ? null : $("#reserve23").val(),
			reserve24 : $("#reserve24").val() == undefined ? null : $("#reserve24").val(),
			reserve25 : $("#reserve25").val() == undefined ? null : $("#reserve25").val(),
			reserve26 : $("#reserve26").val() == undefined ? null : $("#reserve26").val(),
			reserve27 : $("#reserve27").val() == undefined ? null : $("#reserve27").val(),
			reserve28 : $("#reserve28").val() == undefined ? null : $("#reserve28").val(),
			reserve29 : $("#reserve29").val() == undefined ? null : $("#reserve29").val(),
			reserve30 : $("#reserve30").val() == undefined ? null : $("#reserve30").val(),
			reserve31 : $("#reserve31").val() == undefined ? null : $("#reserve31").val(),
			reserve32 : $("#reserve32").val() == undefined ? null : $("#reserve32").val(),
			reserve33 : $("#reserve33").val() == undefined ? null : $("#reserve33").val(),
			reserve34 : $("#reserve34").val() == undefined ? null : $("#reserve34").val(),
			reserve35 : $("#reserve35").val() == undefined ? null : $("#reserve35").val(),
			reserve36 : $("#reserve36").val() == undefined ? null : $("#reserve36").val(),
			reserve37 : $("#reserve37").val() == undefined ? null : $("#reserve37").val(),
			reserve38 : $("#reserve38").val() == undefined ? null : $("#reserve38").val(),
			reserve39 : $("#reserve39").val() == undefined ? null : $("#reserve39").val(),
			reserve40 : $("#reserve40").val() == undefined ? null : $("#reserve40").val(),
			reserve41 : $("#reserve41").val() == undefined ? null : $("#reserve41").val(),
			reserve42 : $("#reserve42").val() == undefined ? null : $("#reserve42").val(),
			reserve43 : $("#reserve43").val() == undefined ? null : $("#reserve43").val(),
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
				reserve16 : $("#reserve16").val() == undefined ? null : $("#reserve16").val(),
				reserve17 : $("#reserve17").val() == undefined ? null : $("#reserve17").val(),
				reserve18 : $("#reserve18").val() == undefined ? null : $("#reserve18").val(),
				reserve19 : $("#reserve19").val() == undefined ? null : $("#reserve19").val(),
				reserve20 : $("#reserve20").val() == undefined ? null : $("#reserve20").val(),
				reserve21 : $("#reserve21").val() == undefined ? null : $("#reserve21").val(),
				reserve22 : $("#reserve22").val() == undefined ? null : $("#reserve22").val(),
				reserve23 : $("#reserve23").val() == undefined ? null : $("#reserve23").val(),
				reserve24 : $("#reserve24").val() == undefined ? null : $("#reserve24").val(),
				reserve25 : $("#reserve25").val() == undefined ? null : $("#reserve25").val(),
				reserve26 : $("#reserve26").val() == undefined ? null : $("#reserve26").val(),
				reserve27 : $("#reserve27").val() == undefined ? null : $("#reserve27").val(),
				reserve28 : $("#reserve28").val() == undefined ? null : $("#reserve28").val(),
				reserve29 : $("#reserve29").val() == undefined ? null : $("#reserve29").val(),
				reserve30 : $("#reserve30").val() == undefined ? null : $("#reserve30").val(),
				reserve31 : $("#reserve31").val() == undefined ? null : $("#reserve31").val(),
				reserve32 : $("#reserve32").val() == undefined ? null : $("#reserve32").val(),
				reserve33 : $("#reserve33").val() == undefined ? null : $("#reserve33").val(),
				reserve34 : $("#reserve34").val() == undefined ? null : $("#reserve34").val(),
				reserve35 : $("#reserve35").val() == undefined ? null : $("#reserve35").val(),
				reserve36 : $("#reserve36").val() == undefined ? null : $("#reserve36").val(),
				reserve37 : $("#reserve37").val() == undefined ? null : $("#reserve37").val(),
				reserve38 : $("#reserve38").val() == undefined ? null : $("#reserve38").val(),
				reserve39 : $("#reserve39").val() == undefined ? null : $("#reserve39").val(),
				reserve40 : $("#reserve40").val() == undefined ? null : $("#reserve40").val(),
				reserve41 : $("#reserve41").val() == undefined ? null : $("#reserve41").val(),
				reserve42 : $("#reserve42").val() == undefined ? null : $("#reserve42").val(),
				reserve43 : $("#reserve43").val() == undefined ? null : $("#reserve43").val(),
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
				reserve16 : $("#reserve16").val() == undefined ? null : $("#reserve16").val(),
				reserve17 : $("#reserve17").val() == undefined ? null : $("#reserve17").val(),
				reserve18 : $("#reserve18").val() == undefined ? null : $("#reserve18").val(),
				reserve19 : $("#reserve19").val() == undefined ? null : $("#reserve19").val(),
				reserve20 : $("#reserve20").val() == undefined ? null : $("#reserve20").val(),
				reserve21 : $("#reserve21").val() == undefined ? null : $("#reserve21").val(),
				reserve22 : $("#reserve22").val() == undefined ? null : $("#reserve22").val(),
				reserve23 : $("#reserve23").val() == undefined ? null : $("#reserve23").val(),
				reserve24 : $("#reserve24").val() == undefined ? null : $("#reserve24").val(),
				reserve25 : $("#reserve25").val() == undefined ? null : $("#reserve25").val(),
				reserve26 : $("#reserve26").val() == undefined ? null : $("#reserve26").val(),
				reserve27 : $("#reserve27").val() == undefined ? null : $("#reserve27").val(),
				reserve28 : $("#reserve28").val() == undefined ? null : $("#reserve28").val(),
				reserve29 : $("#reserve29").val() == undefined ? null : $("#reserve29").val(),
				reserve30 : $("#reserve30").val() == undefined ? null : $("#reserve30").val(),
				reserve31 : $("#reserve31").val() == undefined ? null : $("#reserve31").val(),
				reserve32 : $("#reserve32").val() == undefined ? null : $("#reserve32").val(),
				reserve33 : $("#reserve33").val() == undefined ? null : $("#reserve33").val(),
				reserve34 : $("#reserve34").val() == undefined ? null : $("#reserve34").val(),
				reserve35 : $("#reserve35").val() == undefined ? null : $("#reserve35").val(),
				reserve36 : $("#reserve36").val() == undefined ? null : $("#reserve36").val(),
				reserve37 : $("#reserve37").val() == undefined ? null : $("#reserve37").val(),
				reserve38 : $("#reserve38").val() == undefined ? null : $("#reserve38").val(),
				reserve39 : $("#reserve39").val() == undefined ? null : $("#reserve39").val(),
				reserve40 : $("#reserve40").val() == undefined ? null : $("#reserve40").val(),
				reserve41 : $("#reserve41").val() == undefined ? null : $("#reserve41").val(),
				reserve42 : $("#reserve42").val() == undefined ? null : $("#reserve42").val(),
				reserve43 : $("#reserve43").val() == undefined ? null : $("#reserve43").val(),
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
var reserve16, reserve17, reserve18, reserve19, reserve12, reserve20, reserve21, reserve22;
var reserve23, reserve24, reserve25, reserve26, reserve27, reserve28, reserve29, reserve30;
var reserve31, reserve32, reserve33, reserve34, reserve35, reserve36, reserve37, reserve38,
reserve39,reserve40,reserve41,reserve42,reserve43;
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
	reserve16 = $(object).find("td:eq(34)").text(); 
	reserve17 = $(object).find("td:eq(35)").text(); 
	reserve18 = $(object).find("td:eq(36)").text(); 
	reserve19 = $(object).find("td:eq(37)").text(); 
	reserve20 = $(object).find("td:eq(38)").text(); 
	reserve21 = $(object).find("td:eq(39)").text(); 
	reserve22 = $(object).find("td:eq(40)").text(); 
	reserve23 = $(object).find("td:eq(41)").text(); 
	reserve24 = $(object).find("td:eq(42)").text(); 
	reserve25 = $(object).find("td:eq(43)").text(); 
	reserve26 = $(object).find("td:eq(44)").text(); 
	reserve27 = $(object).find("td:eq(45)").text(); 
	reserve28 = $(object).find("td:eq(46)").text(); 
	reserve29 = $(object).find("td:eq(47)").text(); 
	reserve30 = $(object).find("td:eq(48)").text(); 
	reserve31 = $(object).find("td:eq(49)").text(); 
	reserve32 = $(object).find("td:eq(50)").text(); 
	reserve33 = $(object).find("td:eq(51)").text(); 
	reserve34 = $(object).find("td:eq(52)").text(); 
	reserve35 = $(object).find("td:eq(53)").text(); 
	reserve36 = $(object).find("td:eq(54)").text(); 
	reserve37 = $(object).find("td:eq(55)").text(); 
	reserve38 = $(object).find("td:eq(56)").text(); 
	reserve39 = $(object).find("td:eq(57)").text(); 
	reserve40 = $(object).find("td:eq(58)").text(); 
	reserve41 = $(object).find("td:eq(59)").text(); 
	reserve42 = $(object).find("td:eq(60)").text(); 
	reserve43 = $(object).find("td:eq(61)").text(); 
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
					$("#dw span").empty();
					build_task_table(data, state);
					build_pageInfo(data, state);
					build_task_pagenav(data, state);
					$("#dw span").append("<span>(" + data.total + ")</span>");
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
			.append(reserve8).append(reserve9).append(reserve10).append(reserve11).append(reserve12).append(reserve13).append(reserve14)
			.append(tableData1).append(tableData2).append(tableData3).append(tableData4).append(opinions).append(applyManager).append(condition)
			.append(processInstanceId).append(nextPerson).append(btn)
			.append(reserve16).append(reserve17).append(reserve18).append(reserve19).append(reserve20).append(reserve21).append(reserve22).append(reserve23)
			.append(reserve24).append(reserve25).append(reserve26).append(reserve27).append(reserve28).append(reserve29).append(reserve30).append(reserve31)
			.append(reserve32).append(reserve33).append(reserve34).append(reserve35).append(reserve36).append(reserve37).append(reserve38).append(reserve39)
			.append(reserve40).append(reserve41).append(reserve42).append(reserve43).appendTo("#home2 tbody");
		}else{
			$("<tr></tr>").append(id).append(applicant).append(applyCompany).append(applyDept).append(apply).append(inLineOptions1).append(message)
			.append(inLineOptions2).append(inLineOptions3).append(inLineOptions4)
			.append(reserve1).append(reserve2).append(reserve3).append(reserve4).append(reserve5).append(reserve6).append(reserve7)
			.append(reserve8).append(reserve9).append(reserve10).append(reserve11).append(reserve12).append(reserve13).append(reserve14).append(reserve15)
			.append(tableData1).append(tableData2).append(tableData3).append(tableData4).append(opinions).append(applyManager).append(condition)
			.append(processInstanceId).append(nextPerson)
			.append(reserve16).append(reserve17).append(reserve18).append(reserve19).append(reserve20).append(reserve21).append(reserve22).append(reserve23)
			.append(reserve24).append(reserve25).append(reserve26).append(reserve27).append(reserve28).append(reserve29).append(reserve30).append(reserve31)
			.append(reserve32).append(reserve33).append(reserve34).append(reserve35).append(reserve36).append(reserve37).append(reserve38).append(reserve39)
			.append(reserve40).append(reserve41).append(reserve42).append(reserve43).appendTo("#home1 tbody");
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