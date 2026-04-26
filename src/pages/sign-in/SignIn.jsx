import { Link } from "react-router";
import { useTranslation } from 'react-i18next';
export default function SignIn(){
    const {t} = useTranslation();

    function handleForm(formData){
        const email = formData.get("email")
        const password = formData.get("password")

        if(email === localStorage.getItem("email") && password === localStorage.getItem("password")){
          window.location.href= "/dashboard";
        }
        else{
          alert("Invalid email or password")
        }

    }
    return(
        <div className="h-screen flex items-center justify-center bg-base">
        <div className="card card-plain shadow-lg w-fit p-5 bg-tertiary rounded-lg flex flex-col gap-5">
                <div className="card-header pb-0 text-left bg-transparent">
                  <h3 className="font-weight-bolder text-primary text-2xl font-semibold">{t('login.title')}</h3>
                  <p className="mb-0 text-text-secondary">{t('login.subtitle')}</p>
                </div>
                <div className="card-body">
                  <form action={handleForm} role="form" data-gtm-form-interact-id="0">
                    <label className="font-semibold">{t('login.email_label')}</label>
                    <div className="mb-3">
                      <input type="email" name="email" className="form-control p-3 border border-text-secondary rounded-xl w-full  text-text-secondary" placeholder={`${t('login.email_placeholder')}`} aria-label="Email" aria-describedby="email-addon"/>
                    </div>
                    <label className="font-semibold">{t('login.password_label')}</label>
                    <div className="mb-3">
                      <input type="password" name="password" className="form-control p-3 border border-text-secondary rounded-xl w-full text-text-secondary" placeholder={t('login.password_placeholder')} aria-label="Password" aria-describedby="password-addon"/>
                    </div>
                    <div className="form-check form-switch flex gap-2">
                      <input className="form-check-input" type="checkbox" id="rememberMe" checked="" data-gtm-form-interact-field-id="0"/>
                      <label className="form-check-label text-text-secondary" for="rememberMe">{t('login.remember_me')}</label>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn bg-gradient-info w-100 mt-4 mb-0 bg-primary rounded-xl p-3 text-tertiary cursor-pointer">{t('login.submit_btn')}</button>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className=" text-sm mx-auto text-text-secondary">
                   {t('login.no_account')}
                    <Link to={"/sign-up"} className="text-info text-gradient font-weight-bold font-semibold">{t('login.signup_link')}</Link>
                  </p>
                </div>
              </div>
              </div>

    )
}