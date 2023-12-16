import { useState } from "react";

const useValidation = (validationFunction) => {
  const [valueInput, setValueInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validationFunction(valueInput);
  const hasError = !isValid && isTouched;

  const inputChangedHandler = (event) => {
    setValueInput(event.target.value);
  };

  const inputBlurChangedHandler = (event) => {
    setIsTouched(true);
  };

  const rest = () => {
    setValueInput("");
    setIsTouched(false);
  };

  return {
    valueInput,
    isValid,
    hasError: hasError,
    inputChangedHandler,
    inputBlurChangedHandler,
    rest,
  };
};

export default useValidation;
