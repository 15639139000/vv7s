<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://shiro.apache.org/tags" prefix="shiro"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 
<%
	pageContext.setAttribute("path", request.getContextPath());
	pageContext.setAttribute("page", "tecReview.jsp");
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
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/ccsq.css" />
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/four-status-spxq.css" />
<link type="text/css" rel="stylesheet" href="${path }/bootstrap/css/main.css" />

<link href="${path }/assets/css/icons.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/components.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/pages.css" rel="stylesheet" type="text/css">
<link href="${path }/assets/css/responsive.css" rel="stylesheet" type="text/css">

<link type="text/css" href="${path }/nav/css/style.css" rel="stylesheet">

<script type="text/javascript" src="${path }/nav/js/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="${path }/bootstrap/js/bootstrap.min.js"></script> <!-- 模态框不显示问题 -->
<script type="text/javascript" src="${path }/nav/js/verticalnav.js"></script>
<script type="text/javascript" src="${path }/My97DatePicker/WdatePicker.js"></script>
<link rel="stylesheet" type="text/css" href="${path }/assets/css/amazonmenu.css">
        <!--<script src="../../assets/tanchuang-js/jquery.min.js"></script>-->
        <script src="${path }/assets/tanchuang-js/amazonmenu.js"></script>
<script>
      $(function(){
   		amazonmenu.init({
		menuid:'mysidebarmenu'
  		 })
    	})
  </script>
   <!--主导航js-->
<script type="text/javascript">
	$(document).ready(function(){
		$(".vertical-nav").verticalnav({speed:400,align:"left"});
		
		var checkboxs = "${data.inLineOptions4}";
		var checkArray =checkboxs.split(",");
		var checkBoxAll = $("input[name='inLineOptions4']");
	    for(var i=0;i<checkArray.length;i++){
		//获取所有复选框对象的value属性，然后，用checkArray[i]和他们匹配，如果有，则说明他应被选中
		$.each(checkBoxAll,function(j,checkbox){
			//获取复选框的value属性
			var checkValue=$(checkbox).val();
			if(checkArray[i]==checkValue){
			   $(checkbox).attr("checked",true);
			      }
			  });
	    }
				
	});

