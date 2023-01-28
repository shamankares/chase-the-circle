const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");
const colors = ["maroon", "red", "orange", "yellow", "lime", "green", "teal", "blue", "aquamarine", "indigo", "violet", "purple"];

//let currentAnimation;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.bgColor = colors[Math.floor(Math.random() * colors.length)];

const ball = {
    x: Math.round(Math.random() * canvas.width),
    y: Math.round(Math.random() * canvas.height),
    radius: 30,
    color: colors[Math.floor(Math.random() * colors.length)],
    draw(){
    	this.changeColor();
        ctx.fillStyle = this.color;
        console.log("Ball color:", ball.color);
		console.log("Canvas color:", canvas.bgColor);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    },
    changeColor(){
    	console.log("Ball color:", ball.color);
		console.log("Canvas color:", canvas.bgColor);
		do {
			this.color = colors[Math.floor(Math.random() * colors.length)];
		} while(canvas.bgColor === this.color);
    }
}

function colorCanvas(){
	ctx.fillStyle = canvas.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function changeColorCanvas(){
	console.log("Ball color:", ball.color);
	console.log("Canvas color:", canvas.bgColor);
	do {
		canvas.bgColor = colors[Math.floor(Math.random() * colors.length)];
	} while(canvas.bgColor === ball.color);
}

function writeDesc(){
	const darkColor = ['maroon', 'red', 'blue', 'indigo', 'purple', 'teal', 'green'];
	if(darkColor.includes(canvas.bgColor)){
		ctx.fillStyle = "white";
	}
	else {
		ctx.fillStyle = "black";
	}
	ctx.font = "18px sans-serif";
	ctx.fillText("Chase the Circle by shamankares", canvas.width - 280, canvas.height - 18);
}

canvas.addEventListener('mousemove', (ev) => {
    x = ev.offsetX;
    y = ev.offsetY;
    if((x - ball.x) ** 2 + (y - ball.y) ** 2 <= (ball.radius - 3) ** 2){
        changeColorCanvas();
        colorCanvas();
        ball.x = Math.round(Math.random() * canvas.width);
        ball.y = Math.round(Math.random() * canvas.height);
        ball.draw();
        writeDesc();
    }
});

debugger;
console.log("Canvas color:", canvas.bgColor);
colorCanvas();
ball.draw();
writeDesc();
