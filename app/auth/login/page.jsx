import ClassicInput from "../../Components/ClassicInput";
import Link from "next/link";
import "../register.css";
import LoginBTN from './loginBTN'

const Login = () => {
  return (
    <div>
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
        <input className="p-4 cursor-pointer py-2 rounded-lg bg-pinkDark w-full text-white" type="submit" value="Sign Up" />
      </form>
      <div className="flex space-x-2">
        <p>Don't have an account? </p>
        <Link className="text-pinkDark" href='/auth/signup'>Sign Up</Link>
      </div>
    </div>
  )
};

export default Login;
