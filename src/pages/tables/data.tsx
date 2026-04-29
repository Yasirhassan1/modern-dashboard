import Text from "../../components/Text"
import { CompletionStatus } from "../../components/CompletionStatus"
import slackLogo from "../../assets/slackLogo.svg"
import spotifyLogo from "../../assets/spotifyLogo.svg"
import inDesignLogo from "../../assets/inDesignLogo.svg"
import xd from "../../assets/xd.svg"
import limeLogo from "../../assets/limeLogo.svg"
import profilePic1 from "../../assets/user1.svg"
import profilePic2 from "../../assets/user2.svg"
import profilePic3 from "../../assets/user3.svg"
import { Status } from "../../components/Status"

export const projectTable = {
   
        title: "Projects table",
       columns: [
                  {
                    accessorKey: "projects", 
                    header: "PROJECTS", 
                    cell: (info: any) =>(
                      <div className="flex items-center gap-4">
                        <img src={info.getValue().logo} alt={info.getValue().name} className="w-6 h-6" />
                        <Text as='span' variant='body-md' className={"text-text-secondary font-semibold"}>{info.getValue().name}</Text>
                        
                      </div>
                    )
                  },
                  {
                    accessorKey: "budget",
                    header: "BUDGET",
                    cell: (info: any) => (
                        <Text as='span' variant='body-md' className={"text-text-secondary font-semibold"}>${info.getValue()}</Text> 
                      
                    ),
                  },
                  {
                    accessorKey: "status",
                    header: "STATUS",
                    cell: (info: any) => <Text as='span' variant='body-md' className={"text-text-secondary font-semibold"}>{info.getValue()}</Text>
                    
                  },
                  {
                    accessorKey: "completion",
                    header: "COMPLETION",
                    cell: (info: any) => <CompletionStatus title='' className2={info.getValue().color} percentage={info.getValue().percentage} />,
                  },
                ],
                data: [
             {
      "projects": {
        logo: spotifyLogo,
        name: "Spotify",
      },
      "budget": 2500,
      "status": "working",
      "completion": {
        color: "bg-[#09B0DB]",
        percentage: 40
      }
     },

        {
      "projects": {
        logo: inDesignLogo,
        name: "Invision",
      },
      "budget": 5000,
      "status": "Done",
      "completion": {
        color: "bg-[#09B0DB]",
        percentage: 100
      }
     },

      {
      "projects": {
        logo: limeLogo,
        name: "Jira",
      },
      "budget": 3400,
      "status": "Cancelled",
      "completion": {
        color: "bg-red-400",
        percentage: 30
      }
     },

      {
      "projects": {
        logo: slackLogo,
        name: "Slack",
      },
      "budget": 1000,
      "status": "Cancelled",
      "completion": {
        color: "bg-red-400",
        percentage: 0
      }
     },


     {
      "projects": {
        logo: xd,
        name: "Adobe XD",
      },
      "budget": 2300,
      "status": "Done",
      "completion": {
        color: "bg-green-400",
        percentage: 100
      }
     },
  
    
     
    
    ]
   }


   


   export const authorTable = {
   
        title: "Author table",
       columns: [
                 {
                   accessorKey: "author", 
                   header: "AUTHOR", 
                   cell: (info: any) =>(
                     <div className="flex items-center gap-4">
                       <img src={info.getValue().logo} alt={info.getValue().name} className="w-10 h-10" />
                       <div className="flex flex-col gap-0.5">
                       <Text as='span' variant='body-md' className={"text-text-secondary font-semibold"}>{info.getValue().name}</Text>
                       <Text as='span' variant='body-sm' className={"text-text-secondary font-normal"}>{info.getValue().email}</Text>
       
                       </div>
                       
                     </div>
                   )
                 },
       
                   {
                   accessorKey: "function", 
                   header: "FUNCTION", 
                   cell: (info: any) =>(
                     <div className="flex flex-col">
                       <Text as='span' variant='body-md' className={"text-text-secondary font-semibold"}>{info.getValue().position}</Text>
                       <Text as='span' variant='body-sm' className={"text-text-secondary font-medium"}>{info.getValue().role}</Text>
                     
                     </div>
                   )
                 },
       
                   {
                   accessorKey: "status", 
                   header: "STATUS", 
                   cell: (info: any) =>(
                    <Status status={info.getValue().name} text={info.getValue().name} />
                   )
                 },
       
                   {
                   accessorKey: "employed", 
                   header: "EMPLOYED", 
                   cell: (info: any) =>(
                       <Text as='span' variant='body-md' className={"text-text-secondary font-semibold"}>{info.getValue().name}</Text>
                       
                     
                   )
                 },
           ],
                data: [
        {
            "author": {
                logo: profilePic1,
                name: "John Michael",
                email: "john.michael@example.com"
            },
               "function":{
                position: "Manager",
                role: "Organization"
            
        },
        "status":{
            name: "Online",
        },
        "employed":{
            name: "23/04/18"    
        },
    },

      {
            "author": {
                logo: profilePic2,
                name: "Alexa Liras",
                email: "alexa@creative-tim.com"
            },
               "function":{
                position: "Programator",
                role: "Developer"
            
        },
        "status":{
            name: "Offline",
        },
        "employed":{
            name: "23/04/18"    
        },
    },

       {
            "author": {
                logo: profilePic3,
                name: "Laurent Perrier",
                email: "aurent@creative-tim.com"
            },
               "function":{
                position: "Executive",
                role: "Projects"
            
        },
        "status":{
            name: "Online",
        },
        "employed":{
            name: "19/09/17"    
        },
    },

     {
            "author": {
                logo: profilePic1,
                name: "Richard Gran",
                email: "richard.gran@example.com"
            },
               "function":{
                position: "Manager",
                role: "Organization"
            
        },
        "status":{
            name: "Offline",
        },
        "employed":{
            name: "13/03/18"    
        },
    },
     {
            "author": {
                logo: profilePic3,
                name: "Miriam Eric",
                email: "miriam.eric@example.com"
            },
               "function":{
                position: "Programtor",
                role: "Developer"
            
        },
        "status":{
            name: "Offline",
        },
        "employed":{
            name: "19/09/17"    
        },
    },
    ]
   }

