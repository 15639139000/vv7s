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
<title>角色权限</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link type="text/css" href="${path }/layui/css/layui.css" rel="stylesheet">
    <link type="text/css" href="${path }/bootstrap/css/operationPage.css" rel="stylesheet">
	<script type="text/javascript" charset="utf-8" src="${path }/layui/layui.js"></script>
    <style type="text/css">
        .layui-inline{padding:10px;}
    </style>
</head>
<body>
  <div style="padding:10px;">角色：${role.rName }</div>
  <div>
    <table class="layui-hide" id="table" lay-filter="action"></table>
  </div>
  
</body>
    <script type="text/javascript">
    layui.use(['jquery','form', 'layedit', 'table'], function(){
          var form = layui.form
          ,layer = layui.layer
          ,layedit = layui.layedit;
          
          var table = layui.table;
          table.render({
            id: 'table1',
            elem: '#table'
            ,even: true
            ,height:300
            ,skin: 'row'
            ,url:'${contextPath}/JMOA/role/findOperByRId?rId=${rId}'
            ,cols: [[
               {type:'checkbox'}
              ,{field:'oId', title: '编号'}
              ,{field:'oName',  title: '名称'}
              ,{field:'oDesc',  title: '描述'}
            ]]
          });
          
          var $ = layui.$;
          
          table.on('checkbox(action)', function(obj){
        	  console.log(obj);
        	  $.post("${contextPath}/JMOA/role/updateRoleOper",
        			  {rId: '${rId}',oId:obj.data.oId,isAssigned: obj.checked,type:obj.type},
        			  function(res){        				  
        		  if(res.success){      			
        			  layer.msg('正在提交请稍候。。。', {icon: 16,time: 600,shade : [0.5 , '#000' , true]},function(){
        					layer.msg("操作成功")
        			  });	
        		  }else{
        			 layer.alert(res.msg);
        		  }
        	  });
        	  
        	  /* console.log(obj.checked); //当前是否选中状态
        	  console.log(obj.data); //选中行的相关数据
        	  console.log(obj.type); //如果触发的是全选，则为：all，如果触发的是单选，则为：one */
        	});
          
    });
    
    
    </script>
</html>