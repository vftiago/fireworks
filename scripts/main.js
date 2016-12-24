// main loop
    var settings = {
        backgroundColor: "rgba(0, 0, 0, 1)",
        loopDelay: 3000,
        canvasWidth: 1024,
        canvasHeight: 768,
        // offsetX: 512,
        // offsetY: 384,
        deathDateDelay: 0,
        particlesPerFountain: 0.1,
        particlesPerRocket: 200,
        fountainSpeed: 200,
        fountainSpread: 0.2,
        rocketSpeed: 88,
        particleSize: 8,
        particleShrink: 0.97,
        particleMinSize: 0.02,
        gravity: 0.8,
        resistance: 0.997
    }



// set size of and append canvas
var canvas = document.createElement('canvas');
canvas.width = settings.canvasWidth;
canvas.height = settings.canvasHeight;
document.body.appendChild(canvas);

// create our 2d context
var c = canvas.getContext('2d');

(function (app) {

    var self = this;
    var maxDuration = Math.max.apply(null, app.durations);

    function clearContext() {
        c.fillStyle = settings.backgroundColor;
        c.fillRect(0, 0, settings.canvasWidth, settings.canvasHeight);
    }

    function drawParticles(el) {
        el.update();
        el.draw(c);
    }

    function drawFrame() {
        app.fireworksArray.forEach(drawParticles);
    }

    self.animationLoop = function (timestamp) {
        console.warn(1);
        if (timestamp > maxDuration + settings.loopDelay) {
            app.buildFireworks(timestamp);
        }
        mainLoop();
    }

    function mainLoop() {
        clearContext();
                    console.warn(1);
        window.requestAnimFrame(function() {
            console.warn(1);
            self.animationLoop();
        });
        drawFrame();
    }

    app.mainLoop = mainLoop;

})(app);

