
	   
	//根据部门id
	$("#dName").change(function(){
		var dId = $("#dName").val();
		$.ajax({
			url : path + '/employee/getByDid',
			type : 'post',
			data :{'dId':dId},
			dataType : "json",
			success:function(result){
				$("#eLeader").empty();
				$("#eLeader").append("<option value=''>请选择上级领导</option>");
				$.each(result, function(index, item){
					$("#eLeader").append("<option value='" + item.eId + "'>" + item.eName + "</option>");
				});
			}
		});
		});

	
	$("#cName").change(function(){
		var cId = $("#cName").val();
		$.ajax({
			url : path + '/employee/getByCid',
			type : 'post',
			data :{'cId':cId},
			dataType : "json",
			success:function(result){
				$("#dName").empty();
				$("#dName").append("<option value=''>请选择部门</option>");
				$.each(result, function(index, item){
					$("#dName").append("<option value='" + item.dId + "'>" + item.dName + "</option>");
				});
			}
		});
		});