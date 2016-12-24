// particle constructor
(function(app) {

    var settings = {
        backgroundColor: "rgba(0, 0, 0, 1)",
        loopDelay: 3000,
        canvasWidth: 1024,
        canvasHeight: 768,
        // offsetX: 512,
        // offsetY: 384,
        deathDateDelay: 0,
        particlesPerFountain: 0.1,
        particlesPerRocket: 200,
        fountainSpeed: 200,
        fountainSpread: 0.2,
        rocketSpeed: 88,
        particleSize: 8,
        particleShrink: 0.97,
        particleMinSize: 0.02,
        gravity: 0.8,
        resistance: 0.997
    }

    function Particle(begin, duration, pos, vel) {
        this.begin = parseInt(begin, 10);// starting time in seconds,
        this.duration = parseInt(duration, 10);
        this.pos = { // this particle's position in the canvas
            x: pos ? pos.x : 0,
            y: pos ? pos.y : 0
        };
        this.vel = { // velocity increments position frame by frame
            x: vel ? vel.x : 0,
            y: vel ? vel.y : 0
        };
        this.shrink = settings.particleShrink; // particles shrink until they disappear
        this.size = settings.particleSize; // original particle size
        this.resistance = settings.resistance; // resistance reduces speed by set amount
        this.gravity = settings.gravity; // gravity pulls particles down (y axis)
        this.isActive = false;
        this.isAlive = true;
        this.birthDate = +new Date();
        this.deathDate = this.birthDate + this.begin + this.duration;
        this.lastUpdate = this.birthDate + this.begin;
    }

    Particle.prototype.activate = function() {
        this.isActive = true;
    };

    Particle.prototype.canDraw = function() {
        return (this.isAlive && this.isActive);
    };

    Particle.prototype.update = function() {
        var date = +new Date();
        var delta = date - this.birthDate;
        var deltaDraw = date - this.lastUpdate;

        this.lastUpdate = date;

        if (delta > this.begin && this.isAlive) {
            this.isActive = true;
        }
        if (date > this.deathDate + settings.deathDateDelay || this.size < settings.particleMinSize) {
            this.isAlive = false;
        }
        if (!this.isActive || !this.isAlive) {
            return;
        }

        this.vel.x *= this.resistance;
        this.vel.y *= this.resistance;

        // update position
        if (this.vel) {
            this.pos.x += this.vel.x * deltaDraw / 1000;
            this.pos.y -= (this.vel.y) * deltaDraw / 1000;
        }

        // gravity down (reduce vertical velocity)
        this.vel.y -= this.gravity;

        // shrink
        this.size *= this.shrink;
    };

    Particle.prototype.draw = function(c, isRocket) {
        if (!this.canDraw()) {
            return;
        }

        var x = this.pos.x,
            y = this.pos.y;

        c.save();
        c.globalCompositeOperation = 'lighter'; // color is determined by adding color values if particles overlap, source: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
        c.fillStyle = this.color;
        c.beginPath()
        c.arc(this.pos.x, this.pos.y, this.flick ? Math.random() * this.size : this.size, 0, Math.PI * 2);
        c.closePath();
        c.fill();
        c.restore();
    };

    app.Particle = Particle;

})(app);
