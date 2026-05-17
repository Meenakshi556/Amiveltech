<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type*");
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer-master/src/Exception.php';
require __DIR__ . '/PHPMailer-master/src/PHPMailer.php';
require __DIR__ . '/PHPMailer-master/src/SMTP.php';
require __DIR__ . '/db.php';

// DB CONNECTION
$conn = get_pg_connection();

if(empty($_POST)){
    echo json_encode([
        "status" => "error",
        "message" => "no POST recieved"
    ]);
    exit;
}
    // validation
    $required = ['firstName','lastName','email','mobile','college','experience'];
    foreach($required as $field){
        if(empty($_POST[$field])){
            echo json_encode([
                "status" => "error",
                "message" => "missing $field"
                ]);
            exit;
        }
    }
// VALIDATION
if (!isset($_FILES['resume'])) {
  echo json_encode([
    "status" => "error",
    "message" => "Resume data"]);
  exit;
}

$firstname  = $_POST['firstName'];
$lastname   = $_POST['lastName'];
$email      = $_POST['email'];
$mobile     = $_POST['mobile'];
$college    = $_POST['college'];
$experience = $_POST['experience'];
$jobId    = $_POST['jobId'];
$jobTitle = $_POST['jobTitle'];
$company  = $_POST['company'];


// FILE UPLOAD
$uploadDir = "uploads/";
$absoluteUploadDir = __DIR__ . "/" . $uploadDir;
if (!is_dir($absoluteUploadDir)) {
  mkdir($absoluteUploadDir, 0777, true);
}
$fileName = time() . "_" . $_FILES['resume']['name'];
$targetFile = $absoluteUploadDir . $fileName;

move_uploaded_file($_FILES['resume']['tmp_name'], $targetFile);

// DB INSERT
$dbResult = pg_query_params(
  $conn,
  "INSERT INTO applications
  (firstname, lastname, email, mobile, college, experience, resume, job_id, job_title, company)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
  [
    $firstname,
    $lastname,
    $email,
    $mobile,
    $college,
    $experience,
    $fileName,
    $jobId,
    $jobTitle,
    $company
  ]
);


// EMAIL
if ($dbResult !== false) {

  $mail = new PHPMailer(true);

  try {
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "21221a0556@gmail.com";
    $mail->Password = "lulb dbci eguz zybd";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom("21221a0556@gmail.com", "Job Application");
    $mail->addAddress("HR@amiveltech.com");
    $mail->addReplyTo($email, $firstname . ' ' . $lastname);

    $mail->addAttachment($targetFile);

$mail->isHTML(false);

$mail->Subject = "New Job Application - $jobTitle";

$mail->Body = 
"New Job Application Received

Job Details:
Job Title: $jobTitle
Company: $company

Candidate Details:
Name: $firstname $lastname
Email: $email
Mobile: $mobile
College: $college
Experience: $experience

Resume attached.";


    $mail->send();

    echo json_encode(["status" => "success" , "message" => "Application submitted successfully"]);
    exit;
  } catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "Mail failed"]);
  }
} else {
  echo json_encode(["status" => "error", "message" => "DB insert failed"]);
}

pg_close($conn);
