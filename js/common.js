$(document).ready(function() {

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".section_header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "fadeOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutDown");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");
	$(".animation_4").animated("flipInY", "flipInY");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	//$("input, select, textarea").jqBootstrapValidation();
	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();
	//отправка формы 1 обратной связи 
	$('#btn_submit').click(function(){
				// собираем данные с формы
				var user_nominal = $('#user_nominal').val();
				var user_name 	 = $('#user_name').val();
				var user_phone 	 = $('#user_phone').val();
				var text_comment = $('#text_comment').val();
				// отправляем данные
				$.ajax({
					url: "fid/action.php", // куда отправляем
					type: "post", // метод передачи
					dataType: "json", // тип передачи данных
					data: { // что отправляем
						"user_nominal": user_nominal,
						"user_name": 	user_name,
						"user_phone": 	user_phone,
						"text_comment": text_comment
					},
					// после получения ответа сервера
					success: function(data){
						$('.messages').html(data.result); // выводим ответ сервера
					}
				});
			});
	//отправка формы 1 обратной связи 
	$('#btn_submit1').click(function(){
				// собираем данные с формы
				var user_nominal = $('#user_nominal1').val();
				var user_name 	 = $('#user_name1').val();
				var user_phone 	 = $('#user_phone1').val();
				var text_comment = $('#text_comment1').val();
				// отправляем данные
				$.ajax({
					url: "fid/action.php", // куда отправляем
					type: "post", // метод передачи
					dataType: "json", // тип передачи данных
					data: { // что отправляем
						"user_nominal": user_nominal,
						"user_name": 	user_name,
						"user_phone": 	user_phone,
						"text_comment": text_comment
					},
					// после получения ответа сервера
					success: function(data){
						$('.messages').html(data.result); // выводим ответ сервера
					}
				});
			});	

});
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(300).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");

});