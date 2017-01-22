(function () {
    function init() {
        libs.loadXml({src: "source/fireworks.xml", method: "GET"}, app.buildInitialState);
    }
    app.init = init;
})();