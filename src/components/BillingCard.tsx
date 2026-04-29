import Text from './Text';
import { Button } from './Button';
interface BillingCardProps {
    title: string;
    billingData: {
        title: string;
        companyName: string;
        emailAddress: string;
        vatNumber: string;
    }[];
}
const BillingCard = ({title, billingData}: BillingCardProps) => {
  return (
    <div className='p-4 flex flex-col gap-4 bg-tertiary rounded-lg shadow flex-1'>
        <Text as='h3' variant='body-lg'>{title}</Text>
        <ul className='flex flex-col gap-4'>
            {
            billingData.map((cur, ind)=>(
                <li key={ind} className='bg-surface-gray rounded-lg p-5 flex justify-between gap-5 items-center'>
                    <div className="left flex flex-col gap-2">
                        <Text as='span' variant='body-md'>{cur.title}</Text>
                        <Text as='span' className={"text-xs text-text-secondary mt-3.5"} >Company Name: <span className='font-semibold'>{cur.companyName}</span></Text>
                        <Text as='span' className={"text-xs text-text-secondary"}>Email Address: <span className='font-semibold'>{cur.emailAddress}</span></Text>
                        <Text as='span' className={"text-xs text-text-secondary"}>VAT Number: <span className='font-semibold'>{cur.vatNumber}</span></Text>
                    </div>
                    <div className="buttons flex gap-4">
                        <Button variant={"outlineBtn"}>Delete</Button>
                        <Button variant={"outlineBtn"}>Edit</Button>
                    </div>
                </li>
                ))
            }
        </ul>

      
    </div>
  );
};

export default BillingCard;