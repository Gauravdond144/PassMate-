import React from 'react';
import { ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';

const Question = ({ questionData }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
      <div className="flex items-start space-x-4">
        {/* Voting Section */}
        <div className="flex flex-col items-center space-y-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ThumbsUp className="h-5 w-5 text-gray-500"  />
          </button>
          <span className="text-sm font-medium text-gray-700">{questionData.votes}</span>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ThumbsDown className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Question Content */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {questionData.title}
          </h2>
          <p className="text-gray-600 mb-4">{questionData.content}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {questionData.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap justify-between items-center text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span>Asked by {questionData.author}</span>
              <span>{questionData.timestamp}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>{questionData.answers} answers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;