import { memo } from 'react';
import Text from './Text';
import { twMerge } from 'tailwind-merge';
interface PriceCardProps {
    title: string,
    tag: string,
    price: string,
    className?: string
}
const PriceCard = ({title, tag, price, className}:PriceCardProps) => {
  return (
    <div className={twMerge(`rounded-lg p-4 bg-tertiary shadow items-center flex flex-col gap-4 justify-between ${className}`)}>
        <div className="box w-12.5 h-12.5 shadow rounded-lg bg-primary"></div>
        <Text as='h4' variant='body-lg'>{title}</Text>
        <Text as='span' variant='body-sm' className={"text-text-secondary text-xs"}>{tag}</Text>
        <hr />
        <Text as='h3' variant='body-lg'>+${price}</Text>

    </div>
  );
};

export default memo(PriceCard);