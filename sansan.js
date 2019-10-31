var url = require('url');
var request = require('request');
var fromDate = "2019-10-21T10:55:00+09:00";
var toDate = "2019-10-21T18:00:00+09:00";
var currentdate = new Date(); 
var nowDateTime = currentdate.getFullYear() +
                     "-" + (currentdate.getMonth()+1).toString().padStart(2, '0') + 
                     "-" + currentdate.getUTCDate().toString().padStart(2, '0') + "T"
                      + currentdate.getHours().toString().padStart(2, '0') + ":" 
                      + currentdate.getMinutes().toString().padStart(2, '0')  + ":" 
                      + currentdate.getSeconds().toString().padStart(2, '0') + "+09:00";

console.log(nowDateTime);

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
var originalURL = "https://api.sansan.com/v2.5/bizCards?"
                          +"updatedFrom="+encodeURIComponent(fromDate) + "&"
                          //+"updatedTo="+encodeURIComponent(nowDateTime) + "&"
                          +"updatedTo="+encodeURIComponent(toDate) + "&"
                          +"includePastBizCards=false&"
                          +"range=all&"
                          +"entryStatus=completed&"
                          +"orderBy=updatedAt&"
                          +"orderDirection=asc&"
                          +"limit=300";

var byIDURL = "https://api.sansan.com/v2.5/bizCards/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

//var searchURL = byIDURL;
var searchURL = originalURL;

console.log(searchURL);

request({
  //url: "https://api.sansan.com/v2.5/persons/xxxxxxxxxxxxxxxxxxxxxx",
  url:searchURL,
  headers: {
      "content-type": "application/json",
       //"X-Sansan-Api-Key": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"//demo
     "X-Sansan-Api-Key": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"//product
  },
  method:'GET'
}, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("body is :");
     console.log(body);
  }else{
    console.log("error is :");
    console.log(error);
    console.log(response.statusCode);
    console.log(response.body);
  
  }

}); 
