export default {
  methods: {
    drawArc(ctx) {
      ctx.beginPath();
      ctx.save();
      ctx.fillStyle = "#F56C6C";
      ctx.arc(50, 50, 50, 0, (Math.PI * 3) / 4, false);
      ctx.lineTo(50,50);

      ctx.fill();

      // ctx.restore();
      // ctx.save();
      ctx.beginPath();
      ctx.fillStyle = "#46ADB7";
      ctx.arc(50, 50, 50, (Math.PI * 3) / 4, (Math.PI * 3) / 2, false);
      ctx.lineTo(50,50);
      ctx.fill();

      // ctx.restore();
      // ctx.save();
      ctx.beginPath();
      ctx.fillStyle = "#00A0E9";
      ctx.arc(50, 50, 50, (Math.PI * 3) / 2, Math.PI * 2, false);
      ctx.lineTo(50,50);
      ctx.fill();
    },
    drawArcB(ctx) {
      ctx.beginPath();
      ctx.restore();
      ctx.save();
      ctx.fillStyle = "#fff";
      ctx.arc(50, 50, 40, 0, Math.PI * 2, false);
      ctx.fill();
    }
  },
  mounted() {
    const canvas = document.getElementById("advImageData");
    const ctx = canvas.getContext("2d");

    this.drawArc(ctx);

    this.drawArcB(ctx);
  }
};
