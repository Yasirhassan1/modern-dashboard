import Header from './components/Header'
import { Sidebar } from './components/Sidebar'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette:{
    primary:{
      main: "#f97316"
    }
  }

})
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isRTL, setIsRTL] = useState<boolean>(false)
 const location = useLocation();
  useEffect(() => {
    if (!localStorage.getItem("email")) {
      window.location.href = "/sign-up"
    }
    if(location.pathname == "/"){
      globalThis.location.href = "/dashboard"
    }
    document.documentElement.dir = isRTL ? "rtl" : "ltr"; 


    if (isRTL) {
      document.body.classList.add("rtl-mode");
    } else {
      document.body.classList.remove("rtl-mode");
    }

  }, [isRTL]);



  return (
<ThemeProvider theme={theme}>
    <div className="flex  gap-3 max-w-480 mx-auto">
      <Sidebar className={`fixed ${isRTL ? "right-0" : "left-0"} top-0  h-screen`} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isRTL={isRTL} setIsRTL={setIsRTL} hasDocumentation={true} />
      <main className={`flex flex-wrap gap-3  px-4 ${isRTL ? "lg:mr-62.5" : "lg:ml-62.5"}  h-full`}>
        <Header setIsMenuOpen={setIsMenuOpen} setIsRTL={setIsRTL} />
        <Outlet />
        <Footer />
      </main>
    </div>
    </ThemeProvider>

  )
}


export default App;



