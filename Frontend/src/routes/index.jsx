import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminRegister from "../pages/AdminRegister";
import Home from "../pages/Home";
import AdminDashboard from "../pages/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "",
            element: <Home />
        },
        {
            path : "register",
            element : <AdminRegister />
        },
        {
            path : "admin/dashboard",
            element : <AdminDashboard />
        }
    ],
  },
]);


export default router;