import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from  './routes/Home/Home.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App.jsx';

const router=createBrowserRouter([{
  path:'/',element:<App/>,
  

  children:[
    {path:'/',element:<Home/>},
    
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
