<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://shiro.apache.org/tags" prefix="shiro"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
	pageContext.setAttribute("path", request.getContextPath());
	pageContext.setAttribute("page", "reimbursement.jsp");
	pageContext.setAttribute("name", "报销管理");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>报销管理历史</title>
<script type="text/javascript" src="${path }/bootstrap/js/jquery-1.12.4.min.js"></script>
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="${path }/Font-Awesome-3.2.1/css/font-awesome.min.css" />
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/main.css" />
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/ccsq.css" />

<link href="${path }/assets/css/icons.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/components.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/pages.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/responsive.css" rel="stylesheet" type="text/css">

<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/tinyImgUpload.css" />
<link rel="stylesheet" href="${path }/date/css/calendar.css">
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/four-status-spxq.css" />
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
					</div>
				</div>
				<div class="row ccsq-row">
					<div class="col-lg-12  ccsq-bg">
						<div class="col-lg-12  ccsq-bg">
							<div class="gz">
								<input style="margin-top: -20px;" class="g-1" type="button" value="关注" id="follow"/>
							</div>
							<div class="ywsq">
								<h4>报销申请状态表</h4>
							</div>
							<form method="post" id="form" enctype="multipart/form-data">
							<div class="nryc">
								<div class="input-group1-1">
									<div class="iput">
										<p class="p1">申请人信息</p>
										<span class="t1">姓名：</span><input type="text" value="${data.applicant }" class="i-1" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<span class="shu">|</span>
										<span class="t1">公司：</span><input type="text" value="${applyCompany }" class="i-1" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<span class="shu">|</span>
										<span class="t1">部门：</span><input type="text" value="${applyDept }" class="i-1" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<span class="shu">|</span>
										<span class="t1">职称：</span><input type="text" value="${applyManager }" class="i-1" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<span class="shu">|</span>
										<span class="t1">申请日期：</span>
										<input type="text" name="apply" id="apply" value="${data.apply }" class="Wdate" 
										   style="padding-left: 5px; width: 140px; height: 30px; border: none; background-color: #f5f5f5;"
										   onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true });"
										   format="yyyy-MM-dd"></br>
									</div>
								</div>
								<div class="jj13">
									<input type="hidden" class="j222" id="inLineOptions1" value="${data.inLineOptions1 }"/> 
									<input class="ccsq-sp" type="hidden" name="taskId" id="taskId" value="${historyModel.id }">
									<input class="ccsq-sp" type="hidden" name="message" id="message" value="${data.message }">
									<input class="ccsq-sp" type="hidden" name="nextPerson" id="nextPerson" value="${data.nextPerson }">
								</div>
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
								   <span>关联申请单：</span><input class="ccsq-jbpt-1" type="text" name="reserve1" id="reserve1" value="${data.reserve1 }">
								   <input class="bc-1" type="button" value="选择"/> </div>
							    </div>
							    <div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
								   <div style="padding-right: 100px; float: left;">
								   <span>项目名称：</span><input class="ccsq-jbpt-1" type="text" name="reserve2" id="reserve2" value="${data.reserve2 }"></div>
									<span>报销合计：</span><input class="ccsq-jbpt-1" style="width: 140px;" type="number" name="reserve7" id="reserve7" value="${data.reserve7 }">元
								        <input class="ccsq-jbpt-1" style="width: 212px; margin-left: 10px;" type="text" name="reserve8" id="reserve8" value="${data.reserve8 }">
								        <span style="padding:3px 6px;color:red;" id="error2"></span>   			  
							    </div>
							    <div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
								   <div style="padding-right: 100px; float: left;">
								   <span>客户名称：</span><input class="ccsq-jbpt-1" type="text" name="reserve4" id="reserve4" value="${data.reserve4 }"></div>
								   <span>借款金额：</span>
								   <input class="ccsq-jbpt-1" style="width: 140px;" type="number" name="reserve5" id="reserve5" value="${data.reserve5 }">元
								   <input class="ccsq-jbpt-1" style="width: 212px; margin-left: 10px;" type="text" name="reserve6" id="reserve6" value="${data.reserve6 }">
								   <span style="padding:3px 6px;color:red;" id="error1"></span>
							    </div>
							    <div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
								   <div style="padding-right: 100px; float: left;">
								   		 <span>合同名称：</span><input class="ccsq-jbpt-1" type="text" name="reserve3" id="reserve3" value="${data.reserve3 }">
								   </div>
								   <span>实报金额：</span><input class="ccsq-jbpt-1" style="width: 140px;" type="number" name="reserve9" id="reserve9" value="${data.reserve9 }">元
								   <input class="ccsq-jbpt-1" style="width: 212px; margin-left: 10px;" type="text" name="reserve10" id="reserve10" value="${data.reserve10 }">
								   <span style="padding:3px 6px;color:red;" id="error3"></span>
							    </div>
							    <div class="input-group ccsq-clxx" style="margin-bottom: 30px;">
								    <div style="padding-right: 100px; float: left;"><span>报销周期：</span>
									    <input type="text" name="reserve11" id="reserve11" value="${data.reserve11 }" class="Wdate" style="padding-left: 5px;width: 172px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true });" format="yyyy-MM-dd">&nbsp;&nbsp;
	                                                                                                            至
	                                    <input type="text" name="reserve13" id="reserve13" value="${data.reserve13 }" class="Wdate" style="padding-left: 5px;width: 172px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true });" format="yyyy-MM-dd">&nbsp;&nbsp;
                                    </div>
								</div>
								
								<input type="hidden" name="follow" value="">
								<input type="hidden" value="${data.opinions }" id="opinion" />
								<div class="modal fade" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
								  <div class="modal-dialog" role="document">
								    <div class="modal-content">
								      <div class="modal-header">
								        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
								        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
								      </div>
								      <div class="modal-body" style="width: 500px;height: 500px;">
								            <div id="upload">
								            	<div id="img-container" >
								            	</div>
								            </div>
								      </div>
								      <div class="modal-footer">
								        <button type="button" id="uploadBtn" class="btn btn-primary" data-dismiss="modal"></button>
								      </div>
								    </div>
								  </div>
								</div>
								<div class="ccsq-jtmx">
										<h3>报销明细</h3>
											<c:if test="${data.message == '驳回' || data.message == '未提交' }">
											<input class="ccsq-bdan sc " type="button" name="Submit2" value="删除" onclick="DeleteRow(document.getElementById('tabProduct1'),1)" />
											<input class="ccsq-bdan xz "  type="button" name="Submit" value="新增" onclick="AddRow1(document.getElementById('tabProduct1'),1)" />
											</c:if>
										<input type="hidden" value="${data.message }" id="message"/>
										<table width="100%" border="0" cellpadding="0" cellspacing="0" id="tabProduct1">
											<c:choose>
												<c:when test="${data.message == '驳回' }">
													<tr class="ccsq-bdbt">
														<td width="32" align="center" bgcolor="#EFEFEF" Name="checkbox"><input type="hidden" name="checkbox" value="checkbox" /></td>
														<td width="120" bgcolor="#EFEFEF" Name="Num" EditType="TextBox">序号</td>
														<td width="700" bgcolor="#EFEFEF" Name="Amount" EditType="TextBox">费用科目</td>
														<td width="700" bgcolor="#EFEFEF" Name="Amount1" EditType="TextBox">数量</td>
														<td width="700" bgcolor="#EFEFEF" Name="Amount2" EditType="TextBox">金额</td>
														<td width="700" bgcolor="#EFEFEF" Name="Amount3" EditType="TextBox">是否预算内</td>
														<td width="700" bgcolor="#EFEFEF" Name="Amount4" EditType="TextBox">票号</td>
														<td width="700" bgcolor="#EFEFEF" Name="Amount5" >操作</td>
													</tr>
												</c:when>
												<c:otherwise>
													<tr class="ccsq-bdbt">
														<td width="32" align="center" bgcolor="#EFEFEF" Name="checkbox"><input type="hidden" name="checkbox" value="checkbox" /></td>
														<td width="120" bgcolor="#EFEFEF" Name="Num">序号</td>
														<td width="700" bgcolor="#EFEFEF" Name="Amount">费用科目</td>
														<td width="700" bgcolor="#EFEFEF" Name="Amount1">数量</td>
														<td width="700" bgcolor="#EFEFEF" Name="Amount2">金额</td>
														<td width="700" bgcolor="#EFEFEF" Name="Amount3">是否预算内</td>
														<td width="700" bgcolor="#EFEFEF" Name="Amount4">票号</td>
														<td width="700" bgcolor="#EFEFEF" Name="Amount5">操作</td>
													</tr>
												</c:otherwise>
											</c:choose>
										</table>
										<span id="tableData11" style="display:none;">${data.tableData1 }</span>
										<input type="hidden" name="tableData1" id="tableData1" value="" />
									</div>
								
								<c:if test="${data.message != '未提交' }">
									<div class="input-group1-2">
										<div class="iput">
											<p class="p1">审批意见</p>
											<div id="opinions"></div>
										</div>
									</div>
									</c:if>
									<c:if test="${data.message != '未提交' }">
									<div class="jj13">
										<span>流程：</span><img alt="" src="${path }/activiti/hisImage2?processInstanceId=${historyModel.processInstanceId }" width="300" height="180" style="background-color: #EAEDF2;"></br>
										<div class="hx"></div>
									</div>
								</c:if>
								<div class="jj13" style="margin-top: 30px;">
									<div class="an">
										<div class="na12">
											<input type="hidden" name="state" value=""/>
											<c:choose>
												<c:when test="${data.message == '审批中' }">
													<div class="dqr">
														<img src="${path }/assets/images/dqr.png" style="margin-left:-600px;"/>审批中....
													</div>
												</c:when>
												<c:when test="${data.message == '完成' }">
													<div class="pas">
												        <img src="${path }/assets/images/pas.png" style="margin-left:-600px;"/>审批通过
													</div>
												</c:when>
												<c:when test="${data.message == '未提交' }">
													<input type="hidden" name="state" value=""/>
													<input class="bc" name="btn" type="button" value="确定" id="save"/>&nbsp;&nbsp; 
													<input class="tj" name="btn"  type="button" value="提 交" id="sub" />
												</c:when>
												<c:otherwise>
													<c:if test="${employee.eName == data.applicant }">
														<input class="an2" type="button" id="adopt" value="重新提交" style="margin-left:200px;"/>&nbsp;&nbsp;
													</c:if>	
													<c:if test="${employee.eName != data.applicant }">
														<input class="an1" type="button" value="已驳回" style="margin-left:200px;"/>&nbsp;&nbsp;
													</c:if>
												</c:otherwise>
											</c:choose>
										</div>
									</div>
								</div>
							</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
<script type="text/javascript" src="${path }/js/reimbursement_bxsq_his.js"></script>
<script type="text/javascript" src="${path }/js/base.js"></script>
<!-- 可以在外部js文件中使用path作为项目的根路径 -->
<script>var path = '${path}'; </script>
<script>var page = '${page}'; </script>
<script>var name = '${name}'; </script>
<script src="${path }/dist/zoomify.min.js"></script>
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