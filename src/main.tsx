import { createRoot } from 'react-dom/client'
import "./index.css"
import { RouterProvider } from "react-router";
import { router } from './router';
// import { StrictMode } from 'react';
import "./translationConfig.js"


createRoot(document.getElementById('root') as HTMLElement).render(
    //  <StrictMode>
<RouterProvider router={router} />
//  </StrictMode>,
)
    