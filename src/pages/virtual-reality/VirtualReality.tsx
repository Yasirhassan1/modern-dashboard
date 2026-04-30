import backImg from "../../assets/vir.jpg"
import Text from "../../components/Text";
import { Sidebar } from "../../components/Sidebar";
import { useState } from "react";
import {useDraggable} from '@dnd-kit/react';

import patternImg from "../../assets/pattern.jpg"


export function VirtualReality(){
      const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
      const [isRTL, setIsRTL] = useState<boolean>(false)
       const {ref} = useDraggable({
    id: 'draggable',
  });

    
    
    return(
    <div className="relative min-h-screen"> 
   
  
  <div  className="sticky top-[120px] left-12 z-50 w-64">
   
            <Sidebar ref={ref} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isRTL={isRTL} setIsRTL={setIsRTL} hasDocumentation={false}/>
            </div>  
            <div className=""> 
    <img src={backImg} className="rounded-lg w-full absolute top-0" alt="background_img" />
  </div>

  <div className="absolute left-1/2 -translate-x-1/2 flex gap-4">

<div className="bg-tertiary  p-3 rounded-lg hover:scale-105 transition-transform duration-300">
  <ul className="flex flex-col gap-4">
    <li className="flex gap-5">
      <Text as="h4" variant="body-sm">8:00</Text>
      <Text as="h4" variant="body-sm">Synk up with Mark <br /> <span className="text-text-secondary font-normal">Hangouts</span></Text>
    
    </li>
      <hr className="border border-gray-100" />

          <li className="flex gap-5">
      <Text as="h4" variant="body-sm">09:30</Text>
      <Text as="h4" variant="body-sm">Gym <br /> <span className="text-text-secondary font-normal">World Class</span></Text>
    
    </li>
     <hr className="border border-gray-100" />

     
          <li className="flex gap-5">
      <Text as="h4" variant="body-sm">11:00</Text>
      <Text as="h4" variant="body-sm">Design Review <br /> <span className="text-text-secondary font-normal">Zoom</span></Text>
    
    </li>
  </ul>
</div>
<div className="flex flex-col gap-3 hover:scale-105 transition-transform duration-300">
<div className="todo bg-secondary p-3 rounded-lg flex flex-col gap-2 h-fit items-center">
  <Text as="h4" variant="body-sm" className={"text-tertiary"}>To Do</Text>
  <Text as="h4" variant="body-lg" className={"text-tertiary"}>7</Text>
  <Text as="span" variant="body-sm" className={"text-tertiary"}>Shopping
Meeting</Text>


</div>
<div className="bg-tertiary rounded-lg shadow p-3">
  <Text as="span" variant="body-sm" className={"text-text-secondary font-normal"}>Emails (21) Check</Text>
</div>

</div>

<div  className="relative w-[150px] hover:scale-105 transition-transform duration-300">
  <img className="w-full h-full object-cover rounded-lg" src={patternImg} alt="Pattern" />

  <div className="absolute top-0 h-full w-full bg-orange-900 opacity-80 rounded-lg"></div>
  <div className="absolute top-0 p-4 h-full flex flex-col">
      <Text as="span" variant="body-lg" className={"text-tertiary"}>Some Kind Of Blues</Text>
  <Text as="span" variant="body-sm" className={"text-tertiary font-normal"}>Deftones</Text>
  <div className="flex gap-2 flex-wrap  mt-auto">
  <div className="w-[20px] h-[20px] rounded-full border border-white bg-gray-300 opacity-45"></div>
  <div className="w-[20px] h-[20px] rounded-full border border-white bg-gray-300 opacity-45"></div>
  <div className="w-[20px] h-[20px] rounded-full border border-white bg-gray-300 opacity-45"></div>
  </div>
  </div>





</div>



</div>

  
            </div>

    
    )
}