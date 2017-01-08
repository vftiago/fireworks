(function () { // probably need to go back to the fountain/rocket/particle trio

    function ParticleGenerator( overrideSettings ) {
        var settings = Object.assign( globalSettings, overrideSettings );

        this.particleCount = settings.particleCount;

    }

    ParticleGenerator.prototype.generateFountainParticles = function() {
        for  ( var i = 0; i < this.particleCount; i++ ) {
            var settings = {

            }
            var particle = new app.Particle( settings );
        }
    }

    ParticleGenerator.prototype.generateRocketParticles = function() {
        for  ( var i = 0; i < this.particleCount; i++ ) {
            var settings = {
                //         var angle = Math.random() * Math.PI * 2;
                //         var speed = Math.cos(Math.random() * Math.PI / 2) * settings.rocketSpeed;

                //         particle.isActive = false;
                //         particle.vel.x = Math.cos(angle) * speed;
                //         particle.vel.y = Math.sin(angle) * speed;
                //         particle.flick = true;
                //         particle.color = this.color;
            }
            var particle = new app.Particle( settings );
        }
    }

    app.ParticleGenerator = ParticleGenerator;

})();