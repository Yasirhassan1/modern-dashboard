import cardImg from "../assets/card.png"
import logo from "../assets/master.webp";

import Text from './Text';

const Card = () => {
  return (
     <div className="card rounded-lg w-[353px] relative h-fit">
                   <img src={cardImg} alt="img" className='rounded-lg bg-cover w-full' />
                   <div className='p-3 h-[70%]   w-full flex flex-col gap-2 justify-between absolute z-40 bottom-1'>
                   <Text as='h3' variant='body-xl' className={"text-tertiary text-xl"}>4562     1122   4594   7852</Text>
                   <div className="lower flex gap-2 justify-between">
                       <Text as='strong' className={"text-text-secondary text-sm"}>Card Holder <br /> <Text as='span' variant='body-lg' className={"text-tertiary text-sm"}>Jack Peterson</Text></Text>
                       <Text as='strong' className={"text-text-secondary text-sm"}>Expires<br /> <Text as='span' variant='body-lg' className={"text-tertiary text-sm"}>11/22</Text></Text>
                       <img src={logo} width={40} alt="helo" />
                   </div>
                   
                    </div>
                   <div className='bg-black opacity-75 absolute z-20 h-full w-full top-0 rounded-lg'></div>
               </div>
  );
};

export default Card;