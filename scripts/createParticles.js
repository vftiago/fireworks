(function () {
    function createParticles( originPoints ) {
        app.particlesArray = [];
        app.originPoints.forEach( function( firework ) {
            app.particlesArray.push( firework );

            switch( firework.type ) {
                case 'Fountain':
                    for (var i = 0; i < globalSettings.particlesPerFountain; i++) {
                        var begin = Math.random() * firework.duration + firework.begin;
                        var angle = Math.random() * Math.PI * 2;

                        var settings = {
                            begin: begin,
                            color: firework.color,
                            duration: firework.duration + begin - firework.begin,
                            xPos: firework.position.x + firework.velocity.x * firework.duration / 1000,
                            yPos: firework.position.y - firework.velocity.y * firework.duration / 1000,
                            xSpeed: (Math.random() * 2 - 1) * globalSettings.fountainSpread * Math.random() * Math.abs(Math.sin(angle) * globalSettings.fountainSpeed),
                            ySpeed: Math.abs(Math.sin(angle) * globalSettings.fountainSpeed)
                        };

                        var particle = new app.Particle( settings );
                        app.particlesArray.push( particle );

                    }
                    break;
                case 'Rocket':
                    for  (var i = 0; i < globalSettings.particlesPerRocket; i++) {
                        var angle = Math.random() * Math.PI * 2;
                        var speed = Math.cos(Math.random() * Math.PI / 2) * 88;

                        var settings = {
                            begin: firework.begin + firework.duration,
                            color: firework.color,
                            duration: 4000,
                            xPos: firework.position.x + firework.velocity.x * firework.duration / 1000,
                            yPos: firework.position.y - firework.velocity.y * firework.duration / 1000,
                            xSpeed: Math.cos(angle) * speed,
                            ySpeed: Math.sin(angle) * speed
                        }

                        var particle = new app.Particle( settings );
                        app.particlesArray.push( particle );
                    }
                    break;
                default:
                    break;
            }
        });
        app.mainLoop();
    }
    app.createParticles = createParticles;
})();