function ball(ctx) {
  return {
    x: 100,
    y: 100,
    vx: 5,
    vy: 2,
    xd: 1,
    yd: 1,
    radius: 25,
    color: "blue",
    draw: function() {
      // ctx.clearRect(0, 0, 800, 800);
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.fillRect(0, 0, 800, 800);
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };
}

export default {
  methods: {},
  mounted() {
    const canvas = document.getElementById("advHighAnimation");
    const ctx = canvas.getContext("2d");

    const ball1 = ball(ctx);
    ball1.draw();

    // canvas.addEventListener("mouseover", function(e) {
    //   const aa = setInterval(() => {
    //     ball1.x += ball1.vx * ball1.xd;
    //     ball.vy *= 0.99;
    //     ball.vy += 0.25;
    //     ball1.y += ball1.vy * ball1.yd;

    //     if (ball1.x >= 800) {
    //       ball1.xd = -1;
    //     }

    //     if (ball1.x <= 0) {
    //       ball1.xd = 1;
    //     }

    //     if (ball1.y >= 800) {
    //       ball1.yd = -1;
    //     }

    //     if (ball1.y <= 0) {
    //       ball1.yd = 1;
    //     }

    //     ball1.draw();
    //   }, 2);

    //   canvas.addEventListener("mouseout", function(e) {
    //     clearInterval(aa);
    //   });
    // });

    canvas.addEventListener("mousemove", function(e) {
      ball1.x = e.clientX - 260;
      ball1.y = e.clientY;
      ball1.draw();
    });

    canvas.addEventListener('click',function(){
      const aa = setInterval(() => {
        ball1.x += ball1.vx * ball1.xd;
        ball.vy *= 0.99;
        ball.vy += 0.25;
        ball1.y += ball1.vy * ball1.yd;

        if (ball1.x >= 800) {
          ball1.xd = -1;
        }

        if (ball1.x <= 0) {
          ball1.xd = 1;
        }

        if (ball1.y >= 800) {
          ball1.yd = -1;
        }

        if (ball1.y <= 0) {
          ball1.yd = 1;
        }

        ball1.draw();
      }, 2);

      canvas.addEventListener("mouseout", function() {
        clearInterval(aa);
      });
    });
  }
};
