[8:05 pm, 02/08/2022] Sa BR: let isConnectted = false;
      let port;
      let writer;
      var target_id;
      const enc = new TextEncoder();

      async function onChangespeech() {
        if (!isConnectted) {
          alert("you must connect to the usb in order to use this.");
          return;
        }
       
        try {
          const commandlist = content;
          const commandSplit = commandlist.split(" ")
          const command = commandSplit.slice(-1);
          const computerText = `${command}@`;
          await writer.write(enc.encode(computerText));
        } catch (e) {
          console.log(e);
        }
      }
    
      

    async function onConnectUsb() {
      try {
        const requestOptions = {
          // Filter on devices with the Arduino USB vendor ID.
          filters: [{ usbVendorId: 0x2341 }],
        };

        // Request an Arduino from the user.
        port = await navigator.serial.requestPort(requestOptions);
        await port.open({ baudRate: 115200 });
        writer = port.writable.getWriter();
        isConnectted = true;
      } catch (e) {
        console.log("err", e);
      }
    }
[8:05 pm, 02/08/2022] Sa BR: arduino javas
[8:06 pm, 02/08/2022] Sa BR: <!DOCTYPE html>

<html lang="en" dir="ltr">

<head>

 <meta charset="utf-8">

 <title>speech to text in javascript</title>

 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">

</head>

<body>

 <div class="container">

 <h1 class="text-center mt-5">

 Speech to Text in JavaScript

 </h1>

 <div class="form-group">

 <textarea  id="textbox" rows="6" class="form-control"></textarea>

 </div>

 <div class="form-group">

 <button id="start-btn"  class="btn btn-danger btn-block" title="" >
    Start
 </button>
<button class = "btn btn-danger btn-block" onclick="onConnectUsb()" id="connect-usb">
    connect
</button>


 
 <p id="instructions">Press the Start button</p>

 </div>

 </div>

 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

 <script src="script.js"></script>
<script src="arduino.js"></script>
<script>


</script>
</body>

</html>
