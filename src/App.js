import { useState } from "react";
import './App.css'
import RegisterationForm from "./components/RegistrationForm";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: ""
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username must be 3-16 characters and shouldn't include special character",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required:true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "EMail",
      errorMessage: "Should be valid email",
      label: "Email",
      required:true
    },
    {
      id: 3,
      name: "dob",
      type: "date",
      placeholder: "DOB",
      label: "DOB"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password must be 8-20 characters and should atleast include 1 number, 1 uppercase letter, 1 lowercase letter and 1 special character",
      label: "New Password",
      pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$`,
      required:true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password doesn't match",
      pattern: values.password,
      label: "Confirm Password",
      required:true
    },
  ]

  const submitHandler = (event) => {
    event.preventDefault()

    
  }

  const onChange = (event) => [
    setValues({ ...values, [event.target.name]: event.target.value })
  ]

  return (
    <div className="app">
      <form onSubmit={submitHandler}>
        <h1>Registration Form</h1>
        {inputs.map((input) => (
          <RegisterationForm key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button>Register</button>
      </form>
    </div>
  );
}

export default App;
