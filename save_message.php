<?php
header('Content-Type: application/json');

// Enable error reporting for debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Get POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    error_log("No data received or invalid JSON: " . $input);
    echo json_encode(['success' => false, 'message' => 'No data received']);
    exit;
}

if (!isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    error_log("Missing fields: " . print_r($data, true));
    echo json_encode(['success' => false, 'message' => 'Missing fields']);
    exit;
}

$filename = 'messages.json';

// Initialize messages array
$messages = [];
if (file_exists($filename)) {
    $current_data = file_get_contents($filename);
    $messages = json_decode($current_data, true) ?: [];
}

// Add new message
$newMessage = [
    'name' => htmlspecialchars($data['name']),
    'email' => htmlspecialchars($data['email']),
    'message' => htmlspecialchars($data['message']),
    'date' => date('Y-m-d H:i:s')
];

$messages[] = $newMessage;

// Save back to file
if (file_put_contents($filename, json_encode($messages, JSON_PRETTY_PRINT))) {
    echo json_encode(['success' => true]);
} else {
    $err = error_get_last();
    error_log("Failed to save file: " . ($err ? $err['message'] : 'Unknown error'));
    echo json_encode(['success' => false, 'message' => 'Failed to save file. Check directory permissions.']);
}
?>
