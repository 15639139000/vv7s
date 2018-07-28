$(function(){
	fillCompanyData();
	
	$(".vertical-nav a[href='/JMOA/javascrip:void(0)']").attr("data-toggle","modal").attr("data-target","#myModal");
	
	$("#ok").click(function(){
		var name = $("#name").val()
		var key = $("#key").val()
		var desc = $("#desc").val()
		$.ajax({
			url : path + '/activiti/create',
			type : 'POST',
			data : {"name":name, "key":key, "description":desc},
			success : function(data){
				if(data != "false"){
					window.location.href = path + "/modeler.html?modelId=" + data;
				}
			}
		});
		$(this).attr("data-dismiss", "modal");
	});
});
function fillCompanyData()
{
	$.ajax({
		url : path + '/customer/fillCompanyData',
		type : 'POST',
		success : function(data){
			$("#company").empty();
			$("#company").append("<option value=''>按公司搜索...</option>")
			$.each(data, function(index, item){
				$("#company").append("<option value=" + item.cName + ">" + item.cName + "</option>")
			});
		}
	});
}

function today(){
    var today=new Date();
    var h=today.getFullYear();
    var m=today.getMonth()+1;
    var d=today.getDate();
    m= m<10?"0"+m:m;   //  这里判断月份是否<10,如果是在月份前面加'0'
    d= d<10?"0"+d:d;        //  这里判断日期是否<10,如果是在日期前面加'0'
    return h+"-"+m+"-"+d;
}