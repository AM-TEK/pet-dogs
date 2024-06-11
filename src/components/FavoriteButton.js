function FavoriteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute flex items-center justify-center p-1 mx-2 my-1 text-sm text-black bg-yellow-300 border border-black rounded-md hover:bg-yellow-500 bottom-2 left-2 opacity-70"
    >
      <span className="text-2xl">+</span>
    </button>
  );
}

export default FavoriteButton;
