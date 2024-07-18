// ImageModal.jsx

import React from 'react';

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg">
        <div className="relative">
          <button
            className="absolute top-0 right-0 px-4 py-2 m-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800"
            onClick={onClose}
          >
            Close
          </button>
          <img src={imageUrl} alt="Full size" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
