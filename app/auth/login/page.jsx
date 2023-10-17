import ClassicInput from "../../Components/ClassicInput";
import Link from "next/link";
import "../register.css";
import LoginBTN from './loginBTN'
import Flash from '../flash'


const Login = async ({searchParams}) => {
  const flash = searchParams.err

  return (
    <div>
      <Flash flash={flash}/>
      <form className="flex flex-col space-y-5">
        <ClassicInput
          title="Email"
          icon="/assets/message.svg"
          iconText="message"
          type="email"
        />
        <ClassicInput
          title="Password"
          icon="/assets/lock.svg"
          iconText="lock"
          type="password"
        />
        <LoginBTN />
      </form>
      <div className="flex space-x-2">
        <p>Don't have an account? </p>
        <Link className="text-pinkDark" href='/auth/signup'>Sign Up</Link>
      </div>
    </div>
  )
};

export default Login;
