import { Outlet } from "react-router-dom";
import Header from "../Components/Layouts/Header";
import React, { Suspense } from "react";

const LazyFooter = React.lazy(() => import("../Components/Layouts/Footer"));

export default function Root() {
  return (
    <>
      <main className="bg-white">
        <Header />
        <Outlet />
        <Suspense fallback={<div>Loading...</div>}>
          <LazyFooter />
        </Suspense>
      </main>
    </>
  );
}
