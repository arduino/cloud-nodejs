var ArduinoCLoud = require("../arduinoCloud.js");

var name = "nodeJSClient";
var thing_ID = "78cfcbbb-0d47-49fd-bce9-772e479856f0";
var thing_PSW = "adea922f-de11-498b-8157-42f5e8da1d4c";
var username = "casajasmina"

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
