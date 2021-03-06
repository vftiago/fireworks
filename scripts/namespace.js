var app = app || {};
var libs = libs || {};

var globalSettings = {
    loopDelay: 3000,
    canvasWidth: 1024,
    canvasHeight: 768,
    particlesPerFountain: 80,
    particlesPerRocket: 80,
    fountainSpeed: 80,
    fountainSpread: 0.2,
    rocketSpeed: 88,
    particleSize: 6,
    shrinkFactor: 0.97,
    particleMinSize: 0.02,
    gravity: 0,
    airResistance: 1,
    lifeTime: 18000
}

// set size of and append canvas
var canvas = document.createElement('canvas');
    canvas.width = globalSettings.canvasWidth;
    canvas.height = globalSettings.canvasHeight;
    document.getElementById('container').appendChild(canvas);

// create our 2d context
var c = canvas.getContext('2d');
