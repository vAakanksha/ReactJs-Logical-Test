const https = require("https");
const options = {
  method: "GET",
  hostname: "example.com",
  port: 443,
  path: "/api/v2/db/_table/contact_info",
  headers: {
    "x-dreamfactory-api-key": "http://www.example.com/api/get/1",
    "cache-control": "no-cache",
  },
};
const req = https.request(options, function (res) {
  var chunks = [];
  res.on("data", function (chunk) {
    chunks.push(chunk);
  });
  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});
req.end();
