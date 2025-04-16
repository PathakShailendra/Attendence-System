import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminRegister from "../pages/AdminRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "",
            element: <AdminRegister />
        }
    ],
  },
]);


export default router;