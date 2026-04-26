import { memo } from "react"
import Text from "./Text"
import { Button } from "./Button"
import { Link } from "react-router"
import { IoMenu } from "react-icons/io5"
import { useTheme } from "../hooks/useTheme"
import { useLanguage } from "../hooks/useTranslation"
import { useTranslation } from "react-i18next"

export const Header = ({setIsMenuOpen, setIsRTL})=>{
     const {i18n, t} = useTranslation();

     const [onThemeChange] = useTheme("light");
    function openCloseMenu(){ 
        setIsMenuOpen((prev)=>!prev)
    }

    function onLanguageChange(e){
         const lan = e.target.value;
    
        localStorage.setItem("language", lan);
        if(lan === "ur"){
            setIsRTL(true)

        }
        else{
            setIsRTL(false)
        }
        i18n.changeLanguage(lan);
    }
    return(
        <header className={`lg:col-start-2 flex justify-between flex-wrap p-4   items-center    w-full h-fit`}>
            <div className="flex flex-col">
                <div className="top flex gap-4">
            <Text as="span" variant="body-md" className={"text-text-secondary font-medium"}>{t("dashboard.header.pages")}</Text>
            <Text as="span" variant="body-md" className={"text-text-secondary font-medium"}> / {t("dashboard.header.pages")}</Text>
        
            </div>

              <Text as="strong" variant="body-lg" className={"text-text-secondary font-medium"}>{t("dashboard.header.pages")}</Text>
        
      
            </div>
            <div className={`right flex  gap-3 items-center flex-wrap`}>
            <form action="" className="">
                <input type="text" className="border bg-tertiary text-text-secondary border-gray-200 p-2 rounded-md" placeholder={t("dashboard.header.search_placeholder")} />
            </form>
            <Button variant={"outlineBtn"}>{t("dashboard.header.online_builder")}</Button>
            <Link to={"/sign-in"} className="bg-primary py-2 px-4 text-tertiary rounded-lg">{t("dashboard.header.sign_in_btn")}</Link>
               <select  onChange={onThemeChange} value={localStorage.getItem("theme")||"light"} name="" id="mode" className="transition-all bg-tertiary  ease duration-300 border-input-border rounded-lg border p-2 text-text-secondary">
                    <option value="light">light</option>
                    <option value="dark">dark</option>
                </select>

                 <select  onChange={(e)=>onLanguageChange(e)} value={i18n.language} name=""  className="transition-all  ease duration-300 bg-tertiary border-input-border rounded-lg border p-2 text-text-secondary">
                    <option value="en">English</option>
                    <option value="ur">Urdu</option>
                </select>
            <IoMenu onClick={()=>{openCloseMenu()}} className="lg:hidden text-secondary text-xl sm:text-2xl"/>
              
            </div>
            
        </header>
    )
}

export default memo(Header)