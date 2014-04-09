function clearForm(){
   $('#login').html("<p style='height:50%; margin-top:7px;''><button id='Loginbtn' class='small button' onclick='return false;''>Login</button>  &nbsp;<button id='Registerbtn' class='small button' onclick='return false;''>Register</button>  &nbsp;&nbsp;&nbsp; Hi ! Welcome to nodeChat, please login to post a message.</p>");
   //Clearing user form
   $('#user-name').html('');
   $('#user-form').html('');
   $('#user').html('Guest');
}
socket.on('connected', function(connected) {
      /*
       * NULL: not connected to the node server
       * 1: connected
       */
      console.log(connected);
      var connected = connected;
      if(connected == 1){
       $('#login').html("<p style='height:50%; margin-top:7px;''><button id='Loginbtn' class='small button' onclick='return false;''>Login</button>  &nbsp;<button id='Registerbtn' class='small button' onclick='return false;''>Register</button>  &nbsp;&nbsp;&nbsp; Hi ! Welcome to nodeChat, please login to post a message.</p>");      
      }else{}
  });

socket.on('BadName', function(c){
  /*
   * If this socket returns 1, it's because the name is too long
   */
   if(c == 1){
   console.log('The value of c is 1, the name is too long.')
   clearForm();
   }
});

socket.on('isLogged', function(c){
    /*
     * -1: User doesn't exist
     *  0: Wrong id/password combinaison
     *  1: Connected
     */
     switch(c){
      case '-1':
      clearForm();
      break;
      case '0':
      clearForm();
      break;
      case '1':
      //OK
      $('#open-modal1').remove();
      break;
      default:
      alert('woops, there is a problem... :/');
     }
});

  socket.on('disconnect', function () {
    document.getElementById('tchat').innerHTML += '<div id="line"><b>bot</b> : You have been disconnected, possibly because this server was restarted.</div>';
    $('#user-form').remove();
    $('#user-name').remove();
    $('#login').remove();
    $('#disconnected').html('You have been disconnected, possibly because this server was restarted.');
  });
