import { Textarea } from "@chakra-ui/react";

export default function TextInput({
  heading,
  handleOnKeyUp,
  handleUserInput,
  handleWriteUpInput,
  startTimeValue,
}) {
  return (
    <>
      <small>{heading}</small>
      <Textarea
        size="lg"
        h={40}
        mb={4}
        placeholder={heading}
        _placeholder={{ color: "black" }}
        // Using this for only user input
        onKeyUp={(e) => {
          handleOnKeyUp(e.key);
        }}
        onInput={(e) => {
          handleUserInput(e.target.value);
        }}
        // Using this only for the challenge input
        onChange={(e) => handleWriteUpInput(e.target.value)}
        // disabled={!startTimeValue}
      />
    </>
  );
}
