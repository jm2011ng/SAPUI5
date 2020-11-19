QUnit.config.autostart = false;
sap.ui.getCore().attachInit(function () {

	sap.ui.require([

		"logaligroup/SAPUI5/test/unit/model/formatter"

	], function () {

		QUnit.start();

	});

});