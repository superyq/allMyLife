var sun = new Image();
var moon = new Image();
var earth = new Image();

export default {
  methods: {
    drawSun(ctx) {
      ctx.globalCompositeOperation = "destination-over"; // 在现有的画布内容后面绘制新的图形
      ctx.clearRect(0, 0, 800, 800); // clear canvas

      ctx.fillStyle = "rgba(0,0,0,0.4)";
      ctx.strokeStyle = "rgba(0,153,255,0.4)";
      ctx.save();
      ctx.translate(400, 400);

      // Earth
      var time = new Date();
      ctx.rotate(
        ((2 * Math.PI) / 60) * time.getSeconds() +
          ((2 * Math.PI) / 60000) * time.getMilliseconds()
      );
      ctx.translate(105, 0);
      ctx.fillRect(0, -12, 50, 24); // Shadow
      ctx.drawImage(earth, -12, -12);

      // Moon
      ctx.save();
      ctx.rotate(
        ((2 * Math.PI) / 6) * time.getSeconds() +
          ((2 * Math.PI) / 6000) * time.getMilliseconds()
      );
      ctx.translate(0, 28.5);
      ctx.drawImage(moon, -3.5, -3.5);
      ctx.restore();

      ctx.restore();

      ctx.beginPath();
      ctx.arc(400, 400, 105, 0, Math.PI * 2, false); // Earth orbit
      ctx.stroke();

      ctx.drawImage(sun, 250, 250, 300, 300);
    },
    drawClock(ctx) {
      var now = new Date();
      ctx.save();
      ctx.clearRect(0, 0, 150, 150);
      ctx.translate(75, 75);
      ctx.scale(0.4, 0.4);
      ctx.rotate(-Math.PI / 2);
      ctx.strokeStyle = "black";
      ctx.fillStyle = "white";
      ctx.lineWidth = 8;
      ctx.lineCap = "round";

      // Hour marks
      ctx.save();
      for (var i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(100, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
      }
      ctx.restore();

      // // Minute marks
      ctx.save();
      ctx.lineWidth = 5;
      for (i = 0; i < 60; i++) {
        if (i % 5 != 0) {
          ctx.beginPath();
          ctx.moveTo(117, 0);
          ctx.lineTo(120, 0);
          ctx.stroke();
        }
        ctx.rotate(Math.PI / 30);
      }
      ctx.restore();

      var sec = now.getSeconds();
      var min = now.getMinutes();
      var hr = now.getHours();
      hr = hr >= 12 ? hr - 12 : hr;

      ctx.fillStyle = "black";

      // write Hours
      ctx.save();
      ctx.rotate(
        hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec
      );
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.moveTo(-20, 0);
      ctx.lineTo(80, 0);
      ctx.stroke();
      ctx.restore();

      // write Minutes
      ctx.save();
      ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(-28, 0);
      ctx.lineTo(112, 0);
      ctx.stroke();
      ctx.restore();

      // // Write seconds
      ctx.save();
      ctx.rotate((sec * Math.PI) / 30);
      ctx.strokeStyle = "#D40000";
      ctx.fillStyle = "#D40000";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(-30, 0);
      ctx.lineTo(83, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.restore();

      ctx.beginPath();
      ctx.lineWidth = 14;
      ctx.strokeStyle = "#325FA2";
      ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
      ctx.stroke();

      ctx.restore();
    },
    drawImages(ctx) {
      var img = new Image();

      img.src =
        "https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg";
      var CanvasXSize = 800;
      var CanvasYSize = 200;
      var speed = 30; //lower is faster
      var scale = 1.05;
      var y = -4.5; //vertical offset

      // Main program

      var dx = 0.75;
      var imgW;
      var imgH;
      var x = 0;
      var clearX;
      var clearY;

      img.onload = function() {
        imgW = img.width * scale;
        imgH = img.height * scale;
        if (imgW > CanvasXSize) {
          x = CanvasXSize - imgW;
        } // image larger than canvas
        if (imgW > CanvasXSize) {
          clearX = imgW;
        } // image larger than canvas
        else {
          clearX = CanvasXSize;
        }
        if (imgH > CanvasYSize) {
          clearY = imgH;
        } // image larger than canvas
        else {
          clearY = CanvasYSize;
        }
        //Set Refresh Rate
        return setInterval(() => {
          ctx.clearRect(0, 0, clearX, clearY);
          //If image is <= Canvas Size
          if (imgW <= CanvasXSize) {
            //reset, start from beginning
            if (x > CanvasXSize) {
              x = 0;
            }
            //draw aditional image
            if (x > CanvasXSize - imgW) {
              ctx.drawImage(img, x - CanvasXSize + 1, y, imgW, imgH);
            }
          }
          //If image is > Canvas Size
          else {
            //reset, start from beginning
            if (x > CanvasXSize) {
              x = CanvasXSize - imgW;
            }
            //draw aditional image
            if (x > CanvasXSize - imgW) {
              ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
            }
          }
          //draw image
          ctx.drawImage(img, x, y, imgW, imgH);
          //amount to move
          x += dx;
        }, speed);
      };
    }
  },
  mounted() {
    const canvas = document.getElementById("advAnimation");
    const ctx = canvas.getContext("2d");

    sun.src = "https://mdn.mozillademos.org/files/1456/Canvas_sun.png";
    moon.src = "https://mdn.mozillademos.org/files/1443/Canvas_moon.png";
    earth.src = "https://mdn.mozillademos.org/files/1429/Canvas_earth.png";

    // 重绘太阳
    // setInterval(() => {
    //   this.drawSun(ctx);
    // }, 10);

    // 重绘闹钟
    // setInterval(() => {
    //   this.drawClock(ctx);
    // }, 10);

    // 循环全景图片
    this.drawImages(ctx);
  }
};
