// ES Module version of the proxy server for projects with "type": "module" in package.json

import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const port = 3001;

// Enable CORS for all requests
app.use(cors());

// Log requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Create a proxy for AWS API Gateway
app.use(
  "/proxy",
  createProxyMiddleware({
    target: "https://jzyym0po29.execute-api.us-east-1.amazonaws.com",
    changeOrigin: true,
    pathRewrite: {
      "^/proxy": "/Production", // Rewrite path to match your API stage
    },
    onProxyReq: (proxyReq, req, res) => {
      // Add any needed headers
      if (req.body) {
        const bodyData = JSON.stringify(req.body);
        proxyReq.setHeader("Content-Type", "application/json");
        proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
        proxyReq.write(bodyData);
      }
    },
    logLevel: "debug",
  })
);

app.listen(port, () => {
  console.log(`CORS proxy server running at http://localhost:${port}`);
  console.log(`Use this endpoint in your app: http://localhost:${port}/proxy`);
});

// To use this server:
// 1. Install dependencies: npm install express cors http-proxy-middleware
// 2. Run: node server.js
