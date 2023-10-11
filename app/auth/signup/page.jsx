// import { useContextApi } from "../../Context/ContextApi";
import ClassicInput from "../../Components/ClassicInput";
import Link from "next/link";
import "../register.css";

const Register = () => {
    // const login = pathname === "/auth/login";
//   const { register,changeError,setDanger,setUser } = useContextApi();
//   const navigate = useNavigate()
//   const [body, setBody] = useState({
    //     email: "",
    //     password: "",
    //     username: "",
    //   });
    //   const { pathname } = useLocation();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const type = login ? "login" : "sign-up"
//     register(type, body).then(
//       (resp)=>{
//         const {data} = resp
//             if(type == "login"){
//               setUser(data.access_token)
//               changeError({show:true,msg:"Success",state:"success"})
//               return navigate("/courses")
//             }
//             changeError({show:true,msg:"Success",state:"success"})
           
//       }
//     ).catch(
//       (error)=>{
//         setDanger(error)
//         console.log(error)
//       }
//     );
//   };
//   const handleChange = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     setBody({ ...body, [name]: value });
//   };
  
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
        <button
          className="p-4 cursor-pointer py-2 rounded-lg bg-pinkDark w-full text-white"
          type="submit"
        //   onClick={(e)=>handleSubmit(e)}
        >Sign Up</button>
      </form>
        <div className="flex space-x-2">
          <p>Already have an account? </p>
          <Link className="text-pinkDark" href='/auth/login'>Login</Link>
        </div>
    </>
  )
};

export default Register;
