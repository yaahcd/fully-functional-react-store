
import { signInWithGooglePopup, createUserDocFromAuth} from '../../utils/firebase/firebase.utils'
import SignUp from '../signUp/SignUp';

function SignIn() {


    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    }


  return (
    <div>
      <h1>Sign In Page </h1>
      <button onClick={logGoogleUser}>Sign in With Google</button>
      <SignUp />
    </div>
  )
}

export default SignIn
