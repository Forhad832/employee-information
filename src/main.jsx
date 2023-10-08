import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import AddEmployee from './components/AddEmployee/AddEmployee.jsx';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import EmployeeDetails from './components/EmployeeDetails/EmployeeDetails';
import AuthProvider from './components/Provider/AuthProvider';
import PrivateRoutes from './components/routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <PrivateRoutes><Home></Home></PrivateRoutes>
      }
      ,
      {
        path: 'addemployee',
        element: <PrivateRoutes><AddEmployee></AddEmployee></PrivateRoutes>
      },
      {
        path: '/:details',
        element: <EmployeeDetails></EmployeeDetails>
      },
      {
        path: 'signup',
        element: <Signup></Signup>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider > <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
