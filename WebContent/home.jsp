<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://shiro.apache.org/tags" prefix="shiro"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
	pageContext.setAttribute("path", request.getContextPath());
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- IE兼容 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- 禁止缩放 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>首页</title>
<script type="text/javascript" src="${path }/bootstrap/js/jquery-1.12.4.min.js"></script>
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="${path }/Font-Awesome-3.2.1/css/font-awesome.min.css" />
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/main.css" />
<link href="${path }/assets/css/icons.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/components.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/pages.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/responsive.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="${path }/date/css/calendar.css">
<script type="text/javascript" src="${path }/bootstrap/js/bootstrap.min.js"></script>
<link type="text/css" href="${path }/nav/css/style.css" rel="stylesheet">
<script type="text/javascript" src="${path }/nav/js/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="${path }/nav/js/verticalnav.js"></script>
<script type="text/javascript">
	$(document).ready(function() {
		$(".vertical-nav").verticalnav({
			speed : 400,
			align : "left"
		});
		   
		//页面初始化时隐藏弹窗  
        $('.calendar-op').hide();
		//窗口外点击事件  
        $(document).click(function(e){  
            var popup = $(".calendar-op");  
            //判断事件对象不是弹窗对象  并且  弹窗对象不包含事件对象  
            if (!popup.is(e.target) && popup.has(e.target).length == 0) {  
                //则隐藏弹窗  
                popup.hide();  
             }    
        }); 
});	
	function addRemark(){
		$("#myModal1 .modal-title").empty().append("添加备忘");
	};
	function updateRemark(){
		var reContent = $("#getContent").val();
		$("#myModal1 .modal-title").empty().append("修改备忘");
		$("#myModal1 #desc").val(reContent);
	};
