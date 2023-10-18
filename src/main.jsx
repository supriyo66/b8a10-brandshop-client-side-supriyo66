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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    
    children:[
      {
     
        path: "/",
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/food')
      
      },
      
      {
     
      path: "addFood",
      element:<AddFood></AddFood>
    
    },
      {
     
      path: "updateFood",
      element:<UpdateFood></UpdateFood>
    
    },
     
  ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
