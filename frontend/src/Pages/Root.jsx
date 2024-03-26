import { Outlet } from "react-router-dom";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateLog } from "../store/cartSlice";
export default function Root() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(updateLog());
    }
  }, []);
  return (
    <>
      <main className="bg-white">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
