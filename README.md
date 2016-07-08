# Arduino Cloud library

A nodejs library to connect to Arduino Cloud via mqtt.



## Simple usage

```
var ArduinoCLoud = require("../arduinoCloud.js");

var name = "";
var thing_ID = "";
var thing_PSW = "";
var username = ""

var mything = new ArduinoCLoud(username, name, thing_ID, thing_PSW);

mything.addProperty("<propertyName>");

mything.writeProperty("<propertyName>", "<propertyValue>");

setInterval( function(){
  mything.writeProperty("<propertyName>", "<propertyValue>")}
  ,5000);

mything.on("propertyChanged", function(propertyName, propertyValue) {
    console.log("propertyChanged");
    console.log("propertyName " + propertyName);
    console.log("propertyValue " + propertyValue);
});
```

# API
- ### ` function ArduinoCloud(username, name, id, psw)`
Creates a new Arduino Cloud Object and open the connection with the mqtt broker.

- ### `addProperty(propertyName);`
Create a new property and subscribe to it.

- ### `writeProperty(propertyName, propertyValue)`
Write a new value of the property

- ### `on("propertyChanged", function(propertyName, propertyValue){})`
This event is fired every time a property value gets updated.

- ### `addExternalProperty(thingName,propertyName)`
Connects to a property of a different "thing" capability and subscribe to it.

- ### `writeExternalProperty(thingName,propertyName, propertyValue)`
Write a new value to the property of a different thing

- ### `on("ExternalPropertyChanged", function(thingName,propertyName, propertyValue){})`
This event is fired every time a property value of a different thing we are subscribed to gets updated.
