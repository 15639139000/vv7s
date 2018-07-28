<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
    <link rel="stylesheet" href="${path}/layui/css/layui.css" media="all" />
    <link rel="stylesheet" href="${path}/css/global.css" media="all">
    <script type="text/javascript" charset="utf-8" src="${path}/layui/layui.js"></script>
    <style type="text/css">
        .layui-inline{padding:10px;}
    </style>
</head>
<body>
  <div style="padding:10px;">角色：${user.username}</div>
  <div>
    <table class="layui-hide" id="table" lay-filter="ss"></table>
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
            ,url: path + '/employee/role/data?eId=${id}'
            ,cols: [[
               {type:'checkbox'}
              ,{field:'rId', title: '角色编号'}
              ,{field:'rName',  title: '角色名称'}
            ]]
          });
          var $ = layui.$;
          table.on('checkbox(ss)', function(obj){    
        	  $.post( path + "/employee/user/change",
        			  {eId: '${id}',rId:obj.data.rId,isAssigned: obj.checked,type:obj.type},
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
        	  console.log(obj.type); //如果触发的是全选，则为：all，如果触发的是单选，则为：one  */
        	});
          
    });
    </script>
    <script>var path = '${path}'; </script>
</html>