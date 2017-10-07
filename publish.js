var client = require("redis").createClient();

console.log(process.argv[2]);

var channel = process.argv[2];
var message = process.argv[3];

// console.log(message);
// console.log(process.argv);

client.publish(channel, message);