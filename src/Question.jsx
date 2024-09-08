import React from 'react';

const Question = ({ question, answer, onChange }) => {
  const handleInputChange = (e) => {
    onChange(question.id, e.target.value);
  };

  if (question.type === 'rating') {
    return (
      <div>
        <h3>{question.text}</h3>
        <div className="rating-options">
          {[...Array(question.scale).keys()].map((n) => (
            <label key={n + 1}>
              <input
                type="radio"
                name={`question-${question.id}`}
                value={n + 1}
                checked={answer === (n + 1).toString()}
                onChange={handleInputChange}
              />
              {n + 1}
            </label>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3>{question.text}</h3>
      <textarea
        value={answer || ''}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
};

export default Question;
