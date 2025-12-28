<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: https://raul-ciucalau.de");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"): //Send the email;
            header("Access-Control-Allow-Origin: https://raul-ciucalau.de");
            header("Content-Type: application/json");
            
            // Payload is not send to $_POST Variable,
            // is send to php:input as a text
            $json = file_get_contents('php://input');
            //parse the Payload from text format to Object
            $params = json_decode($json);
    
        $email = filter_var($params->email, FILTER_SANITIZE_EMAIL);
        $name = htmlspecialchars(strip_tags($params->name));
        $message = htmlspecialchars(strip_tags($params->message));

        // Validate email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(["success" => false, "message" => "Invalid email address"]);
            exit;
        }

        $recipient = 'ciucalauraul@gmail.com';  
        $subject = "Contact From <$email>";
        $message = "From: " . $name . "<br>" . nl2br($message);
        
        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: noreply@raul-ciucalau.de";
        $headers[] = "Reply-To: " . $email;

        $mailSent = mail($recipient, $subject, $message, implode("\r\n", $headers));
        
        if ($mailSent) {
            echo json_encode(["success" => true, "message" => "Email sent successfully"]);
        } else {
            http_response_code(500);
            echo json_encode(["success" => false, "message" => "Failed to send email"]);
        }
            break;
        default: //Reject any non POST or OPTIONS requests.
            header("Allow: POST", true, 405);
            exit;
    } 
