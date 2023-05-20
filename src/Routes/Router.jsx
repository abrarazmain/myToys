import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Register/Login";
import Register from "../Pages/Register/Register";
import AddToys from "../Pages/AllToys/AddToys";
import SingleToy from "../Pages/SingleToy";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/AllToys/MyToys";
import UpdateToy from "../Pages/AllToys/UpdateToy";
import Error from "../Pages/Error";

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
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "updateToy/:id",
        element: <UpdateToy />,
        loader:({params})=>fetch(`http://localhost:5000/singleToy/${params.id}`)
      },
        
    ],
    
  },
  {
    path: "*",
    element: <Error></Error>,
  }
]);

export default router;
