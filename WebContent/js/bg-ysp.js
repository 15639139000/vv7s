$(function(){
	
	$(document).on('click','img',function(){
		$(this).zoomify();
	});
	
	var images = $("#reserve12").val().split(",");
	for(var i = 0; i < images.length; i++){
		$("#preview_picture").append("<img alt='' src='" + path + "/activiti/upload/" + images[i] + "' class='zoomify'>");
	}
	
});