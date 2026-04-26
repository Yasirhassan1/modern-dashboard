import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import Footer from './components/Footer'
import { Button } from './components/Button'
import { Outlet } from 'react-router'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isRTL, setIsRTL] = useState(false)

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    if (isRTL) {
        document.body.classList.add("rtl-mode");
    } else {
        document.body.classList.remove("rtl-mode");
    }
}, [isRTL]);

useEffect(()=>{
  if(!localStorage.getItem("email")){
    window.location.href = "/sign-up"
  }

}, [])

  return (
//   <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] lg:grid-cols-[250px_1fr] lg:grid-rows-[auto_1fr_auto] min-h-screen gap-3 max-w-[1920px] mx-auto">
//  <Header setIsMenuOpen={setIsMenuOpen}/>
//  <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
//  <main className='flex flex-wrap gap-3 lg:col-start-2 px-5'>
// <Outlet/>
//  </main>
//  <Footer/>
//   </div>

  <div className="flex  gap-3 max-w-[1920px] mx-auto">
 <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isRTL={isRTL} setIsRTL={setIsRTL}/>
 <main className={`flex flex-wrap gap-3 lg:col-start-2 px-5 ${isRTL? "lg:mr-[250px]": "lg:ml-[250px]"}  h-full`}>
 <Header setIsMenuOpen={setIsMenuOpen} setIsRTL={setIsRTL}/>
<Outlet/>
 <Footer/>
 </main>
  </div>
  )
}

export default App;



