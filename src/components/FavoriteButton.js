import React from 'react';

function FavoriteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-1 mx-2 my-1 text-sm text-black bg-yellow-300 border border-black rounded-md hover:bg-yellow-500"
    >
      Add to Favorites
    </button>
  );
}

export default FavoriteButton;
