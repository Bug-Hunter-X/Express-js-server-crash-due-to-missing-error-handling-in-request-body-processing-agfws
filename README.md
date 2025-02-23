# Express.js Server Crash Due to Missing Error Handling

This repository demonstrates a common error in Express.js applications where missing error handling in request body processing can lead to server crashes.

## Bug Description

The server crashes when the request body is malformed or missing the expected `name` field. This is because the code directly accesses `user.name` without checking if it exists, leading to an undefined error.

## Bug Solution

The solution adds input validation and error handling to prevent server crashes. The code now checks if `req.body` is valid and contains the required `name` field. If not, it sends an appropriate error response instead of crashing.