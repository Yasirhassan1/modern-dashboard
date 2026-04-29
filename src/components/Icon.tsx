import { twMerge } from "tailwind-merge";
interface IconProps {
    RIcon: React.ElementType,
    active?: boolean,
    className?: string
}
export default function Icon({RIcon, active = false, className}: IconProps){
    return(
       <div className={twMerge(`flex items-center justify-center shadow w-[32px] h-[32px] p-2 rounded-lg ${active ? "bg-primary": "bg-tertiary"} ${className}`)}>
        <RIcon className={twMerge(`${active ? "text-tertiary": "text-secondary"}`)} /> 
       </div>
    )
}

