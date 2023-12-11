import { useRef } from "react"; //1.1 import useRef Hook
import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState(""); //setup a state for input value

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputRef = useRef(); //1.2 define constant for useRef hook

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        {/* 1.3 use the constant hook that define nameInputRef */}
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
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
