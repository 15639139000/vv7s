<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://shiro.apache.org/tags" prefix="shiro"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
	pageContext.setAttribute("path", request.getContextPath());
	pageContext.setAttribute("page", "tecReviewDetail.jsp");
	pageContext.setAttribute("name", "非标技术评审");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>非标技术评审</title>
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
<script type="text/javascript" src="${path }/bootstrap/js/ajaxfileupload.js"></script>
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
							<li>办公申请</li>
							<li class="active">非标技术评审</li>
						</ol>
						<div class="gz">
						   <input style="margin-top: -20px;" class="g-1" type="button" value="关注" id="follow"/>
						</div>
					</div>
				</div>
				<div class="row ccsq-row">
					<input type="hidden" id="processModelName" value="${processModel.name }"/>
					<input type="hidden" id="flag" value="<%=request.getParameter("flag") %>"/>
					<div class="col-lg-12  ccsq-bg">
						<ul id="myTab" class="nav nav-tabs ccsq-bt" style="width: 100%;">
							<li class="bt-jl"><a href="javascript:void(0)" data-toggle="tab" id="dw">待我处理工作<span></span></a></li>
							<li class="bt-jl"><a href="javascript:void(0)" data-toggle="tab" id="fqzt">发起工作状态<span></span></a></li>
							<li class="bt-jl"><a href="javascript:void(0)" data-toggle="tab" id="fqsq">发起申请</a></li>
							<li class="bt-jl" id="pageInfo1" style="padding: 20px 0px 0px 990px;"></li>
							<li class="bt-jl" id="pageInfo2" style="padding: 20px 0px 0px 990px;"></li>
						</ul>
						<div id="myTabContent" class="tab-content" style="height: 810px;">
							<div id="leave1">
								<div class="sou">
									<input type="text" class="sso" id="stime" value="开始时间..." onclick="WdatePicker()" /> 
									<input type="text" class="sso" id="etime" value="结束时间..." onclick="WdatePicker()" /> 
									<input type="text" class="sso" id="ename" placeholder="请输入姓名..."/> 
									<select class="sso" id="company">
										<option value="0">按公司搜索</option>
										<option value="金迈衡器">金迈衡器</option>
										<option value="新新园林">新新园林</option>
									</select>
									<select class="sso" id="dept">
										<option value="0">按部门搜索</option>
										<option value="总经办">总经办</option>
										<option value="行政人力部">行政人力部</option>
										<option value="财务部">财务部</option>
										<option value="客服部">客服部</option>
										<option value="海推事业">海推事业</option>
										<option value="市场部">市场部</option>
										<option value="采购部">采购部</option>
										<option value="腾飞部">腾飞部</option>
										<option value="内勤部">内勤部</option>
										<option value="信息部">信息部</option>
										<option value="话销部">话销部</option>
										<option value="技术部">技术部</option>
										<option value="研发中心">研发中心</option>
										<option value="工程部">工程部</option>
										<option value="超限项目组">超限项目组</option>
										<option value="直销组">直销组</option>
										<option value="大客户组">大客户组</option>
										<option value="环保项目组">环保项目组</option>
									</select>
									<input type="button" value="查询" style="width: 90px; height: 35px; margin-left: 10px; background-color: #019ee1; color: #FFFFFF; border: none;" id="search1" />
								</div>
								<div class="col-md-12">
									<div class="tile">
										<table class="table table-hover table-striped" id="home1">
											<thead class="bt">
												<tr>
													<th>&nbsp;&nbsp;&nbsp;&nbsp;序号</th>
													<th>姓名</th>
													<th>公司</th>
													<th>部门</th>
													<th>申请日期</th>
													<th>紧急程度</th>
													<th>审核状态</th>
												</tr>
											</thead>
											<tbody class="tb">

											</tbody>
										</table>
										<div id="pageNav1" style="position: absolute;right:0px;top:690px;">
										</div>
									</div>
								</div>
							</div>
							<div id="leave2">
								<div class="sou">
									<input type="text" class="sso" id="stime2" value="开始时间..." onclick="WdatePicker()" /> 
									<input type="text" class="sso" id="etime2" value="结束时间..." onclick="WdatePicker()" /> 
									<input type="button" value="查询" style="width: 90px; height: 35px; margin-left: 10px; background-color: #019ee1; color: #FFFFFF; border: none;" id="search2"/>
								</div>
								<div class="col-md-12">
									<div class="tile">
										<table class="table table-hover table-striped" id="home2">
											<thead class="bt">
												<tr>
													<th>&nbsp;&nbsp;&nbsp;&nbsp;序号</th>
													<th>姓名</th>
													<th>公司</th>
													<th>部门</th>
													<th>申请日期</th>
													<th>紧急程度</th>
													<th>审核状态</th>
													<th>操作</th>
												</tr>
											</thead>
											<tbody class="tb">
											</tbody>
										</table>
										<div id="pageNav2" style="position: absolute; right: 0px; top: 690px;">
											
										</div>
									</div>
								</div>
							</div>
							
							<div id="leave3" >
								<form method="post" id="form" >
								<input class="ccsq-sp" type="hidden" name="follow" value="关注">
								<div class="ywsq">
									<h4>技术方案评审表</h4>
							    </div>
								    <div class="ccsq-jbxx">基本信息</div>
										<div class="input-group ccsq-clxx">
									<span>姓名：</span><input class="ccsq-jbpt" type="text" name="reserve1" id = "eName" value="${employee.eName }" disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span>公司：</span><input class="ccsq-jbpt" type="text" name="reserve2" value="${employee.dept.company.cName }" disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span>部门：</span><input class="ccsq-jbpt" type="text" name="reserve3" id="curDept" value="${employee.dept.dName }" disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span>职位：</span><input class="ccsq-jbpt" type="text" name="reserve4" value="${employee.eManager }" disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span>申请日期：</span>
									<input type="text" name="apply" id="apply" class="Wdate" placeholder=""
										   style="padding-left: 5px; width: 140px; height: 30px; border: none; background-color: #f5f5f5;"
										   onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true });"
										   format="yyyy-MM-dd" disabled>
									</div>
									<div id="YwForm">
								    <div class="ccsq-xx" style="margin-top: 20px;">
											<span>紧急程度：</span> 
											<input type="radio" name="inLineOptions1" id="inlineRadio1" value="一般" checked="checked" disabled>
											一般&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
											<input type="radio" name="inLineOptions1" id="inlineRadio2" value="重要" disabled>
											重要&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
											<input type="radio" name="inLineOptions1" id="inlineRadio3" value="紧急" disabled>
											紧急
									</div>
									<div class="ccsq-xx">
										<input class="ccsq-sp" type="hidden" name="taskId" id="taskId" value="">
										<input class="ccsq-sp" type="hidden" name="message" id="message" value="">
										<input class="ccsq-sp" type="hidden" name="nextPerson" id="nextPerson" value="">
									</div>
								    <!--业务部-->
										
									<div class="js-kk">
										<div class="ccsq-jbxx">业务部分</div>
									    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										   <div style="padding-right: 100px; float: left;">
										   	<span class="b-label">客户名称：</span>
										   		<input type="text" class="ccsq-jbpt-1" value="" name="reserve5" id="reserve5" disabled></input>
										   </div>
										   <span class="b-label">安装地点：</span>
										   <input class="ccsq-jbpt-1" type="text"  value="" name="reserve6" id="reserve6" disabled>
									    </div>
									    
									    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
											<div style="padding-right: 100px; float: left;"><span>应用范围：</span>
												<textarea name = "reserve7" id="reserve7" type="text" class="ccsq-kg"  style="background: #f5f5f5;" disabled></textarea>
											</div>
										</div>
										
										<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
											<div style="padding-right: 100px; float: left;"><span>定制需求：</span>
												<textarea name = "reserve8" id="reserve8" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled></textarea>
											</div>
										</div>
										
										<div class="ccsq-xx" style="margin-left: 145px;">
											<span class="b-label">是否需要技术部与业务部电话沟通：</span>
											<input type="radio" name="inLineOptions2" id="inlineRadio4" value="是" disabled>是&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<input type="radio" name="inLineOptions2" id="inlineRadio5" value="否" disabled>否&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										</div>
										
										<div class="ccsq-xx" style="margin-left: 145px;">
										   <span class="b-label">需技术部回复时间：</span><input type="text" name="reserve9" id="reserve9" class="Wdate" placeholder="" style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true });" format="yyyy-MM-dd" disabled>
										</div>
										
										<div class="ccsq-xx" style="margin-left: 145px;">
										   <span class="b-label">客户主要技术负责人及联系方式：</span><input name = "reserve10" id="reserve10" type="text" style="width: 380px;" value="" class="ccsq-jbin" disabled/><br>
										</div>
										
										<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px; margin-left: 50px;">
										   <div style="padding-right: 100px; float: left;">
										   	<span class="b-label">制表人/区域经理：</span>
										   		<input name = "reserve11" id="reserve11" type="text" class="ccsq-jbpt-1" value="" disabled></input>
										   </div>
										   <span class="b-label">主要业务负责人：</span>
										   <input class="ccsq-jbpt-1" type="text" name="reserve12" id="reserve12" value="" disabled>
									    </div>
									</div>
								</div>
								<!--技术部-->
								<div class="js-kk" id="JsForm">
									<div class="ccsq-jbxx">技术部分</div>
									
									<div class="ccsq-xx" style="margin-left: 145px;">
										<span class="b-label">技术评审方式：</span>
										<input type="radio" name="inLineOptions3" id="inlineRadio6" value="与客户电话沟通" checked="checked" disabled>与客户电话沟通&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<input type="radio" name="inLineOptions3" id="inlineRadio7" value="出现场" disabled>出现场&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									    <input type="radio" name="inLineOptions3" id="inlineRadio8" value="委托现场" disabled>委托现场
									</div>
									
									<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>需采购的配件：</span>
											<textarea name ="reserve13" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled></textarea>
										</div>
									</div>
									
									<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>工期要求及预计加工周期：</span>
											<textarea name ="reserve14" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled></textarea>
										</div>
									</div>
									
									<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>定制产品具体配置：</span>
											<textarea name = "reserve15" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled></textarea>
										</div>
									</div>
									
									<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>技术方案及要求：</span>
											<textarea name ="reserve16" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled></textarea>
										</div>
									</div>
									
								    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">审批技术员：</span>
									   		<input name="reserve17" type="text" class="ccsq-jbpt-1" value="" disabled></input>
									   </div>
									   <span class="b-label">审批日期：</span><input name="reserve18" type="text" name="end_time" id="end_time" class="Wdate" placeholder="" style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true ,maxDate:'#F{$dp.$D(\'end_time\')}'});" format="yyyy-MM-dd" disabled>
								    </div>
								    
									<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>建议及意见：</span>
											<textarea name="reserve19" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled></textarea>
										</div>
									</div>
									
								</div>
								
								
								<!--采购部-->
								<div class="js-kk" id="CgForm">
									<div class="ccsq-jbxx">采购部分</div>
									
									 <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">核算成本价①：</span>
									   		<input name="reserve20" type="text" class="ccsq-jbpt-1" value="" disabled></input>
									   </div>
									   <span class="b-label">采购周期：</span><input name="reserve21" type="text" class="ccsq-jbpt-1" value="" disabled></input>天
								    </div>
								    
								    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">成本会计：</span>
									   		<input name ="reserve22" type="text" class="ccsq-jbpt-1" value="" disabled></input>
									   </div>
									   <span class="b-label">日期：</span><input name="reserve23" type="text"  id="end_time" class="Wdate" placeholder="" style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true ,maxDate:'#F{$dp.$D(\'end_time\')}'});" format="yyyy-MM-dd" disabled>
								    </div>
								    
								    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">采购人员：</span>
									   		<input name="reserve24" type="text" class="ccsq-jbpt-1" value="" disabled></input>
									   </div>
									   <span class="b-label">日期：</span><input type="text" name="reserve25" id="end_time" class="Wdate" placeholder="" style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true ,maxDate:'#F{$dp.$D(\'end_time\')}'});" format="yyyy-MM-dd" disabled>
								    </div>
									
									<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>建议及意见：</span>
											<textarea name="reserve26" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled></textarea>
										</div>
									</div>
									
								</div>
								
								<!--内勤部-->
								<div class="js-kk" id="NqForm">
									<div class="ccsq-jbxx">内勤部分</div>
									
									 <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">加工成本②：</span>
									   		<input name="reserve27" type="text" class="ccsq-jbpt-1" value="" disabled></input>
									   </div>
									   <span class="b-label">加工周期：</span><input name="reserve28" type="text" class="ccsq-jbpt-1" value="" disabled></input>天
								    </div>
								    
								    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">运送成本③：</span>
									   		<input name="reserve29" type="text" class="ccsq-jbpt-1" value="" disabled></input>
									   </div>
									   <span class="b-label">运送周期：</span><input name="reserve30" type="text" class="ccsq-jbpt-1" value="" disabled></input>天
								    </div>
								    
								    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">工厂提供者：</span>
									   		<input name="reserve31" type="text" class="ccsq-jbpt-1" value="" disabled></input>
									   </div>
									   <span class="b-label">日期：</span><input type="text" name="reserve32" id="end_time" class="Wdate" placeholder="" style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true ,maxDate:'#F{$dp.$D(\'end_time\')}'});" format="yyyy-MM-dd" disabled>
								    </div>
								    
								    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>产品是否清晰：</span>
											<textarea name="reserve33" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled></textarea>
										</div>
									</div>
									
									<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>配置是否清晰：</span>
											<textarea name="reserve34" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled></textarea>
										</div>
									</div>
									
									<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>产品信息及要求通知厂部：</span>
											<textarea name="reserve35" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled></textarea>
										</div>
									</div>
								    
								    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">报货人：</span>
									   		<input name="reserve36" type="text" class="ccsq-jbpt-1" value="" disabled></input>
									   </div>
									   <span class="b-label">日期：</span><input type="text" name="reserve37" id="end_time" class="Wdate" placeholder="" style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true ,maxDate:'#F{$dp.$D(\'end_time\')}'});" format="yyyy-MM-dd" disabled>
								    </div>
									
								</div>
								
								<!--财务部-->
								<div class="js-kk" id="CwForm">
									<div class="ccsq-jbxx">财务部分</div>
									
									 <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">供货成本①+②+③：</span>
									   		<input name="reserve38" type="text" class="ccsq-jbpt-1" value="" disabled></input>
									   </div>
									   <span class="b-label">供货周期：</span><input name="reserve39" type="text" class="ccsq-jbpt-1" value="" disabled></input>天
								    </div>
								    
								    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">财务部：</span>
									   		<input name="reserve40" type="text" class="ccsq-jbpt-1" value="" disabled></input>
									   </div>
									   <span class="b-label">日期：</span><input type="text" name="reserve41" id="end_time" class="Wdate" placeholder="" style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true ,maxDate:'#F{$dp.$D(\'end_time\')}'});" format="yyyy-MM-dd" disabled>
								    </div>
									
								</div>
								    
								    <!--财务信息-->
									<div class="ccsq-jbxx">副总经理或授权人</div>
									<p style="margin-left: 75px;">仅指目前现有技术无法达到客户要求仍要生产、供货周期提前、价格低于供货价格、没有合同或预付款，需特批者。</p>
									<div id="LzForm">
										<div class="ccsq-xx" style="margin-left: 145px;">
											<!--<span class="b-label">技术评审方式：</span>-->
											<input type="checkbox" name="inLineOptions4" id="inlineRadio4" value="1、试产"  disabled>1、试产&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<input type="checkbox" name="inLineOptions4" id="inlineRadio4" value="2、业务要求供货周期提前" disabled>2、业务要求供货周期提前&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										    <input type="checkbox" name="inLineOptions4" id="inlineRadio4" value="3、价格低于供货价格" disabled>3、价格低于供货价格&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										    <input type="checkbox" name="inLineOptions4" id="inlineRadio4" value="4、没有合同或预付款" disabled>4、没有合同或预付款
										</div>
										
									    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										   <div style="padding-right: 100px; float: left;">
										   	<span class="b-label">签字：</span>
										   		<input name="reserve42" class="ccsq-jbpt-1" value="" disabled></input>
										   </div>
										   <span class="b-label">日期：</span>
										   		<input type="text" name="reserve43" id="end_time" class="Wdate" placeholder="" style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true ,maxDate:'#F{$dp.$D(\'end_time\')}'});" format="yyyy-MM-dd" disabled>
									    </div>
								    </div>
								    <input type="hidden" name="condition" id="condition" value="">
							        <div style="margin-top: 45px;margin-left: 600px;">
							        	<input type="hidden" name="state" value=""/>
							        	<shiro:hasPermission name="permission:fbsq">
										<input class="bc" name="btn" type="button" value="保存" id="save"/>&nbsp;&nbsp; 
										<input class="tj" name="btn"  type="button" value="提交" id="sub" />
										</shiro:hasPermission>
										<shiro:lacksPermission name="permission:fbsq">
										<input class="an1" type="button" value="仅限业务部发起申请" style="margin-left:120px;width: 250px"/>&nbsp;&nbsp;
										</shiro:lacksPermission>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
<script type="text/javascript" src="${path }/js/tecReview.js"></script>
<script type="text/javascript" src="${path }/js/base2.js"></script>
<!-- 可以在外部js文件中使用path作为项目的根路径 -->
<script>var path = '${path}'; </script>
<script>var page = '${page}'; </script>
<script>var name = '${name}'; </script>
<!--增加删除表单js-->
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