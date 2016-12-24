(function (app, libs) {
    var options = {src: "source/fireworks.xml", method: "GET"};
    var callback = app.buildFireworks;

    libs.loadXml(options, callback);
})(app, libs);