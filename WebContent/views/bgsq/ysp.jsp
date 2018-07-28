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
<meta charset="UTF-8">
<title>办公-详情页</title>
<script type="text/javascript" src="${path }/bootstrap/js/jquery-1.12.4.min.js"></script>
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="${path }/Font-Awesome-3.2.1/css/font-awesome.min.css" />
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/main.css" />
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/ccsq.css" />

<link href="${path }/assets/css/icons.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/components.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/pages.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/responsive.css" rel="stylesheet" type="text/css">

<link type="text/css" href="${path }/nav/css/style.css" rel="stylesheet">
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/four-status-spxq.css" />

<script type="text/javascript" src="${path }/bootstrap/js/bootstrap.min.js"></script> <!-- 模态框不显示问题 -->
<script type="text/javascript" src="${path }/nav/js/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="${path }/nav/js/verticalnav.js"></script>
<script type="text/javascript" src="${path }/My97DatePicker/WdatePicker.js"></script>
<style type="text/css">
#home table td{vertical-align: middle;}
</style>
<script type="text/javascript">
	$(document).ready(function() {
		$(".vertical-nav").verticalnav({
			speed : 400,
			align : "left"
		});
	});
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
											<li><a href="${path }/${c.jUrl }">${c.jName }</a></li>
										</shiro:hasAnyRoles>
									</c:forEach>
								</ul>
							</li>
						</shiro:hasAnyRoles>
					</c:forEach>
					<%-- 实现角色不同的操作，则使用<shiro:hasPermission name="角色:操作"></shiro:hasPermission>判断 --%>
				</ul>
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
				<% 
					String id = request.getParameter("id");
					String forCla = request.getParameter("forCla");
					String assignee = request.getParameter("assignee");
					String cName = request.getParameter("cName");
					String dName = request.getParameter("dName");
					String startTime = request.getParameter("startTime");
					String emergency = request.getParameter("emergency");
					String message = request.getParameter("message");
					String opinion = request.getParameter("opinion");
					String processInstanceId = request.getParameter("processInstanceId");
				%>
				<div class="row ccsq-row">
					<div class="col-lg-12  ccsq-bg">
						<div class="col-lg-12  ccsq-bg">
							<div class="ywsq">
								<h4>审批详情表</h4>
							</div>
							<div class="nu">
								<div class="input-group1-1">
									<div class="iput">
										<span class="t1">序号：</span><input type="text" value="<%=id %>" disabled class="i-1" />
										<span class="t1">表单类型：</span><input type="text" value="<%=forCla %>" disabled class="i-1" />
										<span class="shu">|</span> <span class="t1" style="margin-left:-20px;">申请人：</span><input type="text" value="<%=assignee %>" disabled class="i-1" />
										<span class="shu">|</span> <span class="t1" style="margin-left:-20px;">公司名称：</span><input type="text" value="<%=cName %>" disabled class="i-1" />
										<span class="shu">|</span> <span class="t1" style="margin-left:-20px;">部门：</span><input type="text" value="<%=dName %>" disabled class="i-1" />
										<span class="shu">|</span> <span class="t1" style="margin-left:-20px;">申请日期：</span><input type="text" value="<%=startTime %>" disabled class="i-1" /></br>
									</div>
								</div>
								<div class="jj">
									<span>紧急程度：</span> <input type="text" class="j222" name="inlineRadioOptions3" id="inlineRadio3" value="<%=emergency %>" disabled />
									<div class="hx"></div>
									<span>意见：</span><input class="j222" type="text" value="<%=opinion %>" disabled />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</br>
									<div class="hx"></div>
							    </div>
									<div class="jj13">
										<span>流程：</span><img alt="" src="${path }/activiti/hisImage2?processInstanceId=<%=processInstanceId %>" width="300" height="180" style="background-color: #EAEDF2;"></br>
										<div class="hx"></div>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
<!-- 可以在外部js文件中使用path作为项目的根路径 -->
<script>var path = '${path}'; </script>
<script src="${path }/dist/zoomify.min.js"></script>
<script src="${path }/js/bg-ysp.js"></script>
<script type="text/javascript">

/* $(function() {
	$('.img').zoomify();
}); */
</script>
</html>