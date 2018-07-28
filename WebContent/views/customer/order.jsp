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
<title>订单管理</title>
<script type="text/javascript" src="${path }/bootstrap/js/jquery-1.12.4.min.js"></script>
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="${path }/Font-Awesome-3.2.1/css/font-awesome.min.css" />
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/main.css" />
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/ccsq.css" />
<link href="${path }/assets/css/icons.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/components.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/pages.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/responsive.css" rel="stylesheet" type="text/css">
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/four-status-spxq.css" />
<link rel="stylesheet" href="${path }/date/css/calendar.css">
<script type="text/javascript" src="${path }/bootstrap/js/bootstrap.min.js"></script>
<link type="text/css" href="${path }/nav/css/style.css" rel="stylesheet">
<script type="text/javascript" src="${path }/nav/js/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="${path }/nav/js/verticalnav.js"></script>
<script type="text/javascript" src="${path }/My97DatePicker/WdatePicker.js"></script>
<link type="text/css" href="${path }/pagination/style/pagination.css" rel="stylesheet">
<script type="text/javascript" src="${path }/pagination/jquery.pagination.js"></script>
<script type="text/javascript" src="${path }/bootstrap/js/ajaxfileupload.js"></script>
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
						    </div>
						</div>
					</div>
					<div class="col-lg-4 header">
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
						  <li>主页</li>
						  <li>客户管理</li>
						  <li>订单管理</li>
						</ol>
						<div class="gz">
							<input style="margin-top: -20px;" class="g-1" type="button" value="关注"/>
						</div>
			  	   	</div>
				</div>
				<div class="row ccsq-row">
					<div class="col-lg-12  ccsq-bg">
						<ul id="myTab" class="nav nav-tabs ccsq-bt">
							<li class="bt-jl"><a href="#home" data-toggle="tab">信息列表<span>(2)</span></a></li>
							<li class="bt-jl"><a href="#ios" data-toggle="tab">高级搜索<span>(3)</span></a></li>
						</ul>
						<div id="myTabContent" class="tab-content">
							<div class="tab-pane fade in active" id="home">
								<div class="dd-bt">
									<input type="file" name="file" id="file" multiple="multiple" style="position: absolute; clip: rect(0 0 0 0)" onchange="ExcelImportFileUpload();"/>
									<!--  
										隐藏file框:
										1. opacity: 0;
										2. position:absolute;clip:rect(0 0 0 0);
									-->
									<label for="file" class="ddd-bt" style="font-weight:normal;text-align:center;;padding-top:6px;">导入</label>
									<button type="button" class="ddd-bt" onclick="return ExcelExportFileDownload(this);">导出</button>
								</div>
								<div class="sou">
									<input type="text" class="sso" name="stime" id="stime" value="" placeholder="开始时间..." onclick="WdatePicker()" /> 
									<input type="text" class="sso" name="etime" id="etime" value="" placeholder="结束时间..." onclick="WdatePicker()" /> 
									<input type="text" class="sso" name="ename" id="ename" value="" placeholder="请输入姓名..."/> 
									<select class="sso" id="company">
									</select> 
									<select class="sso">
										<option value="1">按部门搜索</option>
										<option value="1">2</option>
										<option value="1">2</option>
									</select> 
									<select class="sso">
										<option value="1">按状态搜索</option>
										<option value="1">2</option>
										<option value="1">2</option>
									</select> 
									<input type="button" value="查询" id="search" style="width: 90px; height: 35px; margin-left: 10px; background-color: #019ee1; color: #FFFFFF; border: none;" />
								</div>
								<div class="col-md-12">
									<div class="tile">
										<table class="table table-hover table-striped">
											<thead class="bt">
												<tr>
													<th>序号</th>
													<th>发货日期</th>
													<th>业务员</th>
													<th>销售状态</th>
													<th>公司名称</th>
													<th>产品</th>
													<th>称体编号</th>
													<th>价格</th>
													<th>汇款额</th>
												</tr>
											</thead>
											<tbody class="tb">
											</tbody>
										</table>
										<div id="pageNav1" class="M-box" style="position: absolute; right: 0px; top: 690px; diaplay: none;">
										</div>
										<div id="pageNav2" class="M-box" style="position: absolute; right: 0px; top: 690px; diaplay: none;">
										</div>
									</div>
								</div>
							</div>
							<!--高级搜索-->
							<div class="tab-pane fade" id="ios">
								<div id="sss">
									<div class="ywsq" style="margin-bottom: 30px;">
										<h4>按条件搜索</h4>
									</div>
									<div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;">
											<span>称体编号：</span> 
											<input class="ccsq-jbpt-1" type="text" name="number" id="number" value="">
										</div>
										<span>业务员：</span>&nbsp;&nbsp;&nbsp; 
										<input class="ccsq-jbpt-1" type="text" name="salesman" id="salesman" value="">
										<button class="glyphicon glyphicon-search  dd-search" aria-hidden="true"></button>
									</div>
									<div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;">
											<span>客户：</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
											<input class="ccsq-jbpt-1" type="text" name="customer" id="customer" value="">
											<button class="glyphicon glyphicon-search  dd-search" aria-hidden="true"></button>
										</div>
										<span>代理商：</span>&nbsp;&nbsp;&nbsp; 
										<input class="ccsq-jbpt-1" type="text" name="agent" id="agent" value="">
										<button class="glyphicon glyphicon-search dd-search" aria-hidden="true"></button>
									</div>
	
									<div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;">
											<span>报货日期：</span> <input type="text" name="delivery" id="delivery" class="Wdate"
												style="padding-left: 5px; width: 380px; height: 30px; border: none; background-color: #f5f5f5;"
												onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true});" format="yyyy-MM-dd">
										</div>
										<span>发货日期：</span> <input type="text" name="issuance" id="issuance" class="Wdate"
											style="padding-left: 5px; width: 380px; height: 30px; border: none; background-color: #f5f5f5;"
											onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true});" format="yyyy-MM-dd">&nbsp;&nbsp;
									</div>
	
									<div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;">
											<span>销售模式：</span> 
											<select style="width: 380px; height: 30px; border: none; background: #f5f5f5;" id="sales" name="sales">
												<option value="河南省">河南省</option>
											</select>
										</div>
										<span>信息转接人：</span> 
										<input class="ccsq-jbpt-1" type="text" name="information" id="information" value="">
										<button class="glyphicon glyphicon-search  dd-search" aria-hidden="true"></button>
									</div>
	
									<div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;">
											<span>回款率：&nbsp;&nbsp;&nbsp;</span> 
											<input class="ccsq-jbpt-1" type="text" name="payments" id="payments" value="" />
										</div>
										<span>联系人：&nbsp;&nbsp;&nbsp;</span> 
										<input class="ccsq-jbpt-1" type="text" name="contacts" id="contacts" value="">
										<button class="glyphicon glyphicon-search  dd-search" aria-hidden="true"></button>
									</div>
	
									<div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;">
											<span>客户级别：</span> <input class="ccsq-jbpt-1" type="text" name="lavel" id="lavel" value="">
										</div>
										<span>联系人电话：</span><input class="ccsq-jbpt-1" type="text" name="phone" id="phone" value="">
									</div>
									<div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;">
											<span>销售状态：</span> 
											<select style="width: 380px; height: 30px; border: none; background: #f5f5f5;" name="statu" id="statu">
												<option value="不选择">不选择</option>
												<option value="备用秤">备用秤</option>
												<option value="工厂未发">工厂未发</option>
												<option value="备货">备货</option>
												<option value="取消发货">取消发货</option>
												<option value="折旧已售">折旧已售</option>
												<option value="调货">调货</option>
												<option value="已退">已退</option>
												<option value="赠送">赠送</option>
												<option value="已售">已售</option>
											</select>
										</div>
									</div>
									<div style="margin-top: 45px; margin-left: 600px;">
										<input class="bc" type="button" value="搜索" id="hsearch"/>&nbsp;&nbsp; 
										<input class="an4" type="reset" value="清空"/>
									</div>
								</div>
								<div id="ttt">
									<table class="table table-hover table-striped">
										<thead class="bt">
											<tr>
												<th>序号</th>
												<th>发货日期</th>
												<th>业务员</th>
												<th>销售状态</th>
												<th>公司名称</th>
												<th>产品</th>
												<th>称体编号</th>
												<th>价格</th>
												<th>汇款额</th>
											</tr>
										</thead>
										<tbody class="tb">
										</tbody>
									</table>
									<div id="pageNav3" class="M-box" style="position: absolute; right: 0px; top: 800px; diaplay: none;">
									</div>
								</div>
							</div>
							<!--高级搜索-->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
<script type="text/javascript" src="${path }/js/order.js"></script>
<script type="text/javascript" src="${path }/js/customer-base.js"></script>
<!-- 可以在外部js文件中使用path作为项目的根路径 -->
<script>var path = '${path}'; </script>
<script type="text/javascript">
function ExcelImportFileUpload()
{
	$.ajaxFileUpload({
		url:path + '/customer/excelImportOrder',
		secureuri:false,
		fileElementId:'file',
		dataType: 'text',
		success: function (data){
			getAllOrder(1)
		}
	});
}
function ExcelExportFileDownload(object)
{
	window.location.href = path + "/customer/excelExportOrder?fileName=" + encodeURIComponent("订单信息表");
}
</script>
</html>