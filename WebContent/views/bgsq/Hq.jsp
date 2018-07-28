<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://shiro.apache.org/tags" prefix="shiro"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
	pageContext.setAttribute("path", request.getContextPath());
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/bootstrap.min.css" />
		<link type="text/css" rel="stylesheet" href="${path }/Font-Awesome-3.2.1/css/font-awesome.min.css" />
        <link type="text/css" rel="stylesheet" href="${path }/assets/css/icons.css" >
        <link type="text/css" rel="stylesheet" href="${path }/assets/css/components.css" >
        <link type="text/css" rel="stylesheet" href="${path }/date/css/calendar.css">
		<link type="text/css" rel="stylesheet" href="${path }/nav/css/style.css" >	
		<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/ccsq.css" />
        <link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/four-status-spxq.css" />
        <link type="text/css" rel="stylesheet" href="${path }/laypage/skin/laypage.css">
		<script type="text/javascript" src="${path }/My97DatePicker/WdatePicker.js"></script>
		<script type="text/javascript" src="${path }/bootstrap/js/jquery-1.12.4.min.js"></script>
		<script type="text/javascript" src="${path }/laypage/laypage.js"></script>
		<script type="text/javascript" src="${path }/nav/js/verticalnav.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				$(".vertical-nav").verticalnav({speed:400,align:"left"});
			});
			</script>
<script type="text/javascript">
       window.onload = function() {
        var ele = document.getElementById("v");
        ele.addEventListener("click",function(e) {
            var arr = document.getElementsByTagName("a");
            for (var i=0; i<arr.length; i++) {
                arr[i].style.color = "white";
            } 
            e.target.style.color = "red";
        });
    }
    </script>
<title>办公-衡器视窗</title>
</head>
<body>
		<div class="container-fluid">
			<div class="row bg">
				<div class="col-lg-1 left-navigation">
			  	 <div class="logo">
			  	 	<h3>
			  	 		<img src="${path }/assets/images/logo-1.png" >
			  	 		今迈办公系统
			  	 	</h3>
			  	 </div>
                 <ul class="vertical-nav" id="v">
                 <li role="presentation"><a href="${path }/home.jsp"><span class=" glyphicon glyphicon-home"></span>个人首页</a></li>
				 <shiro:hasPermission name="permission:intobgsqsc">
				 	<li role="presentation"><a href="#" id="queryByMenu"><span class="glyphicon glyphicon-pawn"></span>办公申请视窗</a></li>
				 </shiro:hasPermission>
				 <shiro:hasPermission name="permission:intocwsqsc">
				 	<li role="presentation"><a href="#" id="queryByMenus"><span class="glyphicon glyphicon-list "></span>财务管理视窗</a></li>
				 </shiro:hasPermission>
				</ul>
			  </div>
				<div class="col-lg-11">
				   <div class="row">
			  		<div class="col-lg-8 header">
			  		  <div>
						<!-- 四个按钮 -->
						<div class="input-group col-md-3 hd-left">
						<div class="group" style="margin-left: -14px;">
							  <shiro:hasPermission name="permission:intojtzs"><button class="jt-group" id="intoJtzs">集团直属视窗</button></shiro:hasPermission>
							  <shiro:lacksPermission name="permission:intojtzs"><button class="jt-group"><a href="#"><font style="color: #989898">集团直属视窗</font></a></button></shiro:lacksPermission>
							</div>
							<div class="group">
							   <shiro:hasPermission name="permission:intohq"><button class="jt-group" id="intoHq" style="background: #019ee1;">衡器视窗</button></shiro:hasPermission>
							   <shiro:lacksPermission name="permission:intohq"><button class="jt-group"><a href="#"><font style="color: #989898">衡器视窗</font></a></button></shiro:lacksPermission>
							</div>
							<div class="group">
							   <shiro:hasPermission name="permission:intoyl"><button class="jt-group" id="intoYl">园林视窗</button></shiro:hasPermission>
							   <shiro:lacksPermission name="permission:intoyl"><button class="jt-group"><a href="#"><font style="color: #989898">园林视窗</font></a></button></shiro:lacksPermission>
							</div>
							<div class="group">
							   <shiro:hasPermission name="permission:intohb"><button class="jt-group" id="intoHb">环保视窗</button></shiro:hasPermission>
							   <shiro:lacksPermission name="permission:intohb"><button class="jt-group"><a href="#"><font style="color: #989898">环保视窗</font></a></button></shiro:lacksPermission>
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
			  		  		<div class="kk"><img src="${path }/images/${employee.eImage }"></div>
			  		  		<div class="kl">${employee.eName }，欢迎您！</div>
			  		  		</li>
			  		  		<li>
			  		  		<a href="${path }/employee/logout"><span class="glyphicon glyphicon-off" aria-hidden="true"></span></a>
			  		  		</li>
			  		  	</ul>
			  		  </div>
			  		</div>
			  	</div>
			  	   <div class="row ccsq-row">
			  	   		<div class="col-lg-12  ccsq-bg">
						<div id="myTabContent" class="tab-content" style="height: 810px;">
						  <div class="tab-pane fade in active" id="home">

						  	<div class="sou1">
										<input type="text" class="sso" name="startTime" id="startTime" value="" placeholder="请输入开始时间" onclick="WdatePicker()" />
										<input type="text" class="sso" name="startTime1" id="startTime1" value="" placeholder="请选择结束时间" onclick="WdatePicker()" />
										<input type="text" class="sso" name="eName" id="eName" value="" placeholder="请输入姓名" />
										<select class="sso" name="forCla" id="forCla" value="">
										   		    <option value="">请选择表单类型</option>
												<c:forEach items="${ld}" var="cl">
										            <option value="${cl.name}">${cl.name}</option>
										       </c:forEach>
										</select>
										<select class="sso" name="message" id="message">
										        <option value="">请选择状态</option>
										        <c:forEach items="${message}" var="me">
										               <option value="${me.text}">${me.text}</option>
										        </c:forEach>
										</select>
										<input type="hidden" id="company" value="${company}">
										<input type="button" id="search" value="查询" style="width: 90px;height: 35px;margin-left: 10px;background-color: #019ee1;color: #FFFFFF;border: none;" />
									</div> 
						   <div class="col-md-12">
					          <div class="tile">
					            <table class="table table-hover table-striped" id="home1">
					              <thead class="bt">
					                <tr>
					                  <th>序号</th>
					                  <th>表单类型</th>
					                  <th>姓名</th>
					                  <th>公司</th>
					                  <th>部门</th>
					                  <th>申请日期</th>
					                  <th>结束日期</th>
					                  <th>紧急程度</th>
					                  <th>状态</th>
					                </tr>
					              </thead>
					              <tbody id="dat">
					              </tbody>
					            </table>
					          </div>
					        </div>
							</div>
						</div>
			  		</div>
			  	   </div>
			  	   <!-- 分页1 -->
				   <div id="page" style="margin-left:73%;margin-top:10px;"></div>
				   <!-- 分页2 -->
				   <div id="page2" style="margin-left:73%;margin-top:10px;"></div>
				 </div>
		</div>
		</div>
	</body>
<script type="text/javascript" src="${path }/js/bg-Hq.js"></script>
<!-- 可以在外部js文件中使用path作为项目的根路径 -->
<script>var path = '${path}'; </script>
</html>