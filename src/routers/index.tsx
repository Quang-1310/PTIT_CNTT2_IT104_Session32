import { createBrowserRouter } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/login";

const routers = createBrowserRouter([
    {path:"/register", element:<Register/>},
    {path:"/login", element:<Login/>}
])

export default routers