**How does react-i18next handle translations?**
1. Creating JSON files for translating the language. These JSON files will be for different languages.
2. Using useTranslation() from the package react-i18next to translate the language.
3. Asynchronous functions are used for language translation to optimize the performance.

**What challenges arise when localising a React Native app?**
1. Handling plurals when translating from one language to another can be challenging.
2. There are different formats for different countries that can be difficult to manage.
3. Loading all the translation files at once can hinder the performance of the app. 
4. The right-to-left languages can be difficult for some users to understand.

**How would you test localisation support in an app?**
1. By testing manually, if the language is translating correctly. If the UI still supports font styling and formatting for all the different languages.
2. Creating test files for automatically checking the translations.
3. Using console logs to check if the translated language is correct.


## i18next.js 

const initializeI18n = async () => {
  const userLanguage = await getUserLanguage(); 

  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        fr: { translation: fr },
      },
      lng: userLanguage, 
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
    });

  console.log('i18n initialized with language:', i18n.language); 
};