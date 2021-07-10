const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IREwGIy94oXaZM9IsDHl1LfOdo4eX13hIrTz35Rp92ZUUwMaBBBH2ULGd13YNsQPrXCDPuDH06d2ge2XcX1GSPN002frXhU8A"
);

// API
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    description: "Software development services",
    shipping: {
      name: "Navneet Kumar",
      address: {
        line1: "opal homes hostel",
        postal_code: "682022",
        city: "Kochi India",
        state: "Kerala",
        country: "India",
      },
    },
    amount: total, // subunits of the currency
    currency: "usd",
    payment_method_types: ["card"],
  });
  console.log(paymentIntent);
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
http: exports.api = functions.https.onRequest(app);
//example endpoint
//http://localhost:5001/clone-1c5a5/us-central1/api
