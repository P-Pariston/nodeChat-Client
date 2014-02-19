socket.on('connected', function(connected) {
    /*
     * NULL: not connected to the node server
     * 1: connected
     */
    console.log(connected);
    var connected = connected;
    if(connected == 1){
     $('#login').html("<p style='height:50%; margin-top:7px;''><button class='small button' onclick='return false;''>Login</button> <!-- &nbsp;<button class='small button' onclick='return false;''>Register</button> --> &nbsp;&nbsp;&nbsp; Hi ! Welcome to nodeChat, please login to post a message.</p>");
    
    }else{}
});

socket.on('disconnect', function () {
  document.getElementById('tchat').innerHTML += '<div id="line"><b>bot</b> : You have been disconnected, possibly because this server was restarted.</div>';
  $('#user-form').remove();
  $('#user-name').remove();
  $('#login').remove();
  $('#disconnected').html('You have been disconnected, possibly because this server was restarted.');
});
