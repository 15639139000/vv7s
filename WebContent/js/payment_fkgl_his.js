$(function() {
	setProcdefId(name);

	$("#adopt").click(function() {
		$("input[name=follow]").val($("#follow").val());
		$("#opinion").val("暂无意见");
		saveAndSubmitBtn("提交");
		window.location.href = path + "/views/process.jsp?name=process:1:1090009";
	});

	var opinion = $("#opinion").val()

	opinions(opinion, $("#opinions"))

	var inLineOptions1 = $("#inLineOptions1").val();

	inLineOptions("inLineOptions1", inLineOptions1);

	selected($("#reserve113"), $("#reserve13").val());
	selected($("#inLineOptions12"), $("#inLineOptions2").val());
	
	if($("#inLineOptions2").val() == "否"){
		$("#reserve113").parent().css("display","none");
		$("#reserve9").parent().css("display","none");
	}else{
		$("#reserve113").parent().css("display","block");
		if($("#reserve113").val() == "否"){
			$("#reserve9").parent().css("display","none");
		}else{
			$("#reserve9").parent().css("display","block");
		}
	}

	$("#inLineOptions12").change(function(){
		if($(this).val() == "是"){
			$("#reserve113").parent().css("display","block");
			if($("#reserve113").val() == "是"){
				$("#reserve9").parent().css("display","block");
			}else{
				$("#reserve9").parent().css("display","none");
			}
		}else{
			$("#reserve113").parent().css("display","none");
			$("#reserve9").parent().css("display","none");
		}
	});
	
	$("#reserve113").change(function(){
		if($(this).val() == "是"){
			$("#reserve9").parent().css("display","block");
		}else{
			$("#reserve9").parent().css("display","none");
		}
	});
	
	$(document).on('click', 'img', function() {
		$(this).zoomify();
	});
	
	$("input[name=btn]").each(function(){
		$(this).click(function(){
			var text = $(this).val();
			$("input[name=follow]").val($("#follow").val());
			$("#inLineOptions2").val($("#inLineOptions12").val());
			$("#reserve13").val($("#reserve113").val());
			if($("#reserve113").val() == "是"){
				var reserve10 = $("#reserve10").val();
				if($("#reserve9").val() == "0" && reserve10 == "请输入大写金额"){
					alert("请输入金额......");
					return;
				}else{
					$.ajax({
						url : path + '/activiti/checkMoney',
						type : 'POST',
						data : {"lowerMoney" : $("#reserve9").val(), "upperMoney" : reserve10},
						success : function(data){
							if(data == "false"){
								alert("金额大小写不匹配......");
							}else{
								determineAndSubmitBtn(text, "付款管理");
							}
						}
					});
				}
			}else{
				determineAndSubmitBtn(text, "付款管理");
			}
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