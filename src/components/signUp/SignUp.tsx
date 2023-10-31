import { useState, FormEvent, ChangeEvent } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import FormInput from "../formInput/FormInput";
import Button from "../button/Button";
import { SignUpContainer } from "./SignUp.styles";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

function SignUp() {
  const [newUser, setNewUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });
  };

  const resetFormFields = () => {
    setNewUser({
      email: "",
      password: "",
      confirmPassword: "",
      displayName: "",
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newUser.password !== newUser.confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      dispatch(
        signUpStart(newUser.email, newUser.password, newUser.displayName)
      );
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Email already in use");
      } else {
        console.error(error);
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={newUser.displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={newUser.email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={newUser.password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={newUser.confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
}

export default SignUp;
