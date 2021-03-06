<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://shiro.apache.org/tags" prefix="shiro"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
	pageContext.setAttribute("path", request.getContextPath());
	pageContext.setAttribute("page", "reimbursement_bxsq.jsp");
	pageContext.setAttribute("name", "报销管理");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>报销管理</title>
<script type="text/javascript" src="${path }/bootstrap/js/jquery-1.12.4.min.js"></script>
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" href="${path }/bootstrap/css/tinyImgUpload.css">
<link type="text/css" rel="stylesheet" href="${path }/Font-Awesome-3.2.1/css/font-awesome.min.css" />
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/main.css" />
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/ccsq.css" />

<link href="${path }/assets/css/icons.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/components.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/pages.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/responsive.css" rel="stylesheet" type="text/css">

<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/four-status-spxq.css" />
<link rel="stylesheet" href="${path }/date/css/calendar.css">
<link type="text/css" href="${path }/nav/css/style.css" rel="stylesheet">
<link type="text/css" href="${path }/layui/css/layui.css" rel="stylesheet">

<script src="${path }/bootstrap/js/tinyImgUpload.js"></script>
<script type="text/javascript" src="${path }/layui/layui.all.js"></script>

<script type="text/javascript" src="${path }/nav/js/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="${path }/bootstrap/js/bootstrap.min.js"></script> <!-- 模态框不显示问题 -->
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
						<div class="hd-right">
							<ul>
								<li>
									<span><img src="${path }/images/${employee.eImage }"></span>
									${employee.eName }，欢迎您！
								</li>
								<li>
									<a href="${path }/employee/logout" style="color:white;">
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
							<li>财务管理</li>
							<li class="active">报销管理</li>
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
							<li class="bt-jl"><a href="javascript:void(0);" data-toggle="tab" id="dw">待我处理工作<span></span></a></li>
							<li class="bt-jl"><a href="javascript:void(0);" data-toggle="tab" id="fqzt">发起工作状态<span></span></a></li>
							<li class="bt-jl"><a href="javascript:void(0);" data-toggle="tab" id="fqsq">发起申请</a></li>
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
										<option value="软件部">软件部</option>
										<option value="销售部">销售部</option>
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
							
							<div id="leave3">
								<form method="post" id="form" enctype="multipart/form-data">
								<input class="ccsq-sp" type="hidden" name="follow" value="关注">
								<div class="ywsq">
									<h4>报销申请表</h4>
								</div>
								<div class="ccsq-jbxx">基本信息</div>
								<div class="input-group ccsq-clxx">
									<span>姓名：</span><input class="ccsq-jbpt" type="text" value="${employee.eName }" disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span>公司：</span><input class="ccsq-jbpt" type="text" value="${employee.dept.company.cName }"  disabled >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span>部门：</span><input class="ccsq-jbpt" type="text" value="${employee.dept.dName }"  disabled >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span>职位：</span><input class="ccsq-jbpt" type="text" value="${employee.eManager }"  disabled >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span>申请日期：</span>
									<input type="text" name="apply" id="apply" class="Wdate" 
										   style="padding-left: 5px; width: 140px; height: 30px; border: none; background-color: #f5f5f5;"
										   onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true });"
										   format="yyyy-MM-dd">
								</div>
								<div class="ccsq-jbxx">报销信息</div>
								<div class="ccsq-xx">
									<span>紧急程度：</span> 
									<input type="radio" name="inLineOptions1" id="inlineRadio1" value="一般" checked="checked">
									一般&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
									<input type="radio" name="inLineOptions1" id="inlineRadio2" value="重要">
									重要&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
									<input type="radio" name="inLineOptions1" id="inlineRadio3" value="紧急">
									紧急
								</div>
								<div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
								   <div style="padding-right: 100px; float: left;">
								   <span>关联申请单：</span><input class="ccsq-jbpt-1" type="text" name="reserve1" id="reserve1" value="">
								   <input class="bc-1" type="button" value="选择"/> </div>
							    </div>
							    <div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
								   <div style="padding-right: 100px; float: left;">
								   <span>项目名称：</span><input class="ccsq-jbpt-1" type="text" name="reserve2" id="reserve2" value=""></div>
									<span>报销合计：</span><input class="ccsq-jbpt-1" style="width: 140px;" type="number" name="reserve7" id="reserve7" value="0">元
								        <input class="ccsq-jbpt-1" style="width: 212px; margin-left: 10px;" type="text" name="reserve8" id="reserve8" value="请输入大写金额">
								        <span style="padding:3px 6px;color:red;" id="error2"></span>   			  
							    </div>
							    <div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
								   <div style="padding-right: 100px; float: left;">
								   <span>客户名称：</span><input class="ccsq-jbpt-1" type="text" name="reserve4" id="reserve4" value=""></div>
								   <span>借款金额：</span>
								   <input class="ccsq-jbpt-1" style="width: 140px;" type="number" name="reserve5" id="reserve5" value="0">元
								   <input class="ccsq-jbpt-1" style="width: 212px; margin-left: 10px;" type="text" name="reserve6" id="reserve6" value="请输入大写金额">
								   <span style="padding:3px 6px;color:red;" id="error1"></span>
							    </div>
							    <div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
								   <div style="padding-right: 100px; float: left;">
								   		 <span>合同名称：</span><input class="ccsq-jbpt-1" type="text" name="reserve3" id="reserve3" value="">
								   </div>
								   <span>实报金额：</span><input class="ccsq-jbpt-1" style="width: 140px;" type="number" name="reserve9" id="reserve9" value="0">元
								   <input class="ccsq-jbpt-1" style="width: 212px; margin-left: 10px;" type="text" name="reserve10" id="reserve10" value="请输入大写金额">
								   <span style="padding:3px 6px;color:red;" id="error3"></span>
							    </div>
							    <div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
								    <div style="padding-right: 100px; float: left;"><span>报销周期：</span>
									    <input type="text" name="reserve11" id="reserve11" class="Wdate" style="padding-left: 5px;width: 172px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true });" format="yyyy-MM-dd">&nbsp;&nbsp;
	                                                                                                            至
	                                    <input type="text" name="reserve13" id="reserve13" class="Wdate" style="padding-left: 5px;width: 172px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true });" format="yyyy-MM-dd">&nbsp;&nbsp;
                                    </div>
								</div>
									
								<div class="ccsq-jtmx">
									<h3>报销明细</h3>
									<input class="ccsq-bdan sc " type="button" name="Submit2" value="删除" onclick="DeleteRow1(document.getElementById('tabProduct1'),1)" />
									<input class="ccsq-bdan xz " type="button" name="Submit" value="新增" onclick="AddRow1(document.getElementById('tabProduct1'),1)" />
									<table width="100%" border="0" cellpadding="0" cellspacing="0" id="tabProduct1">
										<tr class="ccsq-bdbt">
											<td width="32" align="center" bgcolor="#EFEFEF" Name="checkbox">
												<input type="hidden" name="checkbox" value="checkbox" />
											</td>
											<td width="120" bgcolor="#EFEFEF" Name="Num" EditType="TextBox">序号</td>
											<td width="700" bgcolor="#EFEFEF" Name="Amount" EditType="TextBox">费用科目</td>
											<td width="700" bgcolor="#EFEFEF" Name="Amount1" EditType="TextBox">数量</td>
											<td width="700" bgcolor="#EFEFEF" Name="Amount2" EditType="TextBox">金额</td>
											<td width="700" bgcolor="#EFEFEF" Name="Amount3" EditType="TextBox">是否预算内</td>
											<td width="700" bgcolor="#EFEFEF" Name="Amount4" EditType="TextBox">票号</td>
											<td width="700" bgcolor="#EFEFEF" Name="Amount5" >操作</td>
										</tr>
									</table>
									<input type="hidden" name="tableData1" id="tableData1" value="" />
								</div>
								
								<div class="modal fade" id="imageModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
								  <div class="modal-dialog" role="document">
								    <div class="modal-content">
								      <div class="modal-header">
								        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
								        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
								      </div>
								      <div class="modal-body" style="width: 500px;height: 500px;">
								            <div id="upload"></div>
								      </div>
								      <div class="modal-footer">
								        <button type="button" class="btn btn-primary" data-dismiss="modal" id="uploadBtn">确定</button>
								      </div>
								    </div>
								  </div>
								</div>

								<input type="hidden" name="condition" id="condition" value="">								
								<div style="margin-top: 45px; margin-left: 600px;">
									<input type="hidden" name="state" value=""/>
									<input class="bc" name="btn" type="button" value="保存" id="save"/>&nbsp;&nbsp; 
									<input class="tj" name="btn"  type="button" value="提交" id="sub" />
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
<script type="text/javascript" src="${path }/js/reimbursement.js"></script>
<script type="text/javascript" src="${path }/js/base.js"></script>
<!-- 可以在外部js文件中使用path作为项目的根路径 -->
<script>var path = '${path}'; </script>
<script>var page = '${page}'; </script>
<script>var name = '${name}'; </script>
<script>
document.documentElement.style.fontSize = document.documentElement.clientWidth*0.1+'px';
var options = {
    path: '/',
    onSuccess: function (res) {
        console.log(res);
    },
    onFailure: function (res) {
        console.log(res);
    }
}

var upload = tinyImgUpload('#upload', options);
document.getElementsByClassName('submit')[0].onclick = function (e) {
    upload();
}
</script>
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