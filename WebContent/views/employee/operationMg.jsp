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
<title>权限信息</title>
<script type="text/javascript" src="${path }/bootstrap/js/jquery-1.12.4.min.js"></script>
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="${path }/Font-Awesome-3.2.1/css/font-awesome.min.css" />
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/main.css" />
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/notice_bulletin.css" />
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
	
	//构建表格
	function build_noticeBulletin_table(result)
	{
		$("#home table tbody").empty();
		var operations = result.list;
		$.each(operations, function(index, item){
			var id = $("<td></td>").append(item.oId);
			var name = $("<td></td>").append(item.oName);
			var desc = $("<td></td>").append(item.oDesc);
			var btnEdit = "<a href='javascript:void(0)' color='#317EEB'><font color='#317EEB'>编辑</font>&nbsp;&nbsp;&nbsp;&nbsp;</a>";
			var span1 = $("<span></span>").css("color","silver").append("|");
			var btndel = "<span color=siver>|</span><a href='javascript:void(0)' color='#317EEB'>&nbsp;&nbsp;<font color='#317EEB'>删除</font>&nbsp;&nbsp;&nbsp;&nbsp;</a>";
			var btn = $("<td></td>").append(btnEdit).append(btndel);
			$("<tr></tr>").append(id).append(name).append(desc).append(btn).appendTo("#home table tbody");
		});
	}
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
							<li><a href="#">主页</a></li>
							<li class="active">权限管理</li>
						</ol>
					</div>
				</div>
				<div class="row ccsq-row">
					<div class="col-lg-12  ccsq-bg">
						<ul id="myTab" class="nav nav-tabs ccsq-bt">
							<li class="bt-jl"><a id="title" href="javascript:void(0);"></a></li>
							<li class="bt-jl"><a id="insert" href="javascript:void(0);"></a></li>
							<li class="bt-jl" id="pageInfo" style="padding:10px 0px 0px 1170px;"></li>
						</ul>
						<div id="myTabContent" class="tab-content" style="height: 810px;">
							<div class="tab-pane fade in active" id="home">
								<div class="col-md-12">
									
									<div class="tile" id="list" style="position: relative;">
										<table class="table table-hover table-striped">
											<thead class="bt">
												<tr>
													<th>&nbsp;&nbsp;&nbsp;&nbsp;权限ID</th>
													<th>权限名称</th>
													<th>权限描述</th>
													<th>操作</th>
												</tr>
											</thead>
											<tbody class="tb">
											</tbody>
										</table>
										<div id="pageNav" style="position: absolute;right:0px;top:725px;">
										</div>
									</div>
									<div class="tile" id="edit">
										<div style="font-family: '微软雅黑'; margin-top: 20px; margin-bottom: 20px; margin-left: 75px; font-size: 14px; font-weight: bold;">基本信息</div>
										<div class="input-group" style="font-family: '微软雅黑'; padding-left: 75px; font-size: 14px;">
											<span style="color: #666;">姓名：</span>
											<input type="text" name="company" value="${employee.eName }" disabled
												style="padding-left: 5px; width: 140px; height: 30px; border: none; background-color: #f5f5f5; color: #999">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<span style="color: #666;">公司：</span>
												<input type="text" name="userName" value="${employee.dept.company.cName }" disabled
												style="padding-left: 5px; width: 140px; height: 30px; border: none; background-color: #f5f5f5; color: #999">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<span style="color: #666;">部门：</span>
												<input type="text" name="department" value="${employee.dept.dName }" disabled
												style="padding-left: 5px; width: 140px; height: 30px; border: none; background-color: #f5f5f5; color: #999">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<span style="color: #666;">职位：</span>
											<input type="text" name="department" value="${employee.eManager }" disabled
												style="padding-left: 5px; width: 140px; height: 30px; border: none; background-color: #f5f5f5; color: #999">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										</div>
										<HR SIZE=3>
										<div style="font-family: '微软雅黑'; margin-top: 20px; margin-bottom: 20px; margin-left: 75px; font-size: 14px; font-weight: bold;">操作权限增加</div>
										<div style="padding-left: 75px; padding-bottom: 20px; font-size: 14px; width: 100%;">
											<input type="hidden" id="oId" value=""/>	
											操作名称：<input type="text" value="" id="oName" style="background-color: #f5f5f5; border: none; width: 250px; height: 30px;" /><span class="error1"></span></br></br></br>
											操作描述：<input type="text" value="" id="oDesc" style="background-color: #f5f5f5; border: none; width: 250px; height: 30px;" /><span class="error1"></span></br>
											<div style="margin-top: 45px; margin-left: 630px;">
												<input type="button" value="提交" style="width: 90px; height: 40px; background-color: #f48000; color: #FFFFFF; border: none;" id="submit"/>
											</div>
										</div>
									</div>
									<div class="modal fade" id="myModal">
									  <div class="modal-dialog">
									    <div class="modal-content">
									      <div class="modal-header" style="text-align: center;">
									        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
									        <h4 class="modal-title"></h4>
									      </div>
									      <div class="modal-body">
									      </div>
									      <div class="modal-footer">
									        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
									      </div>
									    </div>
									  </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
<script type="text/javascript" src="${path }/js/employee/operationMg.js"></script>
<!-- 可以在外部js文件中使用path作为项目的根路径 -->
<script>var path = '${path}'; </script>
</html>

