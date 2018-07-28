$(function(){
	getAllOrder(1);
	
	$("#search").click(function(){
		var stime = $("#stime").val();
		var etime = $("#etime").val();
		var ename = $("#ename").val();
		var company = $("#company").val();
		if(stime == "" && etime == "" && ename == "" && company == ""){
			getAllOrder(1);
		}else{
			if(stime == "" && etime != ""){
				alert("请选择开始时间...");
			}else if(stime != "" && etime == ""){
				alert("请选择结束时间...");
			}else{
				getAllOrderByCondition(1, stime, etime, ename, company);
			}
		}
	});
	
	$("#ttt").css("display", "none");
	
	$("#hsearch").click(function(){
		var number = $("#number").val(); // 称体编号
		var salesman = $("#salesman").val(); // 业务员
		var customer = $("#customer").val(); // 客户
		var agent = $("#agent").val(); // 代理商
		var delivery = $("#delivery").val(); // 报货日期
		var issuance = $("#issuance").val(); // 发货日期
		var sales = $("#sales").val(); // 销售模式
		var information = $("#information").val(); // 信息转接人
		var payments = $("#payments").val(); // 回款率
		var contacts = $("#contacts").val(); // 联系人
		var lavel = $("#lavel").val(); // 客户级别
		var phone = $("#phone").val(); // 电话
		var statu = $("#statu").val(); // 销售状态
		advancedSearch(number, salesman, customer, agent, delivery, issuance, sales, information, payments, contacts, lavel, phone, statu);
	});

	document.getElementById("delivery").value = today();
	document.getElementById("issuance").value = today();
});

function advancedSearch(number, salesman, customer, agent, delivery, issuance, sales, information, payments, contacts, lavel, phone, statu)
{
	$.ajax({
		url : path + '/customer/order/advancedSearch',
		type : 'POST',
		data : {
			"number" : number,
			"salesman" : salesman,
			"customer" : customer,
			"agent" : agent,
			"delivery" : delivery,
			"issuance" : issuance,
			"sales" : sales,
			"information" : information,
			"payments" : payments,
			"contacts" : contacts,
			"lavel" : lavel,
			"phone" : phone,
			"statu" : statu
		},
		success : function(data){
			$("#sss").css("display", "none");
			$("#ttt").css("display", "block");
			$("#ttt tbody").empty();
			$.each(data.list, function(index, item){
				if(data.list == 0){
					$("<tr></tr>").append($("<td colspan='9'></td>").append("<h4>暂无数据</h4>").css("text-align","center")).appendTo("#ttt tbody");
					return;
				}
				var oId = $("<td></td>").append(item.oId);
				var oDate = $("<td></td>").append(item.oDate);
				var eId = $("<td></td>").append(item.eName);
				var oStatu = $("<td></td>").append(item.oStatu);
				var cId = $("<td></td>").append(item.cName);
				var oProduce = $("<td></td>").append(item.produce);
				var oNumber = $("<td></td>").append(item.oNumber);
				var oPrice = $("<td></td>").append(item.oPrice);
				var oRmoney = $("<td></td>").append(item.oRmoney);
				$("<tr></tr>").append(oId).append(oDate).append(eId).append(oStatu).append(cId)
				.append(oProduce).append(oNumber).append(oPrice).append(oRmoney).appendTo("#ttt tbody");
			});
			$('#pageNav3').pagination({
				coping:true,
				nextContent:">>",
				prevContent:"<<",
				isHide:true,
				keepShowPN:true,
			    pageCount:data.pages, // 多少页
			    current:data.pageNum, // 当前页
			    totalData:data.total, // 总记录
			    showData:data.pageSize, // 每页大小
			    callback:function(api){
			    	$.ajax({
			    		url : path + '/customer/order/advancedSearch',
			    		type : 'POST',
			    		data : {
			    			"pageNo" : api,
			    			"number" : number,
			    			"salesman" : salesman,
			    			"customer" : customer,
			    			"agent" : agent,
			    			"delivery" : delivery,
			    			"issuance" : issuance,
			    			"sales" : sales,
			    			"information" : information,
			    			"payments" : payments,
			    			"contacts" : contacts,
			    			"lavel" : lavel,
			    			"phone" : phone,
			    			"statu" : statu
			    		},
			    		success : function(data){
			    			$("#ttt tbody").empty();
			    			$.each(data.list, function(index, item){
			    				if(data.list == 0){
			    					$("<tr></tr>").append($("<td colspan='9'></td>").append("<h4>暂无数据</h4>").css("text-align","center")).appendTo("#ttt tbody");
			    					return;
			    				}
			    				var oId = $("<td></td>").append(item.oId);
			    				var oDate = $("<td></td>").append(item.oDate);
			    				var eId = $("<td></td>").append(item.eName);
			    				var oStatu = $("<td></td>").append(item.oStatu);
			    				var cId = $("<td></td>").append(item.cName);
			    				var oProduce = $("<td></td>").append(item.produce);
			    				var oNumber = $("<td></td>").append(item.oNumber);
			    				var oPrice = $("<td></td>").append(item.oPrice);
			    				var oRmoney = $("<td></td>").append(item.oRmoney);
			    				$("<tr></tr>").append(oId).append(oDate).append(eId).append(oStatu).append(cId)
			    				.append(oProduce).append(oNumber).append(oPrice).append(oRmoney).appendTo("#ttt tbody");
			    			});
			    		}
			    	});
			    }
			});
		}
	});
}

