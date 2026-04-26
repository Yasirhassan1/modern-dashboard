import Icon from "./Icon"
import { NavLink } from "react-router";
import { Link } from "react-router"
export default function NavItem({RIcon, to, children, isRTL, ...props}){
    return(
        <NavLink {...props} to={to} className="" viewTransition>
            {({isActive})=>(
                <div className={`flex ${isRTL && "flex-row-reverse"} gap-3 items-center p-2 rounded-xl ${isActive ? "bg-tertiary shadow": "bg-none"}`}>
                <Icon RIcon={RIcon} active={isActive}/>
                {children}
                </div>
            )}
        </NavLink>
    )
}