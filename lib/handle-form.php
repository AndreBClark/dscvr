<?php
require_once($_SERVER['DOCUMENT_ROOT'].'/lib/vendor/autoload.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $error = false;
    $required_fields = array('full-name', 'email', 'comment');
    foreach ($required_fields as $field) {
        if (empty($_POST[$field])) $error = true;
    }

    if (!$error) {

        $msg = <<<EOD
Name: {$_POST['full-name']}
Email: $_POST[email]
Phone: $_POST[phone]
Comment: $_POST[comment]
EOD;

        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->Host = EMAIL_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = EMAIL_HOST_USER;
        $mail->Password = EMAIL_HOST_PASSWORD;
        $mail->SMTPSecure = 'tls';
        $mail->CharSet = 'utf8';

        try {
            $mail->setFrom(FROM_EMAIL, SITE_NAME);
            foreach(EMAIL_RECIPIENTS as $recipient){
                $mail->addBCC($recipient);
            }
            $mail->AddReplyTo($_POST['email'], $_POST['name']);
            $mail->Subject = SITE_NAME . ' - Form submission';
            $mail->Body = $msg;
            $mail->send();
            header('location:/?success=1');
            exit();
        } catch (phpmailerException $e) {
            echo $e->errorMessage();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}