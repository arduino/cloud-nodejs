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
