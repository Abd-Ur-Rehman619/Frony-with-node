import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <div className="flex items-center flex-col gap-32">
        <div className="flex flex-col justify-center items-center gap-10 h-screen">
          <p className=" text-[10rem] font-bold ">404 Not Found</p>
          <p className="text-lg font-semibold">
            Your visited page not found. You may go home page.
          </p>
          <Link to="/">
            <Button
              sx={{
                backgroundColor: "#DB4444",
                width: "234px",
                height: "56px",
                color: "white",
              }}
            >
              Back To Home
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
