import React, { useState, useEffect } from 'react';

const FinalPaymentSection = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    mobile: "+91 9876543210",
  };

  const [educationalCost, setEducationalCost] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('monthly'); // 'monthly' or 'yearly'
  const [amount, setAmount] = useState(0);
  const [selectedCoupon, setSelectedCoupon] = useState('');
  const [discountedAmount, setDiscountedAmount] = useState(null);
  const [couponMessage, setCouponMessage] = useState('');

  const coupons = [
    { code: 'WELCOME20', discount: 20 },
    { code: 'FIRST20', discount: 20 },
    { code: 'NEW20', discount: 20 },
  ];

  useEffect(() => {
    if (educationalCost) {
      if (subscriptionType === 'monthly') {
        const monthlyAmount = (educationalCost * 0.30 / 12).toFixed(2);
        setAmount(monthlyAmount);
        setDiscountedAmount(null); // Reset discount for monthly
        setSelectedCoupon(''); // Reset coupon for monthly
      } else if (subscriptionType === 'yearly') {
        const yearlyAmount = (educationalCost * 0.30).toFixed(2);
        setAmount(yearlyAmount);
        setDiscountedAmount(null); // Reset discount for yearly
      }
    }
  }, [subscriptionType, educationalCost]);

  const applyCoupon = () => {
    if (selectedCoupon) {
      const coupon = coupons.find((c) => c.code === selectedCoupon);
      if (coupon && subscriptionType === 'yearly') {
        const discount = (amount * coupon.discount) / 100;
        const discountedPrice = (amount - discount).toFixed(2);
        setDiscountedAmount(discountedPrice);
        setCouponMessage(`Coupon Applied: ${coupon.code} - You saved ₹${discount.toFixed(2)}!`);
      } else if (subscriptionType === 'monthly') {
        setCouponMessage('Coupons are not applicable for monthly subscriptions.');
      } else {
        setCouponMessage('Invalid coupon.');
      }
    } else {
      setCouponMessage('Please select a coupon.');
    }
  };

  const handlePayment = () => {
    alert(`Payment Successful! You paid ₹${discountedAmount || amount}`);
    // Add actual payment logic here
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Final Payment Details</h2>

        {/* User Details */}
        <div className="mb-6">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Mobile No.:</strong> {user.mobile}</p>
        </div>

        {/* Ask for Educational Cost */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">Enter Your Total Educational Cost</label>
          <input
            type="number"
            value={educationalCost}
            onChange={(e) => setEducationalCost(e.target.value)}
            className="w-full p-3 border rounded-md bg-gray-100"
            placeholder="Enter your cost"
          />
        </div>

        {/* Subscription Type */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">Choose Subscription Plan</label>
          <select
            value={subscriptionType}
            onChange={(e) => setSubscriptionType(e.target.value)}
            className="w-full p-3 border rounded-md bg-gray-100"
          >
            <option value="monthly">Monthly Subscription</option>
            <option value="yearly">Yearly Subscription</option>
          </select>
        </div>

        {/* Coupon Section (Only for Yearly) */}
        {subscriptionType === 'yearly' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">Select a Coupon</label>
            <select
              value={selectedCoupon}
              onChange={(e) => setSelectedCoupon(e.target.value)}
              className="w-full p-3 border rounded-md bg-gray-100"
            >
              <option value="">-- Select Coupon --</option>
              {coupons.map((coupon) => (
                <option key={coupon.code} value={coupon.code}>
                  {coupon.code} - {coupon.discount}% Off
                </option>
              ))}
            </select>
            <button
              onClick={applyCoupon}
              className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Apply Coupon
            </button>
          </div>
        )}

        {/* Show Coupon Message */}
        {couponMessage && (
          <div className={`mb-6 p-3 rounded-md ${discountedAmount ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {couponMessage}
          </div>
        )}

        {/* Display Discounted or Original Amount */}
        <div className="mb-6">
          <p><strong>Amount: </strong>₹{amount}</p>
          {discountedAmount && (
            <>
              <p>
                <strong>Original Amount: </strong>
                <span className="line-through text-red-600">₹{amount}</span>
              </p>
              <p>
                <strong>Discounted Amount: </strong>
                <span className="text-green-600 font-bold">₹{discountedAmount}</span>
              </p>
              <p className="text-green-600 font-bold mt-3">
                🎉 Congratulations! You saved ₹{(amount - discountedAmount).toFixed(2)}!
              </p>
            </>
          )}
        </div>

        {/* Final Payment Button */}
        <div className="text-center">
          <button
            onClick={handlePayment}
            className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-700 transition duration-300"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalPaymentSection;
