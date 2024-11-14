import React from 'react';

const SubscriptionSection = () => {
  return (
    <section className="max-w-lg mx-auto bg-gray-100 text-black p-8 rounded-lg shadow-xl mt-16 mb-16 text-center">
      <h2 className="text-3xl font-semibold mb-4">Take a Subscription for Your Bright Future</h2>
      <p className="text-lg mb-6">
        Unlock unlimited access to resources, coaching, and more. Get the support you need to
        ace your exams and achieve your goals.
      </p>

      {/* Image Section */}
      <img
        className="max-w-full h-auto rounded-lg shadow-md mb-6"
        src="https://t4.ftcdn.net/jpg/04/97/48/79/360_F_497487947_P4g3sciXEP6DSEWV8u0aUSXgNU6hlcAs.jpg"
        alt="Subscription for Bright Future"
      />

      {/* Button Section */}
      <button
        onClick={() => window.location.href = '/application-form'}
        className="bg-yellow-500 text-blue-600 hover:bg-yellow-400 px-6 py-3 rounded-lg text-xl transition duration-300"
      >
        Take Subscription Now
      </button>
    </section>
  );
};

export default SubscriptionSection;
