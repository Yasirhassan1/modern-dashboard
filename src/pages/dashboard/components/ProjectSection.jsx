import { memo } from 'react';
// import ProjectTable from '../../../components/ProjectTable';
import { tableData } from '../data/data';
import Text from '../../../components/Text';
const ProjectSection = () => {
  return (
    <div className='flex flex-col gap-3 bg-tertiary p-4 rounded-lg shadow'>
        <Text as='strong' variant='body-md'>Projects</Text>
        <Text as='span' variant='body-sm' className={"text-text-secondary"}>30 done this month</Text>
  {/* <ProjectTable tHeads={tableData.tHeads} tData = {tableData.tData} /> */}
  </div>
  );
};

export default memo(ProjectSection);