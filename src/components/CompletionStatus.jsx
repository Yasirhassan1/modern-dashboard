import { twMerge } from "tailwind-merge"
import Text from "./Text"
export const CompletionStatus = ({percentage, title, className1, className2})=>{

    return(
        <div className="flex flex-col gap-1  w-full">
            <div className="flex gap-4 justify-between">
                <Text as="strong" variant="body-sm">{title}</Text>
                <Text as="strong" variant="body-sm" className={"text-text-secondary"}>{percentage}%</Text>
            </div>
        <div  className={twMerge(`w-full h-2 bg-shape-support rounded-full flex  items-center ${className1}`)}>
            <div style={{width: `${percentage}%`}} className={twMerge(`rounded-full h-full bg-primary ${className2}`)}></div>
        </div>
        </div>
    )

}