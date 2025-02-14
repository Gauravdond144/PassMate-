import React from 'react';
import Question from './Question';
import Answer from './Answer';

const ShowQNA = ({ Data }) => {
  return (
    <>
      {Data.map((qnaData, index) => (
        <div key={index} className="w-full md:w-4/5 mx-auto px-4 py-6">
          <Question questionData={qnaData.questionData} />
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {qnaData.answersData.length} Answers
            </h3>
            <Answer answers={qnaData.answersData} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ShowQNA;
