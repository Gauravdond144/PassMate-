import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Check, ChevronLeft, ChevronRight } from 'lucide-react';

const Answer = ({ answers }) => {
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0);
  
  const currentAnswer = answers[currentAnswerIndex];
  const totalAnswers = answers.length;

  const goToNextAnswer = () => {
    setCurrentAnswerIndex((prev) => (prev + 1) % totalAnswers);
  };

  const goToPrevAnswer = () => {
    setCurrentAnswerIndex((prev) => (prev - 1 + totalAnswers) % totalAnswers);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-4 ml-8 border-l-4 border-blue-500 relative">
      {/* Navigation Controls */}
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <div className="text-sm text-gray-500">
          Answer {currentAnswerIndex + 1} of {totalAnswers}
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={goToPrevAnswer}
            className="p-1 hover:bg-gray-100 rounded-full disabled:opacity-50"
            disabled={totalAnswers <= 1}
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button 
            onClick={goToNextAnswer}
            className="p-1 hover:bg-gray-100 rounded-full disabled:opacity-50"
            disabled={totalAnswers <= 1}
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex items-start space-x-4 mt-4">
        {/* Voting Section */}
        <div className="flex flex-col items-center space-y-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ThumbsUp className="h-5 w-5 text-gray-500" />
          </button>
          <span className="text-sm font-medium text-gray-700">{currentAnswer.votes}</span>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ThumbsDown className="h-5 w-5 text-gray-500" />
          </button>
          {currentAnswer.isAccepted && (
            <Check className="h-6 w-6 text-green-500" />
          )}
        </div>

        {/* Answer Content */}
        <div className="flex-1">
          <p className="text-gray-600 mb-4">{currentAnswer.content}</p>

          {/* Meta Information */}
          <div className="flex flex-wrap justify-between items-center text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span>Answered by {currentAnswer.author}</span>
              <span>{currentAnswer.timestamp}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;