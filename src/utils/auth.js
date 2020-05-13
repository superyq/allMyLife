import router from "@/router";
import storage from "./storage";
import { noop } from "@/utils";
import { login } from "@/api/auth";
import { MessageBox } from "element-ui";
import {
  SESSION_TOKEN,
  SESSION_ADMIN,
  ROUTE_LOGIN,
  SESSION_QINIU_TOKEN
} from "@/config";

class Auth {
  constructor() {}

  get token() {
    return storage.read(SESSION_TOKEN, true);
  }

  set token(val) {
    return val
      ? storage.write(SESSION_TOKEN, `Bearer ${val}`, true)
      : storage.remove(SESSION_TOKEN, true);
  }

  get qiniu_token() {
    return storage.read(SESSION_QINIU_TOKEN, true);
  }

  set qiniu_token(val) {
    return val
      ? storage.write(SESSION_QINIU_TOKEN, val, true)
      : storage.remove(SESSION_QINIU_TOKEN, true);
  }

  get admin() {
    return storage.read(SESSION_ADMIN, true);
  }

  set admin(val) {
    return val
      ? storage.write(SESSION_ADMIN, val, true)
      : storage.remove(SESSION_ADMIN, true);
  }

  /**
   * @description 用户登录
   */
  login(param) {
    return login(param)
      .then(
        ({
          message: defaultMsg = "登录成功！",
          data: { message = defaultMsg, token, admin }
        }) => {
          this.admin = admin;
          this.qiniu_token = token;
          this.token = admin.api_token;
          return message;
        }
      )
      .catch(({ message }) => Promise.reject(message || "登录失败！"));
  }

  /**
   * @description 用户登出操作时，清空 token
   */
  logout(message = "确认退出当前登录账户？", title = "确认登出", options) {
    MessageBox.confirm(message, title, {
      type: "warning",
      ...options
    })
      .then(() => {
        this.token = "";
        this.admin = null;
        router.push({ name: ROUTE_LOGIN });
      })
      .catch(noop);
  }
}

export default new Auth();
