import { memo } from 'react';

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";



interface ProjectTableProps{
  tHeads:any[],
  tData:any[]
}


const ProjectTable = ({tHeads, tData}:ProjectTableProps) => {
  const table = useReactTable({
    data: tData, 
    columns: tHeads, 
    getCoreRowModel: getCoreRowModel(), 
  });
  return (
   <div className="transition-all bg-tertiary flex flex-col gap-2 ease duration-300 rounded-lg p-4  mt-2  shadow  justify-center overflow-x-auto">
  
      {/* Render the table */}
      <table className='border-collapse w-full min-w-[600px] overflow-x-scroll'>
        <thead className='text-left'>
          {/* Render table headers */}
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className='border-t   border-surface-gray text-text-secondary' key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className='p-2' colSpan={header.colSpan} key={header.id}>
                  {/* Render header content or leave blank if it's a placeholder */}
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header, // Header definition
                        header.getContext() // Context for the header
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='text-left'>
          {/* Render table rows */}
          {table.getRowModel().rows.map((row) => (
            <tr className='border-t border-surface-gray text-text-secondary' key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className='p-4 border-b border-surface-gray ' key={cell.id}>
                  {/* Render each cell's content */}
                  {flexRender(
                    cell.column.columnDef.cell, // Cell definition
                    cell.getContext() // Context for the cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
   
     
      </div>
  );
};

export default memo(ProjectTable);