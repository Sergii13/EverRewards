// Подключение функционала "Чертогов Фрилансера"
import {
   isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
   flsModules
} from "./modules.js";
const throttle = (func, limit) => {
   let lastFunc;
   let lastRan;
   return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
         func.apply(context, args);
         lastRan = Date.now();
      } else {
         clearTimeout(lastFunc);
         lastFunc = setTimeout(function () {
            if ((Date.now() - lastRan) >= limit) {
               func.apply(context, args);
               lastRan = Date.now();
            }
         }, limit - (Date.now() - lastRan));
      }
   }
}
let animates = document.querySelectorAll('[data-animate]');
if (animates.length > 0) {
   document.addEventListener('scroll', throttle(function () {
      animates.forEach(animateItem => {
         if (animateItem.classList.contains('_watcher-view')) {
            animate(animateItem);
         }
      });
   }, 500));
}

function animate(element) {
   let animateItems = element.querySelectorAll('[data-animate-item]');
   let top = element.offsetTop;
   if (animateItems.length > 0) {
      let value = window.scrollY;
      animateItems.forEach(i => {
         let index = i.hasAttribute('data-animate-item') ? i.getAttribute('data-animate-item') : 0.4;
         i.style.transform = "translateY(" + -(value - top) * index * 0.4 + "px)";
      });
   }

}