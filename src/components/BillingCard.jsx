import { memo } from 'react';
import Text from './Text';
const BillingCard = ({title, billingData}) => {
  return (
    <div className='p-4 flex flex-col gap-4'>
        <Text>{title}</Text>
        <ul className='flex flex-col gap-4'>
            {
            billingData.map((cur)=>(
                <li className='bg-surface-gray rounded-lg p-3 flex justify-between'>
                    <div className="left flex flex-col">
                        <Text as='span' variant='body-sm'>{billingData.title}</Text>
                        <Text as='span' className={"text-xs text-text-secondary"}>Company Name: {}</Text>
                    </div>
                </li>
                ))
            }
        </ul>

      
    </div>
  );
};

export default memo(BillingCard);