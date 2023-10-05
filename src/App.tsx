import {
  // createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import {Accueil, Allergene, Contact, Galerie } from './screens/screensMain.ts';

import './index.css'

const router = createHashRouter([
  {
    path:"/",
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
])

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App