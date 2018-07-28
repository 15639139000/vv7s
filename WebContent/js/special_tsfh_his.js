$(function(){
	setProcdefId(name);
	
	$("#adopt").click(function(){
		$("input[name=follow]").val($("#follow").val());
		$("#opinion").val("暂无意见");
		if($("#select").val() == "其他原因：注明"){
			$("#reserve15").val($("#qtyy").val());
		}else{
			$("#reserve15").val($("#select").val());
		}
		saveAndSubmitBtn("提交");
		window.location.href = path + "/views/process.jsp?name=process:28:1195328";
	});
	
	$("#select").change(function(){
		var value = $(this).val();
		if(value == "其他原因：注明"){
			$("#qtyy").css("display","block");
		}else{
			$("#qtyy").css("display","none");
		}
	});
	
	var opinion = $("#opinion").val()
	
	opinions(opinion, $("#opinions"))
	
	var inLineOptions1 = $("#inLineOptions1").val();
	
	inLineOptions("inLineOptions1", inLineOptions1);
	
	if($("#reserve15").val() == "信息未备档"){
		selected($("#select"), $("#reserve15").val());
	}else if($("#reserve15").val() == "预付款未到50%，且无有效合同"){
		selected($("#select"), $("#reserve15").val());
	}else{
		selected($("#select"), "其他原因：注明");
	}
	
	if($("#reserve15").val() == "信息未备档" || $("#reserve15").val() == "预付款未到50%，且无有效合同"){
		$("#qtyy").css("display","none");
	}else{
		$("#qtyy").css("display","block");
	}
	
	$(document).on('click','img',function(){
		$(this).zoomify();
	});
	
	$("input[name=btn]").each(function(){
		$(this).click(function(){
			var text = $(this).val();
			$("input[name=follow]").val($("#follow").val());
			determineAndSubmitBtn(text, "特殊发货申请");
		});
	});
	
	$.ajax({
		url : path + "/activiti/getFollowCount",
		type : 'POST',
		data : {"taskId" : $("#taskId").val()},
		success : function(data){
			if(data > 0){
				$("#follow").val("已关注");
			}
		}
	});
})