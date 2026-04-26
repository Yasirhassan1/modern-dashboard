import { memo } from 'react';
import Text from './Text';
import { twMerge } from 'tailwind-merge';
const PriceCard = ({title, tag, price, className}) => {
  return (
    <div className={`rounded-lg p-4 bg-tertiary shadow items-center flex flex-col gap-4 justify-between ${className}`}>
        <div className="box w-[50px] h-[50px] shadow rounded-lg bg-primary"></div>
        <Text as='h4' variant='body-lg'>{title}</Text>
        <Text as='span' variant='body-sm' className={"text-text-secondary text-xs"}>{tag}</Text>
        <hr />
        <Text as='h3' variant='body-lg'>+${price}</Text>

    </div>
  );
};

export default memo(PriceCard);