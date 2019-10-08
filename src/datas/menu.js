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
        name: 'direction',
        title: '指令',
        upper: 'newsFeat'
      }
    ]
  }
];
