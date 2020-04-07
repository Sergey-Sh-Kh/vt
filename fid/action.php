<?php
	$msg_box = ""; // в этой переменной будем хранить сообщения формы
	$errors = array(); // контейнер для ошибок
	// проверяем корректность полей
	if($_POST['user_nominal'] == "") $errors[] = "Номинал сертификата !!!";
	if($_POST['user_name'] == "") 	 $errors[] = "Ваше имя!!!";
	if($_POST['user_phone'] == "") 	 $errors[] = "Ваш телефон!!!";
	// если форма без ошибок
	if(empty($errors)){		
		// собираем данные из формы
		$message .= "Номинал сертификата: " . $_POST['user_nominal'] . "<br/>";
		$message .= "Имя покупателя: " . $_POST['user_name'] . "<br/>";
		$message .= "Телефон покупателя: " . $_POST['user_phone'] . "<br/>";
		$message .= "Коментарии к заказу: " . $_POST['text_comment'];		
		send_mail($message); // отправим письмо
		// выведем сообщение об успехе
		$msg_box = "<span class='true-error' style='color: white;'>Сообщение отправлено!</span><script>$('#myform').trigger( 'reset' );location.href = '/thankyou.html';</script>";
	}else{
		// если были ошибки, то выводим их
		$msg_box = "";
		foreach($errors as $one_error){
			$msg_box .= "<span class='true-error' style='color: red;'>$one_error</span><br/>";
		}
	}

	// делаем ответ на клиентскую часть в формате JSON
	echo json_encode(array(
		'result' => $msg_box
	));
	
	
	// функция отправки письма
	function send_mail($message){
		// почта, на которую придет письмо
		$mail_to = "sergey-kh@mail.ru"; 
		// тема письма
		$subject = "Заказ с votre-gift";
		
		// заголовок письма
		$headers= "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
		$headers .= "From: <sergey-kh@mail.ru>\r\n"; // от кого письмо
		
		// отправляем письмо 
		mail($mail_to, $subject, $message, $headers);
	}
	
