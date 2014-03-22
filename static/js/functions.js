/* For the automatic client
 * This allows any person to create his
 * own chat on your server.
 */
 /****
h = document.location.hostname;
h = h.split('.');
c = h[0]; //->"IP-PORT"
c = c.split('-');
SERVER = c[0];
PORT = c[1];
****/
/*
 * If you want to install your own client, 
 * please uncomment this part and remove all lines
 * beyond
 *-------------------.*/
PORT = '8000';
SERVER = 'localhost';

var socket = io.connect('http://'+SERVER+':'+PORT);

/*
 * Scrolling to the bottom every posts
 */
function scrollBottom()
  {
    var objDiv = document.getElementById("tchat");
    objDiv.scrollTop = objDiv.scrollHeight;
  }
  //setInterval(scrollBottom, 10)
/*
 * Escaping a string, basically...
 */
function htmlEscape(text) {
     return text.replace(/&/g, '&amp;').
     replace(/</g, '&lt;'). 
     replace(/"/g, '&quot;').
     replace(/'/g, '&#039;');
}

/*
 * Asking username
 */
 
function askLogin(){
    $('#modal1').trigger('openModal');
  }

function askRegister(){
    $('#modal2').trigger('openModal');
  }

function dismissRegister(){
  pseudo = $('#usernameregister').val();
  pw = $('#passwordregister').val();
  pwcheck = $('#passwordcheck').val();
  if(pw == pwcheck){
    socket.emit('newPost', {'message': '/register '+pseudo+' '+pw})
  }else{
    document.getElementById('tchat').innerHTML += '<div id="line" style="font-size:12px;">Entered passwords are not the same.</div>';
  }
  $('#modal2').trigger('closeModal');
  return false;
  return pseudo;
}

function dismissLogin(){
  var nb = Math.floor(Math.random() * 1000);
  pseudo = $('#usernamelogin').val() || "Guest" + nb;
  pw = $('#passwordlogin').val();
  console.log(pseudo);
  socket.emit('newPost', {'message': '/login '+pseudo+' '+pw});
  $('#modal1').trigger('closeModal');
  return false;
  return pseudo;
}

/*
 * To send a message to the server
 * after sumitting the form with "enter"
 */
function sendMessage(mess) {
          var message = document.getElementById('message').value;
          var message = htmlEscape(message);
          socket.emit('newPost', { 'hour' : '', 'pseudo' : pseudo, password: pw, 'message' : message, rank: 5});
          scrollBottom();
          $('#message').val('');
          return false;
    }

