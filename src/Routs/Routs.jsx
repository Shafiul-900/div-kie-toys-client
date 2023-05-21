import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Sheaird/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Home/Register/Register";
import AllToys from "../Pages/AllToys/AllToys";
// import ToyDetails from "../Pages/AllToys/ToyDetails";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/AddToys/MyToys";
import PricetRoute from "../PrivetRout/PricetRoute";
import Blog from "../Pages/Home/Blog/Blog";
import EditToys from "../Pages/EditToys/EditToys";

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
      // {
      //   path: '/toys/:_id',
      //   element: <PricetRoute><ToyDetails></ToyDetails></PricetRoute>,
      //   loader: ({ params }) => fetch(`https://toys-dickie-server.vercel.app/toys/${params._id}`)
      // },
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
        element: <PricetRoute><AddToys></AddToys></PricetRoute>
      },
      {
        path:'/mytoys',
        element: <PricetRoute><MyToys></MyToys></PricetRoute>
      },
      {
        path: '/editToys/:id',
        element: <EditToys></EditToys>,
        loader: ({ params }) => fetch(`https://toys-dickie-server.vercel.app/toys/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

export default router;