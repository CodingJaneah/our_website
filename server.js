/**
 * Local development server for API endpoints
 * This server runs the API functions locally for development
 * Run with: node server.js
 */

import "dotenv/config";
import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import handler from "./api/send-email.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware (for debugging)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, req.body ? `Body: ${JSON.stringify(req.body).substring(0, 100)}...` : '');
  next();
});

// Helper function to convert Express req/res to serverless function format
const createHandler = (handlerFn) => {
  return async (req, res) => {
    // Convert Express request to serverless function format
    const serverlessReq = {
      method: req.method,
      body: req.body,
      query: req.query,
      headers: req.headers,
    };

    // Track if response has been sent
    let responseSent = false;

    // Convert Express response to serverless function format
    const serverlessRes = {
      status: (code) => {
        res.status(code);
        return serverlessRes;
      },
      json: (data) => {
        if (!responseSent) {
          responseSent = true;
          res.json(data);
        }
        return serverlessRes;
      },
      setHeader: (name, value) => {
        if (!responseSent) {
          res.setHeader(name, value);
        }
        return serverlessRes;
      },
      end: () => {
        if (!responseSent) {
          responseSent = true;
          res.end();
        }
        return serverlessRes;
      },
    };

    try {
      await handlerFn(serverlessReq, serverlessRes);
      
      // Ensure response is sent if handler doesn't send one
      if (!responseSent && !res.headersSent) {
        console.warn("Handler did not send a response, sending default error");
        res.status(500).json({ 
          success: false, 
          error: "Handler did not send a response" 
        });
      }
    } catch (error) {
      console.error("Handler error:", error);
      console.error("Error stack:", error.stack);
      
      // Only send response if not already sent
      if (!responseSent && !res.headersSent) {
        res.status(500).json({ 
          success: false, 
          error: error.message || "Internal server error" 
        });
      } else {
        console.warn("Response already sent, cannot send error response");
      }
    }
  };
};

// API routes
app.post("/api/send-email", createHandler(handler));

// Also handle OPTIONS for CORS preflight
app.options("/api/send-email", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).end();
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Handle 404 for undefined routes
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    error: `Route ${req.method} ${req.path} not found` 
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Express error:", err);
  res.status(500).json({ 
    success: false, 
    error: err.message || "Internal server error" 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 API server running on http://localhost:${PORT}`);
  console.log(`📧 Email API available at http://localhost:${PORT}/api/send-email`);
  console.log(`💡 Make sure SMTP_HOST and SMTP_PORT are set in your .env file`);
});

