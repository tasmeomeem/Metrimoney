import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Biodata from "./Pages/Biodata/Biodata";
import Contact from "./Pages/Contact/Contact";
import AuthProvider from "./Providers/AuthProvider";
import Main from "./Layout/Main";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Signup/SignUp";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import DetailsPre from "./Pages/Detail/DetailsPre";
import AllBio from "./Pages/DetailAll/AllBio";
import SubscriptionContact from "./Pages/SubscriptionContact/SubscriptionContact";
import DashBoard from "./Pages/DashBord/DashBord";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashBord from "./Pages/DashBordAdmin/DashBord";
import EditBioData from "./Pages/DashBordAdmin/EditBioData";
import ViewBioData from "./Pages/DashBordAdmin/ViewBioData";
import ContactRequest from "./Pages/DashBordAdmin/ContactRequest";

import SuccessStory from "./Pages/Success/SuccessStory";
import LogOutUser from "./Pages/DashBordAdmin/LogOutUser";
import AdminDashbord from "./Pages/DashBordAdmin/AdminDashbord";
import Favorite from "./Pages/DashBordAdmin/Favorite";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/biodata",
        element: <Biodata />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/detailsPre",
        element: (
          <PrivateRoute>
            <DetailsPre />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashBord",
        element: (
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        ),
      },
      {
        path: "/allBio/:id",
        element: (
          <PrivateRoute>
            <AllBio />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://server-12-ten.vercel.app/biodata/${params.id}`),
      },
      {
        path: "/subscriptionContact/:id",
        element: (
          <PrivateRoute>
            <SubscriptionContact />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://server-12-ten.vercel.app/biodata/${params.id}`),
      },
      
    ],
  },
  
  //dashbord route//
    {
    path:'/dashbord',
    element:<DashBord></DashBord>,
    children:[
      {
        path:'/dashbord/editBiodata',
        element:<PrivateRoute><EditBioData></EditBioData></PrivateRoute>
      },
      {
        path:'/dashbord/viewBioData',
        element:<PrivateRoute><ViewBioData></ViewBioData></PrivateRoute>
      },
      {
        path:'/dashbord/request',
        element:<ContactRequest></ContactRequest>
      },
      {
        path:'/dashbord/favourite',
        element:<PrivateRoute><Favorite></Favorite></PrivateRoute>
      },
      {
        path:'/dashbord/successStory',
        element:<PrivateRoute><SuccessStory></SuccessStory></PrivateRoute>
      },
      {
         path:'/dashbord/logout',
         element:<LogOutUser></LogOutUser>
      },
      // admin-----
      {
        path:'/dashbord/adminDashbord',
        element:<AdminDashbord></AdminDashbord>
      },
    ]}
]);
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
