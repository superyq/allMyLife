export default {
  methods: {
    drawGlobalCompositeOperationEdit() {
      // globalCompositeOperation = type: 这个属性设定了在画新图形时采用的遮盖策略，其值是一个标识12种遮盖方式的字符串。
      // source-over: 这是默认设置，并在现有画布上下文之上绘制新图形。
      // source-in: 新图形只在新图形和目标画布重叠的地方绘制。其他的都是透明的。
      // source-out: 在不与现有画布内容重叠的地方绘制新图形。
      // source-atop: 新图形只在与现有画布内容重叠的地方绘制。
      // destination-over: 在现有的画布内容后面绘制新的图形。
      // destination-in: 现有的画布内容保持在新图形和现有画布内容重叠的位置。其他的都是透明的。
      // destination-out: 现有内容保持在新图形不重叠的地方。
      // destination-atop: 现有的画布只保留与新图形重叠的部分，新的图形是在画布内容后面绘制的。
      // lighter: 两个重叠图形的颜色是通过颜色值相加来确定的。
      // copy: 只显示新图形。
      // xor: 图像中，那些重叠和正常绘制之外的其他地方是透明的。
      // multiply: 将顶层像素与底层相应像素相乘，结果是一幅更黑暗的图片。
      // screen: 像素被倒转，相乘，再倒转，结果是一幅更明亮的图片。
      // overlay: multiply和screen的结合，原本暗的地方更暗，原本亮的地方更亮。
      // darken: 保留两个图层中最暗的像素。
      // lighten: 保留两个图层中最亮的像素。
      // color-dodge: 将底层除以顶层的反置。
      // color-burn: 将反置的底层除以顶层，然后将结果反过来。
      // hard-light: 屏幕相乘（A combination of multiply and screen）类似于叠加，但上下图层互换了。
      // soft-light: 用顶层减去底层或者相反来得到一个正值。
      // difference: 一个柔和版本的强光（hard-light）。纯黑或纯白不会导致纯黑或纯白。
      // exclusion: 和difference相似，但对比度较低。
      // hue: 保留了底层的亮度（luma）和色度（chroma），同时采用了顶层的色调（hue）。
      // saturation: 保留底层的亮度（luma）和色调（hue），同时采用顶层的色度（chroma）。
      // color: 保留了底层的亮度（luma），同时采用了顶层的色调(hue)和色度(chroma)。
      // luminosity: 保持底层的色调（hue）和色度（chroma），同时采用顶层的亮度（luma）。
    },
    drawClip(ctx) {
      //clip(): 将当前正在构建的路径转换为当前的裁剪路径。
      ctx.save();

      ctx.fillRect(0, 0, 150, 150);
      ctx.translate(75, 75);

      ctx.beginPath();
      ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
      ctx.clip();

      var lgd = ctx.createLinearGradient(0, -75, 0, 75);
      lgd.addColorStop(0, "#232256");
      lgd.addColorStop(1, "#143778");

      ctx.fillStyle = lgd;
      ctx.fillRect(-75, -75, 150, 150);

      for (let j = 1; j < 50; j++) {
        ctx.save();
        ctx.fillStyle = "#fff";
        ctx.translate(
          75 - Math.floor(Math.random() * 150),
          75 - Math.floor(Math.random() * 150)
        );
        this.drawStar(ctx, Math.floor(Math.random() * 4) + 2);
        ctx.restore();
      }
    },
    drawStar(ctx,r){
      ctx.save();
      ctx.beginPath()
      ctx.moveTo(r,0);
      for (var i=0;i<9;i++){
        ctx.rotate(Math.PI/5);
        if(i%2 == 0) {
          ctx.lineTo((r/0.525731)*0.200811,0);
        } else {
          ctx.lineTo(r,0);
        }
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  },
  mounted() {
    const canvas = document.getElementById("advCompositing");
    const ctx = canvas.getContext("2d");

    // 裁剪
    this.drawClip(ctx);
  }
};
