import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";

import Body from "./components/body/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "../src/components/header/login/Login";
import Error from "./components/error/Error";
import About from "./components/header/about/About";
import Header from "./components/header/Header.js";
import ProductCard from "./components/body/Product-card/ProductCard.js";
import Footer from "./components/footer/Footer.js";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext.js";
const Cart = lazy(() => import("./components/cart/Cart.js"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  return (
    <>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />

          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Cart",
        element: (
          <Suspense fallback={<h1>Data is loading</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/product-card/:proId",
        element: <ProductCard />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
