import { useTranslation } from "react-i18next";
import "../i18n/i18n";

const ComponenteEjemplo = () => {

    const { t, i18n } =  useTranslation();


  return (
    <div style={{display: 'grid', gap: 8}}>
        <div>{t('greeting')}</div>
        <div>{t('welcome_user', {name:"Mauro"})}</div>

        <div style={{display: 'flex', gap: 8, marginTop: 8}}>
            <button onClick={() => i18n.changeLanguage('es')}>
                {t('form.es')}
            </button>
            <button onClick={() => i18n.changeLanguage('en')}>
                {t('form.en')}
            </button>
        </div>
    </div>
  )
}

export default ComponenteEjemplo