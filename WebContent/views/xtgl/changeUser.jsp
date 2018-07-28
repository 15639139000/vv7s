<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://shiro.apache.org/tags" prefix="shiro"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
	pageContext.setAttribute("path", request.getContextPath());
%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>系统管理-修改用户</title>
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
	
	function PreviewImage(imgFile)
	{
	    var filextension=imgFile.value.substring(imgFile.value.lastIndexOf("."),imgFile.value.length);
	    filextension=filextension.toLowerCase();
	    if ((filextension!='.jpg')&&(filextension!='.gif')&&(filextension!='.jpeg')&&(filextension!='.png')&&(filextension!='.bmp'))
	    {
	        alert("对不起，系统仅支持标准格式的照片，请您调整格式后重新上传，谢谢 !");
	        imgFile.focus();
	    }
	    else
	    {
	        var path;
	        if(document.all)//IE
	        {
	            imgFile.select();
	            imgFile.blur();
	            path = document.selection.createRange().text;
	            document.getElementById("imgPreview").style.display = "block";
	            document.getElementById("imgPreview").innerHTML="";
	            document.getElementById("imgPreview").style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='scale',src=\"" + path + "\")";//使用滤镜效果
	        }
	        else//FF
	        {
	        	document.getElementById("imgPreview").style.display = "block";
	            path=window.URL.createObjectURL(imgFile.files[0]);// FF 7.0以上
	            document.getElementById("imgPreview").innerHTML = "<img id='img1' width='128px' height='128px' src='"+path+"'/>";
	        }
	    }
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
						<iframe name="weather_inc"  style="width:195px; margin-left:80px;margin-bottom:-39px;margin-top:8px;float:left; height:29px;"
			  				src="http://i.tianqi.com/index.php?c=code&id=1" 
 							frameborder="0" marginwidth="0" marginheight="0" scrolling="no">
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
							<li>系统管理</li>
							<li class="active">修改用户</li>
						</ol>
					</div>
				</div>
					<div class="row ccsq-row">
					<div class="col-lg-12  ccsq-bg">
					<div class="tab-pane nryc-1">
					<form action="${path }/employee/changeEmp" method="post" enctype="multipart/form-data">
			  	      <!--内容部分-->
							    	<div class="jj13">
							    	
							    	<c:forEach var="tt" items="${lis}">
							           	    	<h2 style="color: #019ee1; font-weight: bold; font-size: 14px;">修改用户</h2>
							           	    		<div class="hx"></div>
													<div class="jj13-lf glxt-1">
													    <span class="label">公司：</span>
														<select class="glxt-kk" name="cId" id="cName">
															<c:forEach items="${lc }" var="ccc">
															   <c:choose>
															        <c:when test="${tt.dept.company.cId == ccc.cId }">
															              <option value="${ccc.cId }" selected="selected">${ccc.cName }</option>
															        </c:when>
															        <c:otherwise>
															              <option value="${ccc.cId}">${ccc.cName}</option>
															        </c:otherwise>
															   </c:choose>
															</c:forEach>
													    </select></br>
														<span class="label">部门：</span>
														<select class="glxt-kk" name="dId" id="dName">
															<c:forEach items="${ld}" var="cl">
															 <c:if test="${cl.dId == tt.dept.dId }">
															    <option value="${cl.dId}" selected="selected">${cl.dName}</option>
															 </c:if>
															 <c:if test="${cl.dId != tt.dept.dId}">
										                      <option value="${cl.dId}">${cl.dName}</option>
										                      </c:if>
										                    </c:forEach>
													    </select></br>
													    <span class="label">直接上级领导：</span>
														<select class="glxt-kk" name="eLeader" id="eLeader">
															<c:forEach items="${lem}" var="clc">
															   <c:choose>
											                        <c:when test="${tt.eLeader == clc.eId }">
											                           <option value="${clc.eId}" selected="selected">${clc.eName}</option>
											                        </c:when>
											                        <c:otherwise>
											                           <option value="${clc.eId}">${clc.eName}</option>
										                            </c:otherwise>
											                   </c:choose>
										                    </c:forEach>
													    </select>
													    <div class="yh"></div>
													    <span class="label">职务：</span>
													    <input type="text" class="glxt-kk" value="${tt.eManager}" name="eManager"></input>
														<div class="yh"></div>
													    <span class="label">姓名：</span><input type="text" class="glxt-kk" value="${tt.eName}" name="eName"></input>
														<div class="yh"></div>
														<span class="label">性别：</span>
														<select class="glxt-kk" name="eSex">
															<c:choose>
											                        <c:when test="${tt.eSex == '男'}">
											                           <option value="男" selected="selected">男</option>
											                           <option value="女">女</option>
											                        </c:when>
											                        <c:when test="${tt.eSex == '女'}">
											                           <option value="男">男</option>
											                           <option value="女" selected="selected">女</option>
											                        </c:when>
											                   </c:choose>
													    </select>
													    <div class="yh"></div>
														<span class="label">年龄：</span>
														<input type="text" class="glxt-kk" value="${tt.eAge}" name="eAge"></input>
													    <div class="yh"></div>
													    <span class="label">员工编号：</span>
													    <input type="text" class="glxt-kk" value="${tt.username}" name="username" readonly style="background-color:#CCCCCC;"></input>
													    <div class="yh"></div>
													    <span class="label">员工密码：</span>
													    <input type="password" class="glxt-kk" value="${tt.password}" name="password"></input>
													    <div class="yh"></div>
													    <span class="label">出生日期：</span>
									                        <input type="text" name="eBirth" class="Wdate glxt-kk" value="${fn:substring(tt.eBirth1, 0, 19)}" style="padding-left: 5px;width: 420px; border: #e5e5e5 solid 1px; height: 40px;" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})">
														<div class="yh"></div>
														<span class="label">学历：</span><input type="text" class="glxt-kk" value="${tt.eEducation}" name="eEducation"></input>
													</div>
													<div class="jj13-rg glxt-1">
														<span class="label">籍贯：</span><input type="text" class="glxt-kk" value="${tt.eOrigin}" name="eOrigin"></input>
													    <div class="yh"></div>
													    <span class="label">民族：</span>
													    <select class="glxt-kk" name="nId">
													        <option value="">请选择民族</option>
															<c:forEach items="${ln}" var="c">
										                      <option value="${c.nId}">${c.nName}</option>
										                      <c:choose>
											                        <c:when test="${c.nId == tt.nation.nId}">
											                           <option value="${c.nId}" selected="selected">${c.nName}</option>
											                        </c:when>
											                        <c:otherwise>
											                           <option value="${c.nId}">${c.nName}</option>
										                            </c:otherwise>
											                   </c:choose>
										                    </c:forEach>
													    </select>
													    <div class="yh"></div>
														<span class="label">身份证：</span><input type="text" class="glxt-kk" value="${tt.eIdcard}" name="eIdcard"></input>
													    <div class="yh"></div>
													    <span class="label">手机号：</span><input type="text" class="glxt-kk" value="${tt.ePhone}" name="ePhone"></input>
													    <div class="yh"></div>
													    <span class="label">邮箱：</span><input type="text" class="glxt-kk" value="${tt.eEmail}" name="eEmail"></input>
													    <div class="yh"></div>
														<span class="label">居住地址：</span><input type="text" class="glxt-kk" value="${tt.eAddress}" name="eAddress"></input>
													    <div class="yh"></div>
													    <span class="label">所属区域：</span><input type="text" class="glxt-kk" value="${tt.eRegion}" name="eRegion"></input>
													    <div class="yh"></div>
														<span class="label">入职日期：</span>
									                         <input type="text" name="eHiredate" class="Wdate glxt-kk " placeholder="" value="${fn:substring(tt.eHiredate1, 0, 10)}" style="padding-left: 5px;width: 420px; border: #e5e5e5 solid 1px; height: 40px;" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})">
													    <div class="yh"></div>
													    <span class="label">转正日期：</span>
									                         <input type="text" name="eFormalDate" class="Wdate glxt-kk " placeholder="" value="${fn:substring(tt.eFormalDate1, 0, 10)}" style="padding-left: 5px;width: 420px; border: #e5e5e5 solid 1px; height: 40px;" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})">
													    <div class="yh"></div>
													    <div class="yh"></div>
													    <span class="label">账号状态：</span>
													    <select class="glxt-kk" name="sId">
															<c:forEach items="${ls}" var="ss">
															<c:choose>
											                        <c:when test="${tt.state.sId == ss.sId}">
											                           <option value="${ss.sId }" selected="selected">${ss.sName }</option>
											                        </c:when>
											                        <c:otherwise>
											                           <option value="${ss.sId}">${ss.sName}</option>
										                            </c:otherwise>
											                   </c:choose>
											                   </c:forEach>
													    </select>
													    <input type="hidden" id="eee" name="eee" value="${tt.eImage }">
													    <div style="padding-right:400px;">
													    <span>上传照片:</span>
													    <div id="imgPreview" style='width:128px; height:128px;display:none;margin-left:300px;'>
												        </div>
														<div class="fileinput-button">
																<input type="file" id="photo" accept="image/*" name="photo"  onchange='PreviewImage(this)' style="padding-left:300px;"/>
													    </div>
													    </div>
													</div>
													<div class="yh"></div>
											  </c:forEach>
										      <input style="width: 90px; height: 40px; background-color: #019ee1; color: #FFFFFF; border: none; outline: none; margin-top: 40px;margin-left:47%;" type="submit" value="修改"/>
					           	            </div>
							    </form>
								</div>
						        </div>
					      </div>
					      <!--表单内容结束-->
				</div>
			</div>
		</div>
</body>
<script type="text/javascript" src="${path }/js/addEmp.js"></script>
<script type="text/javascript" src="${path }/js/billboard.js"></script>
<!-- 可以在外部js文件中使用path作为项目的根路径 -->
<script>var path = '${path}'; </script>
<script type="text/javascript">
     $("#photo").click(function(){
           $("#eee").val("");
     })
</script>
</html>