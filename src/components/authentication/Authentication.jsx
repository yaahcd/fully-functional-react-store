
import SignIn from '../signIn/SignIn';
import SignUp from '../signUp/SignUp';
import './authentication.styles.scss'

function Authentication() {

  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Authentication
