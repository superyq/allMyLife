/**
 * @description SessionStorage
 */
export const SESSION_ADMIN = "imeet-admin-user";
export const SESSION_TOKEN = "imeet-admin-token";
export const SESSION_NAVS = "imeet-admin-navs";
export const SESSION_MENUS = "imeet-admin-menus";
export const SESSION_PERMS = "imeet-admin-perms";
export const SESSION_ROUTES = "imeet-admin-routes";
export const SESSION_QINIU_TOKEN = "imeet-admin-qiniu-token";

/**
 * @description Router
 */
export const ROUTE_HOME = "artical-list";
export const ROUTE_LOGIN = "login";
export const ROUTE_DYNAMIC_MARK = "hasDynamic";

export default {
  routeHomeName: ROUTE_HOME,
  routeLoginName: ROUTE_LOGIN,
  routeDynamicMark: ROUTE_DYNAMIC_MARK,
  sessionTokenKey: SESSION_TOKEN
};
