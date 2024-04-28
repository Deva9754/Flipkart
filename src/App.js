import React from "react";
import ReactDOM from "react-dom/client";

import Body from "./components/body/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "../src/components/header/login/Login";
import Error from "./components/error/Error";
import About from "./components/header/about/About";
import Header from "./components/header/Header.js";
import ProductCard from "./components/body/Product-card/ProductCard.js";
import Footer from "./components/footer/Footer.js";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
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
        path: "/product-card/:proId",
        element: <ProductCard />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
