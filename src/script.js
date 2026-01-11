
import React,{Suspense,lazy} from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./components/Navbar";
import ProductCard from "./components/ProductCard";
//outlet-> to show child components and nested routes and stick the navbar on every page
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Kid from "./components/kid";
import Men from "./components/Men";
import Error from "./components/Error";
//import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import CompoA from "./components/CompoA";
//import Grocery from "./components/Grocery";//normal import na krke hm lazy me dalenge

//lazy loading
//code splitting
//dynamic import
//the above three are same

const Grocery =lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About")); 

const App = () => {
  return (
    <div>
      <Navbar />
      <CompoA />
      {/* Outlet ka mtlb jha bhi hm child routes dikhana chahte hai wr jaye  */}
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
    element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
  },
  {
    path: "/grocery",
    element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
  },
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//root.render(<App />); 