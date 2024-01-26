
import spanish from './es.json';
import french from './fr.json';
const LANGUAGES = {
    SPANISH: 'es',
    FRENCH: 'fr'
}
export const getI18N = (
    { currentLocale = 'es' }:
        { currentLocale?: string }
) => {
    if (currentLocale === LANGUAGES.SPANISH) return spanish
    if (currentLocale === LANGUAGES.FRENCH) return french
    return spanish
}

