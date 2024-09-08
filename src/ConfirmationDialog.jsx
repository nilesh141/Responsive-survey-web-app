import React from 'react';
import './survey.css'; // Ensure this file is imported

const ConfirmationPage = ({ onConfirm }) => {
  return (
    <div className="confirmation-dialog">
      <h3>Are you sure you want to submit the survey?</h3>
      <button onClick={onConfirm}>Confirm</button>
    </div>
  );
};

export default ConfirmationPage;
