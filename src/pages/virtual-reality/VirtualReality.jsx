import backImg from "../../assets/vir.jpg"
import Text from "../../components/Text";
import { Sidebar } from "../../components/Sidebar";
import { useState } from "react";
import {useDraggable} from '@dnd-kit/react';
import ReactDOM from 'react-dom';

export function VirtualReality(){

      const [isMenuOpen, setIsMenuOpen] = useState(false)
      const [isRTL, setIsRTL] = useState(false)
       const {ref} = useDraggable({
    id: 'draggable',
  });
    
    return(
    <div className="relative min-h-screen"> 
   
  
  <div  className="sticky top-30 left-12 z-50 w-64">
   
            <Sidebar ref={ref} className={""} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isRTL={isRTL} setIsRTL={setIsRTL} hasDocumentation={false}/>
            </div>
            <div className=""> {/* Negative margin if you want it to overlap the image */}
    <img src={backImg} className="rounded-lg w-full absolute top-0" />
  </div>

  <div class="col-lg-4 col-md-4 absolute left-1/2 bg-tertiary  hover:scale-110 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg  max-w-72">
                  <div class="card move-on-hover overflow-hidden flex flex-col gap-4 p-4 ">
                    <div class="card-body flex flex-col gap-4">
                      <div class="flex">
                        <h6 class="mb-0 me-3">08:00</h6>
                        <h6 class="mb-0">Synk up with Mark <br />
                          <small class="text-secondary font-weight-normal">Hangouts</small>
                        </h6>
                      </div>
                      <hr class="horizontal dark"/>
                      <div class="d-flex">
                        <h6 class="mb-0 me-3">09:30</h6>
                        <h6 class="mb-0">Gym
                          <small class="text-secondary font-weight-normal">World Class</small>
                        </h6>
                      </div>
                      <hr class="horizontal dark"/>
                      <div class="d-flex">
                        <h6 class="mb-0 me-3">11:00</h6>
                        <h6 class="mb-0">Design Review
                          <small class="text-secondary font-weight-normal">Zoom</small>
                        </h6>
                      </div>
                    </div>
                    <a href="javascript:;" class="bg-gray-100 w-100 text-center py-1" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Show More" data-bs-original-title="Show More">
                      <i class="fas fa-chevron-down text-primary"></i>
                    </a>
                  </div>
                </div>


  
            </div>

    
    )
}