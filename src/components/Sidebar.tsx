import NavItem from "./NavItem";
import { PiGraph } from "react-icons/pi";
import Text from "./Text"
import Icon from "./Icon";
import { GrDiamond } from "react-icons/gr";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { navData } from "../navData";

interface SidebarProps extends React.ComponentProps<"aside"> {
    isMenuOpen: boolean,
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isRTL: boolean,
    setIsRTL: React.Dispatch<React.SetStateAction<boolean>>,
    hasDocumentation?: boolean,
    className?: string
}
export function Sidebar({ isMenuOpen, setIsMenuOpen, isRTL, setIsRTL, hasDocumentation, className, ...props }: SidebarProps) {
    const { t } = useTranslation();

    let transformClass = isMenuOpen ? "translate-x-0" : "-translate-x-full";
    if (!isMenuOpen) {
        transformClass = isRTL ? "translate-x-full" : "-translate-x-full";
    }

    function handleRTL() {
        setIsRTL(!isRTL)
        localStorage.setItem("rtl", !isRTL ? "true" : "false")

    }

    return (

        <aside {...props} className={twMerge(` w-[250px] rounded-lg shadow-lg
  transform  ${transformClass}  lg:translate-x-0 
  transition-transform duration-300 bg-base p-3 z-50 ${className}`)}>
            <div className="relative  h-full">
                <div className="flex gap-3 items-center pl-4">
                    <PiGraph className="text-3xl text-secondary" />
                    <Text as="h2" className={"text-lg font-bold text-secondary"}>Soft-UI</Text>
                    <hr />
                </div>
                <nav className="flex flex-col gap-3 mt-5  max-h-[300px] 2xl:max-h-[430px]  overflow-y-scroll p-2">
                    {
                        navData.map((cur) => {
                            if (cur.type === "link") {
                                return (<NavItem onClick={() => { setIsMenuOpen(false) }} key={cur.id} RIcon={cur.icon} to={cur.to} isRTL={isRTL}>
                                    <Text as="span" variant="body-sm">{t(`dashboard.sidebar.${cur.title}`)}</Text>
                                </NavItem>)
                            }
                            if (cur.type === "action") {
                                return (
                                    <button onClick={() => { handleRTL() }} className="cursor-pointer">
                                        <div className={`flex gap-3 items-center p-2 rounded-xl ${isRTL ? "bg-tertiary flex-row-reverse" : "bg-none"}`}>
                                            <Icon RIcon={cur.icon} active={isRTL} />
                                            <Text as="span" variant="body-sm">{t(`dashboard.sidebar.${cur.title}`)}</Text>
                                        </div>
                                    </button>
                                )
                            }
                        })
                    }
                </nav>

                <div className={`flex flex-col gap-3 absolute z-20  bottom-1 w-full ${!hasDocumentation && "hidden"}`}>
                    <div className="relative h-[160px]  rounded-xl  mr-5">
                        <img src="/src/assets/card-img.svg" alt="image" className="absolute top-0 object-cover h-full w-full   rounded-xl left-1/2 -translate-x-1/2" />
                        <div className="flex flex-col gap-3 p-3 z-20 absolute w-full">
                            <Icon RIcon={GrDiamond} />
                            <div className="flex flex-col ">
                                <Text as="strong" variant="body-lg" className={"text-tertiary"}>Need help?</Text>
                                <Text as="span" variant="body-md" className={"text-tertiary"}>Please check our docs</Text>
                            </div>
                            <Button variant={"primaryBtn"} className={"bg-tertiary text-secondary py-1 px-3 text-sm w-full"}>Documentation</Button>
                        </div>

                    </div>

                    <Button variant={"primaryBtn"} className={"text-sm mr-5"}>Upgrade to Pro</Button>

                </div>
            </div>

        </aside>
    )
}