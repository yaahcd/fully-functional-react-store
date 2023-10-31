import { useState, FormEvent, ChangeEvent } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import FormInput from "../formInput/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { SignInContainer, ButtonsContainer } from "./SignIn.styles";
import { useDispatch } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";

function SignIn() {
  const [signInUser, setSignInUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSignInUser({ ...signInUser, [name]: value });
  };

  const resetFormFields = () => {
    setSignInUser({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(signInUser.email, signInUser.password));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.INVALID_EMAIL || (error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD) {
        alert("Wrong email or password"); 
      } else {
        console.error(error);
      }
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={() => handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={signInUser.email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={signInUser.password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
}

export default SignIn;
