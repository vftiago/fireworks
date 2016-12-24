// converts HEX to RGB, source: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
(function () {
    'use strict';

    function hexToRgb(hex) {
        hex = [(hex >> 16) & 255, (hex >> 8) & 255, hex & 255];
        return 'rgb(' + hex.join(',') + ')';
    }

    libs.hexToRgb = hexToRgb;
})();