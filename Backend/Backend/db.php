<?php
function get_pg_connection() {
    $host = getenv('PGHOST') ?: 'localhost';
    $port = getenv('PGPORT') ?: '5432';
    $dbname = getenv('PGDATABASE') ?: 'amivel_db';
    $user = getenv('PGUSER') ?: 'postgres';
    $password = getenv('PGPASSWORD') ?: '';

    $connectionString = "host={$host} port={$port} dbname={$dbname} user={$user}";
    if ($password !== '') {
        $connectionString .= " password={$password}";
    }

    $conn = pg_connect($connectionString);
    if (!$conn) {
        echo json_encode([
            "status" => "error",
            "message" => "DB connection failed"
        ]);
        exit;
    }

    return $conn;
}
?>
