
import SignIn from '../signIn/SignIn';
import SignUp from '../signUp/SignUp';
import { AuthenticationContainer } from './Authentication.styles';

function Authentication() {

  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  )
}

export default Authentication
