import { useState, useContext } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/UserContext";
import FormInput from "../formInput/FormInput";
import Button from "../button/Button";
import "./signIn.styles.scss";

function SignIn() {
  const [signInUser, setSignInUser] = useState({
    email: "",
    password: "",
  });
  const { setCurrentUser } = useContext(UserContext);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
    setCurrentUser(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignInUser({ ...signInUser, [name]: value });
  };

  const resetFormFields = () => {
    setSignInUser({
      email: "",
      password: "",
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        signInUser.email,
        signInUser.password
      );
      resetFormFields();
      setCurrentUser(user);
    } catch (error) {
      if (error.code === "auth/invalid-login-credentials") {
        alert("Wrong email or password");
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
