<?php

$mailFrom = $_POST['emailFrom'];
$subject = 'Website Contact';
$message = $_POST['message'];
$headers = "MIME-Version: 1.0\n";
// tell the email client what kind of content it is
$headers .= "Content-type: text/plain; charset=iso-8859-1\n";
// put a name in, then an email address
// based where the domain is the same
// as the domain you're actually using - 
// you could use the user's name in the 
// first part of the "From: " bit
$headers .= "From: $mailFrom\n";
// Use the reply to as the user's details
$headers .= "Reply-To: $mailFrom\n";
// tell the email client what you were 
// using to send the email
$headers .= "X-Mailer: PHP's mail() Function\n";
$headers .= $_POST['name']; 

			
mail('zakeddington@gmail.com', $subject, $message, $headers);
?>