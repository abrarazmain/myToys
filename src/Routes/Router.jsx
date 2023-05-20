import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Register/Login";
import Register from "../Pages/Register/Register";
import AddToys from "../Pages/AllToys/AddToys";
import SingleToy from "../Pages/SingleToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addToys",
        element: <AddToys></AddToys>,
      },
      {
        path: "singleToy/:id",
        element: <PrivateRoute><SingleToy /></PrivateRoute>,
      }
        
    ],
  },
]);

export default router;
