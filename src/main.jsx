import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header.jsx';
import Jobs from './Components/Header/Jobs/Jobs.jsx';
import Statistics from './Components/Header/Statistics/Statistics.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Home from './Components/Home/Home.jsx';
import Details from './Components/Details/Details.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:3000/jobs/')
      },
     
      {
      path: "/jobs",
      element: <Jobs></Jobs>,
      loader: ()=> fetch('http://localhost:3000/jobs/')
    },
    {
      path: "/statistics",
      element: <Statistics></Statistics>
    },
     {
        path: "/blogs",
        element: <Blog></Blog>,  
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
      
      },
     
     
  ]

  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
