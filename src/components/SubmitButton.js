import React from 'react';

function SubmitButton({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="p-1 mx-2 my-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-700"
    >
      Submit Answers
    </button>
  );
}

export default SubmitButton;
