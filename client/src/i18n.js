import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: { translation: {
    title: "Tigashire Varimi",
    tagline: "Buy fresh organic produce directly from Zimbabwean farmers",
    products: "Products",
    cart: "Cart",
    login: "Login",
    register: "Register",
    add_to_cart: "Add to cart",
    price: "Price",
    unit: "Unit",
    farmer: "Farmer",
    checkout: "Checkout",
    language: "Language"
  }},
  sn: { translation: {
    title: "Tigashire Varimi",
    tagline: "Tenga zvigadzirwa zvemuminda zvakananga kuvafudzi veZimbabwe",
    products: "Zvigadzirwa",
    cart: "Kadhi rekutenga",
    login: "Pinda",
    register: "Nyoresa",
    add_to_cart: "Wedzera kukadhi",
    price: "Mutengo",
    unit: "Chiyero",
    farmer: "Murimi",
    checkout: "Bhadhara",
    language: "Mutauro"
  }},
  nd: { translation: {
    title: "Tigashire Varimi",
    tagline: "Thenga izithelo lemifino uqondile kumalimi aseZimbabwe",
    products: "Imikhiqizo",
    cart: "Ikhathalogi",
    login: "Ngena",
    register: "Bhalisa",
    add_to_cart: "Faka ekhathalogini",
    price: "Intengo",
    unit: "Iyuni",
    farmer: "Ulimi",
    checkout: "Khokha",
    language: "Ulimi"
  }}
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n
