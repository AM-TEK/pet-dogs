import Button from "./Button";

function FavoriteButton({ onClick }) {
  return (
    <Button
      onClick={onClick}
      text="Add to Favorites"
      color="black"
      bg="yellow-300"
      border="black"
      hoverBg="yellow-500"
    />
  );
}

export default FavoriteButton;
