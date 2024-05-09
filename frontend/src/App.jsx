import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import "./App.css";

const Home = React.lazy(() => import("./Pages/Home"));
const Root = React.lazy(() => import("./Pages/Root"));
const PageNotFound = React.lazy(() => import("./Pages/PageNotFound"));
const Orders = React.lazy(() => import("./Pages/Orders"));
const Signup = React.lazy(() => import("./Pages/signup/Signup"));
const About = React.lazy(() => import("./Pages/about/About.jsx"));
const Cart = React.lazy(() => import("./Pages/cart/Cart.jsx"));
const Login = React.lazy(() => import("./Pages/login/Login.jsx"));
const Products = React.lazy(() => import("./Pages/Products"));
const WomenCollection = React.lazy(() =>
  import("./Pages/CatagoriesPages/WomenCollection")
);
const MenCollection = React.lazy(() =>
  import("./Pages/CatagoriesPages/MenCollection")
);
const KidsCollection = React.lazy(() =>
  import("./Pages/CatagoriesPages/KidsCollection")
);
const Heels = React.lazy(() => import("./Pages/CatagoriesPages/Heels"));
const Loafers = React.lazy(() => import("./Pages/CatagoriesPages/Loafers"));
const Sandals = React.lazy(() => import("./Pages/CatagoriesPages/Sandals"));
const Casual = React.lazy(() => import("./Pages/CatagoriesPages/Casual"));
const Football = React.lazy(() => import("./Pages/CatagoriesPages/Football"));
const Formal = React.lazy(() => import("./Pages/CatagoriesPages/Formal"));
const Running = React.lazy(() => import("./Pages/CatagoriesPages/Running"));
const Checkout = React.lazy(() => import("./Pages/checkout/Checkout.jsx"));
const Product = React.lazy(() => import("./Pages/Product.jsx"));

function App() {
  const routes = [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<CircularProgress />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/*",
          element: (
            <Suspense fallback={<CircularProgress />}>
              <PageNotFound />
            </Suspense>
          ),
        },
        {
          path: "/orders",
          element: (
            <Suspense fallback={<CircularProgress />}>
              <Orders />
            </Suspense>
          ),
        },
        {
          path: "/signup",
          element: (
            <Suspense fallback={<CircularProgress />}>
              <Signup />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            <Suspense fallback={<CircularProgress />}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<CircularProgress />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<CircularProgress />}>
                  <Cart />
                </Suspense>
              ),
            },
            {
              path: "checkout",
              element: (
                <Suspense fallback={<CircularProgress />}>
                  <Checkout />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "/products",
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<CircularProgress />}>
                  <Products />
                </Suspense>
              ),
            },
            {
              path: "women",
              element: (
                <Suspense fallback={<CircularProgress />}>
                  <WomenCollection />
                </Suspense>
              ),
            },
            {
              path: "men",
              element: (
                <Suspense fallback={<CircularProgress />}>
                  <MenCollection />
                </Suspense>
              ),
            },
            {
              path: "kids",
              element: (
                <Suspense fallback={<CircularProgress />}>
                  <KidsCollection />
                </Suspense>
              ),
            },
            {
              path: "heels",
              element: (
                <Suspense fallback={<CircularProgress />}>
                  <Heels />
                </Suspense>
              ),
            },
            {
              path: "loafers",
              element: (
                <Suspense fallback={<CircularProgress />}>
                  <Loafers />
                </Suspense>
              ),
            },
            {
              path: "sandals",
              element: (
                <Suspense fallback={<CircularProgress />}>
                  <Sandals />
                </Suspense>
              ),
            },
            {
              path: "casual",
              element: (
                <Suspense fallback={<CircularProgress />}>
                  <Casual />
                </Suspense>
              ),
            },
            {
              path: "football",
              element: (
                <Suspense fallback={<CircularProgress />}>
                  <Football />
                </Suspense>
              ),
            },
            {
              path: "formal",
              element: (
                <Suspense fallback={<CircularProgress />}>
                  <Formal />
                </Suspense>
              ),
            },
            {
              path: "running",
              element: (
                <Suspense fallback={<CircularProgress />}>
                  <Running />
                </Suspense>
              ),
            },
            {
              path: ":productSlug",
              element: (
                <Suspense fallback={<CircularProgress />}>
                  <Product />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
