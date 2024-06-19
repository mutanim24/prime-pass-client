import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/sign-up',
            element: <Registration></Registration>
        },
        {
            path: '/events-details/:id',
            element: <DetailsPage></DetailsPage>,
            loader: ({params}) => fetch(`https://prime-pass-server.vercel.app/events/${params.id}`)
        }
      ]
    },
  ]);