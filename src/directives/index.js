import date from "./date";
import color from "./color";

const directives = [ date, color ];

export default {
  install: function(Vue) {
    directives.forEach(i => {
      Vue.directive(i.name, i);
    })
  }
}