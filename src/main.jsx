import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import Inicio from "./routes/Inicio/Inicio";
import Dashboard from "./routes/Dashboard/Dashboard";
import ChatPage from "./routes/ChatPage/ChatPage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
      {
        path: "/Sign-in*",
        element: <Logueo />,
      },
      {
        path: "/Sign-up*",
        element: <AltaCuenta />,
      },
        { 
        element: <DashboardLayout />,
        children: [
          {
            path: "/Dashboard",
            element: <Dashboard />,
          },
          {
            path: "/Dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
