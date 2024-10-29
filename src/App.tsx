import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Login from "./Pages/auth/Login/Login";
import Register from "./Pages/auth/Register/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: "/login", element: <Login /> },
        { path: "/Register", element: <Register /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
