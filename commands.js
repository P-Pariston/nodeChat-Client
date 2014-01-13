/*
 * commands.js
 * You can add or remove any command here.
 */

/********
module.exports {
hour: function hour() {
	if(mess.message == "/hour")
		socket.emit('command', current_hour);
	});
}});
}
**********/
module.exports;

module.exports = function() {

    this.hour = function(current_hour) {
        console.log(current_hour);
        //socket.emit('command', current_hour);
    };

};