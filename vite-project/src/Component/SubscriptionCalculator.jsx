import React, { useState } from 'react';

const SubscriptionCalculator = () => {
  const [cost, setCost] = useState('');
  const [yearlySubscription, setYearlySubscription] = useState(null);
  const [monthlySubscription, setMonthlySubscription] = useState(null);

  const calculateSubscription = () => {
    // Calculate the 30% discount (30% off the original cost)
    const YearlyAmount = (cost * 0.3).toFixed(2);
    // Calculate the monthly subscription based on the discounted yearly price
    const monthlyPrice = (YearlyAmount / 12).toFixed(2);

    // Set the state with the calculated values
    setYearlySubscription(YearlyAmount);
    setMonthlySubscription(monthlyPrice);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          What is your educational cost?
        </h2>
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className="w-full p-3 text-lg border rounded-md mb-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          placeholder="Enter your educational cost"
        />
        <button
          onClick={calculateSubscription}
          className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
        >
          Calculate Subscription Amount
        </button>

        {yearlySubscription && monthlySubscription && (
          <div className="mt-6 p-4 bg-blue-100 text-blue-800 rounded-md">
            <p className="text-lg">
              <strong>Yearly Subscription:</strong> ₹{yearlySubscription}
            </p>
            <p className="text-lg">
              <strong>Monthly Subscription:</strong> ₹{monthlySubscription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionCalculator;
