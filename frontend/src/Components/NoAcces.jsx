import { useNavigate } from "react-router-dom";

export default function NoAcces() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center">
          <p className="font-semibold text-2xl">You are already Loged in</p>
          <button
            className="bg-[#EA4335] hover:bg-[#aa4137] hover:text-white text-white font-semibold py-2 px-4 border  rounded shadow m-2 "
            onClick={() => navigate("/")}
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </>
  );
}
