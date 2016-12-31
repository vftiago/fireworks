(function (app) {
        function buildFireworks(xmlData) {

        app.fireworksArray = [];
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

        // for (var firework = 0; firework < app.fireworksArray.length; firework++) {
        //     if ( firework.type === 'Rocket' ) {
        //         var settings = {
                    
        //         }
        //     } else if ( firework.type === 'Fountain' ) {

        //     }
        // }

        app.mainLoop();
    }

    app.buildFireworks = buildFireworks;

})(app);