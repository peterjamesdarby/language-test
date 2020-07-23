import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import moment from "moment"

const resources = {
    'en-UK': {
      translation: {
        "welcome": "Welcome to the Customer Portal",
        "datekey": "{{- date, DD-MM-YYYY}}"
      }
    },
    fr: {
      translation : {
        "welcome": "Bienvenue sur le portail client",
        "datekey": "{{- date, DD/MM/YYYY}}"
      }
    },
    'en-GB': {
      translation : {
        "welcome": "Hi there, welcome to the Customer Portal",
        "datekey": "{{- date, MM/DD/YYYY}}" // The - tells i18next not to escape our formatter’s returned value before outputting it via t()
      }
    }
  };
  
  i18n
    //.use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: process.env.REACT_APP_LANGUAGE,
      fallbackLng: "en-GB", // use en if detected lng is not available
  
      keySeparator: false, // we do not use keys in form messages.welcome
  
      interpolation: {
        format: function(value, format, lng) {
          if(value instanceof Date) return moment(value).format(format);
          return value;
        },
        escapeValue: false // react already safes from xss
      }
    });

    export default i18n;
