(function (app) {
        function buildFireworks(xmlData) {

        app.fireworksArray = [];
        app.particlesArray = [];
        var offsetX = 512;
        var offsetY = 384;
        // create array from loaded xml data
        for (var i = 0; i < xmlData.length; i++) {

            var settings = {
                birthDate: this.birthDate = +new Date(),
                type: xmlData[i].attributes.type,
                color: libs.hexToRgb( xmlData[i].attributes.colour ),
                begin: parseInt(xmlData[i].attributes.begin, 10),
                duration: parseInt(xmlData[i].attributes.duration, 10),
                xPos: parseInt(xmlData[i].Position.attributes.x, 10) + offsetX,
                yPos: Math.abs(parseInt(xmlData[i].Position.attributes.y, 10) - offsetY),
                xSpeed: xmlData[i].Velocity ? parseInt(xmlData[i].Velocity.attributes.x, 10) : 0,
                ySpeed: xmlData[i].Velocity ? parseInt(xmlData[i].Velocity.attributes.y, 10) : 0
            }

            var particle = new app.Particle( settings );

            app.fireworksArray.push( particle );

            // build rockets
            // if (xmlData[i].attributes.type === 'Rocket') {
            //     var begin = xmlData[i].attributes.begin,
            //         color = xmlData[i].attributes.colour,
            //         duration = xmlData[i].attributes.duration,
            //         xPos = parseInt(xmlData[i].Position.attributes.x, 10) + offsetX,
            //         yPos = Math.abs(parseInt(xmlData[i].Position.attributes.y, 10) - offsetY),
            //         xSpeed = parseInt(xmlData[i].Velocity.attributes.x, 10),
            //         ySpeed = parseInt(xmlData[i].Velocity.attributes.y, 10);
            //     var rocket = new app.Rocket(begin, color, duration, xPos, yPos, xSpeed, ySpeed);
            //     app.fireworksArray.push(rocket);
            // }

            // // build fountains
            // if (xmlData[i].attributes.type === 'Fountain') {
            //     var begin = xmlData[i].attributes.begin,
            //         color = xmlData[i].attributes.colour,
            //         duration = xmlData[i].attributes.duration,
            //         xPos = parseInt(xmlData[i].Position.attributes.x, 10) + offsetX,
            //         yPos = Math.abs(parseInt(xmlData[i].Position.attributes.y, 10) - offsetY);

            //     var fountain = new app.Fountain(begin, color, duration, xPos, yPos);
            //     app.fireworksArray.push(fountain);
            // }
        }

        app.fireworksArray.forEach( function( firework ) {
            switch( firework.type ) {
                case 'Fountain':
                    // var settings = {

                    // };
                    // var particle = new app.Particle( settings );
                    // app.particlesArray.push( particle )
                    break;
                case 'Rocket':
                    var angle = Math.random() * Math.PI * 2;
                    var speed = Math.cos(Math.random() * Math.PI / 2) * 88;

                    var settings = {
                        birthDate: firework.birthDate,
                        begin: firework.begin + firework.duration,
                        type: 'Particle',
                        color: firework.color,
                        begin: firework.begin + firework.duration,
                        duration: 4000,
                        xPos: firework.position.x + firework.velocity.x * firework.duration / 1000,
                        yPos: firework.position.y + firework.velocity.y * firework.duration / 1000,
                        xSpeed: Math.cos(angle) * speed,
                        ySpeed: Math.sin(angle) * speed,
                        isActive: false,
                        flick: true
                    }

                    var particle = new app.Particle( settings );
                    app.particlesArray.push( particle );
                    break;
                default:
                    break;
            }
        } );

        // for (var firework = 0; firework < app.fireworksArray.length; firework++) {

        // }

        console.log(app.particlesArray)


        app.mainLoop();
    }

    app.buildFireworks = buildFireworks;

})(app);