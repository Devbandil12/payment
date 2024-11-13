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
    const data = {
      merchantId: "PGTESTPAYUAT",
      merchantTransactionId: "MT7850590068188178",
      merchantUserId: "PGTESTPAYUAT86",
      name: name,
      amount: amount,
      redirectUrl: "https://localhost:3000/status",
      redirectMode: "post",
      mobileNumber: phone,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");
    const key = "96434309-7796-489-8924-ab569886076";
    const keyIndex = 1;
    const string = payload + "/pg/v1/pay/" + key;
    
    // Compute the checksum
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    const options = {
      method: "post",
      url: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
      headers: {
        accept: "application/json", // Change to application/json
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      data: {
        request: payloadMain,
      },
    };

    // Make the request with retry mechanism
    const response = await makeRequestWithRetry(options);
    res.send(response.data.data.instrumentResponse.redirectInfo.url);

  } catch (error) {
    console.error("Error:", error.message || error);
    res.status(500).send("An error occurred while processing the payment.");
  }
});

payment.get("/status", (req, res) => {
  console.log("checking status");
  res.send("Status check endpoint");
});

module.exports = payment;
