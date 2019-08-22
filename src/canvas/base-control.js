// base-control
export default {
  methods: {
    drowRect(ctx) {
      // 长方形
      // 参数(x,y,width,height); x,y为距离原点的距离，width，height为巨星宽高，fillRect()填充矩形，strokeRect()边框矩形，clearReact()清除矩形区域，清除部分完全透明
      ctx.fillRect(0, 0, 50, 50);
      ctx.strokeRect(100, 0, 50, 50);
      ctx.clearRect(100, 0, 50, 50);
    },
    dorwTriangle(ctx) {
      // 三角
      // moveTo(x,y),移到指定点，lineTo(x,y):绘制一条从当前位置到指定x以及y位置的直线。
      // lineTo(x,y)有两个参数：x以及y ，代表坐标系中直线结束的点。开始点和之前的绘制路径有关，之前路径的结束点就是接下来的开始点，等等。。。开始点也可以通过moveTo()函数改变。
      ctx.beginPath();
      ctx.moveTo(175, 50);
      ctx.lineTo(200, 75);
      ctx.lineTo(200, 25);
      ctx.fill();
    },
    drowLaugh(ctx) {
      // 笑脸
      // arc(x, y, radius, startAngle, endAngle, anticlockwise): 画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。
      // 参数anticlockwise为一个布尔值。为true时，是逆时针方向，否则顺时针方向。
      // 注意：arc()函数中表示角的单位是弧度，不是角度。角度与弧度的js表达式: 弧度=(Math.PI/180)*角度。
      ctx.beginPath();
      ctx.arc(275, 75, 50, 0, Math.PI * 2, true); //脸
      ctx.moveTo(310, 75);
      ctx.arc(275, 75, 35, 0, Math.PI, false); // 嘴
      ctx.moveTo(265, 65);
      ctx.arc(260, 65, 5, 0, Math.PI * 2, true); // 左眼
      ctx.moveTo(295, 65);
      ctx.arc(290, 65, 5, 0, Math.PI * 2, true); // 右眼
      ctx.stroke();
    },
    drowTalkBox(ctx) {
      // 对话气泡
      // quadraticCurveTo(cp1x, cp1y, x, y)：绘制二次贝塞尔曲线，cp1x,cp1y为一个控制点，x,y为结束点。
      ctx.beginPath();
      ctx.moveTo(475, 25);
      ctx.quadraticCurveTo(425, 25, 425, 62.5);
      ctx.quadraticCurveTo(425, 100, 450, 100);
      ctx.quadraticCurveTo(450, 120, 430, 125);
      ctx.quadraticCurveTo(460, 120, 465, 100);
      ctx.quadraticCurveTo(525, 100, 525, 62.5);
      ctx.quadraticCurveTo(525, 25, 475, 25);
      ctx.stroke();
    },
    dorwLove(ctx) {
      // 爱心
      // bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)：绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。
      ctx.beginPath();
      ctx.moveTo(675, 40);
      ctx.bezierCurveTo(675, 37, 670, 25, 650, 25);
      ctx.bezierCurveTo(615, 25, 615, 62.5, 617, 62.5);
      ctx.bezierCurveTo(620, 80, 640, 102, 675, 120);
      ctx.bezierCurveTo(710, 102, 730, 80, 732, 62.5);
      ctx.bezierCurveTo(735, 62.5, 732, 25, 705, 25);
      ctx.bezierCurveTo(685, 25, 675, 37, 675, 40);
      ctx.fill();
    },
    dorwGame(ctx) {
      // 圆角矩形布局
      this.roundedRect(ctx, 12, 512, 150, 150, 15);
      this.roundedRect(ctx, 53, 553, 49, 33, 10);
      this.roundedRect(ctx, 53, 619, 49, 16, 6);
      this.roundedRect(ctx, 135, 553, 49, 33, 10);
      this.roundedRect(ctx, 135, 619, 25, 49, 10);

      // 吃豆子的怪
      ctx.beginPath();
      ctx.arc(37, 537, 13, Math.PI / 7, -Math.PI / 7, false);
      ctx.lineTo(37, 537);
      ctx.fill();

      // 豆子
      for (var i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 535, 4, 4);
      }

      for (i = 0; i < 6; i++) {
        ctx.fillRect(115, 551 + i * 16, 4, 4);
      }

      for (i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 599, 4, 4);
      }

      // 游戏里的怪（身体）
      ctx.beginPath();
      ctx.moveTo(83, 616);
      ctx.lineTo(83, 602);
      ctx.bezierCurveTo(83, 594, 89, 588, 97, 588);
      ctx.bezierCurveTo(105, 588, 111, 594, 111, 602);
      ctx.lineTo(111, 616);
      ctx.lineTo(106.333, 611.333);
      ctx.lineTo(101.666, 616);
      ctx.lineTo(97, 611.333);
      ctx.lineTo(92.333, 616);
      ctx.lineTo(87.666, 611.333);
      ctx.fill();

      // 游戏里的怪（眼睛）
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.moveTo(91, 596);
      ctx.bezierCurveTo(88, 596, 87, 599, 87, 601);
      ctx.bezierCurveTo(87, 603, 88, 606, 91, 606);
      ctx.bezierCurveTo(94, 606, 95, 603, 95, 601);
      ctx.bezierCurveTo(95, 599, 94, 596, 91, 596);
      ctx.moveTo(103, 596);
      ctx.bezierCurveTo(100, 596, 99, 599, 99, 601);
      ctx.bezierCurveTo(99, 603, 100, 606, 103, 606);
      ctx.bezierCurveTo(106, 606, 107, 603, 107, 601);
      ctx.bezierCurveTo(107, 599, 106, 596, 103, 596);
      ctx.fill();

      // 游戏里的怪（眼珠）
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(101, 602, 2, 0, Math.PI * 2, true);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(89, 602, 2, 0, Math.PI * 2, true);
      ctx.fill();

    },
    roundedRect(ctx, x, y, width, height, radius) {
      // x,y为起始点的坐标，width，heigth分别为圆角矩形的宽高，radius为圆角的半径
      ctx.beginPath();
      ctx.moveTo(x, y + radius);
      ctx.lineTo(x, y + height - radius);
      ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
      ctx.lineTo(x + width - radius, y + height);
      ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width,
        y + height - radius
      );
      ctx.lineTo(x + width, y + radius);
      ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
      ctx.lineTo(x + radius, y);
      ctx.quadraticCurveTo(x, y, x, y + radius);
      ctx.stroke();
    },
    dorwPath2D(ctx) {
      // Path2D对象已可以在较新版本的浏览器中使用，用来缓存或记录绘画命令，这样你将能快速地回顾路径。
      var rectAngle = new Path2D();
      rectAngle.rect(10,200,50,50);

      var circle = new Path2D();
      circle.moveTo(125, 205);
      circle.arc(100, 205, 25, 0, Math.PI * 2, false);

      ctx.fill(rectAngle);
      ctx.stroke(circle);
    }
  },
  mounted() {
    // 拿到画笔
    const canvas = document.getElementById("baseControl");
    const ctx = canvas.getContext("2d");

    // 绘制形状
    // 矩形
    this.drowRect(ctx);

    // 三角形
    this.dorwTriangle(ctx);

    // 笑脸
    this.drowLaugh(ctx);

    // 对话气泡
    this.drowTalkBox(ctx);

    // 爱心
    this.dorwLove(ctx);

    // 游戏
    this.dorwGame(ctx);

    // path2d
    this.dorwPath2D(ctx);
  }
};
