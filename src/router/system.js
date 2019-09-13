import { asideMenuList } from "@/datas/menu.js";
import systemModel from "./routerSystemModel";

let system = [];

function loopMenu(arr) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    const { list = [], type } = item;

    if (list.length && !type) {
      loopMenu(list);
    } else {
      let obj = new systemModel(item);
      system.push(obj);
    }
  }
}

loopMenu(asideMenuList);

export default system;
