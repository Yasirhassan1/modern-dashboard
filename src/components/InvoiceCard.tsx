import Text from "./Text"
import { Button } from "./Button"
interface InvoiceCardProps {
    title: string,
    invoiceData: {
        id: string,
        date: string,
        price: string,
        button: string
    }[]
}

export function InvoiceCard({title, invoiceData}: InvoiceCardProps){
    return(
        <ul className="card flex flex-col gap-3 justify-between p-3 bg-tertiary rounded-lg flex-1 shadow">
            {
                invoiceData.map((cur)=>(
                    <li key={cur.id} className="flex gap-3 justify-between items-center p-3 bg-surface-gray rounded-lg">
                        <div className="flex flex-col gap-1 ">
                            <Text as="span" variant="body-sm">{cur.date}</Text>
                            <Text as="span" variant="body-sm" className={"text-text-secondary text-xs"}>{cur.id}</Text>

                        </div>
                            <Text as="span" variant="body-sm" className={"text-sm text-text-secondary"}>${cur.price}</Text>
                            <Button variant={"outlineBtn"}>{cur.button}</Button>
                    </li>
                ))
            }

        </ul>
    )
}