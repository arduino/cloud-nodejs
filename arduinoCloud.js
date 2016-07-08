var mqtt = require('mqtt');
var util = require('util');
var events = require('events');

const server = "mqtts://mqtt-dev.arduino.cc";
const port = "8883";

var properties;

function ArduinoCloud(username, name, id, psw) {
    this.name = name;
    this.thing_ID = id;
    this.thing_PSW = psw;
    this.properties = [];
    this.username = username;

    this.thingCue = this.username + "/" + this.name + "/";

    this.client = mqtt.connect(server, {
        username: this.thing_ID,
        password: this.thing_PSW,
        clientId: this.name,
        port: port,
    });

    this.client.on("message", this.onMessage.bind(this));
    this.client.on("connect", this.onConnect.bind(this));
    this.client.on("error", this.onError.bind(this));
    this.client.on("offline", this.onOffline.bind(this));
    this.client.on("reconnect", this.onReconnect.bind(this));
    this.client.on("close", this.onClose.bind(this));

    console.log("connecting to " + server + " id: " + this.thing_ID + " psw: " + this.thing_PSW)

    return this;
}

util.inherits(ArduinoCloud, events.EventEmitter);

ArduinoCloud.prototype.writeProperty = function(propertyName, value) {
    propertyCue = this.thingCue + propertyName;
    this.client.publish(propertyCue, value);
    console.log("publishing " + value + " to " + propertyCue);
}

ArduinoCloud.prototype.writeExternalProperty = function(thingname, propertyName, value) {
    var propertyCue = this.username + "/" + thingname + "/" + propertyName;
    this.client.publish(propertyCue, value);
    console.log("publishing " + value + " to " + propertyCue);
}

ArduinoCloud.prototype.addProperty = function(propertyName) {
    var property = {
        name: propertyName,
    }
    this.properties.push(propertyName);

    propertyCue = this.thingCue + propertyName;
    this.client.subscribe(propertyCue);

    console.log("createdNewProperty " + propertyName);
    console.log("subscribing to " + propertyCue);
}

ArduinoCloud.prototype.addExternalProperty = function(thingname, propertyName) {
    var property = {
        thingname: thingname,
        name: propertyName,
    }

    this.properties.push(property);

    var propertyCue = this.username + "/" + thingname + "/" + propertyName;

    this.client.subscribe(propertyCue);

    console.log("createdNewProperty " + propertyName);
    console.log("subscribing to " + propertyCue);

}



ArduinoCloud.prototype.onConnect = function() {
    console.log("connected!");
    this.client.subscribe(this.thingCue + "#");
    console.log("subscribed to: " + this.thingCue + "#");
};


ArduinoCloud.prototype.onMessage = function(topic, message) {
    // message is Buffer
    var propertyName = topic.split("/").slice(-1)[0]
    var thingName = topic.split("/").slice(1, 2)
    var propertyValue = message.toString();

    console.log(this.name);
    if (thingName == this.name) {
        this.emit('propertyChanged', propertyName, propertyValue);
    } else {
        this.emit('ExternalPropertyChanged', thingName, propertyName, propertyValue);
    }
};


ArduinoCloud.prototype.onError = function(error) {
    console.log("ERROR: ", error);
};

ArduinoCloud.prototype.onOffline = function() {
    console.log("offline");
};

ArduinoCloud.prototype.onReconnect = function() {
    console.log("reconnect");
};

ArduinoCloud.prototype.onClose = function() {
    console.log("disconnected");
};

module.exports = ArduinoCloud
