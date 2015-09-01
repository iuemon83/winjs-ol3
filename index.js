var WinJS = require('winjs');
WinJS.Application.onready = function() {
    WinJS.Namespace.define("Sample", {
        outputCommand: WinJS.UI.eventHandler(function(ev) {
            var command = ev.currentTarget;
            if (command.winControl) {
                var label = command.winControl.label || command.winControl.icon || "button";
                var section = command.winControl.section || "";
                var msg = section + " command " + label + " was pressed";

                var contentDialog = document.querySelector(".win-contentdialog").winControl;
                contentDialog.element.textContent = msg;
                contentDialog.show();
            }
        })
    });

    WinJS.UI.processAll().done(function() {
        var map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.MapQuest({
                        layer: 'sat'
                    })
                })
            ],
            view: new ol.View({
                center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
                zoom: 4
            })
        });
    });
};

WinJS.Application.start();
