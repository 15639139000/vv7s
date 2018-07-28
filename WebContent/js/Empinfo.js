$(function(){
	//查询数据
	search();
});

     //查询数据
	function search(page){
		$.ajax({
		url : path + '/employee/queryAll',
		type : 'post',
		data : {'page':page},
		dataType : "json",
		success:function(result){
			$("#dat").empty();
			$.each(result.list, function(index, item){
						var eId = $("<td></td>").append(item.eId);
						var username = $("<td></td>").append(item.username);
						var eName = $("<td></td>").append(item.eName);
						var rName = $("<td></td>").append(item.rName)
						var btndel = $("<a></a>").attr("href",path + "/employee/query?id= "+ item.eId +"").css("color","#317EEB").append("修改&nbsp;&nbsp;&nbsp;&nbsp;");
						var span1 = $("<span></span>").css("color","silver").append("|");
						var btnsel = $("<a></a>").attr("href",path +"/employee/deleteEmp?id= "+ item.eId +"").css("color","#317EEB").append("&nbsp;&nbsp;删除&nbsp;&nbsp;&nbsp;&nbsp;");
						var span2 = $("<span></span>").css("color","silver").append("|");
						/*var btnsub = $("<a></a>").attr("href","javascript:void(0)").css("color","#317EEB").append("&nbsp;&nbsp;编辑角色");*/
						var btnsub = $("<button></button>").attr("onclick","tsg()").css("color","#317EEB").append("&nbsp;&nbsp;编辑角色");
						var btn = $("<td></td>").append(btndel).append(span1).append(btnsel).append(span2).append(btnsub);
						$("<tr></tr>").append(eId).append(username).append(eName).append(rName).append(btn)
								      .appendTo("#dat");
				
			});
		var pa = result.pageCount; //总页数
		var cu = result.curPage; //当前页
		laypage({
	        cont:$("#page"),//容器
	        pages:pa,  //总页数
	        curr: cu,   //当前页
	        skip: true,     //是否开启跳页
	        skin:"molv",   //皮肤
	        first: '首页',
	        last:'尾页',
	        groups:3,    //多少页进行分组
	        prev: '<', //若不显示，设置false即可
	        next: '>', //若不显示，设置false即可
	        jump: function(obj,first){//触发分页后的回调
	        	if(!first){  //一定要加此判断，否则初始化会无线刷新
	        		$('#dat').html('');
	        		 search(obj.curr);
	        		}
				}
			});
		}
	});
}
	
	//弹出一个页面
	
	function tsg(){
		layer.open({
			  type: 2,
			  title: false,
			  area: ['630px', '360px'],
			  closeBtn: 0,
			  shadeClose: true,
			  content: path + '/employee/user/role?eId='+ item.eId
			});
		}
	
	