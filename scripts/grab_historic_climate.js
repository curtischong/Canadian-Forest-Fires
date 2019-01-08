var request = require('request');
var fs = require('fs');

request('ftp://ftp.tor.ec.gc.ca/Pub/Get_More_Data_Plus_de_donnees/Station%20Inventory%20EN.csv', function (error, response, res) {
  //var theResponse = JSON.parse(res);
  //fs.writeFile(new Date().valueOf()+".txt", res, function(err) {
  //});
  console.log(response);
});
