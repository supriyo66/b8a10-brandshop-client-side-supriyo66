import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root.jsx';
import Home from './pages/Home/Home';
import AddFood from './pages/AddFood/AddFood';
import UpdateFood from './pages/UpdateFood/UpdateFood';
import FoodDetails from './pages/FoodDetails/FoodDetails';
import Details from './pages/Details/Details';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import AuthProvider from './pages/Provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Error from './pages/Error/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    
    children:[
      {
     
        path: "/",
        element:<Home></Home>,
        
        loader:()=>fetch('http://localhost:5000/food')
      
      },
      
      {
     
      path: "addFood",
      element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
    
    },
      {
     
      path: "updateFood/:id",
      element:<PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:5000/food/${params.id}`)
    
    },
      {
     
      path: `/details/:_id`,
      element:<PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
      loader:()=>fetch('http://localhost:5000/food')
    
    },
      {
     
      path: `/details2/:_id`,
      element:<PrivateRoute><Details></Details></PrivateRoute>,
      loader:()=>fetch('http://localhost:5000/food')
    
    },
      {
     
      path:'/login',
      element:<Login></Login>
      
    
    },
      {
     
      path:'/registration',
      element:<Registration></Registration>
      
    
    }
     
  ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
