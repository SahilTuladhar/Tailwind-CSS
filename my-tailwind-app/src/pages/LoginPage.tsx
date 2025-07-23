import LoginCard from "../components/LoginCard";
import SignUpCard from "../components/SignUpCard";

const LoginPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-row justify-center items-center w-[55%] m-auto h-[720px] rounded-xl shadow-xl ">

        <LoginCard />
        <SignUpCard />

      </div>
    </div>
  );
};

export default LoginPage;
