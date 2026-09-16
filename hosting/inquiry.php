<?php
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function inquiry_len($value) {
  return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

function inquiry_json($payload, $status = 200) {
  http_response_code($status);
  echo json_encode($payload);
  exit;
}

function inquiry_header_safe($value) {
  return trim(str_replace(array("\r", "\n", "\0"), '', $value));
}

function inquiry_looks_like_script($value) {
  $decoded = html_entity_decode($value, ENT_QUOTES, 'UTF-8');
  $haystack = $value . "\n" . $decoded;
  if (preg_match('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/', $haystack)) {
    return true;
  }
  return (bool) preg_match('/<\/?[a-zA-Z]|javascript\s*:|vbscript\s*:|on[a-z]+\s*=|srcdoc\s*=/i', $haystack);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
  inquiry_json(array('ok' => false, 'message' => 'Method not allowed.'), 405);
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$host = preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? '');
if ($origin !== '') {
  $origin_host = parse_url($origin, PHP_URL_HOST);
  if ($origin_host && $host && strcasecmp($origin_host, $host) !== 0) {
    inquiry_json(array('ok' => false, 'message' => 'Forbidden.'), 403);
  }
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
  $data = $_POST;
}

$name = inquiry_header_safe(isset($data['name']) ? (string) $data['name'] : '');
$email = inquiry_header_safe(isset($data['email']) ? (string) $data['email'] : '');
$message = trim(str_replace("\0", '', isset($data['message']) ? (string) $data['message'] : ''));
$message = str_replace(array("\r\n", "\r"), "\n", $message);

$field_errors = array();
if (inquiry_len($name) < 2) {
  $field_errors['name'] = 'Please enter your full name.';
} elseif (inquiry_len($name) > 80 || inquiry_looks_like_script($name) || !preg_match("/^[\\p{L}\\p{M}][\\p{L}\\p{M} .'’\\-–]*$/u", $name)) {
  $field_errors['name'] = 'Please enter your name using letters only.';
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || inquiry_len($email) > 254 || inquiry_looks_like_script($email)) {
  $field_errors['email'] = 'Please enter a valid email address.';
}

if (inquiry_len($message) < 12) {
  $field_errors['message'] = 'Please briefly describe your legal concern.';
} elseif (inquiry_len($message) > 2000) {
  $field_errors['message'] = 'Please shorten your message so we can review it.';
} elseif (inquiry_looks_like_script($message)) {
  $field_errors['message'] = 'Please remove HTML or script content from your message.';
}

if ($field_errors) {
  inquiry_json(array(
    'ok' => false,
    'message' => 'Please correct the highlighted fields.',
    'fieldErrors' => $field_errors,
  ), 400);
}

$cookie_name = 'fgdlaw_inquiry_sent';
$window_seconds = 15 * 60;
$last_sent = isset($_COOKIE[$cookie_name]) ? (int) $_COOKIE[$cookie_name] : 0;
if ($last_sent > 0 && (time() - $last_sent) < $window_seconds) {
  inquiry_json(array(
    'ok' => false,
    'message' => 'Your inquiry was already sent. Please wait a few minutes before sending another message.',
  ), 409);
}

$to = 'info@fgdlaw.net';
$from = 'info@fgdlaw.net';
$subject = inquiry_header_safe('New consultation inquiry from ' . $name);
$body = "A new consultation inquiry was submitted on the FGDLaw website.\n\n"
  . "Name: {$name}\n"
  . "Email: {$email}\n\n"
  . "Message:\n{$message}\n";
$headers = 'From: FGDLaw Website <' . $from . ">\r\n"
  . 'Reply-To: ' . $email . "\r\n"
  . "MIME-Version: 1.0\r\n"
  . "Content-Type: text/plain; charset=UTF-8\r\n"
  . 'X-Mailer: FGDLaw website';

$sent = @mail($to, $subject, $body, $headers);
if (!$sent) {
  inquiry_json(array(
    'ok' => false,
    'message' => 'We could not send your inquiry just now. Please email info@fgdlaw.net directly or try again in a moment.',
  ), 502);
}

setcookie($cookie_name, (string) time(), array(
  'expires' => time() + $window_seconds,
  'path' => '/',
  'httponly' => true,
  'samesite' => 'Lax',
  'secure' => (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off'),
));

inquiry_json(array(
  'ok' => true,
  'message' => 'Thank you. Your inquiry has been sent to info@fgdlaw.net. Our Manila office will follow up using the email you provided. You may also reach us at (632) 727-5011-2.',
));
