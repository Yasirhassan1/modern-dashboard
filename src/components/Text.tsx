import { twMerge } from "tailwind-merge"
interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variant?: "body-sm" | "body-md" | "body-lg" | "body-xl" | "default";
  children?: React.ReactNode;
}

export default function Text({as:Component = "p", variant = "default", children, className, ...props}: TextProps){
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