import { memo } from 'react';
import Text from './Text';

import Row from './Row';
const ProjectTable = ({tHeads, tData}) => {
    
  return (
   <div className="transition-all bg-tertiary flex flex-col gap-2 ease duration-300 rounded-lg  mt-2 p-3 shadow  justify-center overflow-x-auto">
        <table id="myTable" className="border-collapse  border-gray-300 p-3 rounded-2xl">
          <thead className="transition-all text-left ease duration-200 bg-table-head ">
            <tr>
              {
                tHeads.map((curHead, ind) => (
                  <Text key={ind} as='th' variant='body-sm' className="text-gray-500 border-gray-300 p-1 min-w-[50px] max-w-[100px]">{curHead}</Text>
                ))
              }
            </tr>
          </thead>
          <tbody className="bg-tertiary">
            {
              tData.map((cur, ind) => (
                   <Row key={cur.id} current={cur} />
              ))
            }
          </tbody>
  
  
        </table>
     
      </div>
  );
};

export default memo(ProjectTable);