<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
	pageContext.setAttribute("path", request.getContextPath());
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${path }/bootstrap/js/jquery-1.12.4.min.js"></script>
<script type="text/javascript" src="${path }/bootstrap/js/ajaxfileupload.js"></script>
</head>
<body>
	<table border="2" cellpadding="15" cellspacing="0">
		<caption><h3>Excel 导入导出</h3></caption>
		<caption style="text-align: right;">
			<input type="file" id="file" name="file" multiple="multiple"/>  
			<button type="button" onclick="return ExcelImportFileUpload();">Excel 导入</button>
		</caption>
		<thead>
			<tr>
				<th>序号</th>
				<th>姓名</th>
				<th>年龄</th>
				<th>性别</th>
				<th>生日</th>
				<th>电话</th>
				<th>住址</th>
				<th>是否住校</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${lists }" var="maps">
				<tr>
					<c:forEach items="${maps }" var="m">
							<td>${m.value }</td>
					</c:forEach>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</body>
<script>var path = '${path}'; </script>
<script type="text/javascript">
	function ExcelImportFileUpload()
	{
		$.ajaxFileUpload({
			url:path + '/customer/excelImport',
			secureuri:false,
			fileElementId:'file',
			dataType: 'text',
			success: function (data){
				window.location.href = path + '/customer/selectStudent';
			}
		});
	}
</script>
</html>