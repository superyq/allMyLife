export default {
  methods: {
    drowFillText(ctx) {
      // fillText(text, x, y [, maxWidth]):在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的.
      ctx.font = "48px serif";
      ctx.fillText("Hello world", 10, 50);
    },
    drowStrokeText(ctx) {
      // strokeText(text, x, y [, maxWidth]):在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的.
      ctx.font = "48px serif";
      ctx.strokeText("Hello world", 10, 100);
    },
    drowBaseLine(ctx) {
      // textBaseline = value: 基线对齐选项. 可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。
      ctx.font = '48px serif';
      ctx.textBaseline = 'hanging';
      ctx.strokeText('Hello world', 10, 150);
    },
    drowMeasureText(ctx) {
      // measureText():将返回一个 TextMetrics对象的宽度、所在像素，这些体现文本特性的属性。
      var text = ctx.measureText('foo');
      text.width;
    }
  },
  mounted() {
    const canvas = document.getElementById("baseText");
    const ctx = canvas.getContext("2d");

    // 填充文本
    this.drowFillText(ctx);

    // 文本边框
    this.drowStrokeText(ctx);

    // 基线对齐
    this.drowBaseLine(ctx);

    // 预测量文本宽度
    this.drowMeasureText(ctx);
  }
};
