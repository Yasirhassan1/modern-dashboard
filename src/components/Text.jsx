import { twMerge } from "tailwind-merge"


export default function Text({Component = "p", variant = "default", children, className, ...props}){
    const variantStyle = {
        "body-sm": "text-[12px] text-secondary font-semibold",
        "body-md": "text-[14px] text-secondary font-semibold",
        "body-lg": "text-[20px] text-secondary font-bold",
        "body-xl": "text-[24px] text-secondary font-bold",
        "default": "",
    }
    return(
<Component {...props} className={twMerge(`${variantStyle[variant]} ${className}`)}>
{children}
</Component>  


    )
}