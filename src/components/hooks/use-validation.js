import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      isTouched: true,
      value: state.value,
    };
  }
  if (action.type === "REST") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return initialInputState;
};

const useValidation = (validationFunction) => {
  // const [valueInput, setValueInput] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  const isValid = validationFunction(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const inputChangedHandler = (event) => {
    // setValueInput(event.target.value);
    dispatch({
      type: "INPUT",
      value: event.target.value,
    });
  };

  const inputBlurChangedHandler = (event) => {
    // setIsTouched(true);
    dispatch({
      type: "BLUR",
    });
  };

  const rest = () => {
    // setValueInput("");
    // setIsTouched(false);
    dispatch({
      type: "REST",
    });
  };

  return {
    valueInput: inputState.value,
    isValid,
    hasError: hasError,
    inputChangedHandler,
    inputBlurChangedHandler,
    rest,
  };
};

export default useValidation;
