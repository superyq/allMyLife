// 侧边栏目录
export const asideMenuList = [
  {
    id: 0,
    type: 0,
    name: "echarts",
    title: "图表",
    list: [
      {
        id: 1,
        type: 1,
        name: "line",
        title: "折线图",
        upper: "echarts"
      },
      {
        id: 2,
        type: 1,
        name: "bar",
        title: "原图",
        upper: 'echarts'
      }
    ]
  },
  {
    id: 3,
    type: 1,
    name: 'home',
    title: '首页'
  },
  {
    id: 4,
    type: 1,
    name: 'excelDown',
    title: 'excel下载'
  },
  {
    id: 5,
    type: 0,
    name: 'newsFeat',
    title: '测试新功能',
    list: [
      {
        id: 6,
        type: 1,
        name: 'login',
        title: '登录',
        upper: 'newsFeat'
      }
    ]
  },
  {
    id: 7,
    type: 0,
    name: 'admin',
    title: '后台功能',
    list: [
      {
        id: 8,
        type: 1,
        name: 'articals',
        title: '文章模块',
        upper: 'admin'
      },
      {
        id: 9,
        type: 1,
        name: 'category',
        title: '栏目模块',
        upper: 'admin'
      }
    ]
  },
  {
    id: 10,
    type: 0,
    name: 'demo',
    title: '页面组件',
    list: [
      {
        id: 11,
        type: 1,
        name: 'demo1',
        title: '标题',
        upper: 'demo'
      },
      {
        id: 12,
        type: 1,
        name: 'demo2',
        title: '文章列表',
        upper: 'demo'
      }
    ]
  }
];
