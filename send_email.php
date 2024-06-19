<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email address to receive the message
    $to = "sadhukhansouvik15@gmail.com";

    // Email subject
    $subject = "New message from your portfolio contact form";

    // Email content
    $content = "Name: $name\n";
    $content .= "Email: $email\n\n";
    $content .= "Message:\n$message";

    // Send email
    mail($to, $subject, $content);

    // Redirect back to the contact page
    header("Location: index.html");
}
?>
