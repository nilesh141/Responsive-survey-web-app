import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import Survey from './Survey';
import ThankYouScreen from './ThankYouScreen';

const App = () => {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  const handleCompletion = () => {
    setCompleted(true);
  };

  const resetSurvey = () => {
    setStarted(false);
    setCompleted(false);
    localStorage.removeItem('surveyAnswers');
  };

  if (completed) {
    return <ThankYouScreen onReset={resetSurvey} />;
  }

  return (
    <div>
      {started ? (
        <Survey onComplete={handleCompletion} />
      ) : (
        <WelcomeScreen onStart={handleStart} />
      )}
    </div>
  );
};

export default App;
