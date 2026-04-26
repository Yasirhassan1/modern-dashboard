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
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3, 
      },
    ],
  };
    return(
        <div className='flex justify-center gap-3 h-fit  w-full  flex-wrap'>
            <Line data={data}/>
            <Bar data={data}/>
        </div>
    )
}