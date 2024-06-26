import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/body/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Placeorder from "./components/cart/PlaceOrder.js";
import { Provider } from "react-redux";
import Error from "./components/error/Error.js";
import appStore from "./utils/appStore.js";
import LocationCheck from "./components/locationcheck/LocationCheck";
import Searchproduct from "./components/SearchProduct/SearchProduct.js";
const Cart = lazy(() => import("./components/cart/Cart.js"));
const ProductCard = lazy(() =>
  import("./components/body/Product-card/ProductCard.js")
);

const AppLayout = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Provider store={appStore}>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </Provider>
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        element: (
          <Suspense fallback={<h1>Data is loading</h1>}>
            <ProductCard />,
          </Suspense>
        ),
      },
      {
        path: "/SearchProduct/:ProTitle",
        element: <Searchproduct />,
      },
      {
        path: "/LocationCheck",
        element: <LocationCheck />,
      },
      {
        path: "/placeorder",
        element: <Placeorder />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
