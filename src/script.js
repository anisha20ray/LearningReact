
import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./components/Navbar";
import ProductCard from "./components/ProductCard";
//outlet-> to show child components and nested routes and stick the navbar on every page
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Kid from "./components/kid";
import Men from "./components/Men";
import Error from "./components/Error";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* /ProductCard */}

    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
    path: "/",
    element: <ProductCard />
  },
      {
    path: "/kids",
    element: <Kid />
  },
  {
    path: "/men",
    element: <Men />
  },
  {
    path: "/product/:productId",
    element: <ProductDetails />
  },
  {
    path: "/about",
    element: <About />
  },
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//root.render(<App />); 