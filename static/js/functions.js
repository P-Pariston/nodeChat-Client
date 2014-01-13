IP = 'http://localhost';
PORT = 8000;

var socket = io.connect(IP+':'+PORT);

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
function dismissLogin(){
  var nb = Math.floor(Math.random() * 1000);
  pseudo = $('#usernamelogin').val() || "Guest" + nb;
  console.log(pseudo);
  $('#modal1').trigger('closeModal');
  return false;
  return pseudo;
}

/*********
//Random color 
function idColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.round(Math.random() * 15)];
      }
      return color;
  }
  var pseudotitle = pseudo;
  //var pseudo = "<b style='color:"+idColor()+";' >"+pseudo+"</b>";
************/

/*
 * To send a message to the server
 * after sumitting the form with "enter"
 */
function sendMessage(mess) {
          var message = document.getElementById('message').value;
          socket.emit('newPost', { 'hour' : '', 'pseudo' : pseudo, 'message' : message });
          scrollBottom();
          $('#message').val('');
          return false;
    }
