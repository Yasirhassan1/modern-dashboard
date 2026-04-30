import { Chart as ChartJS, BarElement, CategoryScale, PointElement, LineElement, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import Text from '../../../components/Text';
import { InsightCard } from '../../../components/InsightCard';
import { FaFileAlt } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function ChartSection(){
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales Overview',
        data: [65, 59, 80, 81, 56],
          backgroundColor: [
                'rgba(249, 115, 22, 0.6)',
                'rgba(249, 115, 22, 0.6)',   
                'rgba(249, 115, 22, 0.6)'
              ],
        borderColor: 'rgb(249, 115, 22)',
        borderWidth: 2,
        fill:false,
        tension: 0.3, 
      },
      

      
    ],

  
  };

    const data2 = {
    labels: [65, 59, 80, 81, 56, 76, 102],
    datasets: [
      {
        label: 'Revenue',
        data: ["50", "200", "400", "230", "120", "340", "400", ],
          backgroundColor: [
                'rgba(249, 115, 22, 0.6)',
                'rgba(249, 115, 22, 0.6)',   
                'rgba(249, 115, 22, 0.6)'
              ],
        borderColor: 'rgb(249, 115, 22)',
        borderWidth: 1,
        barThickness: 20,
        borderRadius: 30,
       
        fill:false,
        tension: 0.5, 
      },
      

      
    ],

  

  };

  const insightData = [
    {
      icon: FaFileAlt,
      title: "Users",
      value: "36k",
      percentage: 50,
      bgColor: "bg-primary"

    },

     {
      icon: IoIosRocket,
      title: "Clicks",
      value: "2m",
      percentage: 30,
      bgColor: "bg-[#08B3D8]"

    },

      {
      icon: FaCreditCard,
      title: "Sales",
      value: "435$",
      percentage: 60,
      bgColor: "bg-yellow-500"

    },

      {
      icon: IoMdSettings,
      title: "Items",
      value: "43",
      percentage: 30,
      bgColor: "bg-pink-500"

    },

    
  ]
    return(
        <div className='flex justify-between gap-5 flex-wrap  flex-col md:flex-row   h-fit'>
          <div className='bg-tertiary p-4 rounded-lg flex flex-col gap-3 min-w-72 lg:max-w-125 flex-1'>
            <Bar className='flex-1 max-h-62.5 shadow  bg-tertiary rounded-lg p-2'  data={data2}/>
            <div className='flex flex-col'>
            <Text as='span' variant='body-sm' className={"text-text-secondary font-medium"}>Active Users</Text>
            <Text as='span' variant='body-sm' className={"text-text-secondary font-normal"}>(+23%) than last week</Text>
            </div>
            <div className='flex gap-3 justify-between mt-2 flex-wrap'>
              {insightData.map((insight, index) => (
                <InsightCard
                  key={index}
                  icon={insight.icon}
                  title={insight.title}
                  value={insight.value}
                  percentage={insight.percentage}
                  className={insight.bgColor}
                />
              ))}
            </div>

            </div>
            <div className='flex-2 lg:max-w-132.5 bg-tertiary rounded-lg p-4 min-w-75 '>
              <Text as='strong' variant='body-md' className={"text-text-primary font-medium mb-2 block"}>Sales Overview</Text>
              <Text as='strong' variant='body-sm' className={"text-text-secondary font-medium mb-2 "}>4% more in 2021</Text>
              
            <Line className='max-h-62.5    bg-tertiary rounded-lg p-2 mt-7'   data={data}/>
            </div>
        </div>
    )
}