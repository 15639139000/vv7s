$(function(){
	
	getAllBillboard(1);
	
	$("#title").append("龙虎榜列表");
	$("#insert").append("发布龙虎榜");
	
	$("#list").css("display","block");
	$("#edit").css("display","none");
	
	function getAllBillboard(pageNo)
	{
		$.ajax({
			url : path + '/billboard/getAll',
			type : 'POST',
			data : {"pageNo" : pageNo,"num" : 15},
			success : function(data){
				build_billboard_table(data);
				if(data.total > 15){
					build_billboard_pagenav(data);
					
				}
				build_billboard_pageInfo(data);
				var num = data.pageNum;
				var nums = data.navigatepageNums.length;
				pageInfo(num, nums);
			}
		});
		
	}
	
	//构建表格
	function build_billboard_table(result)
	{
		$("#home table tbody").empty();
		var billboard = result.list;
		$.each(billboard, function(index, item){
			var id = $("<td></td>").append(item.bId);
			var name = $("<td></td>").append(item.name);
			var team = $("<td></td>").append(item.team);
			var photo = $("<td></td>").append(item.photo).css("display","none");
			var rank = $("<td></td>").append(item.rank);
			var date = $("<td></td>").append(item.bDate);
			var btnEdit = $("<a></a>").attr("href","javascript:void(0)").css("color","#317EEB").append("编辑&nbsp;&nbsp;&nbsp;&nbsp;");
			var span1 = $("<span></span>").css("color","silver").append("|");
			var btndel = $("<a></a>").attr("href","javascript:void(0)").css("color","#317EEB").append("&nbsp;&nbsp;撤销&nbsp;&nbsp;&nbsp;&nbsp;");
			var span2 = $("<span></span>").css("color","silver").append("|");
			var btnsel = $("<a></a>").attr("href","javascript:void(0)").attr("data-toggle","modal").attr("data-target","#myModal").css("color","#317EEB").append("&nbsp;&nbsp;查看");
			var btn = $("<td></td>").append(btnEdit).append(span1).append(btndel);
			$("<tr></tr>").append(id).append(name).append(team).append(rank).append(date).append(photo).append(btn).appendTo("#home table tbody");
		});
	}
	
	var currentPageNo;
	
	//构建分页信息
	function build_billboard_pageInfo(result)
	{
		$("#pageInfo").empty();
		$("#pageInfo").append("当前第" + result.pageNum + "页,总共" + result.pages + "页,总共" + result.total + "记录");
		currentPageNo = result.pageNum;
	}
	
	//构建分页条
	function build_billboard_pagenav(result)
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
				getAllBillboard(1);
			});
			preLi.click(function(){
				getAllBillboard(result.pageNum - 1);
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
				getAllBillboard(result.pageNum + 1);
			});
			lastLi.click(function(){
				getAllBillboard(result.pages);
			});
		}
		$.each(result.navigatepageNums,function(index,item){
			var numLi=$("<li></li>").append($("<a></a>").append(item).attr("href","javascript:void(0)"));
			if(result.pageNum==item)
			{
				numLi.addClass("active");
			}
			numLi.click(function(){
				getAllBillboard(item);
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
		var team = $(this).parent().parent().find("td:eq(2)").text();
		var rank = $(this).parent().parent().find("td:eq(3)").text();
		var date = $(this).parent().parent().find("td:eq(4)").text();
		var photo = $(this).parent().parent().find("td:eq(5)").text();
		var rankName;
		if(rank==1){
			rankName = "销售冠军";
		}else if(rank==2){
			rankName = "销售亚军";
		}else if(rank==3){
			rankName = "销售季军"
		}
		if(text == "编辑"){
			$("#edit").css("display","block");
			$("#list").css("display","none");
			$("#bName").val(name);
			$("#team").val(team);
			$("#bDate").val(date);
			$("#bId").val(id);
			$("#imgPreview").empty();
			$("#imgPreview").css("display","block");
			var img = "<img id='img1' width='128px' height='128px' src='"+path+photo+"'/>"
			$("#imgPreview").append(img);
			$("input[name='rank']").each(function (){  
			    var str = $(this).val();  
			    if (str == rank+"") {  
			        $(this).attr("checked",true);  
			    }  
			});  
			$("#pageInfo").empty();
			$("#title").empty().append("龙虎榜列表");
			$("#submit").val("修改");
		}else if(text == "撤销"){
			if(window.confirm("确认删除?")){
				$.ajax({
					url : path + '/billboard/delBillboardById',
					type : 'POST',
					data : {"bId" : id},
					success : function(data){
						if(data == 1){
							getAllBillboard(currentPageNo);
						}
					}
				});
			}
		}else if(text == "查看"){
			$("#myModal .modal-title").empty().append(name);
			var div = $("<div></div>").append(name + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + team).css("position","relative").css("left","450px").css("top","5px");
			var div1 = $("<div></div>").append(date).css("position","relative").css("left","450px").css("top","10px");
			var div2 = $("<div></div>").append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + rankName).append(div).append(div1).css("word-wrap","break-word");
			$("#myModal .modal-body").empty().append(div2);
		}
	});
	
	
	$("#title").click(function(){
		$("#list").css("display","block");
		$("#edit").css("display","none");
		getAllBillboard(1);
	});
	
	$("#insert").click(function(){
		$("#bName").val("");
		$("#team").val("");
		$("#imgPreview").empty();
		$("#bDate").val("");
		$("#photo").val("");
		$("#imgPreview").css("display","none");
		$("#edit").css("display","block");
		$("#list").css("display","none");
		$("#submit").val("提交");
	});
	
	$("#submit").click(function(){
		var text = $.trim($(this).val());
		var bId = $("#bId").val();
		var name = $("#bName").val();
		var team = $("#team").val();
		var rank = $('input:radio:checked').val();
		var photo = document.getElementById("photo");
		var bDate = $("#bDate").val();
		
		if(name == ""){
			$(".error1").empty().append("该项为必填项").css("color","red");
		}else{
			$(".error1").empty();
		}
		if(team == ""){
			$(".error2").empty().append("该项为必填项").css("color","red");
		}else{
			$(".error2").empty();
		}
		if(bDate == ""){
			$(".error3").empty().append("该项为必填项").css("color","red");
		}else{
			$(".error3").empty();
		}
		if(text == "提交"){
			$.ajaxFileUpload({
				url:path + '/billboard/insertBillboard',
				secureuri:false,
				fileElementId:'photo',
				dataType : 'text',
				type: 'post',
				ContentType:"text/html",
				data:{
					name:name,
					team:team,
					rank:rank,
					bDate:bDate
				},
				success : function (data){
					if(data.indexOf("success") > -1){
						$("#list").css("display","block");
						$("#edit").css("display","none");
						getAllBillboard(1);
				}},
				error : function(data){
					alert(JSON.stringify(data));
				}
			});
		   
		}else if(text == "修改"){
			$.ajaxFileUpload({
				url:path + '/billboard/editBillboardById',
				secureuri:false,
				fileElementId:'photo',
				dataType : 'text',
				type: 'post',
				ContentType:"text/html",
				data:{
					bId:bId,
					name:name,
					team:team,
					rank:rank,
					bDate:bDate
				},
				success : function (data){
					if(data.indexOf("success") > -1){
						$("#list").css("display","block");
						$("#edit").css("display","none");
						getAllBillboard(1);
				}},
				error : function(data){
					alert(JSON.stringify(data));
				}
			});
			
		}
	});
	
	/*$(".vertical-nav a[href='/JMOA/javascrip:void(0)']").attr("data-toggle","modal").attr("data-target","#myModal2");
	
	$("#ok").click(function(){
		var name = $("#bName").val()
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
	});*/
});