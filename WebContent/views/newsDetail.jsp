<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://shiro.apache.org/tags" prefix="shiro"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>  
<%
	pageContext.setAttribute("path", request.getContextPath());
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>通知公告详情</title>
<script type="text/javascript" src="${path }/bootstrap/js/jquery-1.12.4.min.js"></script>
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="${path }/Font-Awesome-3.2.1/css/font-awesome.min.css" />
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/main.css" />
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/noticeDetail.css" />
<link href="${path }/assets/css/icons.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/components.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/pages.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/responsive.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="${path }/bootstrap/js/bootstrap.min.js"></script>
<link type="text/css" href="${path }/nav/css/style.css" rel="stylesheet">
<script type="text/javascript" src="${path }/nav/js/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="${path }/nav/js/verticalnav.js"></script>
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/ccsq.css" />
<script type="text/javascript" src="${path }/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="${path }/My97DatePicker/WdatePicker.js"></script>
<script type="text/javascript">
	$(document).ready(function() {
		$(".vertical-nav").verticalnav({
			speed : 400,
			align : "left"
		});
	});
</script>
</head>
<body style='overflow:-Scroll;overflow-x:hidden' >
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
							<c:when test="${n.jIsParent==1 && n.jParent==null && n.jName !='个人首页'}">
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
				<div class="modal fade" id="myModal2">
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
				<div class="row">
					<div class="col-lg-12">
						<ol class="breadcrumb ccsq-dh">
							<li><a href="#">公告内容</a></li>
						</ol>
					</div>
				</div>
				<div class="notice_box">
					<h2 class="text-center">${news.newsTitle}</h2><br><br>
					<div class="notice_contion">
						<p style="font-size:16px;line-height:30px">
					${news.newsContent}
						</p>
					</div>
				</div>
				<br><br><br><br><br><br>
				<div class="notice_time">
					<p style="font-size:16px;">${news.dept.dName}</p>
					<p style="font-size:16px;">${news.employee.eName}</p>
					<p style="font-size:16px;"><fmt:formatDate value="${news.newsDate}" pattern="yyyy-MM-dd"/></p>
				</div>
			</div>
		</div>
	</div>
</body>
<script type="text/javascript" src="${path }/js/news.js"></script>
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

