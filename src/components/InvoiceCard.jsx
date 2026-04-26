import Text from "./Text"
import { Button } from "./Button"
export function InvoiceCard({title, invoiceData}){
    return(
        <ul className="card flex flex-col gap-3 justify-between p-3 bg-tertiary rounded-lg flex-1 shadow">
            {
                invoiceData.map((cur)=>(
                    <li key={cur.id} className="flex gap-3 justify-between items-center">
                        <div className="flex flex-col gap-1">
                            <Text as="span" variant="body-sm">{cur.date}</Text>
                            <Text as="span" variant="body-xs" className={"text-text-secondary text-xs"}>{cur.id}</Text>

                        </div>
                            <Text as="span" variant="body-xs" className={"text-sm text-text-secondary"}>${cur.price}</Text>
                            <Button variant={"outlineBtn"}>{cur.button}</Button>
                    </li>
                ))
            }

        </ul>
    )
}