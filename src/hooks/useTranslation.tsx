import { useTranslation } from "react-i18next";
import { useEffect } from "react";
export function useLanguage(){
       const {i18n} = useTranslation();
    
        useEffect(()=>{
            const language = localStorage.getItem("language")
            if(language){
                i18n.changeLanguage(language)
            }
        }, []);

        return {i18n};

}