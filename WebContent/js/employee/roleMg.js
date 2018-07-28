$(function(){
	
	getAllOperation(1);
	
	$("#title").append("角色列表");
	$("#insert").append("增加角色");
	
	$("#list").css("display","block");
	$("#edit").css("display","none");
	
	function getAllOperation(pageNo)
	{
		$.ajax({
			url : path + '/role/getAll',
			type : 'POST',
			data : {"pageNo" : pageNo,"num" : 15},
			success : function(data){
				build_noticeBulletin_table(data);
				if(data.total > 15){
					
					build_noticeBulletin_pagenav(data);
				}
				build_noticeBulletin_pageInfo(data);
				var num = data.pageNum;
				var nums = data.navigatepageNums.length;
				pageInfo(num, nums);
			}
		});
		
	}
	
	var currentPageNo;
	
	//构建分页信息
	function build_noticeBulletin_pageInfo(result)
	{
		$("#pageInfo").empty();
		$("#pageInfo").append("当前第" + result.pageNum + "页,总共" + result.pages + "页,总共" + result.total + "记录");
		currentPageNo = result.pageNum;
	}
	
	//构建分页条
	function build_noticeBulletin_pagenav(result)
	{
		$("#pageNav").empty();
		var ul = $("<ul></ul>").addClass("pagination fy");
		var firstLi=$("<li></li>").append($("<a></a>").append("首页").attr("href","javascript:void(0)"));
		var preLi=$("<li></li>").append($("<a></a>").append("&laquo;").attr("href","javascript:void(0)"));
		ul.append(firstLi).append(preLi);
		if(result.hasPreviousPage==false)
		{
			firstLi.addClass("disabled");
			preLi.addClass("disabled");
		}
		else
		{
			firstLi.click(function(){
				getAllOperation(1);
			});
			preLi.click(function(){
				getAllOperation(result.pageNum - 1);
			});
		}
		var nextLi=$("<li></li>").append($("<a></a>").append("&raquo;").attr("href","javascript:void(0)"));
		var lastLi=$("<li></li>").append($("<a></a>").append("末页").attr("href","javascript:void(0)"));
		if(result.hasNextPage==false)
		{
			nextLi.addClass("disabled");
			lastLi.addClass("disabled");
		}
		else
		{
			nextLi.click(function(){
				getAllOperation(result.pageNum + 1);
			});
			lastLi.click(function(){
				getAllOperation(result.pages);
			});
		}
		$.each(result.navigatepageNums,function(index,item){
			var numLi=$("<li></li>").append($("<a></a>").append(item).attr("href","javascript:void(0)"));
			if(result.pageNum==item)
			{
				numLi.addClass("active");
			}
			numLi.click(function(){
				getAllOperation(item);
			});
			if(result.navigatepageNums.length > 10){
				if(index > 10){
					$(numLi).css("display","none");
				}
			}
			ul.append(numLi);
		});
		ul.append(nextLi).append(lastLi);
		$("<nav></nav>").attr("aria-label","Page navigation").append(ul).appendTo("#pageNav");
	}
	
	function pageInfo(num, nums)
	{
		var size = $("#pageNav nav ul").find("li").size();
		$("#pageNav nav ul").find("li").css("display","none");
		$("#pageNav nav ul").find("li:eq(0)").css("display","inline");
		$("#pageNav nav ul").find("li:eq(1)").css("display","inline");
		$("#pageNav nav ul").find("li:eq(" + (size-1) + ")").css("display","inline");
		$("#pageNav nav ul").find("li:eq(" + (size-2) + ")").css("display","inline");
		if( num <= 6){
			$("#pageNav nav ul").find("li:lt("+13+")").css("display","inline");
		}else if(num > 6 && num <= 44){
			$("#pageNav nav ul").find("li:gt("+(num-5)+")").css("display","inline");
			$("#pageNav nav ul").find("li:gt("+(num+6)+")").css("display","none");
			$("#pageNav nav ul").find("li:eq(" + (size-1) + ")").css("display","inline");
			$("#pageNav nav ul").find("li:eq(" + (size-2) + ")").css("display","inline");
		}else if(num > 44){
			$("#pageNav nav ul").find("li:gt("+40+")").css("display","inline");
		}
	}
	
	$(document).on('click', '#home table tbody td a', function(){
		var text = $.trim($(this).text());
		var id = $(this).parent().parent().find("td:eq(0)").text();
		var name = $(this).parent().parent().find("td:eq(1)").text();
		var desc = $(this).parent().parent().find("td:eq(2)").text();
		if(text == "编辑"){
			$("#edit").css("display","block");
			$("#list").css("display","none");
			$("#rName").val(name);
			$("#rDesc").val(desc);
			$("#rId").val(id);
			$("#pageInfo").empty();
			$("#title").empty().append("操作角色列表");
			$("#submit").val("修改");
		}else if(text == "删除"){
			if(window.confirm("确认删除?")){
				$.ajax({
					url : path + '/role/delRoleById',
					type : 'POST',
					data : {"rId" : id},
					success : function(data){
						if(data == 1){
							getAllOperation(currentPageNo);
						}
					}
				});
			}
		}else if(text == "编辑权限"){
			 layui.use(['jquery','form', 'layedit', 'table'], function(){
		          var form = layui.form
		          ,layer = layui.layer
		          ,layedit = layui.layedit;  
		          layer.open({
	        		  type: 2,
	        		  title: false,
	        		  area: ['630px', '360px'],
	        		  closeBtn: 0,
	        		  shadeClose: true,
	        		  content: path+'/role/operationPage?rId='+id
	        		});
			 });
		}else if (text == "编辑菜单") {
			layui.use(['jquery','form', 'layedit', 'table'], function(){
				layer.open({
	        		  type: 2,
	        		  title: "编辑菜单",
	        		  area: ['330px', '560px'],
	        		  closeBtn: 0,
	        		  shadeClose: true,
	        		  content: path+'/role/menu?rId='+id,
	        		  btn:['提交','取消'],
	      	        yes: function(index, layero){
	      	        	var datas = $(layero).find("iframe")[0].contentWindow.subMenu();        	        	
	      	    		 if(datas){
	      	            	$.ajax({
	      	            		url: path+'/role/roleMenu/change',
	      	            		data: {rId:id,menuIds:datas},
	      	            		type:'POST',
	      	            		success: function(rec){ 
	      	            			if(rec.success){
	      	            				layer.closeAll();
	      	            				layer.msg(rec.msg,{time:3000});
	      	            				
	      	            				//location.reload(true);
	      	            			}else{
	      	            				layer.alert(rec.msg);
	      	            			}
	      	            		},
	      	            		error: function(rec){
	      	            			layer.alert("服务器异常！");
	      	            		}
	      	            	});
	      	    		} 
	      	        }
	        		});
			});
		}
	});
	
	$("#title").click(function(){
		$("#list").css("display","block");
		$("#edit").css("display","none");
		getAllOperation(1);
	});
	
	$("#insert").click(function(){
		$("#rName").val("");
		$("#rDesc").val("");
		$("#edit").css("display","block");
		$("#list").css("display","none");
		$("#pageInfo").empty();
		$("#submit").val("提交");
	});
	
	$("#submit").click(function(){
		var text = $.trim($(this).val());
		var rId = $("#rId").val();
		var rName = $("#rName").val();
		var rDesc = $("#rDesc").val();
		if(rName == ""){
			$(".error1").empty().append("该项为必填项").css("color","red");
		}else{
			$(".error1").empty();
		}
		if(text == "提交"){
			$.ajax({
				url : path + '/role/insertRole',
				type : 'POST',
				data : {"rName" : rName, "rDesc" : rDesc},
				success : function(data){
					if(data == 1){
						$("#list").css("display","block");
						$("#edit").css("display","none");
						getAllOperation(1);
					}
				}
			});
		}else if(text == "修改"){
			$.ajax({
				url : path + '/role/editRoleById',
				type : 'POST',
				data : {"rId" : rId, "rName" : rName, "rDesc" : rDesc},
				success : function(data){
					if(data == 1){
						$("#list").css("display","block");
						$("#edit").css("display","none");
						getAllOperation(1);
					}
				}
			});
		}
	});
	
	$(".vertical-nav a[href='/JMOA/javascrip:void(0)']").attr("data-toggle","modal").attr("data-target","#myModal2");
	
	$("#ok").click(function(){
		var name = $("#name").val()
		var key = $("#key").val()
		var desc = $("#desc").val()
		$.ajax({
			url : path + '/activiti/create',
			type : 'POST',
			data : {"name":name, "key":key, "description":desc},
			success : function(data){
				if(data != "false"){
					window.location.href = path + "/modeler.html?modelId=" + data;
				}
			}
		});
		$(this).attr("data-dismiss", "modal");
	});
});