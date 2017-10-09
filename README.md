# NodeSocketIoRedis
Sample chat app integrating socket io and redis pub sub with Node Js

## Getting Started
1. npm install on main folder
2. npm start or node server.js
3. go to http://localhost:3000
4. start chatting
5. make an announcement via redis-cli
  1. redis-cli> publish announcements something
  2. see this msg on the chat


## References
Socket IO:

https://socket.io/get-started/chat/


Redis Node Client:
https://www.redisgreen.net/blog/pubsub-howto/