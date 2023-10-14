import ClassicInput from "../../Components/ClassicInput";
import Link from "next/link"
import Submit from './regBTN'
import "../register.css";


const Register = () => {
  return (
    <>
      <form className="flex flex-col space-y-5">
          <ClassicInput
            title="Username"
            icon="/assets/account.svg"
            iconText="account"
            type="text"
          />
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
          <Submit />
      </form>
      <div className="flex space-x-2">
          <p>Already have an account? </p>
          <Link className="text-pinkDark" href='/auth/login'>Login</Link>
      </div>
    </>
  )
};

export default Register;
