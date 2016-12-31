// // fountain constructor
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

//     var Particle = app.Particle,
//         Rocket = app.Rocket;

//     function Fountain(begin, color, duration, xPos, yPos) {
//         this.super = Particle;
//         Particle.call(this,
//             begin,
//             0, // fountains have no duration
//             {x: xPos, y: yPos},
//             {x:0, y: 0} // fountains have no speed
//         );
//         this.size = settings.particleSize;
//         this.fountainDuration = duration; // we need to store our fountain's duration to be used as the duration of its particles
//         this.count = Math.random() * 10 + settings.particlesPerFountain * this.fountainDuration;
//         this.particles = [];
//         this.color = libs.hexToRgb(color);
//         this.generateParticles();
//     }

//     Fountain.prototype = new Rocket(); // fountains are rockets which explode immediately

//     Fountain.prototype.constructor = Fountain;

//     Fountain.prototype.update = function() {
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

//     Fountain.prototype.generateParticles = function() {
//         var pos = {
//             x: this.pos.x + this.vel.x * this.duration / 1000,
//             y: this.pos.y - this.vel.y * this.duration / 1000
//         }

//         for (var i = 0; i < this.count; i++) {

//             var fountainParticleBegin = Math.random() * this.fountainDuration + this.begin;
//             var fountainParticleDuration = this.fountainDuration + this.begin - fountainParticleBegin;

//             var particle = new Particle(fountainParticleBegin, fountainParticleDuration, pos);
//             var angle = Math.random() * Math.PI * 2;

//             particle.isActive = false;
//             particle.vel.y = Math.abs(Math.sin(angle) * settings.fountainSpeed);
//             particle.vel.x = (Math.random() * 2 - 1) * settings.fountainSpread * Math.random() * particle.vel.y;

//             particle.flick = true;
//             particle.color = this.color;
//             this.particles.push(particle);
//         }
//     }

//     app.Fountain = Fountain;

// })(app, libs);
