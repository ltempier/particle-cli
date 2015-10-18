'use strict';

var WifiUtilities = require('./lib/WifiUtilities.js');
var SerialCommand = require('./commands/SerialCommand.js');
var serialCommand = new SerialCommand();

var wifiConfig = {
    channel: "1",
    mac: "00:1c:7b:cd:56:25",
    security: "WPA(PSK/AES,TKIP/TKIP) WPA2(PSK/AES,TKIP/TKIP)",
    signal_level: "-33",
    ssid: "NUMERICABLE-C93E",
    password: 'baurentlaptistebangbang'
};

// GET DEVICE LIST
serialCommand.findDevices(function (d) {
    var device = d[0];

    if (!device)
        return;
    serialCommand.customSerialWifiConfig(device, wifiConfig)
        .then(function (s) {
            console.log(s)
        }, function (e) {
            console.log(e)
        })
});


// GET WIFI LIST
//WifiUtilities.scan()
//    .then(WifiUtilities.cleanApList)
//    .then(function (wifiList) {
//
//        console.log('yo')
//    });


