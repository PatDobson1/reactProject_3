<?php

     require 'class.phpmailer.php';

    header("Access-Control-Allow-Origin: *");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    $data = $_POST[0];

     //Create a new PHPMailer instance
      $mail = new PHPMailer();
      $nameVar = $data["contactName"];
      if( $data['contactEmail'] == '' ){
          $emailVar = 'noEmail@codingSample.co.uk';
      }else{
          $emailVar = $data["contactEmail"];
      }
      $telVar = $data["contactTel"];
      $messageVar = $data["message"];
      $messageVar = str_ireplace("\'","`",$messageVar);
      $messageVar = str_ireplace('\"',"`",$messageVar);
      $dateVar = date('l dS \of F Y h:i:s A');
     // used only when SMTP requires authentication
      $mail->IsSMTP();
      $mail->Host = '##SMTPSERVER##';
      $mail->SMTPAuth = true;
      $mail->Username = '##SMTPUSERNAME##';
      $mail->Password = '##SMTPPASSWORD##';
     //Set who the message is to be sent from
      $mail->SetFrom($emailVar);
     //Set who the message is to be sent to
      $address = $emailVar;
      $mail->AddAddress($address);
     //Set the subject line
      $mail->Subject = "Coding sample - Website contact";

 $message = "
 Name: $nameVar\n
 Email: $emailVar\n
 Telephone: $telVar\n
 ---------------------------------------------\n
 $messageVar
 \n---------------------------------------------\n
 Date: $dateVar
 ";
      $mail->Body 	= $message;
      if(!$mail->Send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
      }
 ?>
