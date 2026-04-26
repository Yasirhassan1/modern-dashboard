import { memo } from 'react';
import { CompletionStatus } from '../../components/CompletionStatus';
import StatusSection from './components/StatusSection';
import ProjectSection from './components/ProjectSection';
import SoftUISection from './components/SoftUISection';
import ChartSection from './components/ChartSection';

const Dashboard = () => {
  return (
   <div className='flex flex-col gap-4 flex-wrap w-full'>
 <StatusSection/>
 <ProjectSection/>
 <SoftUISection/>
 <ChartSection/>
   </div>
  );
};

export default Dashboard;