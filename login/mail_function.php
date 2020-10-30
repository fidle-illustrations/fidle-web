
<?php
	function sendOTP($email,$otp) {
		require '..\phpmailer\vendor\phpmailer\phpmailer\src/PHPMailer.php';
		require '..\phpmailer\vendor\phpmailer\phpmailer\src\SMTP.php';

		$message_body = "One Time Password for PHP login authentication is:<br/><br/>" . $otp;

		$mail = new PHPMailer\PHPMailer\PHPMailer();

		$mail->AddReplyTo('ritulyadav21@gmail.com' , 'Ritul');
		$mail->SetFrom('ritulyadav21@gmail.com' , 'Ritul');
		$mail->AddAddress($email);
		$mail->Subject="OTP to login";
		$mail->MsgHTML($message_body);
		$result=$mail->Send();
		if (!$result) {
			echo "Mailer Error: " .$mail->ErrorInfo;
		}else{
			return $result;
		}
	}