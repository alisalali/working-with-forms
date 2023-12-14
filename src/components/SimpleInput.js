import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState(""); //setup a state for input value
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false); // to validate touched form input
  // const [formIsValid, setFromIsValid] = useState(false); // form state validation

  // validate empty string
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  /* useEffect approach way   
 useEffect(() => {
    if (enteredNameIsValid) {
      setFromIsValid(true);
      console.log("useffcet");
    } else {
      setFromIsValid(false);
    }
  }, [enteredNameIsValid]); 
  */

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlur = (event) => {
    setEnteredNameIsTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    //touched form input before any validation
    setEnteredNameIsTouched(true);

    // validate entered passed checked
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);

    //rest form state
    setEnteredName("");
    setEnteredNameIsTouched(false);
  };

  // condition for touched state validation

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
        <button disabled={!formIsValid}>Submit</button>
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
