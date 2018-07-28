// 关于月份： 在设置时要-1，使用时要+1
$(function() {

	$('#calendar').calendar({
		ifSwitch: true, // 是否切换月份
		hoverDate: true, // hover是否显示当天信息
		backToday: true // 是否返回当天
	});
});

;
(function($, window, document, undefined) {

	var Calendar = function(elem, options) {
		this.$calendar = elem;

		this.defaults = {
			ifSwitch: true,
			hoverDate: false,
			backToday: false
		};

		this.opts = $.extend({}, this.defaults, options);

		// console.log(this.opts);
	};
	
	Calendar.prototype = {
		showHoverInfo: function(obj) { // hover 时显示当天信息
			var _dateStr = $(obj).attr('data');
			var offset_t = $(obj).offset().top + (this.$calendar_today.height() - $(obj).height()) / 2;
			var offset_l = $(obj).offset().left + $(obj).width();
			var changeStr = _dateStr.substr(0, 4) + '-' + _dateStr.substr(4, 2) + '-' + _dateStr.substring(6);
			var _week = changingStr(changeStr).getDay();
			var _weekStr = '';
			
//			this.$calendar_today.show();
			var calendarToday = this.$calendar_today;
			var calendarTodayContent = this.$calendarToday_content;
			var reContent = '';
			this.$calendar_today
				.css({
					left: offset_l - 1330,
					top: offset_t - 112
				})
				.stop()
				.animate({
					left: offset_l - 1330,
					top: offset_t - 112,
					opacity: 1
				});

			switch(_week) {
				case 0:
					_weekStr = '星期日';
					break;
				case 1:
					_weekStr = '星期一';
					break;
				case 2:
					_weekStr = '星期二';
					break;
				case 3:
					_weekStr = '星期三';
					break;
				case 4:
					_weekStr = '星期四';
					break;
				case 5:
					_weekStr = '星期五';
					break;
				case 6:
					_weekStr = '星期六';
					break;
			}
			
			$.ajax({
				url : path + '/remark/getRemarkByDate',
				type : 'POST',
				data : {"reDate" : changeStr},
				success : function(data){
					if("" !=data&&null!=data){
						var remarks = data;
						$.each(remarks, function(index, item){
							reContent = reContent + item.reContent;
						});
						calendarToday.show();
						calendarTodayContent.text(reContent);
						
					}
				}
			});
			
//			this.$calendarToday_week.text(_weekStr);
		},
		showClickInfo: function(obj,evt){
			var e=(evt)?evt:window.event;
			$("#remark").empty();
			var _dateStr = $(obj).attr('data');
			var offset_t1 = $(obj).offset().top + (this.$calendar_op.height() - $(obj).height()) / 2;
			var offset_l1 = $(obj).offset().left + $(obj).width();
			var changeStr = _dateStr.substr(0, 4) + '-' + _dateStr.substr(4, 2) + '-' + _dateStr.substring(6);
			
			var calendarOp = this.$calendar_op;
			var calendarOpContent = this.$calendarOp_content;
			var reContent = "";
			this.$calendar_op
				.css({
					left: offset_l1 - 1400,
					top: offset_t1 - 15
				})
				.stop()
				.animate({
					left: offset_l1 - 1400,
					top: offset_t1 - 15,
					opacity: 1
				});
			
			function addRemark(){
				$("#myModal1 .modal-title").empty().append("添加备忘");
			};
			function updateRemark(){
				var reContent = $("#getContent").val();
				$("#myModal1 .modal-title").empty().append("修改备忘");
				$("#myModal1 #desc").val(reContent);
			};
			
			$.ajax({
				url : path + '/remark/getRemarkByDate',
				type : 'POST',
				data : {"reDate" : changeStr},
				success : function(data){
					if("" !=data&&null!=data){
						var remarks = data;
						$.each(remarks, function(index, item){
							reContent = reContent + item.reContent;
						});
						var url = path + '/remark/delRemarkById?reId='+data[0].reId;
						$("#remark").append("<li><a href='javascript:void(0);' data-target='#myModal1' data-toggle='modal' onclick='updateRemark();'><font color='#FFFFFF'>修改备注</font></a></li>"+"<input type='hidden' id='getContent' value='"+reContent+"'/><input type='hidden' id='getDate' value='"+changeStr+"'/>"+
						'<li><a href='+url+'><font color="#FFFFFF">清空备注</font></a></li>');
//		    			'<li><a href="javascript:void(0);" onclick="deleteRemark();"><font color="#FFFFFF">清空备注</font></a></li>');
						$('.calendar-op').css('height','55px');
					}else{
						$("#remark").append("<li><a href='javascript:void(0);' data-target='#myModal1' data-toggle='modal' onclick='addRemark();'><font color='#FFFFFF'>增加备注</font></a><input type='hidden' id='getDate' value='"+changeStr+"'/></li>");
						$('.calendar-op').css('height','30px');
					}
				}
			});
			calendarOp.show();
			 //阻止事件冒泡,防止波及本按钮  
			if (e.stopPropagation) {
				// 针对 Mozilla 和 Opera 
				e.stopPropagation(); 
			}else if (e) { 
					// 针对 IE 
				e.cancelBubble = true; 
			}
			
		},
		showCalendar: function() { // 输入数据并显示
			var self = this;
			var year = dateObj.getDate().getFullYear();
			var month = dateObj.getDate().getMonth() + 1;
			var dateStr = returnDateStr(dateObj.getDate());
			var firstDay = new Date(year, month - 1, 1); // 当前月的第一天
			var currectDay = dateStr.substr(6,2); //当前日期
			
			this.$calendarTitle_text.text(year + '/' + dateStr.substr(4, 2));

			//循环显示每天的天数
			this.$calendarDate_item.each(function(i) {
				// allDay: 得到当前列表显示的所有天数
				var allDay = new Date(year, month - 1, i + 1 - firstDay.getDay());
				var allDay_str = returnDateStr(allDay);
				var changeStr = allDay_str.substr(0, 4) + '-' + allDay_str.substr(4, 2) + '-' + allDay_str.substring(6);
				var currDay = $(this).text(allDay.getDate());
				$.ajax({
					url : path + '/remark/getRemarkByDate',
					type : 'POST',
					data : {"reDate" : changeStr},
					success : function(data){
						if("" !=data&&null!=data){
							currDay.attr('data', allDay_str).append("<span>.</span>");
						}else{
							currDay.attr('data', allDay_str);
						}
					}
				});
				//走ajax，取出每天的代办事项的天数
				
				//设置显示的天数,且判断当前的日期之前的日期不显示红点
				/*if((i + 1) < currectDay){*/
				/*}else{
					if((i + 1) % 3 == 0){
						$(this).text(allDay.getDate()).attr('data', allDay_str).append("<span>.</span>");
					}else{
						$(this).text(allDay.getDate()).attr('data', allDay_str);
					}
				}*/

				if(returnDateStr(new Date()) === allDay_str) {
					$(this).attr('class', 'item item-curDay');
				} else if(returnDateStr(firstDay).substr(0, 6) === allDay_str.substr(0, 6)) {
					$(this).attr('class', 'item item-curMonth');
				} else {
					$(this).attr('class', 'item');
				}
			});
		},

		renderDOM: function() { // 渲染DOM
			this.$calendar_title = $('<div class="calendar-title"></div>');
			//头部，周
			this.$calendar_week = $('<ul class="calendar-week"></ul>');
			//主体，日期
			this.$calendar_date = $('<ul class="calendar-date"></ul>');
			//鼠标悬浮时，显示当天的日期数据
			this.$calendar_today = $('<div class="calendar-today"></div>');
			//鼠标单击时，显示增删选项
			this.$calendar_op = $('<div class="calendar-op"></div>');
			//头部，当前月份和上下月调换
			var _titleStr = '<a href="#" class="title"></a>' +
				'<a href="javascript:;" id="backToday"></a>' +
				'<div class="arrow">' +
				'<span class="arrow-prev"><</span>' +
				'<span class="arrow-next">></span>' +
				'</div>';
			//头部，周
			var _weekStr = '<li class="item">日</li>' +
				'<li class="item">一</li>' +
				'<li class="item">二</li>' +
				'<li class="item">三</li>' +
				'<li class="item">四</li>' +
				'<li class="item">五</li>' +
				'<li class="item">六</li>';
			//主体，日期
			var _dateStr = '';
			/*var _dayStr = '<i class="triangle"></i>' +
				//悬浮时，显示的日期
				'<p class="date"></p>' +
				'<p class="week"></p>';*/
			var reContent = '<i class="triangle"></i>'+
							'<p class="content"></p>';
							
			var _opStr =$('<div id = "remark"></div>')
					/*.append('<li><a href="#">增加备注</a></li>'+
		    			'<li><a href="#">修改备注</a></li>'+
		    			'<li><a href="#">清空备注</a></li>')*/;
			for(var i = 0; i < 5; i++) {
				_dateStr += '<li class="item">26</li>' +
					'<li class="item">26</li>' +
					'<li class="item">26</li>' +
					'<li class="item">26</li>' +
					'<li class="item">26</li>' +
					'<li class="item">26</li>' +
					'<li class="item">26</li>';
			}

			this.$calendar_title.html(_titleStr);
			this.$calendar_week.html(_weekStr);
			this.$calendar_date.html(_dateStr);
			this.$calendar_today.html(reContent);
			this.$calendar_op.html(_opStr);

			this.$calendar.append(this.$calendar_title, this.$calendar_week, this.$calendar_date, this.$calendar_today,this.$calendar_op);
			this.$calendar.show();
		},

		inital: function() { // 初始化
			var self = this;

			this.renderDOM();

			this.$calendarTitle_text = this.$calendar_title.find('.title');
			this.$backToday = $('#backToday');
			this.$arrow_prev = this.$calendar_title.find('.arrow-prev');
			this.$arrow_next = this.$calendar_title.find('.arrow-next');
			this.$calendarDate_item = this.$calendar_date.find('.item');
			this.$calendarToday_content = this.$calendar_today.find('.content');
			this.$calendarOp_content = this.$calendar_op.find('.content');

			this.showCalendar();

			if(this.opts.ifSwitch) {
				this.$arrow_prev.bind('click', function() {
					var _date = dateObj.getDate();

					dateObj.setDate(new Date(_date.getFullYear(), _date.getMonth() - 1, 1));

					self.showCalendar();
				});

				this.$arrow_next.bind('click', function() {
					var _date = dateObj.getDate();

					dateObj.setDate(new Date(_date.getFullYear(), _date.getMonth() + 1, 1));

					self.showCalendar();
				});
			}

			if(this.opts.backToday) {
				this.$backToday.bind('click', function() {
					if(!self.$calendarDate_item.hasClass('item-curDay')) {
						dateObj.setDate(new Date());

						self.showCalendar();
					}
				});
			}

			//鼠标悬浮日期上时，触发的事件
			this.$calendarDate_item.hover(function() {
				self.showHoverInfo($(this));
			}, function() {
				self.$calendar_today.css({
					left: 0,
					top: 0
				}).hide();
			});
			
			//每一个日期的点击事件
			this.$calendarDate_item.click(function(){
				self.showClickInfo($(this));
			});
			
			$("#myModal1 #ok").click(function(){
				var reContent = $("#myModal1 #desc").val()
				var reCallDate = $("#getDate").val();
				var text = $("#myModal1 .modal-title").text().trim();
				if(text == "修改备忘"){
					if(""!=reContent&&null!=reContent){
						$.ajax({
							url : path + '/remark/editRemarkByDate',
							type : 'POST',
							data : {"reContent" : reContent, "reCallDate" : reCallDate},
							success : function(data){
								if(data == 1){
									alert("修改成功");
								}else{
									alert("修改失败");
								}
							}
						}); 
						$(this).attr("data-dismiss", "modal");
					}else{
						$("#myModal1 .error").empty().append("内容不能为空").css("color","red");
					}
				}else if(text == "添加备忘"){
					$("#myModal1 #desc").val("");
					if(""!=reContent&&null!=reContent){
						$.ajax({
							url : path + '/remark/insertRemark',
							type : 'POST',
							data : {"reContent" : reContent, "reCallDate" : reCallDate},
							success : function(data){
								if(data == 1){
									alert("添加成功");
								}else{
									alert("添加失败");
								}
							}
						});
						$(this).attr("data-dismiss", "modal");
					}else{
						$("#myModal1 .error").empty().append("内容不能为空").css("color","red");
					}
				}
				self.showCalendar();
			});
			
		},

		constructor: Calendar
	};

	$.fn.calendar = function(options) {
		var calendar = new Calendar(this, options);

		return calendar.inital();
	};

	// ========== 使用到的方法 ==========

	var dateObj = (function() {
		var _date = new Date();

		return {
			getDate: function() {
				return _date;
			},

			setDate: function(date) {
				_date = date;
			}
		}
	})();

	function returnDateStr(date) { // 日期转字符串
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();

		month = month < 9 ? ('0' + month) : ('' + month);
		day = day < 9 ? ('0' + day) : ('' + day);

		return year + month + day;
	};

	function changingStr(fDate) { // 字符串转日期
		var fullDate = fDate.split("-");

		return new Date(fullDate[0], fullDate[1] - 1, fullDate[2]);
	};

})(jQuery, window, document);