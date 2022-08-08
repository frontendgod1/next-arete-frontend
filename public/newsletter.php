<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
*/

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './src/Exception.php';
require './src/PHPMailer.php';
require './src/SMTP.php';

$mail = new PHPMailer(true);

// Read the form values
$success = false;
$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";

// If all values exist, send the email
if ( $senderEmail) {



  try {

  $mail->isSMTP();                                            //Send using SMTP
  $mail->Host       = 'smtp.yandex.com';                     //Set the SMTP server to send through
  $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
  $mail->Username   = 'no-reply@apprised.net';                     //SMTP username
  $mail->Password   = 'wb2YNKQth3xdzDq';                               //SMTP password
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
  $mail->Port       = 465;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

  $mail->setFrom('no-reply@apprised.net', 'Arete Sport no-reply'); // send from
  $mail->addAddress('info@arete-sport.com', "Arete Sport");     // Recipient
  $mail->addReplyTo($senderEmail, "Subscriber");


  $mail->isHTML(true);                                  //Set email format to HTML
  $mail->Subject = 'Arete Sport Newsletter - New Subscription';

  $body = "Arete Sport Newsletter received a new subscription.";
  $body .= "<br>";
  $body .= "<b>Email:</b> ". $senderEmail;
  $body .= "<br>";

  $body .= $message;

  $mail->Body    =  $body;

  // $mail->AltBody = " Name: ". $userName . ", Company: ". $userCompany . ", Email: ". $senderEmail . ", Phone: ". $userPhone . ", Services: ". $userServices . ", Message: " . $message . "";

  if($mail->send()) {
    echo json_encode(array(
      "sent" => true
    ));

  }
/*
  $ghlData = [
    "firstName" => $firstName,
    "lastName" => $lastName,
    "email" => $senderEmail,
    "phone" => $userPhone,
    "tags" => ["Contact"],
  ];

   $curl = curl_init();


  curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://rest.gohighlevel.com/v1/contacts/',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,

    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS =>json_encode($ghlData),
    CURLOPT_HTTPHEADER => array(
      'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6Iko0djVkOHY1V1VlVVFuMUVmczlUIiwiY29tcGFueV9pZCI6IkNWdWhMd0pEOXF0Q1NUT0pCSzVvIiwidmVyc2lvbiI6MSwiaWF0IjoxNjM2NDY4ODM3MTY4LCJzdWIiOiJKUEY1blB2NlpiQThUTzhZZmlqaSJ9.yKN-xSlxs8_1Kj5M93sBDtHymnZy3HGGcQ0t6pDCdqU',
      'accept: application/json',
      'content-type: application/json'

    ),
  ));

  $response = curl_exec($curl);
*/
  } catch (Exception $e) {
    echo json_encode(["sent" => false, "message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);

  }
}

else{
    echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}

?>
