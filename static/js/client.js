  (function($) {
  //user
    PopupLogin = Backbone.View.extend({
      initialize: function(){

      },
      el: '#login',
      events: {
        'click button': 'login'
      },
      login: function(){
        askLogin();
      }
    });

    Login = Backbone.View.extend({
      initialize: function(){
        
      },
      el: '#modal1',
      events: {
        'submit form': 'submit'
      },
      submit: function(e){
        e.preventDefault()
        if(pseudo != ''){
          socket.emit('username', pseudo);
          $('#login').remove();
          $('#user-name').html('<label for="right-label" class="inline"><b><div id="user-button">' + pseudo + '</div></b></label>');
          $('#user-form').html('<input type="text" required="required" name="message" id="message" placeholder="Push Enter to send your message" style="height:50%; margin-top:7px;" autofocus />');
          $('#user').html(pseudo);
          $('#modal1').remove();
          $('#open-modal1').remove();
        }
    }});

//Messages
      Message = Backbone.View.extend({
        /*
         * Getting messages from the server and displaying it
         */
        initialize: function(){
          socket.on('getPosts', function (messages) {
            var html = '';
            for (var i = 0; i < messages.length; i++)
            html += '<div id="line">'+messages[i].hour+' <b>'+messages[i].pseudo+'</b> : '+messages[i].message+'</div>';
            $('#tchat').html(html);
            scrollBottom();
            });
          socket.on('userlist', function (users) {
            var html = '';
            for (var i = 0; i < users.length; i++)
            html += '<li style="text-align:center; color:#e6e6e6;">'+users[i]+'</li>';
            $('#userlist').html(html);
            $('#nbusers').html(users.length);
            scrollBottom();
            });
          socket.on('getNewPosts', function (message) {
            document.getElementById('tchat').innerHTML += '<div id="line"><b>'+message.pseudo+'</b> : '+message.message+'</div>';
            //var message.hour = [hh:mm:ss];
            scrollBottom();
            });
          socket.on('addUsername', function (pseudo) {
            document.getElementById('tchat').innerHTML += '<div id="line"><b>bot</b> : '+pseudo+' is now connected.</div>';
            scrollBottom();
              });
          socket.on('removeUsername', function (pseudo) {
            document.getElementById('tchat').innerHTML += '<div id="line"><b>bot</b> : '+pseudo+' was disconnected.</div>';
            scrollBottom();
          });
          socket.on('reply', function (reply){
            document.getElementById('tchat').innerHTML += '<div id="line" style="font-size:12px;>'+reply+'</div>';
            scrollBottom();
          })
        },
        postmessage: function(e){
          //e.preventDefault();
          //Code if we have to execute something when someone posted a message
          console.log('okay');
      }
    });
    var popupLogin = new PopupLogin();
    var Login = new Login();
    var message = new Message();

  }).call(this, jQuery);
