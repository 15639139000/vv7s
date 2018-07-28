$(function(){
	getAllVisit(1, null, null, null, null);
	
	$("#search").click(function(){
		var stime = $("#stime").val();
		var etime = $("#etime").val();
		var ename = $("#ename").val();
		var company = $("#company").val();
		if(stime == "" && etime == "" && ename == "" && company == ""){
			getAllVisit(1, null, null, null, null);
		}else{
			if(stime == "" && etime != ""){
				alert("请选择开始时间...");
			}else if(stime != "" && etime == ""){
				alert("请选择结束时间...");
			}else{
				getAllVisit(1, stime, etime, ename, company);
			}
		}
	});
	
	$("#ttt").css("display", "none");
	
	$("#hsearch").click(function(){
		var customer = $("#customer").val();
		var customerNature = $("#customerNature").val();
		var indestry = $("#indestry").val();
		var product1 = $("#product1").val();
		var product2 = $("#product2").val();
		var visit = $("#visit").val();
		var returnTime = $("#returnTime").val();
		var nextReturnTime = $("#nextReturnTime").val(); // 信息转接人
		advancedSearch(customer, customerNature, indestry, product1, product2, visit, returnTime, nextReturnTime);
	});

	document.getElementById("product1").value = today();
	document.getElementById("returnTime").value = today();
	document.getElementById("nextReturnTime").value = today();
});

function advancedSearch(customer, customerNature, indestry, product1, product2, visit, returnTime, nextReturnTime)
{
	$.ajax({
		url : path + '/customer/visit/advancedSearch',
		type : 'POST',
		data : {
			"customer" : customer,
			"customerNature" : customerNature,
			"indestry" : indestry,
			"product1" : product1,
			"product2" : product2,
			"visit" : visit,
			"returnTime" : returnTime,
			"nextReturnTime" : nextReturnTime
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
				var id = $("<td></td>").append(item.id);
				var customer = $("<td></td>").append(item.customer);
				var customerNature = $("<td></td>").append(item.customerNature);
				var indetry = $("<td></td>").append(item.indestry);
				var contacts = $("<td></td>").append(item.contacts);
				var lavel = $("<td></td>").append(item.lavel);
				var nextReturnTime = $("<td></td>").append(item.nextReturnTime);
				var person = $("<td></td>").append(item.person);
				var information = $("<td></td>").append(item.information);
				$("<tr></tr>").append(id).append(customer).append(customerNature).append(indetry).append(contacts)
				.append(lavel).append(nextReturnTime).append(person).append(information).appendTo("#ttt tbody");
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
			    		url : path + '/customer/visit/advancedSearch',
			    		type : 'POST',
			    		data : {
			    			"pageNo" : api,
			    			"customer" : customer,
			    			"customerNature" : customerNature,
			    			"indestry" : indestry,
			    			"product1" : product1,
			    			"product2" : product2,
			    			"visit" : visit,
			    			"returnTime" : returnTime,
			    			"nextReturnTime" : nextReturnTime
			    		},
			    		success : function(data){
			    			$("#ttt tbody").empty();
			    			$.each(data.list, function(index, item){
			    				if(data.list == 0){
			    					$("<tr></tr>").append($("<td colspan='9'></td>").append("<h4>暂无数据</h4>").css("text-align","center")).appendTo("#ttt tbody");
			    					return;
			    				}
			    				var id = $("<td></td>").append(item.id);
			    				var customer = $("<td></td>").append(item.customer);
			    				var customerNature = $("<td></td>").append(item.customerNature);
			    				var indetry = $("<td></td>").append(item.indestry);
			    				var contacts = $("<td></td>").append(item.contacts);
			    				var lavel = $("<td></td>").append(item.lavel);
			    				var nextReturnTime = $("<td></td>").append(item.nextReturnTime);
			    				var person = $("<td></td>").append(item.person);
			    				var information = $("<td></td>").append(item.information);
			    				$("<tr></tr>").append(id).append(customer).append(customerNature).append(indetry).append(contacts)
			    				.append(lavel).append(nextReturnTime).append(person).append(information).appendTo("#ttt tbody");
			    			});
			    		}
			    	});
			    }
			});
		}
	});
}


function getAllVisit(pageNo, stime, etime, ename, company)
{
	$.ajax({
		url : path + '/customer/visit/getAllVisit',
		type : 'POST',
		data : {"pageNo" : pageNo, "stime" : stime, "etime" : etime, "ename" : ename, "company" : company},
		success : function(data){
			if(data.list == 0){
				$("#home tbody").empty();
				$("<tr></tr>").append($("<td colspan='9'></td>").append("<h4>暂无数据</h4>").css("text-align","center")).appendTo("#home tbody");
				return;
			}
			build_table(data);
			build_pagenav(data, stime, etime, ename, company);
		}
	});
}

function build_table(data)
{
	$("#home tbody").empty();
	var visits = data.list;
	$.each(visits, function(index, item){
		var id = $("<td></td>").append(item.id);
		var customer = $("<td></td>").append(item.customer);
		var customerNature = $("<td></td>").append(item.customerNature);
		var indestry = $("<td></td>").append(item.indestry);
		var contacts = $("<td></td>").append(item.contacts);
		var lavel = $("<td></td>").append(item.lavel);
		var nextReturnTime = $("<td></td>").append(item.nextReturnTime);
		var person = $("<td></td>").append(item.person);
		var information = $("<td></td>").append(item.information);
		$("<tr></tr>").append(id).append(customer).append(customerNature).append(indestry).append(contacts)
		.append(lavel).append(nextReturnTime).append(person).append(information).appendTo("#home tbody");
	});
}

function build_pagenav(data, stime, etime, ename, company)
{
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
	    		url : path + '/customer/visit/getAllVisit',
	    		type : 'POST',
	    		data : {"pageNo" : api, "stime" : stime, "etime" : etime, "ename" : ename, "company" : company},
	    		success : function(data){
	    			build_table(data);
	    		}
	    	});
	    }
	});
}
