import React, { useState } from 'react';
import Question from './Question';
import './survey.css';
import ConfirmationDialog from './ConfirmationDialog';

const questionsData = [
  { id: 1, text: "How satisfied are you with our products?", type: "rating", scale: 5 },
  { id: 2, text: "How fair are the prices compared to similar retailers?", type: "rating", scale: 5 },
  { id: 3, text: "How satisfied are you with the value for money of your purchase?", type: "rating", scale: 5 },
  { id: 4, text: "On a scale of 1-10 how would you recommend us to your friends and family?", type: "rating", scale: 10 },
  { id: 5, text: "What could we do to improve our service?", type: "text" }
  // you can add your more questions here 
];

const Survey = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isConfirming, setIsConfirming] = useState(false);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, questionsData.length - 1));
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    setIsConfirming(true);  // Trigger confirmation dialog
  };

  const handleConfirm = () => {
    console.log("Saving answers to localStorage..."); // Debugging log
  
    const sessionId = new Date().toISOString(); // Generate a unique session ID based on timestamp
    const storedData = JSON.parse(localStorage.getItem('surveyAnswers')) || [];
  
    // Save the current answers along with the sessionId
    const updatedData = [...storedData, { sessionId, answers: { ...answers, status: 'COMPLETED' } }];
    localStorage.setItem('surveyAnswers', JSON.stringify(updatedData));
  
    console.log("Updated survey data:", updatedData); // Check what data is being saved
  
    onComplete(); // Indicate the survey is completed
  };
  
  
  

  if (isConfirming) {
    return <ConfirmationDialog onConfirm={handleConfirm} />;
  }

  return (
    <div className="survey">
      <h2>Question {currentQuestion + 1} / {questionsData.length}</h2>
      <Question 
        question={questionsData[currentQuestion]} 
        answer={answers[questionsData[currentQuestion].id]}
        onChange={handleAnswerChange}
      />
      <div className="navigation-buttons">
        <button onClick={handlePrevious} disabled={currentQuestion === 0}>Previous</button>
        <button onClick={handleNext} disabled={currentQuestion === questionsData.length - 1}>Next</button>
      </div>
      {currentQuestion === questionsData.length - 1 && (
        <div className="submit-button-container">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};









export default Survey;



