import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-6 bg-white rounded-md shadow-md">
        <button
          onClick={onClose}
          className="absolute p-1 text-black bg-gray-300 rounded-full top-2 right-2"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
