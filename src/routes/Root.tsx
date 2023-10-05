import { Outlet } from "react-router-dom"
import Head from "../components/Head"

function Root() {
  return (
    <div>
        <Head/>
        <Outlet />
    </div>
  )
}

export default Root