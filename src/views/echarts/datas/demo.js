export default [
  {
    // 直角坐标系得x轴，
    xAxis: {
      //组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。
      id: 1,
      // [ default: true ],是否显示 x 轴。
      // show: false,

      // [ default: 0 ],x 轴所在的 grid 的索引，默认位于第一个 grid。
      // gridIndex: 0,

      // x 轴的位置。['top', 'bottom']默认 grid 中的第一个 x 轴在 grid 的下方（'bottom'），第二个 x 轴视第一个 x 轴的位置放在另一侧。
      // position: 'top',

      // [ default: 0 ],X 轴相对于默认位置的偏移，在相同的 position 上有多个 X 轴的时候有用。
      // offset: 10,

      // [ default: 'category' ], 坐标轴类型。
      // 'value' 数值轴，适用于连续数据。
      // 'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
      // 'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
      // 'log' 对数轴。适用于对数数据。
      type: "category",

      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      // 坐标轴名称。
      // name: '你是猪嘛',

      // [ default: 'end' ],坐标轴名称显示位置。可选'start','middle' 或者 'center','end'
      // nameLocation: 'middle',

      // 坐标轴名称的文字样式
      // nameTextStyle: {
      //   // 坐标轴名称的颜色
      //   color: 'red',
      //   // [ default: 'normal' ],坐标轴名称文字字体的风格。可选'normal'，'italic'，'oblique'
      //   fontStyle: "italic",

      //   // [ default: normal ],坐标轴名称文字字体的粗细。可选可选：'normal'，'bold'，'bolder'，'lighter'，100 | 200 | 300 | 400...
      //   fontWeight: "lighter",

      //   // [ default: 'sans-serif' ],坐标轴名称文字的字体系列,还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
      //   fontFamily: 'monospace',

      //   // [ default: 12 ],坐标轴名称文字的字体大小
      //   fontSize: 20,

      //   // 文字水平对齐方式，默认自动。可选：'left','center','right'
      //   align: 'right'
      // },

      // [ default: 15 ],坐标轴名称与轴线之间的距离。
      // nameGap: 25,

      // [ default: null ],坐标轴名字旋转，角度值。
      // nameRotate: '360',

      // [ default: false ],是否是反向坐标轴。ECharts 3 中新加。
      // inverse: true

      // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
      // 类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。
      // 非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效。
      // boundaryGap: false,

      // [ default: null ],坐标轴刻度最小值。
      // min: null
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
  }
];
