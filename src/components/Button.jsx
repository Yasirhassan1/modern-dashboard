import { twMerge } from "tailwind-merge";

export function Button({variant, children, className, ...props}){
    const brandingStyle = {
        primaryBtn: "bg-primary text-white",
        secondaryBtn: "bg-secondary text-white",
        outlineBtn: "border border-primary text-primary text-sm"

    }
    return(
        <button {...props} className={twMerge(`py-2 px-4 rounded-lg font-semibold text-sm h-fit ${brandingStyle[variant]} ${className}`)}>
         {children}
        </button>
    )
}