import Logo from "../shared/Logo";
import Image from "next/image"

const Layout = ({children}) => {
    return (
        <div className="flex h-full items-center bg-lighterGrey justify-center">
            <div className="flex w-[900px] bg-white rounded-lg p-12 relative">
                <div className="flex flex-col space-y-5 max-w-[330px]">
                <Logo />
                <p className="font-inter text-2xl">
                    Welcome to TubeLearn Online Learning Platform
                </p>
                <Image className="w-full" src="/assets/register.svg" alt="register icon" width={330} height={325}/>
                </div>
                {/* login and Register components */}
                {/* grid place-items-center flex-grow */}
                <div className="flex flex-col space-y-5 mx-auto my-auto"> 
                    {children}
                </div>
            </div>
        </div>
  );
};

export default Layout;
