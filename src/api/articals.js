import http from "./http";

// 获取 `文章列表`
export function getArticals(params) {
  return http.get('articles', {
    params
  })
}