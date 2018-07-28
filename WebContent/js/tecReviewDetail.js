$(function(){
	$(".vertical-nav a[href='/JMOA/javascrip:void(0)']").attr("data-toggle","modal").attr("data-target","#myModal");
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
		$('input[type="text"],select,textarea,radio',$('#CwForm')).prop('disabled',false);
		break;
	case "总经办":
		$('input,textarea,radio,checkbox',$('#LzForm')).prop('disabled',false);
		break;	
	default:
		break;
	}
	/*var eName = $('#reserve1').val();
	var employee = $('#employee').val();
	var eManager = employee.eManager;
	switch (eManager) {
	case "":
		
		break;
	case "":
		
		break;
	case "":
	
	break;

	default:
		break;
	}*/
	//按照角色权限控制,具体角色未定
	/*$.ajax({
		url : path + '/employee/getRoleByEName',
		type : 'POST',
		data : {"eName" : eName},
		success : function(data){
			$.each(data, function(index, role){
				if("财务总监" == role.rName.trim()){
					$('input,textarea,radio,checkbox',$('#LzForm')).prop('disabled',false);
				}
				
			});
		}	
	});*/
	/*//按照处理人控制
	if("秦洪涛" == eName.trim()){
		$('input,textarea,radio,checkbox',$('#LzForm')).prop('disabled',false);
	}*/
	$("#back").click(function(){
		$("input[name=follow]").val($("#follow").val());
		$("input[name=opinion]").val() == "" ? $("input[name=opinion]").val('暂无意见') : $("input[name=opinion]").val($("input[name=opinion]").val());
		$("#text").val("退回");
		completeAllTask($("#form"));
	});
	
	$("#adopt").click(function(){
		$("input[name=follow]").val($("#follow").val())
		$("#text").val("同意");
		completeAllTask($("#form"));
	});
	$("#forward").click(function(){
		$("#myModal2").modal('show');
	});
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	var taskId;
	
	$("#myModal2").on('show.bs.modal', function(e){
		taskId = $("input[name=taskId]").val();
		$.ajax({
			url : path + '/company/getAllCompany',
			type : 'POST',
			success : function(data){
				$("#company").empty()
				$("#company").append("<option value='0'>请选择公司...</option>");
				$("#dept").append("<option value='0'>请选择部门...</option>");
				$("#emp").append("<option value='0'>请选择员工...</option>");
				$.each(data, function(index, item){
					$("#company").append("<option value='" + item.cId + "'>" + item.cName + "</option>");
				})
			}
		});
	})
	
	$(document).on('change', '#company', function(){
		var value = $(this).val()
		$("#dept").empty()
		$("#dept").append("<option value='0'>请选择部门...</option>");
		$("#emp").empty()
		$("#emp").append("<option value='0'>请选择员工...</option>");
		if(value != 0){
			$.ajax({
				url : path + '/company/getDepartmentByCid',
				type : 'POST',
				data : {"cId" : value},
				success : function(data){
					$.each(data, function(index, item){
						$("#dept").append("<option value='" + item.dId + "'>" + item.dName + "</option>");
					})
				}
			});
		}
	})
	
	$(document).on('change', '#dept', function(){
		var value = $(this).val()
		$("#emp").empty();
		$("#emp").append("<option value='0'>请选择员工...</option>");
		if(value != 0){
			$.ajax({
				url : path + '/company/getEmployeeByDid',
				type : 'POST',
				data : {"dId" : value},
				success : function(data){
					$.each(data, function(index, item){
						$("#emp").append("<option value='" + item.eId + "'>" + item.eName + "</option>");
					})
				}
			});
		}
	})
	
	$(document).on('change', '#emp', function(){
		var value = $(this).find("option:selected").text()
		if(value != 0){
			$("#txtHobby").val(value);
		}else{
			$("#txtHobby").val("");
		}
	})
	
	$(document).on('click', '#confirm', function(){
		$.ajax({
			url : path + '/activiti/updateAssignee',
			type : 'POST',
			data : {"taskId" : taskId, "assignee" : $("#txtHobby").val()},
			success : function(data){
				if(data == "success"){
					window.location.href = path + "/views/" + page;
				}
			}
		});
	});
	
});



