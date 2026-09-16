import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './App.css'
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function Router() {
const router = createBrowserRouter([
  {
    path: "/",
   Component: MainLayout,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:"/movies",
        element:<Movies></Movies>
      }
    ]
  },
]);

  return (
    
    <>
       <RouterProvider router={router} />,
    </>
  )
}

export default Router
