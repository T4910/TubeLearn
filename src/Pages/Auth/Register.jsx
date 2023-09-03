import React, { useState } from "react";
import registerIcon from "../../assets/register.svg";
import { Logo } from "../../Components/Logo";
import account from "../../assets/account.svg";
import message from "../../assets/message.svg";
import lock from "../../assets/lock.svg";
import { ClassicInput } from "../../Components/ClassicInput";
import { useLocation, Link, useNavigate} from "react-router-dom";
import "./register.css";
import { useContextApi } from "../../Context/ContextApi";

const Register = () => {
  const { register,changeError,setDanger,setUser } = useContextApi();
  const navigate = useNavigate()
  const [body, setBody] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { pathname } = useLocation();
  const login = pathname === "/auth/login";
  const handleSubmit = (e) => {
    e.preventDefault();
    const type = login ? "login" : "sign-up"
    register(type, body).then(
      (resp)=>{
        const {data} = resp
            if(type == "login"){
              setUser(data.access_token)
              changeError({show:true,msg:"Success",state:"success"})
              return navigate("/courses")
            }
            changeError({show:true,msg:"Success",state:"success"})
           
      }
    ).catch(
      (error)=>{
        setDanger(error)
        console.log(error)
      }
    );
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setBody({ ...body, [name]: value });
  };
  return (
    <div className="flex h-full items-center bg-lighterGrey justify-center">
      <div className="flex w-[900px] bg-white rounded-lg p-12 relative">
        <div className="flex flex-col space-y-5 max-w-[330px]">
          <Logo />
          <p className="font-inter text-2xl">
            Welcome to TubeLearn Online Learning Platform
          </p>
          <img className="w-full" src={registerIcon} alt="register icon" />
        </div>
        <div className="form-register">{"   "}</div>
        <div className="flex flex-col space-y-5 mx-auto my-auto">
          <form
            className="flex flex-col space-y-5"
          >
            {login || <ClassicInput
              title="Username"
              icon={account}
              iconText="account"
              type="text"
              value={body.username}
              handleChange={handleChange}
            />}
            <ClassicInput
              title="Email"
              icon={message}
              iconText="message"
              type="email"
              value={body.email}
              handleChange={handleChange}
            />
            <ClassicInput
              title="Password"
              icon={lock}
              iconText="lock"
              type="password"
              value={body.password}
              handleChange={handleChange}
            />
            <button
              className="p-4 cursor-pointer py-2 rounded-lg bg-pinkDark w-full text-white"
              type="submit"
              onClick={(e)=>handleSubmit(e)}
            >{login ? "login" : "signup"}</button>
          </form>
        <div className="flex space-x-2">

          <p>
            {
              login?
              "Don't have an account"
              :
              "Already have an account"
            }
          </p>
          <Link className="text-pinkDark" to={`/auth/${login?"signup":"login"}`} >
            {login?"signup":"login"}
          </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Register;
