<?php
header('Content-Type: application/json');

$filename = 'messages.json';

if (file_exists($filename)) {
    if (file_put_contents($filename, json_encode([]))) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
} else {
    echo json_encode(['success' => true]);
}
?>
