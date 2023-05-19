import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Sheaird/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Home/Register/Register";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/AllToys/ToyDetails";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/AddToys/MyToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>
      },
      {
        path: '/toys/:id',
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addtoys",
        element: <AddToys></AddToys>
      },
      {
        path:'mytoys',
        element: <MyToys></MyToys>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

export default router;