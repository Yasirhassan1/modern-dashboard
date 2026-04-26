import { memo } from 'react';
import Icon from './Icon';
import { twMerge } from 'tailwind-merge';
import Text from './Text';

const StatusCard = ({icon, activeUsers, title, percentage, className}) => {
  return (
    <div className={twMerge(`p-3 flex flex-col gap-3 rounded-lg h-fit ${className}`)}>
        <Icon RIcon={icon} className={"rounded-full w-[40px] h-[40px]"}/>
        <div className="bottom flex flex-col gap-3">
            <div className="top w-full flex justify-between gap-2 items-center">
            <Text as='strong' variant='body-xl' className={"text-tertiary"}>{activeUsers}</Text>
            <Text as='span' variant='body-sm' className={"text-tertiary"}>+{percentage}%</Text>
            </div>
             <Text as='small' variant='body-sm' className={"text-tertiary"}>{title}</Text>

        </div>

      
    </div>
  );
};

export default memo(StatusCard);