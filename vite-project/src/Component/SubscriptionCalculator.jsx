import React, { useState } from 'react';

const SubscriptionCalculator = () => {
    const [cost, setCost] = useState('');
    const [subscription, setSubscription] = useState(null);
  
    const calculateSubscription = () => {
      const subscriptionAmount = (cost * 0.1).toFixed(2);
      setSubscription(subscriptionAmount);
    };

  return (
    <div className="flex flex-col items-center justify-center  p-4">
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 animate-fadeIn">
        What is your educational cost?
      </h2>
      <input
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        className="w-full p-3 text-lg border rounded-md mb-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all animate-slideUp"
        placeholder="Enter your educational cost"
      />
      <button
        onClick={calculateSubscription}
        className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 animate-pulse"
      >
        Calculate Subscription Amount
      </button>
      {subscription && (
          <div className="mt-6 p-4 bg-blue-100 text-blue-800 rounded-md animate-bounceIn">
            <p className="text-lg">
              Your subscription amount is: <span className="font-bold">₹{subscription}</span>
            </p>
          </div>
        )}
      </div>
    </div>

  );
};

export default SubscriptionCalculator;
