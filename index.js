var Cylon = require('cylon');
var horznumber = 0;
var vertnumber = 0;

Cylon.api("http", {
  host: '192.168.43.149',
  //host: '192.168.1.25',
  ssl: false
});

Cylon.robot({
  name : 'boxhead',
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
  },

  devices: {
    vert: { driver: 'led', pin: 5 },
    horz: { driver: 'led', pin: 9 }
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
	horznumber = horznumber - 25;
	if (horznumber < 0) horznumber = 0;
	this.horz.brightness(horznumber);
	return "turn left";
  },


lookRight: function() {
        console.log("look right");
        horznumber = horznumber + 25;
        if (horznumber > 255) horznumber = 255;
        this.horz.brightness(horznumber);
	return "turn right";
  },


lookUp: function() {
        console.log("look up");

	vertnumber = vertnumber + 25;
        if (vertnumber > 255) vertnumber = 255;
        this.vert.brightness(vertnumber);

	return "look up";
  },

lookDown: function() {
        console.log("look down");

        vertnumber = vertnumber - 25;
        if (vertnumber < 0) vertnumber = 0;
        this.vert.brightness(vertnumber);


	return "look down";
  },

  work: function() {
  }
}).start();
