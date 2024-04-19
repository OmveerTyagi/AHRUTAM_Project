import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import Body from './Components/Body';
import Body2 from './Components/Body2';
import Header from './Components/Header';
import {createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './Components/About';


const AppLayout = () =>{
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}


const appRouter = createBrowserRouter([{
  path:"/",
  element:<AppLayout />,
  children: [
    {
      path:"/",
      element:<Body />
    
    },
    {
      path:"/findDoctors",
      element:<Body2 />
    
    },
    {
      path:"/about",
      element:<About />
    
    }
  ]
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <RouterProvider router={appRouter}/>
);

 