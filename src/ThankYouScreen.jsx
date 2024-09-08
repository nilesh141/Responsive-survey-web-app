import React, { useEffect } from 'react';
import './WelcomeScreen.css'; // Import the same CSS file

const ThankYouScreen = ({ onReset }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onReset(); // Reset the survey and go back to the welcome screen
    }, 2000);

    return () => clearTimeout(timer);
  }, [onReset]);

  return (
    <div className="welcome-screen">
      <h1>Thank you for your time!</h1>
    </div>
  );
};

export default ThankYouScreen;
