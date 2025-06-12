<?php
// ISG Chat Configuration

// Database configuration (if you want to use a database later)
define('DB_HOST', 'localhost');
define('DB_NAME', 'isg_chat');
define('DB_USER', 'root');
define('DB_PASS', '');

// File upload settings
define('UPLOAD_DIR', 'uploads/');
define('MAX_FILE_SIZE', 10 * 1024 * 1024); // 10MB

// Allowed file types
$allowedFileTypes = [
    'image/jpeg', 'image/png', 'image/gif', 'image/webp',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain'
];

// Application settings
define('APP_NAME', 'ISG Chat');
define('APP_VERSION', '1.0.0');

// Security settings
define('SESSION_TIMEOUT', 3600); // 1 hour
define('MAX_LOGIN_ATTEMPTS', 5);

// Notification settings
define('ENABLE_NOTIFICATIONS', true);
define('NOTIFICATION_SOUND', true);

?>
