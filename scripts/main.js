(function () {
    var that = this;

    function clearContext() {
        c.fillStyle = globalSettings.backgroundColor;
        c.fillRect(0, 0, globalSettings.canvasWidth, globalSettings.canvasHeight);
    }

    function drawFrame() {    
        app.particlesArray.forEach( function( particle ) {
            particle.update();
            particle.draw(c);
        } );
    }

    // function reset() {
    //     app.birth = +new Date();
    //     app.death = +new Date() + globalSettings.lifeTime;
    //     app.timeNow = null;
    //     app.particlesArray.forEach( function( particle ) {
    //         particle.reset();
    //     } );
    // }

    function mainLoop() {
        
        app.lastUpdate = app.timeNow || null;
        app.timeNow = +new Date();
        app.elapsedTime = app.timeNow - app.birth;
        app.delta = app.lastUpdate ? ( app.timeNow - app.lastUpdate ) : null;

        clearContext();
        window.requestAnimFrame(function() {
            console.warn(app.elapsedTime, app.delta);
            mainLoop();
        });
        drawFrame();
    }

    app.mainLoop = mainLoop;

})();

window.onload = app.init;