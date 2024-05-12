import Instagram from "../assets/icons/Instagram.svg";
import Whatsapp from "../assets/icons/Whatsapp.svg";

export const HomeMessages = {
  title: (
    <div>
      Venha fazer o seu <strong>Projeto de Pesquisa Cientifica</strong> conosco!
    </div>
  ),
  description:
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

};

export const FaqMessages = [
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit? "
  },
  {
    question:
      "Sed do eiusmod tempor incididunt ut labore et dolore?"
  },
  {
    question:
      "Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat. "
  },
  {
    question:
      "Mullamco laboris nisi ut aliquip ex ea commodo consequat? "
  },
  
];

export const ContactDB = [
  {
    icon: (
      <img src= { Instagram } alt="Instagram"/>
    ),
    content:
      "@redecom.ciencia"
  },
  {
    icon: (
      <img src= { Whatsapp } alt="Whatsapp"/>
    ),
    content:
      "(85) 99216-3000"
  },



]