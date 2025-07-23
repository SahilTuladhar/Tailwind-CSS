import { useAtom } from "jotai";
import { LoginVisibleAtom } from "../atoms";

const LoginCard = () => {

    const [loginVisible, setLoginVisible] = useAtom(LoginVisibleAtom);


    return(
        <div className={`w-full flex flex-col justify-center items-center h-full bg-green-500
            transition-all ease-in-out duration-500 transform
            ${loginVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}>

            <button onClick={() => setLoginVisible(false)}>
                Login
            </button>
            
        </div>
    )


}

export default LoginCard