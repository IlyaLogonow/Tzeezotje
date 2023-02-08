<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail ->CharSet = 'UTF-8';
    $mail ->setLanguge('ru', 'phpmailer/language/');
    $mail ->IsHTML(true);

    $mail ->setFrom('', 'Gebruiker')
    $mail ->Subject = 'Boeking'

    $body = '<h1>Boeking</h1>'

    if(trim(!empty($_POST['name']))) {
        $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))) {
        $body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
    }

    if (!$mail ->send()) {
        $message = 'Fout';
    } else {
        $message = 'Gegevens verzonden !'
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>