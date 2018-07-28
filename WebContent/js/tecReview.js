$(function(){
	
	$(".vertical-nav a[href='/JMOA/javascrip:void(0)']").attr("data-toggle","modal").attr("data-target","#myModal");
	
	ready();
	
	getAllTaskByName(1, "未处理");
	
	var dName = $("#curDept").val();
	dName = $.trim(dName);
	switch (dName) {
	case "超限项目组":
		$('input,select,textarea,radio',$('#YwForm')).prop('disabled',false);
		$('#apply').prop('disabled',false);
		break;
	case "直销组":
		$('input,select,textarea,radio',$('#YwForm')).prop('disabled',false);
		$('#apply').prop('disabled',false);
		break;
	case "技术部":
		$('input,select,textarea,radio',$('#JsForm')).prop('disabled',false);
		break;
	case "采购部":
		$('input,select,textarea,radio',$('#CgForm')).prop('disabled',false);
		break;
	case "内勤部":
		$('input,select,textarea,radio',$('#NqForm')).prop('disabled',false);
		break;
	case "财务部":
		$('input,select,textarea,radio',$('#CwForm')).prop('disabled',false);
		break;
	default:
		break;
	
	}
	$(document).on('click','#home2 tbody td a',function(){
		getData($(this).parent().parent());
		var text = $(this).text();
		if($.trim(text) == "撤销"){
			deleteOperation(id);
		}else if($.trim(text) == "编辑"){
			editOperation();
		}else if($.trim(text) == "提交"){
			submitOperation(id, "");
		}
	});
	$("input[name=btn]").each(function(){
		$(this).click(function(){
			
			var text = $(this).val();
			if($.trim(text) == "保存" || $.trim(text) == "提交"){
			
				saveAndSubmitBtn(text);
			}else{
				determineAndSubmitBtn(text);
			}
		});
	});
	
	$(document).on('click','#home1 tr',function(){
		if($(this).parent().find("tr th:eq(1)").text() == "姓名"){
			return;
		}
		if($(this).find("td:eq(0)").text() == "暂时没有模型数据"){
			return;
		}
		getData(this);
		sendData(page);
	});
	
	$("#search1").click(function(){
		var startTime = $("#stime").val();
		var endTime = $("#etime").val();
		var eName = $("#ename").val();
		var company = $("#company").val();
		var dept = $("#dept").val();
		searchTaskByCondition(1, startTime, endTime, eName, company, dept, "未处理");
		
	});
	
	$("#search2").click(function(){
		var startTime = $("#stime2").val();
		var endTime = $("#etime2").val();
		searchTaskByCondition(1, startTime, endTime, "", "0", "0", "未提交");
	});
	
	document.getElementById("apply").value = today();
	

	if($("#flag").val() == "fqsq"){
		$("#leave1").attr("class","tab-pane fade")
		$("#leave2").attr("class","tab-pane fade")
		$("#leave3").attr("class","tab-pane fade nryc in active")
		$("#pageInfo1").css("display","none");
		$("#pageInfo2").css("display","none");
		$("#follow").val("关注");
		$("#fqsq").css("color", "#019ee1");
		$("#fqsq").css("background-color", "#ffffff");
		$("#dw").css("color", "#666");
	}
	
	function formatDate(time){
	    var date = new Date(time);

	    var year = date.getFullYear(),
	        month = date.getMonth()+1,//月份是从0开始的
	        day = date.getDate(),
	        hour = date.getHours(),
	        min = date.getMinutes(),
	        sec = date.getSeconds();
	    var preArr = Array.apply(null,Array(10)).map(function(elem, index) {
	        return '0'+index;
	    });////开个长度为10的数组 格式为 00 01 02 03

	    var newTime = 'YY-MM-DD'.replace(/YY/g,year)
	                        .replace(/MM/g,preArr[month]||month)
	                        .replace(/DD/g,preArr[day]||day)
	                        .replace(/hh/g,preArr[hour]||hour)
	                        .replace(/mm/g,preArr[min]||min)
	                        .replace(/ss/g,preArr[sec]||sec);

	    return newTime;         
	}
	
});
/*function setCondition(Object)
{
	$("#condition").val($(Object).val())
}*/