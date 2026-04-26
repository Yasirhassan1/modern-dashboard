import { memo } from 'react';
import Text from './Text';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const Footer = ()=>{
    const {t} = useTranslation()
    console.log("footer")
    return(
        <footer className="p-4 lg:col-start-2 flex justify-between flex-wrap gap-3 mt-auto  w-full">
       <Text as='span' className={"text-sm text-secondary"}>{t("dashboard.footer.copyright")} <Text as='span' variant='body-md'>React</Text>{t("dashboard.footer.for_better_web")}</Text>
       <div className='flex gap-5 flex-wrap'>
        <Link to={"/creative-tim"} className='text-md text-text-secondary'>{t("dashboard.footer.links.creative_tim")}</Link>
        <Link to={"/creative-tim"} className='text-md text-text-secondary'>{t("dashboard.footer.links.about_us")}</Link>
        <Link to={"/creative-tim"} className='text-md text-text-secondary'>{t("dashboard.footer.links.blog")}</Link>
        <Link to={"/creative-tim"} className='text-md text-text-secondary'>{t("dashboard.footer.links.license")}</Link>
        
       </div>
        </footer>
    )
}

export default memo(Footer);