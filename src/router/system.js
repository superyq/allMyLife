import { asideMenuList } from "@/datas/menu.js";
import systemModel from "./routerSystemModel";

let system = [];

for (let i = 0; i < asideMenuList.length; i++) {
  const item = asideMenuList[i];

  let obj = new systemModel(item);

  system.push(obj);
}

export default system;
