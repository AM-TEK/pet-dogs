import Button from './Button';

function RemoveButton({ onClick }) {
  return (
    <Button
      onClick={onClick}
      text="Remove"
      color="black"
      bg="transparent"
      border="red-500"
      hoverBg="red-500"
      className="text-xs"
    />
  );
}

export default RemoveButton;
