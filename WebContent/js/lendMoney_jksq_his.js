$(function(){
	setProcdefId(name);
	
	$("#adopt").click(function(){
		$("input[name=follow]").val($("#follow").val());
		$("#opinion").val("暂无意见");
		saveAndSubmitBtn("提交");
		window.location.href = path + "/views/process.jsp?name=process:4:1105228";
	});
	
	var opinion = $("#opinion").val()
	
	opinions(opinion, $("#opinions"))
	
	var inLineOptions1 = $("#inLineOptions1").val();
	var inLineOptions2 = $("#inLineOptions2").val();
	
	inLineOptions("inLineOptions1", inLineOptions1);
	inLineOptions("inLineOptions2", inLineOptions2);
	
	$(document).on('click','img',function(){
		$(this).zoomify();
	});
	
	$("input[name=btn]").each(function(){
		$(this).click(function(){
			var text = $(this).val();
			$("input[name=follow]").val($("#follow").val());
			determineAndSubmitBtn(text, "借款管理");
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