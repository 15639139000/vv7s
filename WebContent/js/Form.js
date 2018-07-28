//验证公司   必选
$("#cName").blur(function(){
	var AB = document.getElementById('cName').value; 
	if(AB.length == 0){
		gs.innerHTML="必选"
	}else{
		gs.innerHTML="*"
	}
})
//验证部门   必选
$("#dName").blur(function(){
	var AB = document.getElementById('dName').value; 
	if(AB.length == 0){
		bm.innerHTML="必选"
	}else{
		bm.innerHTML="*"
	}
})
//验证上级领导   必选
$("#eLeader").blur(function(){
	var AB = document.getElementById('eLeader').value; 
	if(AB.length == 0){
		sj.innerHTML="必选"
	}else{
		sj.innerHTML="*"
	}
})
//验证用户姓名
$("#eName").blur(function(){
	var AB = document.getElementById('eName').value; 
	if(AB.length == 0){
		xm.innerHTML="姓名不为空!!!";
	}else if(AB.length < 2 ){
		xm.innerHTML="用户姓名不合法";
	}else if(AB.length > 6 ){
		xm.innerHTML="用户姓名太长";
	}else {
		xm.innerHTML="*";
	}
})
//验证员工编号
$("#userName").blur(function(){
	var bh = document.getElementById('userName').value;
	$.ajax({
		url : path + '/employee/ent',
		type : 'post',
		dataType : "json",
		success:function(result){
			$.each(result, function(index, item){
				if(bh == item.username){
					alert("员工编号已存在，请重新输入")
				}else if(bh.length == 0 ){
					un.innerHTML="*";
				}
			});
		}
	});	
})
//验证用户密码
$("#pwd").blur(function(){
	var AB = document.getElementById('pwd').value; 
	if(AB.length == 0){
		mm.innerHTML="密码不为空!!!";
	}else if(AB.length < 6 ){
		mm.innerHTML="密码至少六位";
	}else {
		mm.innerHTML="*";
	}
})
//入职日期验证
$("#eHiredate").blur(function(){
	var AB = document.getElementById('eHiredate').value; 
	if(AB.length == 0){
		rz.innerHTML="入职日期不为空!!!";
	}else {
		rz.innerHTML="*";
	}
})
//转正日期验证
$("#eFormalDate").blur(function(){
	var AB = document.getElementById('eFormalDate').value; 
	if(AB.length == 0){
		zz.innerHTML="转正日期不为空!!!";
	}else {
		zz.innerHTML="*";
	}
})
//账号状态验证
$("#sId").blur(function(){
	var AB = document.getElementById('sId').value; 
	if(AB.length == 0){
		zt.innerHTML="必选";
	}else {
		zt.innerHTML="*";
	}
})
//邮箱验证
$("#eEmail").blur(function(){
	var email = document.getElementById('eEmail').value;
	var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	/*if(!myreg.test(email) {
		alert("请输入有效邮箱");
		return null;
	}*/
	if(email){
		
	}
})
