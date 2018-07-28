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
<title>系统管理-用户信息</title>
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
<link type="text/css" rel="stylesheet" href="${path }/laypage/skin/laypage.css">
<link rel="stylesheet" href="${path }/layui/css/layui.css" media="all" />
<link rel="stylesheet" type="text/css" href="${path }/layui/css/modules/layer/default/layer.css" />
<script type="text/javascript" src="${path }/bootstrap/js/bootstrap.min.js"></script> <!-- 模态框不显示问题 -->
<script type="text/javascript" src="${path }/nav/js/verticalnav.js"></script>
<script type="text/javascript" src="${path }/laypage/laypage.js"></script>
<script type="text/javascript" src="${path }/My97DatePicker/WdatePicker.js"></script>
<script type="text/javascript" src="${path }/js/layer.js"></script>
<script type="text/javascript" src="${path }/layui/layui.js"></script>
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
			<div class="col-lg-1 left-navigation" style="margin-top:20px;">
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
							<li>系统管理</li>
							<li class="active">用户信息</li>
						</ol>
					</div>
				</div>
				<div class="row ccsq-row">
					<div class="col-lg-12  ccsq-bg">
					<div class="tab-pane nryc-1">
							    <div class="glxt-xx">
							    <div style="width:400px;height:40px;">
							    <input type="text" class="sso" name="eName" id="eName" value="" placeholder="请输入姓名" style="width:200px;height:30px;margin-left:-40px;" />
							    <button id="search" name="search" class="layui-btn  layui-btn-normal" data-type="reload" style="width:100px;height:30px;">查询</button>
							    </div>
							    <div class="tile yhxx">
					            <div>
<table class="layui-hide" id="table" lay-filter="demo"></table>
</div>
					          </div>
							    </div>
								</div>
						        </div>
					      </div>
				</div>
			</div>
		</div>
<script type="text/html" id="barDemo">

  <a class="layui-btn layui-btn-xs" lay-event="edit"><cite>修改</cite></a>
  <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
  <a class="layui-btn  layui-btn-xs" lay-event="editUser">编辑角色</a>

</script>		
<script>
layui.use('table', function(){
	//返回整个表格
  var table = layui.table//表格
  ,laypage = layui.laypage; //分页
  //执行一个table实例
  table.render({
  	 id: 'calc'
    ,elem: '#table'
    ,url: path +'/employee/queryE' //数据接口
    ,page: true    //开启分页  
    ,cols: [[
      {field:'eId', title: 'ID', width:230, align:'center'}
      ,{field:'username',  title: '工号' , width:300, align:'center'}
      ,{field:'eName', title: '姓名',width:300, align:'center'}
      ,{field:'rName', title: '所属角色', width:330, align:'center'}
      ,{fixed: 'right', title: '操作',width: 330, align:'center', toolbar: '#barDemo', width:534}
    ]]
  
  ,done: function(res, page, count){  
      //如果是异步请求数据方式，res即为你接口返回的信息。  
      //如果是直接赋值的方式，res即为：{data: [], count: 99} data为当前页数据、count为数据总长度  
        
      //分类显示中文名称  
      $("[data-field='isEmp']").children().each(function(){
              if($(this).text()=='1'){  
                 $(this).text("是")  
              }else if($(this).text()=='0'){  
                 $(this).text("否")  
              }
      })  
}         

  });

  var $ = layui.$;
  $("#search").click(function(){
      table.reload('calc',{
    	  where:{
    		  eName: $('#eName').val(),
          }
      });
  });
  
//监听工具条事件
  table.on('tool(demo)', function(obj){
	 

	//obj表示行对象
	//data表示一行当中的数据
    var data = obj.data;
    if(obj.event === 'detail'){
      layer.msg('ID：'+ data.id + ' 的查看操作');
    } else if(obj.event === 'del'){
    	 if(data.eName=="admin"){
			layer.msg("管理员信息不能被删除");
		}else{
			 layer.confirm('确定删除吗？', function(index){
		    	  $.ajax({
			            url: path + '/employee/deleteEmp',
			            type:'post',
			            async: false,
			            data:{id:data.eId}, 
			            dataType:'json',
			            success:function(result){
			            	layer.msg("删除成功");			            	
			 }
		})
       obj.del();
       layer.close(index);
     });
		}
		     
    	
    }else if(obj.event === 'edit'){   
       /* $($(this)).attr('data-url',path + '/employee/query?id= ' + data.eId);
  	   window.parent.addTab($($(this))); */
    	window.location.href= path +"/employee/query?id=" + data.eId+"";
  	    	   
    }else if(obj.event === 'editUser'){
    	layer.open({
		  type: 2,
		  title: false,
		  area: ['630px', '360px'],
		  closeBtn: 0,
		  shadeClose: true,
		content: path+'/employee/user/role?eId=' + data.eId
		});
    }
    

    //分页
 /*    laypage.render({
      elem: 'pageDemo' //分页容器的id
      ,count: 100 //总页数
      ,skin: '#1E9FFF' //自定义选中色值
      //,skip: true //开启跳页
      ,jump: function(obj, first){
        if(!first){
          layer.msg('第'+ obj.curr +'页');
        }
      }
    }); */
    
  });
  

});


</script>
</body>

<%-- <script type="text/javascript" src="${path }/js/Empinfo.js"></script> --%>
<!-- 可以在外部js文件中使用path作为项目的根路径 -->
<script>var path = '${path}'; </script>
</html>