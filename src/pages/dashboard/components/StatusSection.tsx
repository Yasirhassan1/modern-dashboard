import { memo } from 'react';
import { CompletionStatus } from '../../../components/CompletionStatus';
import StatusCard from '../../../components/StatusCard';
import { statusData } from '../data/data.js';
import { reviewData } from '../data/data.js';
import Text from '../../../components/Text';
import { Button } from '../../../components/Button';


const StatusSection = () => {
  return (
  <section className='r1 flex justify-between gap-4 flex-wrap'>  
   <div className='grid grid-cols-1 sm:grid-cols-[220px_220px] gap-4 h-fit' >
       {
        statusData.map((cur)=>(
            <StatusCard key={cur.id} {...cur} className={`${cur.cardColor}`}/>
        ))
       }
   </div>
   <div className='p-3 flex flex-col justify-between gap-3 shadow rounded-lg  bg-tertiary min-w-[300px] flex-1'>
    <Text as='strong' variant='body-md'>Reviews</Text>
    <div className='flex flex-col gap-3'>
   {

    reviewData.map((cur)=>(
         <CompletionStatus key={cur.id} {...cur} />
    ))
   }
   </div>
   <div className='flex gap-3 justify-between mt-4 items-center flex-wrap'>
<Text as='p' variant='body-sm' className={"text-text-secondary font-medium"}>More than 1,500,000 developers used Creative Tim's products and
over 700,000 projects were created.</Text>
<Button variant={"secondaryBtn"} className={"text-xs"}>View all reviews</Button>
   </div>
   </div>
  </section>
  );
};

export default memo(StatusSection);