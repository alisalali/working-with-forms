import { useRef } from "react"; //1.1 import useRef Hook
import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState(""); //setup a state for input value
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(true); // provide for feedback validation (true is workaround for fixing invalid state)
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false); // provide for feedback validation (true is workaround for fixing invalid state)
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false); // to validate touched form input

  const nameInputRef = useRef(); //1.2 define constant for useRef hook

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlur = (event) => {
    setEnteredNameIsTouched(true);
    if (enteredName.trim() == "") {
      setEnteredNameIsValid(false); //
      return;
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    //touched form input before any validation
    setEnteredNameIsTouched(true);

    // validate empty string
    if (enteredName.trim() == "") {
      setEnteredNameIsValid(false); //
      return;
    }

    // validate entered passed checked
    setEnteredNameIsValid(true);

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    setEnteredName("");
  };

  // condition for touched state validation
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  // validate entered classes dynamic
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        {/* 1.3 use the constant hook that define nameInputRef */}
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlur}
          value={enteredName}
        />
        {
          // show message feedback when error is occurred
          nameInputIsInvalid && (
            <p className="error-text">Name must not be empty</p>
          )
        }
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// 1.To useRef hook

/* to decide which approach for onChange 
if you interested in to once when form is submitted ref approach will be better

if you want to log it in every keystroke onChange event will be better 

to rest input value use value property 
*/
