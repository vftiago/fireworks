(function (app) {
        function buildFireworks(xmlData) {

        app.fireworksArray = [];
        var offsetX = 512;
        var offsetY = 384;
        // create array from loaded xml data
        for (var i = 0; i < xmlData.length; i++) {

            // build rockets
            if (xmlData[i].attributes.type === 'Rocket') {
                var begin = xmlData[i].attributes.begin,
                    color = xmlData[i].attributes.colour,
                    duration = xmlData[i].attributes.duration,
                    xPos = parseInt(xmlData[i].Position.attributes.x, 10) + offsetX,
                    yPos = Math.abs(parseInt(xmlData[i].Position.attributes.y, 10) - offsetY),
                    xSpeed = parseInt(xmlData[i].Velocity.attributes.x, 10),
                    ySpeed = parseInt(xmlData[i].Velocity.attributes.y, 10);
                var rocket = new app.Rocket(begin, color, duration, xPos, yPos, xSpeed, ySpeed);
                app.fireworksArray.push(rocket);
            }

            // build fountains
            if (xmlData[i].attributes.type === 'Fountain') {
                var begin = xmlData[i].attributes.begin,
                    color = xmlData[i].attributes.colour,
                    duration = xmlData[i].attributes.duration,
                    xPos = parseInt(xmlData[i].Position.attributes.x, 10) + offsetX,
                    yPos = Math.abs(parseInt(xmlData[i].Position.attributes.y, 10) - offsetY);

                var fountain = new app.Fountain(begin, color, duration, xPos, yPos);
                app.fireworksArray.push(fountain);
            }
        }

        app.durations = [];

        for (var i = 0, j = app.fireworksArray.length; i < j; i++) {
            app.durations.push(app.fireworksArray[i].begin + app.fireworksArray[i].duration);
        }

        app.mainLoop();
    }

    app.buildFireworks = buildFireworks;

})(app);