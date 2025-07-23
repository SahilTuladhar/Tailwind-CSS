import { useAtom } from "jotai";
import { LoginVisibleAtom } from "../atoms";

const SignUpCard = () => {
  const [loginVisible, setLoginVisible] = useAtom(LoginVisibleAtom);

  return (
    <div
      className={`w-full flex flex-col justify-center items-center h-full bg-blue-500
        transition-all ease-in-out duration-500 transform
        ${loginVisible ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"}`}
    >
      <button onClick={() => setLoginVisible(true)}>Sign in</button>
    </div>
  );
};

export default SignUpCard;
