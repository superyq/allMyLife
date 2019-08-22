export default {
  methods: {
    drawSaveOrRestore(ctx) {
      ctx.fillRect(0, 0, 150, 150);
      ctx.save();

      ctx.fillStyle = "#09F";
      ctx.fillRect(15, 15, 120, 120);
      ctx.save();

      ctx.fillStyle = "#FFF";
      ctx.globalAlpha = 0.5;
      ctx.fillRect(30, 30, 90, 90);
      ctx.save();

      ctx.restore();
      ctx.fillRect(45, 45, 60, 60);

      ctx.restore();
      ctx.fillRect(60, 60, 30, 30);
    },
    drawTranslating(ctx) {
      // translate(x, y):translate 方法接受两个参数。x 是左右偏移量，y 是上下偏移量，如右图所示。
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          ctx.save();
          ctx.fillStyle = `rgb(${51 * i}, ${255 - 51 * i}, 255)`;
          ctx.translate(200 + j * 50, 10 + i * 50);

          ctx.fillRect(0, 0, 25, 25);
          ctx.restore();
        }
      }
    },
    drawRotating(ctx) {
      // rotate(angle): 这个方法只接受一个参数：旋转的角度(angle)，它是顺时针方向的，以弧度为单位的值。
      ctx.translate(450, 70);

      for (let i = 0; i < 6; i++) {
        ctx.save();
        ctx.fillStyle = `rgb(${51 * i}, ${255 - 51 * i}, 255)`;
        for (let j = 0; j < i * 6; j++) {
          ctx.rotate((Math.PI * 2) / (i * 6));
          ctx.beginPath();
          ctx.arc(0, i * 12.5, 5, 0, Math.PI * 2, true);
          ctx.fill();
        }
        ctx.restore();
      }
    },
    drawScaling(ctx) {
      // scale(x, y):可以缩放画布的水平和垂直的单位。
      // 两个参数都是实数，可以为负数，x 为水平缩放因子，y 为垂直缩放因子，如果比1小，会比缩放图形， 如果比1大会放大图形。默认值为1， 为实际大小。
      ctx.save();
      ctx.scale(10, 3);
      ctx.fillRect(1, 10, 10, 10);
      ctx.restore();

      ctx.scale(-1, 1);
      ctx.font = '48px serif';
      ctx.fillText('MDN', -135, 120);
    }
  },
  mounted() {
    const canvas = document.getElementById("advTransformations");
    const ctx = canvas.getContext("2d");

    // save 和 restore
    this.drawSaveOrRestore(ctx);

    // 平移原点
    this.drawTranslating(ctx);

    // 旋转原点
    this.drawRotating(ctx);

    // 缩放
    this.drawScaling(ctx);
  }
};
