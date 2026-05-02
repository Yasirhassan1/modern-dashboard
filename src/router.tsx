import { createBrowserRouter } from "react-router";
import { lazy } from "react";
const  NotFound =  lazy(()=> import("./components/NotFound")) 
import Dashboard from  "./pages/dashboard/Dashboard";
const SignIn =  lazy(()=> import("./pages/sign-in/SignIn"));
const SignUp  =  lazy(()=> import("./pages/sign-up/SignUp"));
const Billing = lazy(()=> import("./pages/billing/Billing"));
const  VirtualReality = lazy(()=> import("./pages/virtual-reality/VirtualReality"));
const TablePage = lazy(()=> import("./pages/tables/TablePage"));
const appComponent = lazy(()=> import("./App"))
export const router = createBrowserRouter([
  {
    path: "/",
    Component: appComponent,
    children: [
      {
        path: "dashboard",
        Component: Dashboard,
      },
      {
        path: "table",
        Component: TablePage
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
