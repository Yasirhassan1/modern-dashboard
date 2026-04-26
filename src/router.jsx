import { createBrowserRouter } from "react-router";
import App from "./App";
import NotFound from "./components/NotFound"
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Billing from "./pages/billing/Billing";
import { VirtualReality } from "./pages/virtual-reality/VirtualReality";
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
    path: "/virtual-reality",
    Component: VirtualReality
    
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
