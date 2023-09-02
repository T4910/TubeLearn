import React from "react";
import register from "../../assets/register.svg";
import { Logo } from "../../Components/Logo";
import account from "../../assets/account.svg"
import message from "../../assets/message.svg"
import lock from "../../assets/lock.svg"
import { ClassicInput } from "../../Components/ClassicInput";
import {useLocation, Link} from "react-router-dom"
import "./register.css"


const Register = () => {
  const {pathname} = useLocation()
  const login = pathname === "/auth/login"
  return (
    <div className="flex h-full items-center bg-lighterGrey justify-center">
      <div className="flex w-[900px] bg-white rounded-lg p-12 relative">
        <div className="flex flex-col space-y-5 max-w-[330px]">
          <Logo/>
          <p className="font-inter text-2xl">
          Welcome to TubeLearn  Online Learning Platform
          </p>
          <img className="w-full" src={register} alt="register icon"/>
        </div>
        <div className="form-register">
          {"   "}
        </div>
        <form  className=" flex flex-col space-y-5 mx-auto my-auto">
          <div>

          </div>
          {
            login?<>
            <ClassicInput title="Username" icon={account} iconText="account" type="text" />
          <ClassicInput title="Email" icon={message} iconText="message" type="email" />
          <ClassicInput title="Password" icon={lock} iconText="lock" type="password" />
            </>:<>
          <ClassicInput title="Email" icon={message} iconText="message" type="email" />
          <ClassicInput title="Password" icon={lock} iconText="lock" type="password" />
            </>
          }
          
          <button className="p-4 py-2 rounded-lg bg-pinkDark w-full text-white">
            {login?"login":"signup"}
          </button>
          <div className="flex space-x-2">
          <p>
            {
              login?
              "Don't have an account"
              :
              "Already have an account"
            }
          </p>
          <Link className="text-pinkDark" to={`/auth/${login?"signup":"login"}`} >{login?"signup":"login"}</Link>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Register;
