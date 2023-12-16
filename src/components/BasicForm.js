import useValidation from "./hooks/use-validation";

const isNotEmpty = (value) => value.trim("") !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    valueInput: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputChangedHandler: firstNameChangeHandler,
    inputBlurChangedHandler: firstNameBlurHandler,
    rest: restFirstName,
  } = useValidation(isNotEmpty);

  const {
    valueInput: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputChangedHandler: lastNameChangeHandler,
    inputBlurChangedHandler: lastNameBlurHandler,
    rest: restLastName,
  } = useValidation(isNotEmpty);

  const {
    valueInput: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangedHandler: emailChangeHandler,
    inputBlurChangedHandler: emailBlurHandler,
    rest: restEmail,
  } = useValidation(isEmail);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(firstNameValue, lastNameValue, emailValue);

    restFirstName();
    restLastName();
    restEmail();
  };

  let formValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formValid = true;
  }

  const firstNameClasses = firstNameHasError
    ? "form-control invalid "
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid "
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid " : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onBlur={firstNameBlurHandler}
            onChange={firstNameChangeHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Please enter First Name</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangeHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Please Enter Last Name</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailHasError && <p className="error-text">Please Enter Email Name</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
