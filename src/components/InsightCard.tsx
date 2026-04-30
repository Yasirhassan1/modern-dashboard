import { CompletionStatus } from "./CompletionStatus";
import Text from "./Text";
import Icon from "./Icon";
interface InsightCardProps {
    icon: React.ElementType,
    title: string,
    value: string,
    percentage: number,
    className?: string
}
export function InsightCard({ icon, title, value, percentage, className }: InsightCardProps){
    return(
    <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-2 items-center">
        <Icon  RIcon={icon} active={true} className={`w-7.5 h-7.5 rounded-lg text-tertiary ${className}`}/>
<Text as="strong" variant="body-sm">{title}</Text>

</div>
<Text as="strong" variant="body-xl" className="self-start">{value}</Text>
<CompletionStatus percentage={percentage} title={""} className2="bg-secondary" />
    </div>
    )
}