</script>
<!-- <style type="text/css">
#home table td{vertical-align: middle;}
</style> -->

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


					<div class="col-lg-12  ccsq-bg nryc-1">
								<div class="ywsq">
									<h4>技术方案评审表</h4>
							    </div>
								<form method="post" id="form" >
							   
								    <div class="ccsq-jbxx">基本信息</div>
									<div class="input-group ccsq-clxx">
									<span>姓名：</span><input class="ccsq-jbpt" type="text" name="reserve1" id="reserve1" value="${employee.eName }" disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span>公司：</span><input class="ccsq-jbpt" type="text" name="reserve2" id="reserve2"value="${employee.dept.company.cName }" disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span>部门：</span><input class="ccsq-jbpt" type="text" name="reserve3" id="reserve3" value="${employee.dept.dName }" disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span>职位：</span><input class="ccsq-jbpt" type="text" name="reserve4" id="reserve4" value="${employee.eManager }" disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span>申请日期：</span>
									<input type="text" name="apply" value='${data.apply }' id="apply" class="Wdate" 
										   style="padding-left: 5px; width: 140px; height: 30px; border: none; background-color: #f5f5f5;"
										   onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true });"
										   format="yyyy-MM-dd" disabled>
									</div>
									 <div id=YwForm>
								    <div class="ccsq-xx" style="margin-top: 20px;">
											<span>紧急程度：</span> 
											<input type="radio" name="inLineOptions1" id="inLineOptions1" value="一般" ${data.inLineOptions1 =="一般"? 'checked':''} disabled>
											一般&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
											<input type="radio" name="inLineOptions1" id="inLineOptions2" value="重要" ${data.inLineOptions1 =="重要"? 'checked':''} disabled>
											重要&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
											<input type="radio" name="inLineOptions1" id="inLineOptions3" value="紧急" ${data.inLineOptions1 =="紧急"? 'checked':''} disabled>
											紧急
									</div>
								    <!--业务部-->
										
									<div class="js-kk">
										<div class="ccsq-jbxx">业务部分</div>
									    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										   <div style="padding-right: 100px; float: left;">
										   	<span class="b-label">客户名称：</span>
										   		<input type="text" class="ccsq-jbpt-1" value="${data.reserve5=='null'?'':data.reserve5 }" name="reserve5" id="reserve5" disabled></input>
										   </div>
										   <span class="b-label">安装地点：</span>
										   <input class="ccsq-jbpt-1" type="text"  value="${data.reserve6=='null'?'':data.reserve6 }" name="reserve6" id="reserve6" disabled>
									    </div>
									    
									    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
											<div style="padding-right: 100px; float: left;"><span>应用范围：</span>
												<textarea name = "reserve7" id="reserve7" type="text" class="ccsq-kg"  style="background: #f5f5f5;" disabled>${data.reserve7=='null'?'':data.reserve7 }</textarea>
											</div>
										</div>
										
										<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
											<div style="padding-right: 100px; float: left;"><span>定制需求：</span>
												<textarea name = "reserve8" id="reserve8" type="text" class="ccsq-kg"  style="background: #f5f5f5;" disabled>${data.reserve8=='null'?'':data.reserve8 }</textarea>
											</div>
										</div>
										
										<div class="ccsq-xx" style="margin-left: 145px;">
											<span class="b-label">是否需要技术部与业务部电话沟通：</span>
											<input type="radio" name="inLineOptions2" id="inLineOptions4" value="是" ${data.inLineOptions2=="是"? 'checked':''} disabled>是&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<input type="radio" name="inLineOptions2" id="inLineOptions5" value="否" ${data.inLineOptions2=="否"? 'checked':''} disabled>否&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										</div>
										
										<div class="ccsq-xx" style="margin-left: 145px;">
										   <span class="b-label">需技术部回复时间：</span><input type="text" name="reserve9" id="reserve9" value="${data.reserve9=='null'?'':data.reserve9 }" id="end_time" class="Wdate" placeholder="" style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true });" format="yyyy-MM-dd" disabled>
										</div>
										
										<div class="ccsq-xx" style="margin-left: 145px;">
										   <span class="b-label">客户主要技术负责人及联系方式：</span><input name = "reserve10" id="reserve10" value = "${data.reserve10=='null'?'':data.reserve10 }" type="text" style="width: 380px;"  class="ccsq-jbin" disabled/><br>
										</div>
										
										<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px; margin-left: 50px;">
										   <div style="padding-right: 100px; float: left;">
										   	<span class="b-label">制表人/区域经理：</span>
										   		<input name = "reserve11" id="reserve11" type="text" class="ccsq-jbpt-1" value="${data.reserve11=='null'?'':data.reserve11 }" disabled></input>
										   </div>
										   <span class="b-label">主要业务负责人：</span>
										   <input class="ccsq-jbpt-1" type="text" name="reserve12" id="reserve12" value="${data.reserve12=='null'?'':data.reserve12 }" disabled>
									    </div>
									</div>
								</div>
								<!--技术部-->
								<div class="js-kk" id="JsForm">
									<div class="ccsq-jbxx">技术部分</div>
									
									<div class="ccsq-xx" style="margin-left: 145px;">
										<span class="b-label">技术评审方式：</span> 
										<input type="radio" name="inLineOptions3" id="inLineOptions6" value="与客户电话沟通" ${data.inLineOptions3=="与客户电话沟通"? 'checked':'' } disabled>与客户电话沟通&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<input type="radio" name="inLineOptions3" id="inLineOptions7" value="出现场" ${data.inLineOptions3=="出现场"? 'checked':''} disabled>出现场&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									    <input type="radio" name="inLineOptions3" id="inLineOptions8" value="委托现场" ${data.inLineOptions3=="委托现场"? 'checked':''} disabled>委托现场
									</div>
									
									<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>需采购的配件：</span>
											<textarea name ="reserve13" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled>${data.reserve13=='null'?'':data.reserve13 }</textarea>
										</div>
									</div>
									
									<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>工期要求及预计加工周期：</span>
											<textarea name ="reserve14" type="text" class="ccsq-kg"  style="background: #f5f5f5;" disabled>${data.reserve14=='null'?'':data.reserve14 }</textarea>
										</div>
									</div>
									
									<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>定制产品具体配置：</span>
											<textarea name = "reserve15" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled>${data.reserve15=='null'?'':data.reserve15 }</textarea>
										</div>
									</div>
									
									<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>技术方案及要求：</span>
											<textarea name ="reserve16" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled>${data.reserve16=='null'?'':data.reserve16 }</textarea>
										</div>
									</div>
									
								    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">审批技术员：</span>
									   		<input name="reserve17" type="text" class="ccsq-jbpt-1" value="${data.reserve17=='null'?'':data.reserve17 }" disabled></input>
									   </div>
									   <span class="b-label">审批日期：</span><input name="reserve18" type="text"  value="${data.reserve18=='null'?'':data.reserve18 }" id="end_time" class="Wdate" placeholder="" style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true });" format="yyyy-MM-dd" disabled>
								    </div>
								    
									<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>建议及意见：</span>
											<textarea name="reserve19" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled>${data.reserve19=='null'?'':data.reserve19 }</textarea>
										</div>
									</div>
									
								</div>
								
								
								<!--采购部-->
								<div class="js-kk" id="CgForm">
									<div class="ccsq-jbxx">采购部分</div>
									
									 <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">核算成本价①：</span>
									   		<input name="reserve20" type="text" class="ccsq-jbpt-1" value="${data.reserve20=='null'?'':data.reserve20 }" disabled></input>
									   </div>
									   <span class="b-label">采购周期：</span><input name="reserve21" type="text" class="ccsq-jbpt-1" value="${data.reserve21=='null'?'':data.reserve21 }" disabled></input>天
								    </div>
								    
								    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">成本会计：</span>
									   		<input name ="reserve22" type="text" class="ccsq-jbpt-1" value="${data.reserve22=='null'?'':data.reserve22 }" disabled></input>
									   </div>
									   <span class="b-label">日期：</span><input name="reserve23" type="text"  id="end_time" value="${data.reserve23=='null'?'':data.reserve23 }" class="Wdate" placeholder="" style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true });" format="yyyy-MM-dd" disabled>
								    </div>
								    
								    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">采购人员：</span>
									   		<input name="reserve24" type="text" class="ccsq-jbpt-1" value="${data.reserve24=='null'?'':data.reserve24 }" disabled></input>
									   </div>
									   <span class="b-label">日期：</span><input type="text" name="reserve25" value="${data.reserve25=='null'?'':data.reserve25 }" id="end_time" class="Wdate" placeholder="" style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true });" format="yyyy-MM-dd" disabled>
								    </div>
									
									<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>建议及意见：</span>
											<textarea name="reserve26" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled>${data.reserve26=='null'?'':data.reserve26 }</textarea>
										</div>
									</div>
									
								</div>
								
								<!--内勤部-->
								<div class="js-kk" id="NqForm">
									<div class="ccsq-jbxx">内勤部分</div>
									
									 <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">加工成本②：</span>
									   		<input name="reserve27" type="text" class="ccsq-jbpt-1" value="${data.reserve27=='null'?'':data.reserve27 }" disabled></input>
									   </div>
									   <span class="b-label">加工周期：</span><input name="reserve28" type="text" class="ccsq-jbpt-1" value="${data.reserve28=='null'?'':data.reserve28 }" disabled></input>天
								    </div>
								    
								    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">运送成本③：</span>
									   		<input name="reserve29" type="text" class="ccsq-jbpt-1" value="${data.reserve29=='null'?'':data.reserve29 }" disabled></input>
									   </div>
									   <span class="b-label">运送周期：</span><input name="reserve30" type="text" class="ccsq-jbpt-1" value="${data.reserve30=='null'?'':data.reserve30 }" disabled></input>天
								    </div>
								    
								    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">工厂提供者：</span>
									   		<input name="reserve31" type="text" class="ccsq-jbpt-1" value="${data.reserve31=='null'?'':data.reserve31 }" disabled></input>
									   </div>
									   <span class="b-label">日期：</span><input type="text" name="reserve32" value="${data.reserve32=='null'?'':data.reserve32 }" id="end_time" class="Wdate" placeholder="" style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true });" format="yyyy-MM-dd" disabled>
								    </div>
								    
								    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>产品是否清晰：</span>
											<textarea name="reserve33" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled>${data.reserve33=='null'?'':data.reserve33 }</textarea>
										</div>
									</div>
									
									<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>配置是否清晰：</span>
											<textarea name="reserve34" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled>${data.reserve34=='null'?'':data.reserve34 }</textarea>
										</div>
									</div>
									
									<div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
										<div style="padding-right: 100px; float: left;"><span>产品信息及要求通知厂部：</span>
											<textarea name="reserve35" type="text" class="ccsq-kg" value="" style="background: #f5f5f5;" disabled>${data.reserve35=='null'?'':data.reserve35 }</textarea>
										</div>
									</div>
								    
								    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">报货人：</span>
									   		<input name="reserve36" type="text" class="ccsq-jbpt-1" value="${data.reserve36=='null'?'':data.reserve36 }" disabled></input>
									   </div>
									   <span class="b-label">日期：</span><input type="text" name="reserve37" value="${data.reserve37=='null'?'':data.reserve37 }" class="Wdate" placeholder="" style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true });" format="yyyy-MM-dd" disabled>
								    </div>
									
								</div>
								
								<!--财务部-->
								<div class="js-kk" id="CwForm">
									<div class="ccsq-jbxx">财务部分</div>
									
									 <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">供货成本①+②+③：</span>
									   		<input name="reserve38" type="text" class="ccsq-jbpt-1" value="${data.reserve38=='null'?'':data.reserve38 }" disabled></input>
									   </div>
									   <span class="b-label">供货周期：</span><input name="reserve39" type="text" class="ccsq-jbpt-1" value="${data.reserve39=='null'?'':data.reserve39 }" disabled></input>天
								    </div>
								    
								    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">财务部：</span>
									   		<input name="reserve40" type="text" class="ccsq-jbpt-1" value="${data.reserve40=='null'?'':data.reserve40 }" disabled></input>
									   </div>
									   <span class="b-label">日期：</span><input type="text" name="reserve41" value="${data.reserve41=='null'?'':data.reserve41 }" id="end_time" class="Wdate" placeholder="" style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true });" format="yyyy-MM-dd" disabled>
								    </div>
									
								</div>
								    
								    <!--财务信息-->
									<div class="ccsq-jbxx">副总经理或授权人</div>
									
									<p style="margin-left: 75px;">仅指目前现有技术无法达到客户要求仍要生产、供货周期提前、价格低于供货价格、没有合同或预付款，需特批者。</p>
									<div id="LzForm">
									<div class="ccsq-xx" style="margin-left: 145px;">
										<!--<span class="b-label">技术评审方式：</span>-->
										<input type="checkbox" name="inLineOptions4" id="inLineOptions9" value="1、试产" } disabled>1、试产&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<input type="checkbox" name="inLineOptions4" id="inLineOptions10" value="2、业务要求供货周期提前"  disabled>2、业务要求供货周期提前&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									    <input type="checkbox" name="inLineOptions4" id="inLineOptions11" value="3、价格低于供货价格"  disabled>3、价格低于供货价格&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									    <input type="checkbox" name="inLineOptions4" id="inLineOptions12" value="4、没有合同或预付款"  disabled>4、没有合同或预付款
									</div>
									
								    <div class="input-group ccsq-clxx b-label" style="margin-bottom: 30px;">
									   <div style="padding-right: 100px; float: left;">
									   	<span class="b-label">签字：</span>
									   		<input type="text" name="reserve42" class="ccsq-jbpt-1" value="${data.reserve42=='null'?'':data.reserve42 }" disabled></input>
									   </div>
									   <span class="b-label">日期：</span>
									   		<input type="text" name="reserve43" id="end_time" class="Wdate" value="${data.reserve43=='null'?'':data.reserve43 }" placeholder="" style="padding-left: 5px;width: 380px;height: 30px;border: none;background-color: #f5f5f5;" onfocus="WdatePicker({ dateFmt: 'yyyy-MM-dd', readOnly: true });" format="yyyy-MM-dd" disabled>
								    </div>
								    </div>
								<div class="an">
											<div class="na12">
												<input type="hidden" name="follow" value="">
												<input type="hidden" name="taskId" value="${taskId }">
												<input type="hidden" name="text" id="text" value="">
												<input class="an1" type="button" id="back" value="退回" /> 
												<input class="an2" type="button" id="adopt" value="同意" />&nbsp;&nbsp;
												<button type="button" class="an3" id="forward">转发</button>
											</div>
										</div>
								   <!--模态框-->
									<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal1" style="margin-left: 75px;">状态</button>
												<!-- Modal -->
												<div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
												  <div class="modal-dialog" role="document" style="width: 1000px;height: 700px;">
												    <div class="modal-content">
												      <div class="modal-header">
												        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
												        <h4 class="modal-title" id="myModalLabel">流程图</h4>
												      </div>
												      <div class="modal-body">
												       <span>流程：</span><img alt="" src="${path }/activiti/hisImage1?processInstanceId=${ processInstanceId}" width="900" height="450" style="background-color:#EAEDF2;">
												      </div>
												      <div class="modal-footer">
												        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
												      </div>
												    </div>
												  </div>
												</div>
																			<!--Modal-->
							<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
								<div class="modal-dialog" role="document">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal"
												aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
											<h4 class="modal-title" id="myModalLabel">人员选择</h4>
										</div>
										<div class="modal-body" style="height: auto;">
											<!--模态框内容-->
											<nav id="mysidebarmenu" class="amazonmenu" style="margin-top: 15px;">
												<div class="sou">
													<select class="sso" id="company">
													</select>
													<select class="sso" id="dept">
													</select>
													<select class="sso" id="emp">
													</select>
												</div>
												 已选择：<input type="text" disabled="disabled" id="txtHobby" style="margin:20px 0px; width: 500px; height: 40px; padding-left: 5px; background-color: #fff;"/>
												<div class="modal-footer">
													<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
													<button type="button" id="confirm" class="btn btn-primary">确认转发</button>
												</div>
											</nav>
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
</body>
<script type="text/javascript" src="${path }/js/tecReviewDetail.js"></script>
<script type="text/javascript" src="${path }/js/base2.js"></script>
<!-- 可以在外部js文件中使用path作为项目的根路径 -->
<script>var path = '${path}'; </script>
<script>var page = '${page}'; </script>
<script src="${path }/dist/zoomify.min.js"></script>
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