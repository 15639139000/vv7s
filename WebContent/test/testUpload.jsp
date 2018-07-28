<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	pageContext.setAttribute("path", request.getContextPath());
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${path }/bootstrap/js/jquery-1.12.4.min.js"></script>
<script type="text/javascript" src="${path }/bootstrap/js/ajaxfileupload.js"></script>
<script>var path = '${path}'; </script>
<script type="text/javascript">
function ajaxFileUpload()
{
	$.ajaxFileUpload({
			url:path + '/activiti/testUpload',
			secureuri:false,
			fileElementId:'fileToUpload',
			dataType: 'json',
			data:{name:$("#name").val(), id:$("#id").val()},
			success: function (data){
				alert(data)
			}
		}
	)
}
</script>

</head>
<body>
	<input type="text" id="name" value="name"/>
	<input type="text" id="id" value="id"/>
	<!-- 还有参数需要在文件中读取 -->
	<input id="fileToUpload" type="file" size="45" name="fileToUpload" class="input">
	<button class="button" id="buttonUpload" onclick="return ajaxFileUpload();">Upload</button>
</body>
</html>