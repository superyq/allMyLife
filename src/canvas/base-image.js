import img1 from "@/assets/8.jpg";
import img2 from "@/assets/nz1.jpg";

export default {
  data() {
    return {
      img1,
      img2
    };
  },
  methods: {
    drowImages(ctx) {
      // drawImage(image, x, y): 其中 image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标。
      // drawImage(image, x, y, width, height)：这个方法多了2个参数：width 和 height，这两个参数用来控制 当向canvas画入时应该缩放的大小
      var img = new Image();
      img.onload = function() {
        for (var i = 0; i < 4; i++) {
          for (var j = 0; j < 3; j++) {
            ctx.drawImage(img, j * 50, i * 38, 50, 38);
          }
        }
      };
      img.src = this.img1;
    },
    drowSlicing(ctx) {
      // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
      // 第一个参数和其它的是相同的，都是一个图像或者另一个 canvas 的引用。前4个是定义图像源的切片位置和大小，后4个则是定义切片的目标显示位置和大小。
      var img = new Image();
      img.src = this.img2;
      img.onload = function() {
        ctx.drawImage(img, 300, 300, 100, 100, 200, 50, 50, 50);
      };
    }
  },
  mounted() {
    const canvas = document.getElementById("baseImage");
    const ctx = canvas.getContext("2d");

    // 图片
    this.drowImages(ctx);

    // 切片
    this.drowSlicing(ctx);
  }
};
