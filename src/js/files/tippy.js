// Подключение функционала "Чертогов Фрилансера"
import {
   isMobile,
   FLS
} from "./functions.js";
// Подключение списка активных модулей
import {
   flsModules
} from "./modules.js";

// Подключение из node_modules
import tippy from 'tippy.js';

// Подключение cтилей из src/scss/libs
import "../../scss/libs/tippy.scss";
// Подключение cтилей из node_modules
//import 'tippy.js/dist/tippy.css';

// Запускаем и добавляем в объект модулей
const template = document.querySelectorAll('.item-benefit__tippy');
const allTippy = document.querySelectorAll('[data-tippy]');

for (let i = 0; i < allTippy.length; i++) {
   flsModules.tippy = tippy(allTippy[i], {
      content: template[i].innerHTML,
      allowHTML: true,
      interactive: true,
      placement: 'right-end',
   });
}