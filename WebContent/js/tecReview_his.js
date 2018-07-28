$(function(){
	setProcdefId(name);
	var dName = $("#reserve3").val();
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
	$("#adopt").click(function(){
		$("input[name=follow]").val($("#follow").val());
		saveAndSubmitBtn("提交");
		window.location.href = path + "/views/process.jsp?name=process:2:1097504";
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