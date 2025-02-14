import React, { useState } from 'react';

const AddQNA = () => {
  // Question Form State
  const [questionData, setQuestionData] = useState({
    title: '',
    content: '',
    author: '',
    tags: '',
    unit: '',
    subject: ''
  });

  // Answer Form State
  const [answerData, setAnswerData] = useState({
    content: '',
    author: '',
    isAccepted: false
  });

  // UI Control States
  const [showAnswerOption, setShowAnswerOption] = useState(false);
  const [knowsAnswer, setKnowsAnswer] = useState(null);
  const [questionId, setQuestionId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const tagsArray = questionData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      
      const payload = {
        questionData: {
          title: questionData.title,
          content: questionData.content,
          author: questionData.author,
          tags: tagsArray,
        },
        subject: questionData.subject,
        unit: parseInt(questionData.unit),
        answersData: []
      };

      const response = await fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit question');
      }

      const result = await response.json();
      setQuestionId(result.data._id);
      setSuccess('Question submitted successfully!');
      setShowAnswerOption(true);
      
      // Reset question form
      setQuestionData({
        title: '',
        content: '',
        author: '',
        tags: '',
        unit: '',
        subject: ''
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAnswerSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const payload = {
        content: answerData.content,
        author: answerData.author,
        timestamp: new Date().toISOString(),
        votes: 0,
        isAccepted: answerData.isAccepted
      };

      const response = await fetch(`/api/questions/${questionId}/answers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit answer');
      }

      setSuccess('Answer submitted successfully!');
      setAnswerData({
        content: '',
        author: '',
        isAccepted: false
      });
      setKnowsAnswer(null);
      setShowAnswerOption(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Question Form */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Ask a Question</h2>
        <form onSubmit={handleQuestionSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={questionData.title}
              onChange={(e) => setQuestionData(prev => ({...prev, title: e.target.value}))}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Content</label>
            <textarea
              value={questionData.content}
              onChange={(e) => setQuestionData(prev => ({...prev, content: e.target.value}))}
              className="w-full px-3 py-2 border rounded-md min-h-[100px]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Author</label>
            <input
              type="text"
              value={questionData.author}
              onChange={(e) => setQuestionData(prev => ({...prev, author: e.target.value}))}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tags</label>
            <input
              type="text"
              value={questionData.tags}
              onChange={(e) => setQuestionData(prev => ({...prev, tags: e.target.value}))}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Separate tags with commas"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Unit Number</label>
            <input
              type="number"
              value={questionData.unit}
              onChange={(e) => setQuestionData(prev => ({...prev, unit: e.target.value}))}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subject ID</label>
            <input
              type="text"
              value={questionData.subject}
              onChange={(e) => setQuestionData(prev => ({...prev, subject: e.target.value}))}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Question'}
          </button>
        </form>
      </div>

      {/* Answer Option */}
      {showAnswerOption && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium mb-4">Do you know the answer to this question?</h3>
          <div className="space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="knowsAnswer"
                value="yes"
                onChange={() => setKnowsAnswer(true)}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="knowsAnswer"
                value="no"
                onChange={() => setKnowsAnswer(false)}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
      )}

      {/* Answer Form */}
      {knowsAnswer && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Submit Your Answer</h2>
          <form onSubmit={handleAnswerSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Your Answer</label>
              <textarea
                value={answerData.content}
                onChange={(e) => setAnswerData(prev => ({...prev, content: e.target.value}))}
                className="w-full px-3 py-2 border rounded-md min-h-[150px]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <input
                type="text"
                value={answerData.author}
                onChange={(e) => setAnswerData(prev => ({...prev, author: e.target.value}))}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={answerData.isAccepted}
                onChange={(e) => setAnswerData(prev => ({...prev, isAccepted: e.target.checked}))}
                className="form-checkbox"
              />
              <span className="ml-2">Mark as accepted answer</span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Answer'}
            </button>
          </form>
        </div>
      )}

      {/* Messages */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          {success}
        </div>
      )}
    </div>
  );
};

export default AddQNA;