</script>
</head>
<body>
	<div class="container-fluid">
		<div class="row bg">
			<div class="col-lg-1 left-navigation">
				<div class="logo">
					<h3>
						<img src="${path }/assets/images/logo-1.png">今迈办公系统
					</h3>
				</div>
				<ul class="vertical-nav">
					<c:forEach items="${nodes }" var="n">
						<shiro:hasAnyRoles name = "${n.roles }">
							<li role="presentation">
							<c:choose>
							<c:when test="${n.jIsParent==1 && n.jParent==null}">
							<a href="${n.jUrl }">
							<span class="${n.jIcon }"></span>${n.jName }</a>
							</c:when>
							<c:otherwise>
							<a href="${path}/${n.jUrl }">
							<span class="${n.jIcon }"></span>${n.jName }</a>
							</c:otherwise>
							</c:choose>
								<ul style="position: absolute;top: 0px;">
									<c:forEach items="${n.children }" var="c">
										<shiro:hasAnyRoles name = "${c.childrenRoles }">
											<li><a href="${path }/${c.jUrl }" class="menu">${c.jName }</a></li>
										</shiro:hasAnyRoles>
									</c:forEach>
								</ul>
							</li>
						</shiro:hasAnyRoles>
					</c:forEach>
					<%-- 实现角色不同的操作，则使用<shiro:hasPermission name="角色:操作"></shiro:hasPermission>判断 --%>
				</ul>
				<div class="modal fade" id="myModal">
					<div class="modal-dialog" style="color:#666666;">
						<div class="modal-content">
							<div class="modal-header" style="text-align: center;">
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
								<h4 class="modal-title">模型信息</h4>
							</div>
							<div class="modal-body">
								<div class="tile">
									<div style="padding-left: 75px; padding-bottom: 20px; font-size: 14px; width: 100%;">
										模型名称：<input type="text" value="" id="name" style="background-color: #f5f5f5; border: none; width: 250px; height: 30px;" /></br>
										<div style="margin-top: 20px;">
										</div>
										模型标识：<input type="text" value="" id="key" style="background-color: #f5f5f5; border: none; width: 250px; height: 30px;" /></br>
										<div style="margin-top: 20px;">
										</div>
										模型描述：<input type="text" value="" id="desc" style="background-color: #f5f5f5; border: none; width: 250px; height: 30px;" /></br>
										<div style="margin-top: 20px;">
										</div>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
								<button type="button" class="btn btn-primary" id="ok">确定</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-11">
				<div class="row">
					<div class="col-lg-8 header">
						<div>
							<div class="input-group hd-left">
							<div class="group" style="margin-left:-15px;">
							  <shiro:hasPermission name="permission:intojtzs"><div class="jt-group1"><a href="${path }/allTask/GetJtzs" style="text-decoration:none;margin-left:-12px;">集团直属视窗</a></div></shiro:hasPermission>
							  <shiro:lacksPermission name="permission:intojtzs"><div class="jt-group1"><a href="javascrip:void(0);"><font style="color: #989898">集团直属视窗</font></a></div></shiro:lacksPermission>
							</div>
							<div class="group">
							   <shiro:hasPermission name="permission:intohq"><div class="jt-group1"><a href="${path }/allTask/GetHq" style="text-decoration:none;">衡器视窗</a></div></shiro:hasPermission>
							   <shiro:lacksPermission name="permission:intohq"><div class="jt-group1"><a href="javascrip:void(0);"><font style="color: #989898">衡器视窗</font></a></div></shiro:lacksPermission>
							</div>
							<div class="group">
							   <shiro:hasPermission name="permission:intoyl"><div class="jt-group1"><a href="${path }/allTask/GetYl" style="text-decoration:none;">园林视窗</a></div></shiro:hasPermission>
							   <shiro:lacksPermission name="permission:intoyl"><div class="jt-group1""><a href="javascrip:void(0);"><font style="color: #989898">园林视窗</font></a></div></shiro:lacksPermission>
							</div>
							<div class="group">
							   <shiro:hasPermission name="permission:intohb"><div class="jt-group1"><a href="${path }/allTask/GetHb" style="text-decoration:none;">环保视窗</a></div></shiro:hasPermission>
							   <shiro:lacksPermission name="permission:intohb"><div class="jt-group1"><a href="javascrip:void(0);"><font style="color: #989898">环保视窗</font></a></div></shiro:lacksPermission>
							</div>
						    </div>
						</div>
					</div>
					<div class="col-lg-4 header">
			  			<iframe id = "tianqi" class ="tianqi" name="weather_inc" src="http://i.tianqi.com/index.php?c=code&id=10" 
						 frameborder="0" marginwidth="0" marginheight="0" scrolling="no" >
						</iframe>
			  			<div class="hd-right">
							<ul>
								<li>
									<span><img src="${path }/images/${employee.eImage }"></span>
									${employee.eName }，欢迎您！
								</li>
								<li>
									<a href="${path }/employee/logout">
										<span class="glyphicon glyphicon-off" aria-hidden="true"></span>退出
									</a>
								</li>
							</ul>
						</div>
			  		</div>
				</div>
				<div class="row row-1">
					<div class="col-lg-8  dbsx-bg">
						<ul id="myTab" class="nav nav-tabs">
				  			<li class="glyphicon glyphicon-tasks" aria-hidden="true" id="dbsx"></li>
							<li class="bt-jl"><a href="#home" data-toggle="tab" id="hnc">待我处理工作<span></span></a></li>
							<li class="bt-jl"><a href="#ios" data-toggle="tab" id="hyc">发起工作状态<span></span></a></li>
							<li class="bt-jl"><a href="#jmeter" data-toggle="tab" id="hfc">重点关注<span></span></a></li>
						</ul>
						<div id="myTabContent" class="tab-content" style="height:380px;">
							<div class="tab-pane fade in active" id="home">
								<div class="col-md-12">
									<div class="tile">
										<table class="table table-hover" id="homeTable1">
											<thead class="bt">
												<tr>
													<th>表单类型</th>
													<th>紧急程度</th>
													<th>申请人</th>
													<th>申请日期</th>
												</tr>
											</thead>
											<tbody class="tb"></tbody>
										</table>
										<div id="pageNav1"> 
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane fade" id="ios">
								<div class="col-md-12">
									<div class="tile">
										<table class="table table-hover" id="homeTable2">
											<thead class="bt">
												<tr>
													<th>表单类型</th>
													<th>紧急程度</th>
													<th>申请人</th>
													<th>申请日期</th>
												</tr>
											</thead>
											<tbody class="tb"></tbody>
										</table>
										<div id="pageNav2">
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane fade" id="jmeter">
								<div class="col-md-12">
									<div class="tile">
										<table class="table table-hover" id="homeTable3">
											<thead class="bt">
												<tr>
													<th>表单类型</th>
													<th>紧急程度</th>
													<th>申请人</th>
													<th>申请日期</th>
													<th>操作</th>
												</tr>
											</thead>
											<tbody class="tb"></tbody>
										</table>
										<div id="pageNav3">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="panels panel-default">
							<div class="panel-heading">
								<h4 class="panel-title phb-bt">
									<span class=" icon-calendar icon-large"></span>日程设置
								</h4>
							</div>
							<div id="calendar" class="calendars"></div>
						</div>
					</div>
					<div class="modal fade" id="myModal1">
					<div class="modal-dialog" style="color:#666666;">
						<div class="modal-content">
							<div class="modal-header" style="text-align: center;">
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
								<h4 class="modal-title"></h4>
							</div>
							<div class="modal-body">
								<div class="tile">
									<div style="padding-left: 75px; padding-bottom: 20px; font-size: 14px; width: 100%;">
										<input type="text" value="" id="desc" style="background-color: #f5f5f5; border: none; width: 400px; height: 50px;" /></br>
										<span class="error"></span>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
								<button type="button" class="btn btn-primary" id="ok">确定</button>
							</div>
						</div>
					</div>
				</div>
				</div>
				<div class="row row-1">
					<div class="col-lg-8  dbsx-bg">
						<ul id="myTab" class="nav nav-tabs">
							<li class="icon-volume-up icon-large" id="dbsx"></li>
							<li class="active bt-jl" id="tzgg1"><a href="#tzgg" data-toggle="tab">通知公告</a></li>
							<li class="bt-jl" id="gszdTab"><a href="#gszd" data-toggle="tab">公司制度</a></li>
							<li class="bt-jl" id="zhxwTab"><a href="#zhxw" data-toggle="tab">综合新闻</a></li>
							<li class="bt-jl" id="ygfcTab"><a href="#ygfc" data-toggle="tab">员工风采</a></li>
						</ul>
						<div id="myTabContent" class="tab-content">
							<div class="tab-pane fade in active" id="tzgg">
								<div class="col-md-12">
									<div class="tile">
										<table class="table table-hover">
											<tbody class="tb">
											</tbody>
										</table>
										<div id="pageNav">
											<nav aria-label="Page navigation">
												<ul class="pagination fy">
													<%-- <li><a href="${path }/views/notice_bulletin.jsp" style="border:0">更多......</a></li> --%>
												</ul>
											</nav>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane fade" id="gszd">
								<div class="col-md-12">
									<div class="tile">
										<table class="table table-hover">
											<tbody class="tb">
											</tbody>
										</table>
										<div id="pageNav">
											<nav aria-label="Page navigation">
												<ul class="pagination fy">
												</ul>
											</nav>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane fade" id="zhxw">
								<div class="col-md-12">
									<div class="tile">
										<table class="table table-hover">
											<tbody class="tb">
											</tbody>
										</table>
										<div id="pageNav">
											<nav aria-label="Page navigation">
												<ul class="pagination fy">
												</ul>
											</nav>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane fade" id="ygfc">
								<div class="col-md-12">
									<div class="tile">
										<table class="table table-hover">
											<tbody class="tb">
											</tbody>
										</table>
										<div id="pageNav">
											<nav aria-label="Page navigation">
												<ul class="pagination fy">
												</ul>
											</nav>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="panels panel-default rl">
							<div class="panel-heading">
								<h4 class="panel-title phb-bt">
									<span class=" icon-trophy icon-large"></span>销售龙虎榜
								</h4>
							</div>
							<div class="panel-body">
								<div class="inbox-widget nicescroll mx-box">
									<!-- <a href="#"> -->
										<div id ="inbox-item1" class="inbox-item">
											<div id="a" class="inbox-item-img">
												<img src="" class="img-circle" alt="" />
											</div>
											<p id="p1" class="inbox-item-author"></p>
											<p id="p2" class="inbox-item-text">销量冠军</p>
											<p id="p3" class="inbox-item-date"></p>
										</div>
									<!-- </a>  -->
									<!-- <a href="#"> -->
										<div id ="inbox-item2" class="inbox-item">
											<div id="a" class="inbox-item-img">
												<img src="" class="img-circle" alt=""/>
											</div>
											<p id="p1" class="inbox-item-author"></p>
											<p id="p2" class="inbox-item-text">销量亚军</p>
											<p id="p3" class="inbox-item-date"></p>
										</div>
									</a> 
									<!-- <a href="#"> -->
										<div id ="inbox-item3" class="inbox-item">
											<div id="a" class="inbox-item-img">
												<img src="" class="img-circle" alt=""/>
											</div>
											<p id="p1" class="inbox-item-author"></p>
											<p id="p2" class="inbox-item-text">销量季军</p>
											<p id="p3" class="inbox-item-date"></p>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
<script src="${path }/date/js/calendar.js"></script>
<script src="${path }/js/home.js"></script>
<script src="${path }/js/base.js"></script>
<!-- 可以在外部js文件中使用path作为项目的根路径 -->
<script>var path = '${path}'; </script>
<script type="text/javascript">
	$(document).ready(function(){
		$.ajax({
			url : path + "/activiti/applicationNumber",
			type : "POST",
			success : function(data){
				var Data=data;
              	for(var key in Data) { 
                    var number = Data[key];
					var procId = key;
					$.each($(".menu"),function(index, item){
						var href = $(item).attr("href");
						var procdrf = href.substr(href.indexOf("name") + 5, href.length);
						if(procId == procdrf){
							$(this).append("&nbsp;<span style='color:#F48000;font-weight:bold;'>(" + number + ")</span>")
						}
					});
                }
			}
		});
	});
</script>
</html>
