var subscriber = require("redis").createClient();

subscriber.on("message", function(channel, message) {
  console.log("Message from foo channel " + message + " was read.");
});

subscriber.subscribe("foo");