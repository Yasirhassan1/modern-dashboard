import { Chart as ChartJS, BarElement, CategoryScale, PointElement, LineElement, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
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
        borderWidth: 2,
        barThickness: 20,
        borderRadius: 15,
       
        fill:false,
        tension: 0.5, 
      },
      

      
    ],

  
  };
    return(
        <div className='flex justify-between gap-3 flex-wrap   h-fit'>
            <Bar className='max-w-[450px] max-h-[250px] bg-tertiary rounded-lg p-2'  data={data2}/>
            <Line className='max-w-[450px] max-h-[250px] bg-tertiary rounded-lg p-2'   data={data}/>
        </div>
    )
}