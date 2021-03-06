$(function(){
	
	getAllNews(1);
	
	$("#title").append("新闻列表");
	$("#insert").append("发布新闻");
	
	$("#list").css("display","block");
	$("#edit").css("display","none");
	
	

	function getAllNews(pageNo)
	{
		$.ajax({
			url : path + '/news/getAll',
			type : 'POST',
			data : {"pageNo" : pageNo,"num" : 15},
			success : function(data){
				build_news_table(data);
				if(data.total > 15){
					build_news_pagenav(data);
				}
				build_news_pageInfo(data);
				var num = data.pageNum;
				var nums = data.navigatepageNums.length;
				pageInfo(num, nums);
			}
		});
		
	}
	
	//构建表格
	function build_news_table(result)
	{
		$("#home table tbody").empty();
		var news = result.list;
		$.each(news, function(index, item){
			var id = $("<td></td>").append(item.newsId);
			var href = path+"/news/getNewsById?newsId="+item.newsId;
			var title = $("<td></td>").append("<a href='"+href+"' style='color: dimgray'>"+item.newsTitle+"</a>");
			var content = $("<td></td>").append(item.newsContent).css("display","none");
			var dept = $("<td></td>").append(item.dept.dName);
			var emp = $("<td></td>").append(item.employee.eName);
			var date = $("<td></td>").append(item.newsDate);
			var btnEdit = $("<a></a>").attr("href","javascript:void(0)").css("color","#317EEB").append("编辑&nbsp;&nbsp;&nbsp;&nbsp;");
			var span1 = $("<span></span>").css("color","silver").append("|");
			var btndel = $("<a></a>").attr("href","javascript:void(0)").css("color","#317EEB").append("&nbsp;&nbsp;撤销&nbsp;&nbsp;&nbsp;&nbsp;");
			var span2 = $("<span></span>").css("color","silver").append("|");
			var btnsel = $("<a></a>").attr("href","javascript:void(0)").attr("data-toggle","modal").attr("data-target","#myModal").css("color","#317EEB").append("&nbsp;&nbsp;查看");
			var btn = $("<td></td>").append(btnEdit).append(span1).append(btndel).append(span2).append(btnsel);
			$("<tr></tr>").append(id).append(title).append(content).append(dept).append(emp).append(date).append(btn).appendTo("#home table tbody");
		});
	}
	
	var currentPageNo;
	
	//构建分页信息
	function build_news_pageInfo(result)
	{
		$("#pageInfo").empty();
		$("#pageInfo").append("当前第" + result.pageNum + "页,总共" + result.pages + "页,总共" + result.total + "记录");
		currentPageNo = result.pageNum;
	}
	
	//构建分页条
	function build_news_pagenav(result)
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
				getAllNews(1);
			});
			preLi.click(function(){
				getAllNews(result.pageNum - 1);
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
				getAllNews(result.pageNum + 1);
			});
			lastLi.click(function(){
				getAllNews(result.pages);
			});
		}
		$.each(result.navigatepageNums,function(index,item){
			var numLi=$("<li></li>").append($("<a></a>").append(item).attr("href","javascript:void(0)"));
			if(result.pageNum==item)
			{
				numLi.addClass("active");
			}
			numLi.click(function(){
				getAllNews(item);
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
		var title = $(this).parent().parent().find("td:eq(1)").text();
		var content = $(this).parent().parent().find("td:eq(2)").html();
		var dept = $(this).parent().parent().find("td:eq(3)").text();
		var ename = $(this).parent().parent().find("td:eq(4)").text();
		var date = $(this).parent().parent().find("td:eq(5)").text();
		if(text == "编辑"){
			$("#edit").css("display","block");
			$("#list").css("display","none");
			$("#newsTitle").val(title);
			$(".edui-body-container").html(content);
			$("#newsId").val(id);
			$("#pageInfo").empty();
			$("#title").empty().append("新闻列表");
			$("#submit").val("修改");
		}else if(text == "撤销"){
			if(window.confirm("确认删除?")){
				$.ajax({
					url : path + '/news/delNewsById',
					type : 'POST',
					data : {"newsId" : id},
					success : function(data){
						if(data == 1){
							getAllNews(currentPageNo);
						}
					}
				});
			}
		}else if(text == "查看"){
			$("#myModal .modal-title").empty().append(title);
			var div = $("<div></div>").append(dept + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>" + ename).css("position","relative").css("left","450px").css("top","5px");
			var div1 = $("<div></div>").append(date).css("position","relative").css("left","450px").css("top","10px");
			var div2 = $("<div></div>").append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + content).append(div).append(div1).css("word-wrap","break-word");
			$("#myModal .modal-body").empty().append(div2);
		}
	});
	
	$("#title").click(function(){
		$("#list").css("display","block");
		$("#edit").css("display","none");
		getAllNews(1);
	});
	
	$("#insert").click(function(){
		$("#newsTitle").val("");
		$(".edui-body-container").html("");
		$("#edit").css("display","block");
		$("#list").css("display","none");
		$("#pageInfo").empty();
		$("#submit").val("提交");
	});
	
	$("#submit").click(function(){
		var text = $.trim($(this).val());
		var newsId = $("#newsId").val();
		var newsTitle = $("#newsTitle").val();
		var newsContent = $(".edui-body-container").html();
		if(newsTitle == ""){
			$(".error1").empty().append("该项为必填项").css("color","red");
		}else{
			$(".error1").empty();
		}
		if(newsContent == ""){
			$(".error2").empty().append("该项为必填项").css("color","red");
		}else{
			$(".error2").empty();
		}
		if(text == "提交"){
			$.ajax({
				url : path + '/news/insertNews',
				type : 'POST',
				data : {"newsTitle" : newsTitle, "newsContent" : newsContent},
				success : function(data){
					if(data == 1){
						$("#list").css("display","block");
						$("#edit").css("display","none");
						getAllNews(1);
					}
				}
			});
		}else if(text == "修改"){
			$.ajax({
				url : path + '/news/editNewsById',
				type : 'POST',
				data : {"newsId" : newsId, "newsTitle" : newsTitle, "newsContent" : newsContent},
				success : function(data){
					if(data == 1){
						$("#list").css("display","block");
						$("#edit").css("display","none");
						getAllNews(1);
					}
				}
			});
		}
	});
	/*
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
	});*/
});