import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState(""); //setup a state for input value
  const [isTouched, setIsTouched] = useState(false); // to validate touched form input

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const rest = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  console.log("enteredValue", enteredValue);

  return {
    value: enteredValue,
    isValid: valueIsValid,
    isTouched,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    rest,
  };
};

export default useInput;
