import React, { useEffect, useState } from 'react';
import Addanswer from './Addanswer.jsx';
import axios from 'axios';

const AddQNA = () => {
  // Question Form State
  const [queData, setqueData] = useState({
    title: '',
    content: '',
    author: '',
    tags: '',
    unit: '',
    subject: ''
  });

  // Answer Form State
  const [ansData, setansData] = useState({
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
  const [subjects , setSubjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/subjects")
      .then((response) => setSubjects(response.data))
      .catch((error) => console.error("Error fetching subjects:", error));
  }, []);


  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
  

    if (!queData.title.trim() || !queData.content.trim() || !queData.subject.trim() || !queData.unit || !queData.subject) {
      setError("Title, content, subject, and unit are required its important");
      return;
    }
    setIsSubmitting(true);
    setError('');
    setSuccess('');
    try {
      const tagsArray = queData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);      
      const payload = {
        questionData: {
          title: queData.title,
          content: queData.content,
          author: queData.author || "anonymous",
          votes:2,
          tags: tagsArray,
        },
      
        answersData: [{
          content: ansData.content,
          author: ansData.author,
          timestamp: new Date().toISOString(),
          votes: 0,
          isAccepted: ansData.isAccepted
        }],
        subject: queData.subject,
        unit: parseInt(queData.unit,10),
      };


      const response = await fetch('http://localhost:3000/api/questions', {
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
      setqueData({
        title: '',
        content: '',
        author: '',
        tags: '',
        unit: '',
        subject: ''
      });
      setansData({
        content: '',
        author: '',
        isAccepted: false
      })

    } catch (err) {
      setError(err.message);
      console.log(err);
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
            <label className="block text-sm font-medium mb-1">Question</label>
            <input
              type="text"
              value={queData.title}
              onChange={(e) => setqueData(prev => ({...prev, title: e.target.value}))}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={queData.content}
              onChange={(e) => setqueData(prev => ({...prev, content: e.target.value}))}
              className="w-full px-3 py-2 border rounded-md min-h-[100px]"
              required
            />
          </div>


          <div>
            <label className="block text-sm font-medium mb-1">Concepts/Topics</label>
            <input
              type="text"
              value={queData.tags}
              onChange={(e) => setqueData(prev => ({...prev, tags: e.target.value}))}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Separate tags with commas"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Unit Number (optional)</label>
            <input
              type="number"
              value={queData.unit}
              onChange={(e) => setqueData(prev => ({...prev, unit: Number(e.target.value)}))}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
      <label className="block text-sm font-medium mb-1">Subject</label>
      <select
        value={queData.subject}
        onChange={(e) => setqueData((prev) => ({ ...prev, subject: e.target.value }))}
        className="w-full px-3 py-2 border rounded-md"
        required
      >
        <option value="">Select a subject</option>
        {subjects.map((subj) => (
          <option key={subj._id} value={subj._id}>
            {subj.name}
          </option>
        ))}
      </select>
    </div>

          {/* Answer Option */}
     
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


{/* Answer Form */}
<Addanswer knowsAnswer={knowsAnswer} ansData={ansData}  isSubmitting={isSubmitting} setansData={setansData}></Addanswer>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Question'}
          </button>
        </form>
      </div>

      
      

      

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