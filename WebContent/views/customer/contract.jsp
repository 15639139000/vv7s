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
<title>合同管理</title>
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
						  <li>合同管理</li>
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
													<th>客户</th>
													<th>客户性质</th>
													<th>所在行业</th>
													<th>联系人</th>
													<th>原客户等级</th>
													<th>下次回访时间</th>
													<th>负责人</th>
													<th>信息转接人</th>
												</tr>
											</thead>
											<tbody class="tb">
											</tbody>
										</table>
										<div id="pageNav1" class="M-box" style="position: absolute; right: 0px; top: 690px; diaplay: none;">
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
										   	<span>客户：</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										   	<input class="ccsq-jbpt-1" type="text" name="customer" id="customer" value="">
									        <button class="glyphicon glyphicon-search  dd-search" aria-hidden="true" ></button>
									   </div>
									   <span>客户性质：</span>
									    <select style="width:380px;height:30px; border:none; background: #f5f5f5;" name="customerNature" id="customerNature">
											<option value="">不选择</option>
									        <option value="厂家">厂家</option>
										    <option value="经销商">经销商</option>
											<option value="个体户">个体户</option>
											<option value="重复">重复</option>
										    <option value="厂家_已排重">厂家_已排重</option>
										    <option value="经销商_已排重">经销商_已排重</option>
										    <option value="个体户_已排重">个体户_已排重</option>
									    </select>
								    </div>
								    
								    <div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
								    	<div style="padding-right: 100px; float: left;">
								    		<span>所在行业：</span>
									        <select style="width:380px;height:30px; border:none; background: #f5f5f5;" name="indestry" id="indestry">
											<option value="">不选择</option>
									        <option value="钢材">钢材</option>
									        <option value="起重机">起重机</option>
									        <option value="工程机械">工程机械</option>
										    <option value="货场">货场</option>
									        <option value="衡器">衡器</option>
									        <option value="终端">终端</option>
									        <option value="铸造">铸造</option>
									        <option value="机械厂">机械厂</option>
									        <option value="厂家">厂家</option>
									        <option value="政府">政府</option>
										    <option value="代理">代理</option>
										    <option value="矿务物局">矿务物局</option>
											<option value="化工">化工</option>
										    <option value="铝厂">铝厂</option>
										    <option value="陶瓷">陶瓷</option>
										    <option value="装载机">装载机</option>
										    <option value="环保部">环保部</option>
										    <option value="系统0">系统0</option>
										    <option value="系统1">系统1</option>
										    <option value="系统2">系统2</option>
										    <option value="黑名单">黑名单</option>
									    </select>
								    	</div>
								    	<span>生产或主营产品：</span>
									    <input type="text" name="product1" id="product1" class="Wdate" 
									    style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" 
									    onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true});" format="yyyy-MM-dd">&nbsp;&nbsp;
								    </div>
								    
								    <div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	  <span>需求产品：</span>
									   	  <input class="ccsq-jbpt-1" type="text" name="product2" id="product2" value="" /> 
									   </div>
									   <span>回访人：</span>
									   <input class="ccsq-jbpt-1" type="text" name="visit" id="visit" value="">
									   <button class="glyphicon glyphicon-search  dd-search" aria-hidden="true" ></button>
								    </div>
								    
								    <div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
								    	<div style="padding-right: 100px; float: left;">
								    		<span>回访时间：</span>
									        <input type="text" name="returnTime" id="returnTime" class="Wdate" 
									        style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" 
									        onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true});" format="yyyy-MM-dd">
								    	</div>
								    	<span>下次回访时间：</span>
								        <input type="text" name="nextReturnTime" id="nextReturnTime" class="Wdate" 
								        style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" 
								        onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true});" format="yyyy-MM-dd">&nbsp;&nbsp;
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
												<th>客户</th>
												<th>客户性质</th>
												<th>所在行业</th>
												<th>联系人</th>
												<th>原客户等级</th>
												<th>下次回访时间</th>
												<th>负责人</th>
												<th>信息转接人</th>
											</tr>
										</thead>
										<tbody class="tb">
										</tbody>
									</table>
									<div id="pageNav3" class="M-box" style="position: absolute; right: 0px; top: 800px; display: block;">
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
<script type="text/javascript" src="${path }/js/contract.js"></script>
<script type="text/javascript" src="${path }/js/customer-base.js"></script>
<!-- 可以在外部js文件中使用path作为项目的根路径 -->
<script>var path = '${path}'; </script>
<script type="text/javascript">
function ExcelImportFileUpload()
{
	$.ajaxFileUpload({
		url:path + '/customer/excelImportContract',
		secureuri:false,
		fileElementId:'file',
		dataType: 'text',
		success: function (data){
			getAllContract(1, null, null, null, null);
		}
	});
}
function ExcelExportFileDownload(object)
{
	window.location.href = path + "/customer/excelExportContract?fileName=" + encodeURIComponent("合同信息表");
}
</script>
</html>