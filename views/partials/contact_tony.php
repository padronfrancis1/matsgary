<?php
// $action=$_REQUEST['action'];
$action = ( array_key_exists( 'action', $_REQUEST) ? $_REQUEST['action'] : "" );
if ($action=="")    /* display the contact form */
    {
    ?>

    <form  action="" method="POST" enctype="multipart/form-data">
      <input type="hidden" name="action" value="submit" class="test" style="border: 3px solid red;">

      <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" required title="Please enter your user name." placeholder="Enter your Name" name="name">
      </div>

      <div class="form-group">
          <label for="email">Email Address: </label>
          <input type="email" class="form-control" name="email" placeholder="name@email.com" required>
      </div>

      <div class="form-group">
          <label for="number">Phone Number (format: xxx-xxx-xxxx):</label><br/>
          <input id="number" name="number" class="form-control" type="tel" pattern="^\d{3}-\d{3}-\d{4}$" placeholder="phone number" required >
      </div>

      <div class="form-group">
          <label for="message">Your Message</label><br/>
          <textarea style="width: 100%;" class="form-control" name="message"></textarea> 
      </div>

      <div class="form-row">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>

    </form>
    
    <?php
    }
else
    {
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $number=$_REQUEST['number'];
    $message=$_REQUEST['message'];

    if (($name=="")||($email=="")||($message=="")||($number==""))

        {
    echo "All fields are required, please fill <a href=\"\">the form</a> again.";
      }

    else{   

      require_once 'lib/swift_required.php';

    // grab a post data
      $name = filter_var($_POST['name']);
      $email = filter_var($_POST['email']);
      $message = filter_var($_POST['message']);
      $number = filter_var($_POST['number']);

    // create our email body message
      $data = "Name: : " . $name . "<br />" . "Email: " . $email . "<br />" . "Message: " . $message. "<br />" . "Phon eNumber: " . $number;

    // create the transport
    $transport = Swift_SmtpTransport::newInstance('smtpout.secureserver.net', 80, false)
      // $transport = Swift_SmtpTransport::newInstance('smtp.office365.com', 587, TLS)
        ->setUsername('francispadron@fpadron.com')
        ->setPassword('123abc');

    // create the mailer
      $mailer = Swift_Mailer::newInstance($transport);
      $message = Swift_Message::newInstance('francispadron@matsgary.ca')
        ->setFrom (array('francispadron@matsgary.ca' => 'Message from the client'))
        ->setTo (array('francispadron@matsgary.ca' => 'Message form the client'))
        ->setSubject ('Message form the client')
        ->setBody ($data, 'text/html');

    // Send the message
    // $result = $mailer->send($message);
    if ($mailer->send($message))
        {
          echo "Email Sent\n";
        }
        else
        {
          echo "Email Failed\n";
        }

      }
    }  
?>

