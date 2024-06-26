import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { OurTours } from "./Pages/OurTours.jsx";
import { Contact } from "./Pages/Contact.jsx";
import { TravelStory } from "./Pages/TravelStory.jsx";
import { Blogs } from "./Pages/Blogs.jsx";
import { About } from "./Pages/About.jsx";
import { Login } from "./Pages/Login.jsx";
import { Register } from "./Pages/Register.jsx";
import { Home } from "./Pages/Home.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BlogDetails } from "./Pages/BlogDetails.jsx";
import { TourDetails } from "./Pages/TourDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/travelstory",
        element: <TravelStory></TravelStory>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/ourtours",
        element: <OurTours></OurTours>,
      },
      {
        path: "/blogdetails/:id",
        element: <BlogDetails></BlogDetails>,
        loader: () => fetch("/places.json"),
      },
      {
        path: "/tourdetails/:id",
        element: <TourDetails></TourDetails>,
        loader: () => fetch("/places.json"),
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
