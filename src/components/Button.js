function Button({ onClick, text, color, bg, border, hoverBg }) {
  return (
    <button
      onClick={onClick}
      className={`p-1 mx-2 my-1 text-sm rounded-md hover:bg-${hoverBg} bg-${bg} text-${color} border-${border}`}
      aria-label={text}
    >
      {text}
    </button>
  );
}

export default Button;
