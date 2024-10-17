import React, { useState, useEffect } from "react";

function HeroSection() {
  const [showPopup, setShowPopup] = useState(true);
  const [animatePopup, setAnimatePopup] = useState(false);

  useEffect(() => {
    setAnimatePopup(true); // Start the animation for showing the popup

    const timer = setTimeout(() => {
      setAnimatePopup(false); // Start the animation for hiding the popup
      setTimeout(() => {
        setShowPopup(false); // Hide the popup after the hide animation
      }, 500); // Duration of the hide animation
    }, 3000); // Show the popup for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setAnimatePopup(false);
    setTimeout(() => {
      setShowPopup(false);
    }, 500); // Duration of the hide animation
  };

  return (
    <div className="relative">
      {showPopup && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500 ${
            animatePopup ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`bg-white p-5 rounded-lg shadow-lg relative transform transition-transform duration-500 ${
              animatePopup ? "scale-100" : "scale-75"
            }`}
          >
            <button
              className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-800"
              onClick={handleClose}
            >
              &times;
            </button>
            <img
              src="https://scontent.fbom35-1.fna.fbcdn.net/v/t39.30808-6/345620834_1230830917554271_7808260486262900946_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=8uRlfnsu8aQQ7kNvgHBtByD&_nc_zt=23&_nc_ht=scontent.fbom35-1.fna&_nc_gid=AxXMBbNVypFyPQzKQ9JA14W&oh=00_AYDghIyr163qNlavbNnIoBRhRjSuRalFIPeUzmrxjnB2RQ&oe=67171B61"
              alt="Online Shopping"
              className="max-w-full h-auto rounded"
            />
          </div>
        </div>
      )}
      <img
        src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
        alt="Main"
        className="w-full h-auto"
      />
    </div>
  );
}

export default HeroSection;
