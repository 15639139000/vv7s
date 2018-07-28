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
		<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/ldsc.css"/>
		<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/bootstrap.min.css" />
<title>主页面</title>
</head>
<body>
		<div class="m">
			<!--头部信息-->
			<div class="had">
				<div class="header-left">
					<div class="p1"><img src="${path }/assets/images/logo.png"/></div>
					<div class="w1">丨今迈集团OA办公管理系统</div>
				</div>
				<div class="header-right">
					<ul>
			  		  	<li>
			  		  		<div class="p2"><img src="${path }/images/${employee.eImage }"></div>
			  		  		<div class="w2">${employee.eName }，欢迎您！</div>
			  		  	</li>
			  		  	<li>
			  		  		<a href="${path }/employee/logout">
			  		  			<div id="g1" class="glyphicon glyphicon-off" aria-hidden="true"></div>
			  		  		</a>
			  		  	</li>
			  		</ul>
				</div>
			</div>

			<!--中间体-->
		<div class="m1">
			    <!--办公OA入口-->
				<div class="b1">
					<div class="bt">
						<img src="${path }/assets/images/01.jpg"/>
					</div>

					<div class="b1-1">
						<img src="${path }/assets/images/001.png"/>
						<p>办公OA入口</p>
					</div>

					<div class="wenzi">
						<p>集团OA办公</p>
						<span>河南今迈（集团）科技发展有限公司是一家以科技开发为基础，电子衡器、光机电一体化为主导的高新技术企业。</span>
					    <div class="anniu">
							    <a href="home.jsp" style="text-decoration:none;">点击进入</a>
						</div>
					</div>
				</div>
				<!--集团直属-->
				<div class="b5">
					<div class="bt">
						<img src="${path }/assets/images/10.jpg"/>
					</div>
					
					<div class="b1-1">
						<img src="${path }/assets/images/005.png"/>
						<p>集团直属视窗</p>
					</div>

					<div class="wenzi">
						<p>集团直属视窗</p>
						<span>河南今迈（集团）科技发展有限公司是一家以科技开发为基础，电子衡器、光机电一体化为主导的高新技术企业。</span>
					    <div class="anniu">
							    <shiro:hasPermission name="permission:intojtzs"><a href="${path }/allTask/GetJtzs" style="text-decoration:none;">点击进入</a></shiro:hasPermission>
						</div>
					</div>
				</div>
				<!--衡器视窗-->
				<div class="b2">
					<div class="bt">
						<img src="${path }/assets/images/06.jpg"/>
					</div>
					<div class="b1-1">
						<img src="${path }/assets/images/002.png"/>
						<p>衡器视窗</p>
					</div>
					<div class="wenzi">
						<p>衡器视窗</p>
						<span>河南今迈（集团）科技发展有限公司是一家以科技开发为基础，电子衡器、光机电一体化为主导的高新技术企业。</span>
					    <div class="anniu">
							    <shiro:hasPermission name="permission:intohq"><a href="${path }/allTask/GetHq" style="text-decoration:none;">点击进入</a></shiro:hasPermission>
						</div>
					</div>
				</div>
				<!--园林视窗-->
				<div class="b3">
					<div class="bt">
						<img src="${path }/assets/images/07.jpg"/>
					</div>
					<div class="b1-1">
						<img src="${path }/assets/images/003.png"/>
						<p>园林视窗</p>
					</div>
					<div class="wenzi">
						<p>园林视窗</p>
						<span>河南今迈（集团）科技发展有限公司是一家以科技开发为基础，电子衡器、光机电一体化为主导的高新技术企业。</span>
					    <div class="anniu">
							    <shiro:hasPermission name="permission:intoyl"><a href="${path }/allTask/GetYl" style="text-decoration:none;">点击进入</a></shiro:hasPermission>
						</div>
					</div>
				</div>
				<!--环保视窗-->
				<div class="b4">
					<div class="bt">
						<img src="${path }/assets/images/08.jpg"/>
					</div>
					<div class="b1-1">
						<img src="${path }/assets/images/004.png"/>
						<p>环保视窗</p>
					</div>
					<div class="wenzi">
						<p>环保视窗</p>
						<span>河南今迈（集团）科技发展有限公司是一家以科技开发为基础，电子衡器、光机电一体化为主导的高新技术企业。</span>
					    <div class="anniu">
							    <shiro:hasPermission name="permission:intohb"><a href="${path }/allTask/GetHb" style="text-decoration:none;">点击进入</a></shiro:hasPermission>
						</div>
					</div>
				</div>
		</div>
			<!--底部-->
			<div class="f">
				<p>版权所有©河南今迈科技有限公司 豫ICP备09019515号</p>
			</div>
		</div>
	</body>
</html>