var Cylon = require('cylon');

Cylon.api("http", {
  //host: '192.168.43.149',
  host: '192.168.1.25',
  ssl: false
});

Cylon.robot({
  name : 'boxhead',
  connections: {
    loopback: { adaptor: 'loopback' }
  },

  devices: {
    ping: { driver: 'ping' }
  },

 commands: function() {
    return {
      	look_left: this.lookLeft,
	look_right: this.lookRight,
	look_up: this.lookUp,
	look_down: this.lookDown
    };
  },

 lookLeft: function() {
	console.log("look left");
	return "turn left";
  },


lookRight: function() {
        console.log("look right");
	return "turn right";
  },


lookUp: function() {
        console.log("look up");
	return "look up";
  },

lookDown: function() {
        console.log("look down");
	return "look down";
  },

  work: function() {
  }
}).start();
