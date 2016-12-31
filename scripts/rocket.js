// // rocket constructor
// (function(app, libs) {

//     var settings = {
//         backgroundColor: "rgba(0, 0, 0, 1)",
//         loopDelay: 3000,
//         canvasWidth: 1024,
//         canvasHeight: 768,
//         // offsetX: 512,
//         // offsetY: 384,
//         deathDateDelay: 0,
//         particlesPerFountain: 0.1,
//         particlesPerRocket: 200,
//         fountainSpeed: 200,
//         fountainSpread: 0.2,
//         rocketSpeed: 88,
//         particleSize: 8,
//         particleShrink: 0.97,
//         particleMinSize: 0.02,
//         gravity: 0.8,
//         resistance: 0.997
//     }

//     var Particle = app.Particle;

//     function Rocket(begin, color, duration, xPos, yPos, xSpeed, ySpeed) {
//         this.super = Particle;
//         Particle.call(this,
//             begin,
//             duration,
//             {x: xPos, y: yPos},
//             {x: xSpeed, y: ySpeed}
//         );
//         this.count = Math.random() * 10 + 200;
//         this.color = libs.hexToRgb(color);
//         this.particles = [];
//         var pos = {
//             x: this.pos.x + this.vel.x,
//             y: this.pos.y - this.vel.y
//         }
//         for ( let i = 0; i < this.count; i++ ) {
//             this.generateParticles( pos );
//         }
//         this.hasExploded = false;
//     }

//     Rocket.prototype = new Particle(); // Rockets are particles too

//     Rocket.prototype.constructor = Rocket;

//     Rocket.prototype.explode = function() {
//         for (var i = 0, j = this.particles.length; i < j; i++) {
//             this.particles[i].activate();
//         }
//     };

//     Rocket.prototype.update = function() {
//         this.super.prototype.update.call(this);
//         if (!this.isAlive && !this.hasExploded) {
//             this.hasExploded = true;
//             this.explode();
//         }
//         if (!this.isAlive) {
//             for (var i = 0, j = this.particles.length; i < j; i++) {
//                 if (this.particles[i].isActive) {
//                     this.particles[i].update();
//                 }
//             }
//         }
//     }

//     Rocket.prototype.draw = function(c) {
//         this.super.prototype.draw.call(this, c, true);
//         if (!this.isAlive) {
//             for (var i = 0, j = this.particles.length; i < j; i++) {
//                 this.particles[i].draw(c);
//             }
//         }
//     }

//     Rocket.prototype.generateParticles = function() {
//         var particle = new Particle(this.begin + this.duration, 4000, pos);

//         var angle = Math.random() * Math.PI * 2;
//         var speed = Math.cos(Math.random() * Math.PI / 2) * settings.rocketSpeed;

//         particle.isActive = false;
//         particle.vel.x = Math.cos(angle) * speed;
//         particle.vel.y = Math.sin(angle) * speed;
//         particle.flick = true;
//         particle.color = this.color;
//         this.particles.push(particle);
//     }

//     app.Rocket = Rocket;


// })(app, libs);
