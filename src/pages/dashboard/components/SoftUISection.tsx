import Text from "../../../components/Text"
import roketImg from "../../../assets/rocket.svg"
import bgPic from "../../../assets/pic.jpg"
import { useTranslation } from "react-i18next";

export default function SoftUISection(){
    const {t} = useTranslation()    
    return(
        <section className="flex gap-3 justify-between flex-wrap">
            <div className="softCard flex justify-between gap-3 p-3   rounded-lg flex-wrap bg-tertiary flex-1">
                <div className="flex flex-col gap-3">
                <Text as="strong" variant="body-sm">{t("dashboard.main.content_cards.product_highlight.subtitle")}</Text>
                <Text as="h3" variant="body-lg">{t("dashboard.main.content_cards.product_highlight.title")}</Text>
                <Text as="p" variant="body-sm" className={"text-text-secondary font-medium"}>{t("dashboard.main.content_cards.product_highlight.description")}</Text>

                 <Text as="span" variant="body-sm" className={"text-text-secondary font-medium mt-auto"}>{t("dashboard.main.content_cards.product_highlight.read_more")}</Text>
                </div>

                <div className="card bg-primary min-w-[260px] max-w-[200px] rounded-lg flex justify-center items-center">
                    <img src={roketImg} alt="" />
                </div>
            </div>
             <div className="sm:w-[400px] bg-tertiary  p-2  rounded-lg relative">
            <img src={bgPic} className="object-cover h-full rounded-lg opacity-80 bg-blend-multiply" alt="" />
                 <div className="absolute inset-0 bg-black opacity-50 p-3 rounded-lg"></div>
             
            <div className="absolute p-4 z-50 top-14 -translate-y-1/2">
                <Text as="strong" variant="body-lg" className={"text-tertiary"}>{t("dashboard.main.content_cards.philosophy_card.title")}</Text>
                 <Text as="p" variant="body-sm" className={"text-tertiary mt-2.5"}>{t("dashboard.main.content_cards.philosophy_card.description")}</Text>
            </div>
            </div>

        </section>
    )
}