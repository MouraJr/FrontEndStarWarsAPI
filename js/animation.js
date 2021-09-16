/*
* Stars moving right to left
* Created for use on http://www.shariqraza.com
* Inspired from https://codepen.io/trhino/pen/JFmiK
* Updated to remove jQuery dependency and right to left animation
*/
const canvas = document.getElementById('animated-bg');

function Stars() {
    //stars properties
    this.color = 'rgba(255, 255, 255, 1)';
    this.minRadius = 0.7;
    this.maxRadius = 1.5;
    this.minSpeed = .7;
    this.maxSpeed = .10;
    this.fps = 200;
    this.numStars = 400;
    this.canvas = document.getElementById('animated-bg');
    this.ctx = this.canvas.getContext('2d');
}

//Initalize
Stars.prototype.init = function () {
    this.render();
    this.createCircle();
}

Stars.prototype._rand = function (min, max) {
    return Math.random() * (max - min) + min;
}

Stars.prototype.render = function () {
    // let self = this,
    //     wHeight = window.innerHeight,
    //     wWidth = window.innerWidth;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    window.addEventListener('resize', this.render);
    Stars();
}

//Create shape
Stars.prototype.createCircle = function () {
    var star = [];

    for (var i = 0; i < this.numStars; i++) {
        var self = this;
        star[i] = {
            radius: self._rand(self.minRadius, self.maxRadius),
            xPos: self._rand(0, canvas.width),
            yPos: self._rand(0, canvas.height),
            xVelocity: self._rand(self.minSpeed, self.maxSpeed),
            yVelocity: self._rand(self.minSpeed, self.maxSpeed),
            color: self.color
        }

        //once values are determined, draw star on canvas
        self.draw(star, i);
    }
    //...and once drawn, animate the star
    self.animate(star);
}

// Draw the stars on canvas
Stars.prototype.draw = function (star, i) {
    var self = this,
        ctx = self.ctx;
    ctx.fillStyle = star[i].color;

    ctx.beginPath();
    ctx.arc(star[i].xPos, star[i].yPos, star[i].radius, 0, 2 * Math.PI, false);
    ctx.fill();
}

// Animate stars from right to left
Stars.prototype.animate = function (star) {
    var self = this,
        ctx = self.ctx;

    setInterval(function () {
        //clears canvas
        self.clearCanvas();
        //redraws stars
        for (var i = 0; i < self.numStars; i++) {
            star[i].xPos -= star[i].xVelocity;
            //if star goes off screen from the left call reset method
            if (star[i].xPos < 0) {
                self.resetStar(star, i);
            }
            else {
                self.draw(star, i);
            }
        }
    }, 1000 / self.fps);
}

// reset the star xPos with a randon YPos 
Stars.prototype.resetStar = function (star, i) {
    var self = this;
    star[i].xPos += canvas.width + star[i].radius;
    star[i].yPos = self._rand(0, canvas.height);
    self.draw(star, i);
}

Stars.prototype.clearCanvas = function () {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let star = new Stars().init();