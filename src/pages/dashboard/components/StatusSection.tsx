import { memo } from 'react';
import { CompletionStatus } from '../../../components/CompletionStatus';
import StatusCard from '../../../components/StatusCard';
import { statusData } from '../data/data.js';
import { reviewData } from '../data/data.js';
import Text from '../../../components/Text';
import { Button } from '../../../components/Button';
import { useTranslation } from 'react-i18next';


const StatusSection = () => {
        const { t } = useTranslation();
    
  return (
  <section className='r1 flex justify-between gap-4 flex-wrap'>
   <div className='grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-4 h-fit flex-1' >
       {
        statusData.map((cur)=>(
            <StatusCard key={cur.id}  {...cur}  title={t(`dashboard.main.statistics.${cur.id}.title`)} activeUsers={Number(t(`dashboard.main.statistics.${cur.id}.value`))} percentage={t(`dashboard.main.statistics.${cur.id}.trend`)} className={`${cur.cardColor}`}/>
        ))
       }
   </div>
   <div className='p-3 flex flex-col justify-between gap-3 shadow rounded-lg  bg-tertiary min-w-[300px] flex-1'>
    <Text as='strong' variant='body-md'>{t(`dashboard.main.reviews_panel.title`)}</Text>
    <div className='flex flex-col gap-3'>
   {

    reviewData.map((cur)=>(
         <CompletionStatus key={cur.id} {...cur} title={t(`dashboard.main.reviews_panel.ratings.${cur.id}.title`)} percentage={Number(t(`dashboard.main.reviews_panel.ratings.${cur.id}.value`))} />
    ))
   }
   </div>
   <div className='flex gap-3 justify-between mt-4 items-center flex-wrap'>
<Text as='p' variant='body-sm' className={"text-text-secondary font-medium"}>{t(`dashboard.main.reviews_panel.description`)}</Text>
<Button variant={"secondaryBtn"} className={"text-xs"}>{t(`dashboard.main.reviews_panel.cta_button`)}</Button>
   </div>
   </div>
  </section>
  );
};

export default memo(StatusSection);