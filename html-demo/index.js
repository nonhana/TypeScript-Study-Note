// 使用canvas绘制代码雨
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;
var str = "non_hanalapplandzhouxiang".split("");
var arr = Array(Math.ceil(canvas.width / 10)).fill(0);
console.log(arr);
var rain = function () {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    arr.forEach(function (item, index) {
        ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10);
        arr[index] =
            item > canvas.height || item > 10000 * Math.random() ? 0 : item + 10;
    });
};
setInterval(rain, 40);
