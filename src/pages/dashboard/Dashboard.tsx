import StatusSection from './components/StatusSection';
import SoftUISection from './components/SoftUISection';
import ChartSection from './components/ChartSection';
import ProjectTable from '../../components/Table';

import xd from "../../assets/xd.svg"
import limeLogo from "../../assets/limeLogo.svg"
import { CompletionStatus } from '../../components/CompletionStatus';
import memberLogo  from "../../assets/member.svg"
import slackLogo from "../../assets/slackLogo.svg"
import spotifyLogo from "../../assets/spotifyLogo.svg"
import digitalCurrencyLogo from "../../assets/digitalCurrencyLogo.svg"
import inDesignLogo from "../../assets/inDesignLogo.svg"
import Text from '../../components/Text';


const Dashboard = () => {

  const columns =[
      {
        accessorKey: "companies", // Accessor key for the "name" field from data object
        header: "COMPANIES", 
        cell: (info: any) =>(
          <div className="flex items-center gap-4">
            <img src={info.getValue().logo} alt={info.getValue().name} className="w-6 h-6" />
            <Text as='span' variant='body-md' className={"text-text-secondary font-semibold"}>{info.getValue().name}</Text>
            
          </div>
        )
      },
      {
        accessorKey: "members",
        header: "MEMBERS",
        cell: (info: any) => (
          <div className="flex gap-2">
            {info.getValue().map((logo: string, index: number) => (
              <img key={index} src={logo} alt={`Member ${index + 1}`} className="w-6 h-6 hover:scale-110" />
            ))}
          </div>
          
        ),
      },
      {
        accessorKey: "budget",
        header: "BUDGET",
        cell: (info: any) => <Text as='span' variant='body-md' className={"text-text-secondary font-semibold"}>${info.getValue()}</Text>
        
      },
      {
        accessorKey: "completion",
        header: "COMPLETION",
        cell: (info: any) => <CompletionStatus title='' className2={info.getValue().color} percentage={info.getValue().percentage} />,
      },
    ]





    const data = [
 {
  "companies": {
    logo: xd,
    name: "Soft UI XD Version",
  },
  "members": [
   memberLogo, memberLogo, memberLogo, memberLogo
  ],
  "budget": 2400,
  "completion": {
    color: "bg-[#09B0DB]",
    percentage: 60
  }
 },

  {
  "companies": {
    logo: limeLogo,
    name: "Add Progress Track ",
  },
  "members": [
   memberLogo, memberLogo, memberLogo
  ],
  "budget": 3000,
  "completion": {
    color: "bg-[#09B0DB]",
    percentage: 10
  }
 },

   {
  "companies": {
    logo: slackLogo,
    name: "Fix Platform Errors",
  },
  "members": [
   memberLogo, memberLogo, memberLogo
  ],
  "budget": 3000,
  "completion": {
    color: "bg-green-400",
    percentage: 100
  }
 },

   {
  "companies": {
    logo: spotifyLogo,
    name: "Launch our Mobile App",
  },
  "members": [
   memberLogo, memberLogo
  ],
  "budget": 20500,
  "completion": {
    color: "bg-green-400",
    percentage: 100
  }
 },


  {
  "companies": {
    logo: digitalCurrencyLogo,
    name: "Add the New Pricing Page",
  },
  "members": [
   memberLogo, memberLogo
  ],
  "budget": 500,
  "completion": {
    color: "bg-[#09B0DB]",
    percentage: 25
  }
 },

  {
  "companies": {
    logo: inDesignLogo,
    name: "Redesign New Online Shop",
  },
  "members": [
   memberLogo, memberLogo
  ],
  "budget": 2000,
  "completion": {
    color: "bg-[#09B0DB]",
    percentage: 40
  }
 },

];
  return (
   <div className='flex flex-col gap-4 flex-wrap w-full'>
 <StatusSection/>
 <SoftUISection/>
 <ProjectTable tTitle="Projects" tHeads={columns} tData={data} />
 <ChartSection/>
   </div>
  );
};

export default Dashboard;