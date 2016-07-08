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
-  ` function ArduinoCloud(username, name, id, psw)`
Creates a new Arduino Cloud Object and open the connection with the mqtt broker.

-  `addProperty(propertyName);`
Create a new property and subscribe to it.

-  `writeProperty(propertyName, propertyValue)`
Write a new value of the property

-  `on("propertyChanged", function(propertyName, propertyValue){})`
This event is fired every time a property value gets updated.

-  `addExternalProperty(thingName,propertyName)`
Connects to a property of a different "thing" capability and subscribe to it.

-  `writeExternalProperty(thingName,propertyName, propertyValue)`
Write a new value to the property of a different thing

-  `on("ExternalPropertyChanged", function(thingName,propertyName, propertyValue){})`
This event is fired every time a property value of a different thing we are subscribed to gets updated.

## Submitting a pull request

We are glad you want to contribute with code: that's the best way to help this software.

Your contribution is adding or modifying existing behaviour, please always refer to an existing issue or open a new one before contributing. We are are trying to use [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) in the near future: please add one or more tests that prove that your contribution is good and is working as expected, it will help us a lot.


Also, for your contribution to be accepted, everyone of your commits must be "Signed-off". This is done by commiting using this command: `git commit --signoff`

By signing off your commits, you agree to the following agreement, also known as [Developer Certificate of Origin](http://developercertificate.org/): it assures everyone that the code you're submitting is yours or that you have rights to submit it.

```
Developer Certificate of Origin
Version 1.1

Copyright (C) 2004, 2006 The Linux Foundation and its contributors.
660 York Street, Suite 102,
San Francisco, CA 94110 USA

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.


Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the best
    of my knowledge, is covered under an appropriate open source
    license and I have the right under that license to submit that
    work with modifications, whether created in whole or in part
    by me, under the same open source license (unless I am
    permitted to submit under a different license), as indicated
    in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including all
    personal information I submit with it, including my sign-off) is
    maintained indefinitely and may be redistributed consistent with
    this project or the open source license(s) involved.
```
