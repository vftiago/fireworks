(function () { // probably need to go back to the fountain/rocket/particle trio

    function ParticleGenerator( overrideSettings ) {
        var settings = Object.assign( globalSettings, overrideSettings );

        this.particleCount = settings.particleCount;

    }

    ParticleGenerator.prototype.generateParticles = function() {
        for  ( var i = 0; i < this.particleCount; i++ ) {
            var settings = {

            }
            var particle = new app.Particle( settings );
        }
    }

    app.ParticleGenerator = ParticleGenerator;

})();