import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import {
  // createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import {Root, Accueil, Allergene, Contact, Galerie } from './routes/routesMain.ts';

import './index.css'

const router = createHashRouter([
  {
    path:"/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Accueil />,
      },
      {
        path:"/galerie",
        element: <Galerie />,
      },
      {
        path:"/allergene",
        element: <Allergene />,
      },
      {
        path:"/contact",
        element: <Contact />,
      },
    ]
  },

])

const pageContext = createContext<{page:string}>({
  page: ""
});
const getRoot = document.getElementById('root');

if(getRoot) {
  const root = ReactDOM.createRoot(getRoot);
  root.render(  
    <React.StrictMode>
      <pageContext.Provider value={{page: '/'}}>
        <RouterProvider router={router} />
      </pageContext.Provider>
    </React.StrictMode>
  )
}

export {pageContext}
