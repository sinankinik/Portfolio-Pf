import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Dil dosyalarınızı burada tanımlayacaksınız
const resources = {
  en: {
    translation: {
      //Right Bar
      "home": "Home",
      "cv": "CV",
      "education": "Education",
      "works": "Works",
      "email": "E-Mail",
      "message": "Message",
      "dark_mode_toggle": "Toggle Dark Mode",
      //Right Bar
      // Sidebar
      "download_cv": "Download Cv",
      "age": "Age",
      "residence": "Residence",
      "available": "Available",
      "address": "Address",
      "skills": "Skills",
      "languages": "Languages",
      "extra_skills": "ExtraSkills",
      // Sidebar
      //Middle
      "name": "I’m Rayan Adlrdard",
      "hire_me": "HIRE ME",
      "my_services": "My Services",
      "web_development": "Web Development",
      "blog": "Blog, E-Commerce",
      "ui_ux": "UI/UX Design",
      "mobile": "Mobile App, Website Design",
      //Middle
    }
  },
  tr: {
    //Right Bar
    translation: {
      "home": "Anasayfa",
      "cv": "Özgeçmiş",
      "education": "Eğitim",
      "works": "Projeler",
      "email": "E-Posta",
      "message": "Mesaj",
      "dark_mode_toggle": "Karanlık Modu Aç/Kapat",
      //Right Bar
      // Sidebar
      "download_cv": "Cv' yi İndir",
      "age": "Yaş",
      "residence": "Ülke",
      "available": "Müsait",
      "address": "Adres",
      "skills": "Yetenekler",
      "languages": "Diller",
      "extra_skills": "Extra Yetenekler",
      // Sidebar
      //Middle
      "name": "Ben Rayan Adlrdard",
      "hire_me": "İŞBİRLİĞİ",
      "my_services": "Hizmetlerim",
      "web_development": "Web Geliştirme",
      "blog": "Blog, E-Ticaret",
      "ui_ux": "UI/UX Tasarım",
      "mobile": "Mobil Uygulama, Website Tasarımı",
      //Middle
    }
  }
};

i18n
  .use(LanguageDetector) // Tarayıcı dilini otomatik algıla
  .use(initReactI18next) // i18n'i React ile bağla
  .init({
    resources,
    fallbackLng: 'en', // Eğer algılanan dil yoksa veya çeviri bulunamazsa kullanılacak dil
    debug: false, // Geliştirme sırasında true yapabilirsiniz, üretimde false olsun
    interpolation: {
      escapeValue: false, // React zaten XSS koruması sağlar
    },
    detection: {
      order: ['localStorage', 'navigator'], // Dili algılama sırası
      caches: ['localStorage'], // Algılanan dili localStorage'a kaydet
    }
  });

export default i18n;