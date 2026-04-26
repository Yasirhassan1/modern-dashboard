import { createBrowserRouter } from "react-router";
import App from "./App";
import NotFound from "../../router/src/pages/not-found/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Billing from "./pages/billing/Billing";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
    { 
    path: "dashboard",
    Component: Dashboard,
    },
     {
    path: "table",
    element: <div>table page</div>
        },
        { 
    path: "billing",
    Component: Billing
    
  },

  { 
    path: "virtual-reality",
    element: <div>Virtual page</div>
    
  },


    { 
    path: "profile",
    element: <div>Profile</div>
    
  },
    
    
  
    ]
  },
    { 
    path: "/sign-in",
    Component: SignIn

    
  },

    { 
    path: "/sign-up",
    Component: SignUp
    
    
  },

  {
    path: "*",
    Component: NotFound
  }
]);
