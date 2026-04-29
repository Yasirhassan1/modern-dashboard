import { FaHome } from "react-icons/fa"
import { MdTableChart } from "react-icons/md";
import { TbCreditCardFilled } from "react-icons/tb";
import { IoLogoDropbox } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { FaArrowsLeftRightToLine } from "react-icons/fa6"; 

export const navData = [
    {
        id: "dkjf",
        icon: FaHome,
        title: "dashboard",
        to: "/dashboard",
        type: "link"
        
    },

      {
        id:"nern",
        icon: MdTableChart,
        title: "tables",
        to: "/table",
        type: "link"
    },

    {
        id: "ner3",
        icon: TbCreditCardFilled,
        title: "billing",
        to: "/billing",
        type:"link"
      
    },

        {
        id: "ner334f",
        icon: IoLogoDropbox,
        title: "virtual_reality",
        to: "/virtual-reality",
        type:"link"
        
    },

      {
        id: "dkfe",
        icon: FaArrowsLeftRightToLine,
        title: "rtl",
        to: "/rtl",
        type: "action",
        actionType: "toggleRTL"
        
    },

      {
        id: "dfj334",
        icon: FaUser,
        title: "profile",
        to: "/profile",
        type: "link"
       
    },

      {
        id: "dkfj3",
        icon: FaSignInAlt,
        title: "sign_in",
        to: "/sign-in",
        type: "link"
       
    },

     {
        id: "ekjre3",
        icon: IoIosRocket,
        title: "sign_up",
        to: "/sign-up",
        type: "link"
       
    },
]
