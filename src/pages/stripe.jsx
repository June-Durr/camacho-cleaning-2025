import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";

// Load Stripe outside of a component to avoid recreating the instance on every render
const stripePromise = loadStripe("your-publishable-key-here"); // Add your Stripe publishable key here

const PaymentPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    // Call your backend to create the Checkout session
    const response = await fetch(
      "http://localhost:4000/create-checkout-session",
      {
        method: "POST",
      }
    );

    const session = await response.json();

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error("Stripe Checkout error", error);
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center">Checkout</h2>
        <div className="my-4">
          <button
            onClick={handleCheckout}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
