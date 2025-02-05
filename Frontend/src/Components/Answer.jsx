import React from 'react';
import { ThumbsUp, ThumbsDown, Check } from 'lucide-react';

const Answer = ({ answerData }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-4 ml-8 border-l-4 border-blue-500">
      <div className="flex items-start space-x-4">
        {/* Voting Section */}
        <div className="flex flex-col items-center space-y-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ThumbsUp className="h-5 w-5 text-gray-500" />
          </button>
          <span className="text-sm font-medium text-gray-700">{answerData.votes}</span>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ThumbsDown className="h-5 w-5 text-gray-500" />
          </button>
          {answerData.isAccepted && (
            <Check className="h-6 w-6 text-green-500" />
          )}
        </div>

        {/* Answer Content */}
        <div className="flex-1">
          <p className="text-gray-600 mb-4">{answerData.content}</p>

          {/* Meta Information */}
          <div className="flex flex-wrap justify-between items-center text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span>Answered by {answerData.author}</span>
              <span>{answerData.timestamp}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;