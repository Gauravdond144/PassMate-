import React from 'react';
import Question from './Question';
import Answer from './Answer';

const ShowQNA = () => {
  // Sample data - in a real app, this would come from props or an API
  const questionData = {
    title: "How to implement authentication in React?",
    content: "I'm building a React application and need to implement user authentication. What's the best approach to handle this? Should I use JWT tokens or session-based auth?",
    author: "John Doe",
    timestamp: "2 hours ago",
    votes: 42,
    answers: 3,
    tags: ["react", "authentication", "javascript"]
  };

  const answersData = [
    {
      id: 1,
      content: "For React applications, JWT (JSON Web Tokens) is a popular choice. Here's a basic implementation...",
      author: "Jane Smith",
      timestamp: "1 hour ago",
      votes: 15,
      isAccepted: true
    },
    {
      id: 2,
      content: "You might also want to consider using an auth provider like Auth0 or Firebase Auth...",
      author: "Mike Johnson",
      timestamp: "30 minutes ago",
      votes: 8,
      isAccepted: false
    }
  ];

  return (
    <div className="w-full md:w-4/5 mx-auto px-4 py-6">
      <Question questionData={questionData} />
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {answersData.length} Answers
        </h3>
        {answersData.map((answer) => (
          <Answer key={answer.id} answerData={answer} />
        ))}
      </div>
    </div>
  );
};

export default ShowQNA;