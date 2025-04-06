// src/aws-config.js
// Configuration for AWS services

// Determine if we're in development or production environment
const isDevelopment = window.location.hostname === "localhost";

// API Gateway endpoint URL - replace with your new API endpoint
export const API_ENDPOINT =
  "https://nuf4p6d2sa.execute-api.us-east-1.amazonaws.com/Development";

// For local development, use simulation mode
export const SIMULATE_API = false;

// Helper function to handle API errors
export const handleApiError = (error) => {
  console.error("API Error:", error);

  // Network or CORS errors
  if (error.name === "TypeError" && error.message === "Failed to fetch") {
    console.error("Network or CORS error - check API Gateway CORS settings");
    return "Unable to connect to server. If you're in development mode, check CORS settings.";
  }

  if (error.response) {
    console.error("Error Response Data:", error.response.data);
    console.error("Error Response Status:", error.response.status);
    return `Server error: ${error.response.status}`;
  } else if (error.request) {
    console.error("No response received:", error.request);
    return "No response from server";
  } else {
    console.error("Error Message:", error.message);
    return error.message;
  }
};
