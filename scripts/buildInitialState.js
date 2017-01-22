(function () {
    function buildInitialState( jsonData ) {

        app.originPoints = [];
        app.birth = +new Date();
        app.death = app.birth + globalSettings.loopTime;
        var offsetX = 512;
        var offsetY = 384;
        // create array from loaded json data
        for (var i = 0; i < jsonData.length; i++) {
            var settings = {
                type: jsonData[i].attributes.type,
                color: libs.hexToRgb( jsonData[i].attributes.colour ),
                begin: parseInt(jsonData[i].attributes.begin, 10),
                duration: parseInt(jsonData[i].attributes.duration, 10),
                xPos: parseInt(jsonData[i].Position.attributes.x, 10) + offsetX,
                yPos: Math.abs(parseInt(jsonData[i].Position.attributes.y, 10) - offsetY),
                xSpeed: jsonData[i].Velocity ? parseInt(jsonData[i].Velocity.attributes.x, 10) : 0,
                ySpeed: jsonData[i].Velocity ? parseInt(jsonData[i].Velocity.attributes.y, 10) : 0
            }
            var particle = new app.Particle( settings );
            app.originPoints.push( particle );
        }
        app.createParticles();
    }
    app.buildInitialState = buildInitialState;
})();