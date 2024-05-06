import { Outlet } from "react-router-dom";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";

export default function Root() {
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
