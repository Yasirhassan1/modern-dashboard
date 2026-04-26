// import { statusData } from '../data/statusData.js';
import { FaUser } from 'react-icons/fa';
import { TbPointerFilled } from "react-icons/tb";
import { MdShoppingCart } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import xdIcon from "../../../assets/xd.svg"
import memIcon from "../../../assets/member.svg"

export const statusData = [
    {
        id: "klfj3",
        icon: FaUser,
        activeUsers: 1600,
        title: "Users Active",
        percentage:55,
        cardColor: "bg-primary"

    },

     {
         id: "dfkje",
        icon: TbPointerFilled,
        activeUsers: 357,
        title: "Click Events",
        percentage:124,
         cardColor: "bg-secondary"

    },
     {
         id: "dfjhef",
        icon: MdShoppingCart,
        activeUsers: 2300,
        title: "Purchases",
        percentage:15,
         cardColor: "bg-secondary"

    },

      {
         id: "ejrhjke",
        icon: BiSolidLike,
        activeUsers: 940,
        title: "Likes",
        percentage:90,
         cardColor: "bg-secondary"

    },
]

export const reviewData = [
    {
        id: "dkjfh34",
        title: "Positive Review",
        percentage: 80,

    },

     {
         id: "dfen343",
        title: "Neutral Reviews",
        percentage: 20,

    },
    {
         id: "3432f",
        title: "Negative Reviews",
        percentage: 10,

    },
    
]



export const tableData ={
    tHeads:["COMPANIES", "MEMBERS", "BUDGET", "COMPLETION"],
    tData: [

        {
            id: "r1",
            companies: {
                logo: xdIcon,
                title: "Soft UI XD Version"
            },
            members: [memIcon],
            budget: "$20,500",
            completion: 60,
         
        },

      
    ]

       
}