function getAllOrderByCondition(pageNo, stime, etime, ename, company)
{
	$.ajax({
		url : path + '/customer/order/getAllOrderByCondition',
		type : 'POST',
		data : {"pageNo" : pageNo, "stime" : stime, "etime" : etime, "ename" : ename, "company" : company},
		success : function(data){
			if(data.list == 0){
				$("#home tbody").empty();
				$("<tr></tr>").append($("<td colspan='9'></td>").append("<h4>暂无数据</h4>").css("text-align","center")).appendTo("#home tbody");
				return;
			}
			build_table(data);
			build_pagenav_condition(data, stime, etime, ename, company);
		}
	});
}

function getAllOrder(pageNo)
{
	$.ajax({
		url : path + '/customer/order/getAll',
		type : 'POST',
		data : {"pageNo" : pageNo},
		success : function(data){
			if(data.list == 0){
				$("#home tbody").empty();
				$("<tr></tr>").append($("<td colspan='9'></td>").append("<h4>暂无数据</h4>").css("text-align","center")).appendTo("#home tbody");
				return;
			}
			build_table(data);
			build_pagenav(data);
		}
	});
}

function build_table(data)
{
	$("#home tbody").empty();
	var orders = data.list;
	$.each(orders, function(index, item){
		var oId = $("<td></td>").append(item.oId);
		var oDate = $("<td></td>").append(item.oDate);
		var eId = $("<td></td>").append(item.eName);
		var oStatu = $("<td></td>").append(item.oStatu);
		var cId = $("<td></td>").append(item.cName);
		var oProduce = $("<td></td>").append(item.produce);
		var oNumber = $("<td></td>").append(item.oNumber);
		var oPrice = $("<td></td>").append(item.oPrice);
		var oRmoney = $("<td></td>").append(item.oRmoney);
		$("<tr></tr>").append(oId).append(oDate).append(eId).append(oStatu).append(cId)
		.append(oProduce).append(oNumber).append(oPrice).append(oRmoney).appendTo("#home tbody");
	});
}

function build_pagenav(data)
{
	$("#pageNav1").empty();
	$("#pageNav1").css("display", "block");
	$("#pageNav2").css("display", "none");
	$('#pageNav1').pagination({
		coping:true,
		nextContent:">>",
		prevContent:"<<",
		isHide:true,
		keepShowPN:true,
	    pageCount:data.pages, // 多少页
	    current:data.pageNum, // 当前页
	    totalData:data.total, // 总记录
	    showData:data.pageSize, // 每页大小
	    callback:function(api){
	    	$.ajax({
	    		url : path + '/customer/order/getAll',
	    		type : 'POST',
	    		data : {"pageNo" : api},
	    		success : function(data){
	    			build_table(data);
	    		}
	    	});
	    }
	});
}

function build_pagenav_condition(data, stime, etime, ename, company)
{
	$("#pageNav2").empty();
	$("#pageNav1").css("display", "none");
	$("#pageNav2").css("display", "block");
	$('#pageNav2').pagination({
		coping:true,
		nextContent:">>",
		prevContent:"<<",
		isHide:true,
		keepShowPN:true,
	    pageCount:data.pages, // 多少页
	    current:data.pageNum, // 当前页
	    totalData:data.total, // 总记录
	    showData:data.pageSize, // 每页大小
	    callback:function(api){
	    	$.ajax({
	    		url : path + '/customer/order/getAllOrderByCondition',
	    		type : 'POST',
	    		data : {"pageNo" : api, "stime" : stime, "etime" : etime, "ename" : ename, "company" : company},
	    		success : function(data){
	    			build_table(data);
	    		}
	    	});
	    }
	});
}
