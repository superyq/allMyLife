export default [
  {
    // 直角坐标系得x轴，
    xAxis: {
      // [ default: 'category' ], 坐标轴类型。
      // 'value' 数值轴，适用于连续数据。
      // 'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
      // 'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
      // 'log' 对数轴。适用于对数数据。
      type: "category",

      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    // 直角坐标系 grid 中的 y 轴，一般情况下单个 grid 组件最多只能放左右两个 y 轴，多于两个 y 轴需要通过配置 offset 属性防止同个位置多个 Y 轴的重叠。
    yAxis: {
      // [ default: 'value' ], 坐标轴类型.
      // 'value' 数值轴，适用于连续数据。
      // 'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
      // 'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
      // 'log' 对数轴。适用于对数数据。
      type: "value"
    },
    // 系列列表。每个系列通过 type 决定自己的图表类型
    series: [
      {
        // 系列中的数据内容数组。数组项通常为具体的数据项
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line"
      }
    ]
  },
  {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        areaStyle: {}
      }
    ]
  }
];
