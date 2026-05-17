<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer-master/src/Exception.php';
require __DIR__ . '/PHPMailer-master/src/PHPMailer.php';
require __DIR__ . '/PHPMailer-master/src/SMTP.php';
require __DIR__ . '/db.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// DB connection
$conn = get_pg_connection();

// Read JSON
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode([
        "status" => "error",
        "message" => "No JSON data received"
    ]);
    exit;
}

$firstname = $data['firstName'];
$lastname  = $data['lastName'];
$email     = $data['email'];
$subject   = $data['subject'];
$message   = $data['message'];

// Insert into DB
$dbResult = pg_query_params(
    $conn,
    "INSERT INTO contact_messages (firstname, lastname, email, subject, message)
     VALUES ($1, $2, $3, $4, $5)",
    [$firstname, $lastname, $email, $subject, $message]
);

$dbSuccess = $dbResult !== false;

// -------- EMAIL USING PHPMailer --------
$mailSuccess = false;

if ($dbSuccess) {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = '21221a0556@gmail.com';       // 🔁 your gmail
        $mail->Password   = 'nkee zhto gesv entj';         // 🔁 app password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom('21221a0556@gmail.com', 'Amivel Tech');
        $mail->addAddress('HR@amiveltech.com'); // where you receive mail
        $mail->addReplyTo($email, $firstname . ' ' . $lastname);


        $mail->Subject = $subject;
        $mail->Body =
        "New Contact Form Submission\n" .
            "Name: $firstname $lastname\n" .
            "Email: $email\n\n" .
            "Message:\n$message";
       

        $mail->send();
        $mailSuccess = true;

    } catch (Exception $e) {
        $mailSuccess = false;
    }
}

// RESPONSE
if ($dbSuccess && $mailSuccess) {
    echo json_encode(["status" => "success"]);
} else if ($dbSuccess) {
    echo json_encode(["status" => "success"]); // DB ok even if mail fails
} else {
    echo json_encode(["status" => "error"]);
}

pg_close($conn);
?>
