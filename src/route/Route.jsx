import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import EventsPage from "../pages/EventsPage/EventsPage";
import PrivateRoute from "./PrivateRoute";
import BookingPage from "../pages/BookingPage/BookingPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/events",
            element: <EventsPage />
        },
        {
            path: "/book-now",
            element: <BookingPage />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/sign-up',
            element: <Registration/ >
        },
        {
            path: '/events-details/:id',
            element: <PrivateRoute><DetailsPage /></PrivateRoute>,
            loader: ({params}) => fetch(`https://prime-pass-server.vercel.app/events/${params.id}`)
        }
      ]
    },
  ]);