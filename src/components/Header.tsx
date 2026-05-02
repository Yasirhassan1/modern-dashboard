import { memo } from "react"
import Text from "./Text"
// import { Button } from "./Button"
import { Link } from "react-router"
import { IoMenu } from "react-icons/io5"
import { useTheme } from "../hooks/useTheme"
import { useTranslation } from "react-i18next"
import Select from '@mui/material/Select';
import { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"

interface HeaderProps{
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setIsRTL: React.Dispatch<React.SetStateAction<boolean>>
}
export const Header = ({setIsMenuOpen, setIsRTL}: HeaderProps)=>{
     const {i18n, t} = useTranslation();

     const [onThemeChange] = useTheme("light");
    function openCloseMenu(){ 
        setIsMenuOpen((prev)=>!prev)
    }

    function onLanguageChange(e: SelectChangeEvent){
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
        <header className={`flex justify-between flex-wrap p-4  items-center  w-full h-fit`}>
            <div className="flex flex-col">
                <div className="top flex gap-4">
            <Text as="span" variant="body-md" className={"text-text-secondary font-medium"}>{t("dashboard.header.pages")}</Text>
            <Text as="span" variant="body-md" className={"text-text-secondary font-medium"}> / {t("dashboard.header.pages")}</Text>
        
            </div>

              <Text as="strong" variant="body-lg" className={"text-text-secondary font-medium"}>{t("dashboard.header.pages")}</Text>
        
      
            </div>
            <div className={`right   gap-3 items-center flex-wrap flex`}>
            <form action="" className="hidden sm:block">
            <TextField
            placeholder="Search"
  id="outlined-basic"
  label="search"
  variant="outlined"
  sx={{
    borderRadius: "0.7rem",
    "& .MuiOutlinedInput-root": {
      padding: "0px 0px",
      color: "var(--color-text-secondary)",
      borderRadius: "0.7rem",
      // The normal border
      "& fieldset": {
        borderColor: "var(--color-input-border)",
      },
   
    },
  }}
/>
            </form>

            <Button variant={"outlined"} sx={{
            }}>{t("dashboard.header.online_builder")}</Button>
            <Button variant="contained" href="/sign-in" sx={{
                color: "white"
            }}>
  {t("dashboard.header.sign_in_btn")}
</Button>
            {/* <Link to={"/sign-in"} className="bg-primary py-2 px-4 text-tertiary rounded-lg">{t("dashboard.header.sign_in_btn")}</Link> */}
              
                {/* <Select
                size="small"
          labelId="demo-simple-select-label"
           sx = {{
            borderRadius:"0.5rem",
         
             
           
        }}
          id="demo-simple-select"
          value={localStorage.getItem("theme")||"light"}
          label="Theme"
          onChange={(e) => onThemeChange(e)}

        >
          <MenuItem value={"light"}>light</MenuItem>
          <MenuItem value={"dark"}>dark</MenuItem>
        </Select> */}
        <FormControl size="small" sx={{ m: 1, minWidth: 120 }}>
  {/* 1. The visible label */}
  <InputLabel id="theme-select-label">Theme</InputLabel>
  
  <Select
    labelId="theme-select-label"
    id="demo-simple-select"
    value={localStorage.getItem("theme") || "light"}

    label="Theme" 
    onChange={(e: SelectChangeEvent<string>) => onThemeChange(e)}
    sx={{ borderRadius: "0.5rem",
        color:"var(--color-text-secondary)",
              "& fieldset": {
        borderColor: "var(--color-input-border)",
      },
     }}
  >
    <MenuItem value={"light"}>light</MenuItem>
    <MenuItem value={"dark"}>dark</MenuItem>
  </Select>
</FormControl>
               
               {/* <select  onChange={onThemeChange} value={localStorage.getItem("theme")||"light"} name="" id="mode" className="transition-all bg-tertiary  ease duration-300 border-input-border rounded-lg border p-2 text-text-secondary">
                    <option value="light">light</option>
                    <option value="dark">dark</option>
                </select> */}

  
           <FormControl size="small">
  <InputLabel id="demo-simple-se-label" sx={{ color: "var(--color-text-secondary)" }}>
    Language
  </InputLabel>
  <Select
    labelId="demo-simple-se-label"
    id="demo-simple"
    label="Language"
    value={i18n.language}
    onChange={(e) => onLanguageChange(e)}
    sx={{
      borderRadius: "0.5rem",
      color: "var(--color-text-secondary)",
      // Target the border specifically for focus/active states
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--color-primary)",
        borderWidth: "2px",
      },
      // Ensures the hover state doesn't override your primary color
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--color-primary)",
      },
    }}
  >
    <MenuItem value={"en"}>English</MenuItem>
    <MenuItem value={"ur"}>Urdu</MenuItem>
  </Select>
</FormControl>
        
                 {/* <select onChange={(e)=>onLanguageChange(e)} value={i18n.language} name=""  className="transition-all  ease duration-300 bg-tertiary border-input-border rounded-lg border p-2 text-text-secondary">
                    <option value="en">English</option>
                    <option value="ur">Urdu</option>
                </select> */}
           
              <IoMenu onClick={()=>{openCloseMenu()}} className="lg:hidden text-secondary text-xl sm:text-2xl"/>
            </div>
             
            
        </header>
    )
}

export default memo(Header)