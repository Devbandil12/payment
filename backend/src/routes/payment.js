const express = require("express");
const axios = require("axios");
const crypto = require("crypto"); // Import crypto module
const payment = express.Router();

// Helper function to implement retries with backoff
async function makeRequestWithRetry(options, retries = 3, backoff = 1000) {
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    if (error.response && error.response.status === 429 && retries > 0) {
      console.log(`Retrying... attempts left: ${retries}`);
      await new Promise((resolve) => setTimeout(resolve, backoff));
      return makeRequestWithRetry(options, retries - 1, backoff * 2); // Increase backoff
    }
    throw error;
  }
}

payment.post("/payment", async (req, res) => {
  const { name, phone, amount } = req.body;
  
  try {
    // Convert amount to paise (1 rupee = 100 paise)
    const amountInPaise = amount * 100;

    // Data to send in the payload
    const data = {
      merchantId: "PGTESTPAYUAT77", // Merchant ID
      merchantTransactionId: "MT7850590068188178", // Unique Transaction ID
      merchantUserId: "PGTESTPAYUAT86", // Merchant User ID
      name: name,
      amount: amountInPaise, // Amount in Paise
      redirectUrl: "https://localhost:5173/", // Redirect URL after payment
      redirectMode: "post", // Redirect mode (can be REDIRECT or POST)
      mobileNumber: phone, // Mobile number of the user
      paymentInstrument: {
        type: "PAY_PAGE", // Payment type
      },
    };
    
    // Stringify and encode the payload
    const payload = JSON.stringify(data);
    const payloadBase64 = Buffer.from(payload).toString("base64");
    
    const key = "14fa5465-f8a7-443f-8477-f986b8fcfde9"; // Provided Salt Key
    const keyIndex = 1; // Provided Salt Index
    
    // Concatenate payload and key to generate checksum
    const stringToHash = payloadBase64 + "/pg/v1/pay" + key;
    const sha256 = crypto.createHash("sha256").update(stringToHash).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    // Options for the API request
    const options = {
      method: "post",
      url: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay", // PhonePe sandbox endpoint
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum, // X-VERIFY header
      },
      data: {
        request: payloadBase64, // Base64 encoded payload
      },
    };
    
    // Debugging: Log payload and checksum
    console.log("Payload (Base64):", payloadBase64);
    console.log("Checksum:", checksum);
    console.log("Request Options:", options); // Log the full options for debugging

    // Make the request with retry mechanism
    const response = await makeRequestWithRetry(options);
    
    // Debugging: Log API response
    console.log("API Response:", response.data); // Log full API response for clarity
    
    // Send the URL from the response to the client
    res.send(response.data.data.instrumentResponse.redirectInfo.url);

  } catch (error) {
    console.error("Error during payment processing:", error.message || error);

    if (error.response) {
      console.error("API Error Response:", error.response.data); // Log API response errors
    }
    
    res.status(500).send("An error occurred while processing the payment.");
  }
});


module.exports = payment;
