<?php
	header('Content-type: application/json');
	$status = array(
		'type'=>'success',
		'message'=>'Thank you for contact us. As early as possible  we will contact you '
	);
    $name       = @trim(stripslashes($_POST['name']));
    $email      = @trim(stripslashes($_POST['email']));
    $message    = @trim(stripslashes($_POST['message']));
    $email_from = $email;
    $email_to = 'info@binarylab.es';//replace with your email
    $body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . "\n\n" . 'Message: ' . $message;
    $success = @mail($email_to, $body, 'From: <'.$email_from.'>');
    if ($success){
       exit();
    } else {
      print "np";
    }
    die;
