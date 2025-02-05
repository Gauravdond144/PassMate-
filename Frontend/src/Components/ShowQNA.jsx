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
      content: "For React applications, JWT (JSON Web Tokens) is a popular choice. Here's a basic implementation: 1) First, set up your authentication endpoints on the backend. 2) Use axios or fetch to make API calls. 3) Store the JWT token in localStorage or httpOnly cookies. 4) Create a context to manage auth state globally.",
      author: "Jane Smith",
      timestamp: "1 hour ago",
      votes: 15,
      isAccepted: true
    },
    {
      id: 2,
      content: "You might also want to consider using an auth provider like Auth0 or Firebase Auth. They provide ready-to-use solutions with features like social login, password reset, and security best practices built-in.",
      author: "Mike Johnson",
      timestamp: "30 minutes ago",
      votes: 8,
      isAccepted: false
    },
    {
      id: 3,
      content: "Session-based authentication is also a valid approach, especially if you're using a Node.js backend. You can use express-session middleware to handle sessions, and connect-mongodb-session to store sessions in MongoDB.",
      author: "Sarah Wilson",
      timestamp: "15 minutes ago",
      votes: 5,
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
        <Answer answers={answersData} />
      </div>
    </div>
  );
};

export default ShowQNA;