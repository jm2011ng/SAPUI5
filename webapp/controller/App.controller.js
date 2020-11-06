sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("logaligroup.SAPUI5.controller.App", {
		OnShowHello: function () {
			/*eslint-disable no-alert*/
			alert("Hello Word");
			/*eslint-enable no-alert*/
		}

	});

});