export default function Row({current}){
    if (!current) return null;
    const {id, ...dataCell} = current;
    return(
             <tr>
               
                {
                    Object.values(dataCell).map((value, ind)=>(
                        <td key={ind}  className="border-t bg-table-row opacity-90 transition-all ease duration-200 border-gray-300 p-1 text-gray-500 min-w-[50px] max-w-[100px]">{value}</td>
                    ))
                }
        </tr>
    )
}