// standard xhttp request
(function () {
    'use strict';

    function loadXml(options, callback) {
        var src = options.src || "";
        var method = options.method || "GET";
        var xhttp = new XMLHttpRequest();

        xhttp.overrideMimeType("application/xml");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                var xmlDoc = xhttp.responseXML; // get xml response
                var jsonDoc = libs.xmlToJson(xmlDoc); // get JSON

                callback(jsonDoc.FireworkDisplay.Firework);
            }
        }
        xhttp.open(method, src, true);
        xhttp.send();
    }

    libs.loadXml = loadXml;
})();