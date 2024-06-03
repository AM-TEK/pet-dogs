import Button from "./Button";

function SubmitButton({ onClick }) {
  return (
    <Button
      onClick={onClick}
      text="Submit Answers"
      color="white"
      bg="blue-500"
      border="none"
      hoverBg="blue-700"
    />
  );
}

export default SubmitButton