(function (app) {
    var that = this;

    function clearContext() {
        c.fillStyle = globalSettings.backgroundColor;
        c.fillRect(0, 0, globalSettings.canvasWidth, globalSettings.canvasHeight);
    }

    function drawFrame() {
        var timenow = +new Date();
        app.fireworksArray.forEach( function( particle ) {
            particle.update( timenow );
            particle.draw(c);
        } );
    }

    // this.animationLoop = function () {
    //     mainLoop();
    // }

    function mainLoop() {
        clearContext();
        window.requestAnimFrame(function() {
            mainLoop();
        });
        drawFrame();
    }

    app.mainLoop = mainLoop;

})(app);

