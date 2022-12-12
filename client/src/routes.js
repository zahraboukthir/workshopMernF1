import * as React from "react";
import { useRoutes } from "react-router-dom";
import SignIn from "./Components/authForms/SignIn";
import SignUp from "./Components/authForms/SignUp";
import Home from './Components/Home';
import NavigationBar from './Components/NavBar/NavigationBar';
import PrivateRoute from './Components/PrivateRoute/index';
import Dashboard from './Components/PrivateRoute/Saler/Dashboard';

export function Myroutes() {
  let element = useRoutes([
    {
      path: "/",
      element:  <NavigationBar/>,
      children: [
        {
          path: "",
          element: <Home />,
        },
        
      ],
    },
    { path: "/signin", element:<SignIn/> },
    { path: "/signup", element:<SignUp/> },
    {
        path: "/dhbSaler",
        element: <PrivateRoute>
        <Dashboard/>
        </PrivateRoute>,
        // children: [
        //   {
        //     path: "/products",
            
        //   },
        //   { path: "tasks", element: <DashboardTasks /> },
        // ],
      },
  ]);

  return element;
}