import { memo } from 'react';

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";



interface TableProps {
  tTitle: string,
  tHeads: any[],
  tData: any[]
}


const Table = ({ tTitle, tHeads, tData }: TableProps) => {
  const table = useReactTable({
    data: tData,
    columns: tHeads,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="transition-all w-fit bg-tertiary  md:w-full flex flex-col gap-2 ease duration-300 rounded-lg p-2 md:p-4  mt-2  shadow  justify-center ">
      <h2 className='text-lg font-semibold text-text-primary'>{tTitle}</h2>
      <div className='overflow-x-auto max-w-[336bpx] md:max-w-full'>
      <table className='border-collapse w-full min-w-max'>
        <thead className='text-left'>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className='border-t   border-surface-gray text-text-secondary' key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className='p-2 text-[12px]' colSpan={header.colSpan} key={header.id}>
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
    


    </div>
  );
};

export default memo(Table);