import http from "./http";

/**
 * 管理员登录
 * @param {String} account 邮箱/手机号
 * @param {String} password 密码
 */
export function login(data) {
  return http.post("login", data);
}