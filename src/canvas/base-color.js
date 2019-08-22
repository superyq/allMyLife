export default {
  methods: {
    drowFillStyle(ctx) {
      // fillStyle = color：设置图形的填充颜色。
      // color 可以是表示 CSS 颜色值的字符串，渐变对象或者图案对象。默认情况下，线条和填充颜色都是黑色（CSS 颜色值 #000000）。
      // 注意: 一旦您设置了 strokeStyle 或者 fillStyle 的值，那么这个新值就会成为新绘制的图形的默认值。如果你要给每个图形上不同的颜色，你需要重新设置 fillStyle 或 strokeStyle 的值。
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(
            255 - 42.5 * j
          )}, 0)`;

          ctx.fillRect(j * 25, i * 25, 25, 25);
        }
      }
    },
    drowStrokeStyle(ctx) {
      // strokeStyle = color：设置图形轮廓的颜色。
      for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
          ctx.strokeStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(
            255 - 42.5 * j
          )}, 0)`;
          ctx.beginPath();
          ctx.arc(180.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
          ctx.stroke();
        }
      }
    },
    drowGlobal(ctx) {
      // globalAlpha = transparencyValue：这个属性影响到 canvas 里所有图形的透明度，有效的值范围是 0.0 （完全透明）到 1.0（完全不透明），默认是 1.0。
      // globalAlpha 属性在需要绘制大量拥有相同透明度的图形时候相当高效。
      // 画背景
      ctx.fillStyle = "#FD0";
      ctx.fillRect(400, 0, 75, 75);
      ctx.fillStyle = "#6C0";
      ctx.fillRect(475, 0, 75, 75);
      ctx.fillStyle = "#09F";
      ctx.fillRect(400, 75, 75, 75);
      ctx.fillStyle = "#F30";
      ctx.fillRect(475, 75, 75, 75);
      ctx.fillStyle = "#FFF";

      // 设置透明度值
      ctx.globalAlpha = 0.2;

      // 画半透明圆
      for (var i = 0; i < 7; i++) {
        ctx.beginPath();
        ctx.arc(475, 75, 10 + 10 * i, 0, Math.PI * 2, true);
        ctx.fill();
      }
    },
    drowRgba(ctx) {
      // 画背景
      ctx.fillStyle = "rgb(255,221,0)";
      ctx.fillRect(0, 200, 150, 37.5);
      ctx.fillStyle = "rgb(102,204,0)";
      ctx.fillRect(0, 237.5, 150, 37.5);
      ctx.fillStyle = "rgb(0,153,255)";
      ctx.fillRect(0, 275, 150, 37.5);
      ctx.fillStyle = "rgb(255,51,0)";
      ctx.fillRect(0, 312.5, 150, 37.5);

      // 画半透明矩形
      for (var i = 0; i < 10; i++) {
        ctx.fillStyle = `rgba(255,255,255, ${(i + 1) / 10})`;
        for (var j = 0; j < 4; j++) {
          ctx.fillRect(5 + i * 14, 5 + j * 37.5 + 200, 14, 27.5);
        }
      }
    },
    drowLineWidth(ctx) {
      // lineWidth = value：设置线条宽度。
      // 线宽是指给定路径的中心到两边的粗细。换句话说就是在路径的两边各绘制线宽的一半。因为画布的坐标并不和像素直接对应，当需要获得精确的水平或垂直线的时候要特别注意。
      for (var i = 0; i < 10; i++) {
        ctx.lineWidth = 1 + i;
        ctx.beginPath();
        ctx.moveTo(205 + i * 14, 205);
        ctx.lineTo(205 + i * 14, 340);
        ctx.stroke();
      }
    },
    drowLineCap(ctx) {
      // lineCap = value：决定了线段端点显示的样子。
      // 它可以为下面的三种的其中之一：butt，round 和 square。默认是 butt。
      // butt与辅助线齐平的。round端点处加上了半径为一半线宽的半圆。square端点处加上了等宽且高度为一半线宽的方块。
      var lineCap = ["butt", "round", "square"];

      // 创建路径
      ctx.strokeStyle = "#09f";
      ctx.beginPath();
      ctx.moveTo(410, 210);
      ctx.lineTo(540, 210);
      ctx.moveTo(410, 340);
      ctx.lineTo(540, 340);
      ctx.stroke();

      // 画线条
      ctx.strokeStyle = "black";
      for (var i = 0; i < lineCap.length; i++) {
        ctx.lineWidth = 15;
        ctx.lineCap = lineCap[i];
        ctx.beginPath();
        ctx.moveTo(425 + i * 50, 210);
        ctx.lineTo(425 + i * 50, 340);
        ctx.stroke();
      }
    },
    drowLineJoin(ctx) {
      // lineJoin 的属性值决定了图形中两线段连接处所显示的样子。它可以是这三种之一：round, bevel 和 miter。默认是 miter。
      // round:边角处被磨圆了，圆的半径等于线宽。miter:线段会在连接处外侧延伸直至交于一点，延伸效果受到下面将要介绍的 miterLimit 属性的制约。
      var lineJoin = ["round", "bevel", "miter"];
      ctx.lineWidth = 10;
      for (let i = 0; i < lineJoin.length; i++) {
        ctx.lineJoin = lineJoin[i];
        ctx.beginPath();
        var number = i * 40;
        ctx.moveTo(-5, 405 + number);
        ctx.lineTo(35, 445 + number);
        ctx.lineTo(75, 405 + number);
        ctx.lineTo(115, 445 + number);
        ctx.lineTo(155, 405 + number);
        ctx.stroke();
      }
    },
    drowLineDash(ctx) {
      // setLineDash 方法和 lineDashOffset 属性来制定虚线样式.
      // setLineDash 方法接受一个数组，来指定线段与间隙的交替；lineDashOffset 属性设置起始偏移量.
      ctx.setLineDash([0, 20]);
      // ctx.lineDashOffset = 0;
      ctx.strokeRect(250, 400, 100, 100);
    },
    drowLineGradient(ctx) {
      // 我们可以用线性或者径向的渐变来填充或描边，并且赋给图形的 fillStyle 或 strokeStyle 属性
      // createLinearGradient(x1, y1, x2, y2): 接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)。
      // Create gradients
      var lingrad = ctx.createLinearGradient(500, 500, 500, 650);
      lingrad.addColorStop(0, "#00ABEB");
      lingrad.addColorStop(0.5, "#fff");
      lingrad.addColorStop(0.5, "#26C000");
      lingrad.addColorStop(1, "#fff");

      var lingrad2 = ctx.createLinearGradient(500, 550, 500, 595);
      lingrad2.addColorStop(0.5, "#000");
      lingrad2.addColorStop(1, "rgba(0,0,0,0)");

      // assign gradients to fill and stroke styles
      ctx.fillStyle = lingrad;
      ctx.strokeStyle = lingrad2;

      // draw shapes
      ctx.fillRect(500, 500, 130, 130);
      ctx.strokeRect(550, 550, 50, 50);
    },
    drowRadialGradient(ctx) {
      // createRadialGradient(x1, y1, r1, x2, y2, r2): 前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。
      var radgrad = ctx.createRadialGradient(45, 645, 10, 52, 650, 30);
      radgrad.addColorStop(0, "#A7D30C");
      radgrad.addColorStop(0.9, "#019F62");
      radgrad.addColorStop(1, "rgba(1,159,98,0)");

      var radgrad2 = ctx.createRadialGradient(105, 705, 20, 712, 120, 50);
      radgrad2.addColorStop(0, "#FF5F98");
      radgrad2.addColorStop(0.75, "#FF0188");
      radgrad2.addColorStop(1, "rgba(255,1,136,0)");

      var radgrad3 = ctx.createRadialGradient(95, 615, 15, 102, 620, 40);
      radgrad3.addColorStop(0, "#00C9FF");
      radgrad3.addColorStop(0.8, "#00B5E2");
      radgrad3.addColorStop(1, "rgba(0,201,255,0)");

      var radgrad4 = ctx.createRadialGradient(0, 750, 50, 0, 740, 90);
      radgrad4.addColorStop(0, "#F4F201");
      radgrad4.addColorStop(0.8, "#E4C700");
      radgrad4.addColorStop(1, "rgba(228,199,0,0)");

      // 画图形
      ctx.fillStyle = radgrad4;
      ctx.fillRect(0, 600, 150, 150);
      ctx.fillStyle = radgrad3;
      ctx.fillRect(0, 600, 150, 150);
      ctx.fillStyle = radgrad2;
      ctx.fillRect(0, 600, 150, 150);
      ctx.fillStyle = radgrad;
      ctx.fillRect(0, 600, 150, 150);
    },
    drowPattern(ctx) {
      // createPattern(image, type)该方法接受两个参数。
      // Image 可以是一个 Image 对象的引用，或者另一个 canvas 对象。Type 必须是下面的字符串值之一：repeat，repeat-x，repeat-y 和 no-repeat。
      var img = new Image();
      img.src =
        "https://mdn.mozillademos.org/files/222/Canvas_createpattern.png";
      // img.src = '../assets/nz1.jpg';

      img.onload = function() {
        var ptrn = ctx.createPattern(img, "repeat");
        ctx.fillStyle = ptrn;
        ctx.fillRect(200, 600, 150, 150);
      };
    },
    drowShadow(ctx) {
      // shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0
      // shadowBlur = float: shadowBlur 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0
      // shadowColor = color: shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。
      ctx.shadowOffsetX = 6;
      ctx.shadowOffsetY = 4;
      ctx.shadowBlur = 2;
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

      ctx.font = "20px Times New Roman";
      ctx.fillStyle = "Black";
      ctx.fillText("Sample String", 450, 450);
    }
  },
  mounted() {
    const canvas = document.getElementById("baseColor");
    const ctx = canvas.getContext("2d");

    // 填充色正方形
    this.drowFillStyle(ctx);

    // 边框色圆
    this.drowStrokeStyle(ctx);

    // 透明度
    this.drowGlobal(ctx);

    // rgba
    this.drowRgba(ctx);

    // 线宽
    this.drowLineWidth(ctx);

    // 线头样式
    this.drowLineCap(ctx);

    // 两个线段连接头样式
    this.drowLineJoin(ctx);

    // 虚线
    this.drowLineDash(ctx);

    // 线性渐变
    this.drowLineGradient(ctx);

    // 径向渐变
    this.drowRadialGradient(ctx);

    // 图案样式
    this.drowPattern(ctx);

    // 阴影
    this.drowShadow(ctx);
  }
};
