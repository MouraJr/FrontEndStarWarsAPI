const canvas = document.getElementById('animated-bg')
const ctx = canvas.getContext("2d")

let screen, starArr;

let params = {
    speed: 10,
    count: 400,
    life: 5
};

function Star() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.z = Math.random() * canvas.width;

    this.move = function () {
        this.z -= params.speed;

        if (this.z <= 0) {
            this.z = canvas.width;
        }
    };

    this.show = function () {
        let x, y, radius, opacity;

        radius = canvas.width / this.z;

        x = (this.x - screen.c[0]) * radius;
        x = x + screen.c[0];
        y = (this.y - screen.c[1]) * radius;
        y = y + screen.c[1];

        opacity = radius > params.life ? (2 - radius / params.life) * 1.5 : 1;

        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255)' + opacity + ")";
        ctx.arc(x, y, raius, 0, Math.PI * 2);
        ctx.fill();
    };
}


