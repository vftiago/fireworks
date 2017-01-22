// particle constructor

(function(app) {

    function Particle( overrideSettings ) {
        this.settings = Object.assign( globalSettings, overrideSettings )
        this.reset();
    };

    Particle.prototype.reset = function() {
        this.isActive = false;
        this.flick = true;
        this.type = this.settings.type;
        this.begin = this.settings.begin;
        this.color = this.settings.color;
        this.duration = this.settings.duration;
        this.particleSize = this.settings.particleSize;
        this.position = {
            x: this.settings.xPos,
            y: this.settings.yPos
        };
        this.velocity = {
            x: this.settings.xSpeed,
            y: this.settings.ySpeed
        };
    };

    Particle.prototype.canDraw = function() {
        return this.isActive;
    };
        
    Particle.prototype.canUpdate = function() {
        return this.isAlive;
    };

    Particle.prototype.getCurrentPosition = function() {
        return this.position;
    };

    Particle.prototype.update = function( timenow ) {
        if ( ( app.elapsedTime > this.begin ) ) {
            this.isActive = true;
        }
        if ( app.elapsedTime > this.begin + this.duration ) {
            this.isActive = false;
        }
        if ( !this.canDraw() ) {
            return;
        }

        if ( app.delta < 50 ) {
                // update position
                this.velocity.x *= globalSettings.airResistance;
                this.velocity.y *= globalSettings.airResistance;
                this.position.x += this.velocity.x * app.delta / 1000;
                this.position.y -= (this.velocity.y * app.delta / 1000 ) - globalSettings.gravity;
                this.particleSize *= globalSettings.shrinkFactor;
        }

    };

    Particle.prototype.draw = function(c) {
        if (!this.canDraw()) {
            return;
        }

        c.save();
        c.globalCompositeOperation = 'lighter'; // color is determined by adding color values if particles overlap, source: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
        c.fillStyle = this.color;
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.flick ? Math.random() * this.particleSize : this.particleSize, 0, Math.PI * 2);
        c.closePath();
        c.fill();
        c.restore();
    };

    app.Particle = Particle;

})(app);
