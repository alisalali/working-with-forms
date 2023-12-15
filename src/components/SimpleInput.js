import { useState } from "react";
import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    rest: restNameInput,
  } = useInput((value) => value.trim() !== ""); // enteredName object

  /*
  This changed with custom hook useInput instead
  // const [enteredName, setEnteredName] = useState(""); //setup a state for input value
  // const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false); // to validate touched form input
 */

  // const [formIsValid, setFromIsValid] = useState(false); // form state validation

  const [enteredEmail, setEnteredEmail] = useState(""); //setup a state for input value
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false); // to validate touched form input

  // validate empty string

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

  /* useEffect approach way  for form validation
 useEffect(() => {
    if (enteredNameIsValid) {
      setFromIsValid(true);
      console.log("useffcet");
    } else {
      setFromIsValid(false);
    }
  }, [enteredNameIsValid]); 
  */

  //validation from overall
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  /*  
 Replaced with useInput hook 
 const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlur = (event) => {
    setEnteredNameIsTouched(true);
  }; 
  */

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlur = (event) => {
    setEnteredEmailIsTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    //touched form input before any validation
    // setEnteredNameIsTouched(true); // this Replaced with hook for set touched input with hook
    setEnteredEmailIsTouched(true);

    // validate entered passed checked
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);

    //rest form state

    restNameInput(); // rest state by hook << name object

    setEnteredEmail("");
    setEnteredEmailIsTouched(false);
  };

  // condition for touched state validation

  // validate entered classes dynamic
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputIsInvalid
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
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {
          // show message feedback when error is occurred
          nameInputHasError && (
            <p className="error-text">Name must not be empty</p>
          )
        }
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Email</label>
        {/* 1.3 use the constant hook that define nameInputRef */}
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlur}
          value={enteredEmail}
        />
        {
          // show message feedback when error is occurred
          emailInputIsInvalid && (
            <p className="error-text">Email is not valid</p>
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
