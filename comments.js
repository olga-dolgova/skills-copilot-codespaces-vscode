// Create web server
// Start server
// Send request to server
// Get response from server
// Parse response
// Print response to console
// Close connection

// 1. Create web server
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, world!\n');
});
