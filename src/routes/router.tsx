import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";
import Home from "@/pages/Home";
import Location from "@/pages/Location";
import NotFound from "@/pages/NotFound";
import RoomDetails from "@/pages/RoomDetails";
import Rooms from "@/pages/Rooms";
import Services from "@/pages/Services";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/rooms", element: <Rooms /> },
      { path: "/rooms/:roomId", element: <RoomDetails /> },
      { path: "/services", element: <Services /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/about", element: <About /> },
      { path: "/location", element: <Location /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
