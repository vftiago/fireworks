// particle constructor
(function(app) {

    function Particle( overrideSettings ) {
        var settings = Object.assign( globalSettings, overrideSettings )

        // settings variables
        this.type = settings.type;
        this.birthDate = settings.birthDate;
        this.begin = settings.begin;
        this.color = settings.color;
        this.duration = settings.duration;
        this.particleSize = settings.particleSize;
        this.position = {
            x: settings.xPos,
            y: settings.yPos
        };
        this.velocity = {
            x: settings.xSpeed,
            y: settings.ySpeed
        };
        this.isActive = false;
        this.isAlive = true;
        this.deathDate = this.birthDate + this.begin + this.duration;
        this.lastUpdate = this.birthDate + this.begin;
    }

    Particle.prototype.activate = function() {
        this.isActive = true;
    };

    Particle.prototype.canDraw = function() {
        return this.isActive;
    };

    Particle.prototype.update = function( timenow ) {
        var elapsedTime = timenow - this.birthDate;
        var delta = timenow - this.lastUpdate;

        this.lastUpdate = timenow;

        if ( this.isAlive && ( elapsedTime > this.begin ) ) {
            this.isActive = true;
        }
        if ( ( timenow > this.deathDate ) || ( this.particleSize < globalSettings.particleMinSize ) ) {
            this.isAlive = false;
        }
        if (!this.isActive || !this.isAlive ) {
            return;
        }

        // update position
        this.velocity.x *= globalSettings.airResistance;
        this.velocity.y *= globalSettings.airResistance;
        this.position.x += this.velocity.x * delta / 1000;
        this.position.y -= (this.velocity.y * delta / 1000 ) - globalSettings.gravity;
        this.particleSize *= globalSettings.shrinkFactor;
    };

    // Rocket.prototype.generateParticles = function() {
    //     // var pos = {
    //     //     x: this.pos.x + this.vel.x,
    //     //     y: this.pos.y - this.vel.y
    //     // }

    //     for (var i = 0; i < this.count; i++) {

    //         var particle = new Particle(this.begin + this.duration, 4000, pos);

    //         var angle = Math.random() * Math.PI * 2;
    //         var speed = Math.cos(Math.random() * Math.PI / 2) * settings.rocketSpeed;

    //         particle.isActive = false;
    //         particle.vel.x = Math.cos(angle) * speed;
    //         particle.vel.y = Math.sin(angle) * speed;
    //         particle.flick = true;
    //         particle.color = this.color;
    //         this.particles.push(particle);
    //     }
    // }

    // Fountain.prototype.generateParticles = function() {
    //     // var pos = {
    //     //     x: this.pos.x + this.vel.x * this.duration / 1000,
    //     //     y: this.pos.y - this.vel.y * this.duration / 1000
    //     // }

    //     for (var i = 0; i < this.count; i++) {

    //         var fountainParticleBegin = Math.random() * this.fountainDuration + this.begin;
    //         var fountainParticleDuration = this.fountainDuration + this.begin - fountainParticleBegin;

    //         var particle = new Particle(fountainParticleBegin, fountainParticleDuration, pos);
    //         var angle = Math.random() * Math.PI * 2;

    //         particle.isActive = false;
    //         particle.vel.y = Math.abs(Math.sin(angle) * settings.fountainSpeed);
    //         particle.vel.x = (Math.random() * 2 - 1) * settings.fountainSpread * Math.random() * particle.vel.y;

    //         particle.flick = true;
    //         particle.color = this.color;
    //         this.particles.push(particle);
    //     }
    // }

    Particle.prototype.generateParticles = function() {

    }

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
