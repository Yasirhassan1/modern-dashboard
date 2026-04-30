import Text from "./Text";
interface TransactionCardProps {
    title: string;
    transactionData: {
        id: number;
        title: string;
        timming: string;
        amount: string;
    }[];
}
export function TransactionCard({title, transactionData}: TransactionCardProps){
return(
    <div className="flex flex-col gap-3 p-4 bg-tertiary rounded-lg shadow flex-1 h-fit min-w-80">
        <Text as="h3" variant="body-lg">{title}</Text>
        <ul className="flex flex-col gap-3">
          {
            transactionData.map((cur)=>(
                <li key={cur.id} className="flex gap-3 justify-between items-center p-3 bg-surface-gray rounded-lg">
                    <div className='flex gap-4'>
                   <label className='w-7.5 h-7.5 rounded-full border border-gray-400 cursor-pointer'   htmlFor={`transaction-${cur.id}`}>
                    <input  type="checkbox" id={`transaction-${cur.id}`} className="w-9 h-9 hidden rounded-full border-amber-400" />
                   </label>
                    <div className="div flex flex-col gap-1">
                        <Text as="span" variant="body-sm">{cur.title}</Text>
                        <Text as="span"  className={"text-xs text-text-secondary"}>{cur.timming}</Text>
                    </div>
                    </div>
                    <Text as="span" variant="body-sm" className={"text-text-secondary text-xs"}>{cur.amount}</Text>
                </li>
            ))

          }
        </ul>
    </div>
)
}
