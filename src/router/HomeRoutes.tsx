import React from "react";
import { Home } from "../components/pages/home/Home";
import { Setting } from "../components/pages/home/Setting";
import { UserManagement } from "../components/pages/home/UserManagement";

export const homeRoutes=[
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/setting",
        element: <Setting />
    },
    {
        path: "/user_management",
        element: <UserManagement />
    },
]