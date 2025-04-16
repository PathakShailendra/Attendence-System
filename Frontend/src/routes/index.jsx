import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminRegister from "../pages/AdminRegister";
import Home from "../pages/Home";
import AdminDashboard from "../pages/AdminDashboard";
import AdminLogin from "../pages/AdminLogin";

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
            path : 'login',
            element : <AdminLogin />
        },
        {
            path : "admin/dashboard",
            element : <AdminDashboard />
        }
    ],
  },
]);


export default router;