// define request animation frame, source: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60); // 60 fps
    };
})();