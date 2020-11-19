sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"

], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("logaligroup.SAPUI5.controller.App", {

		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},

		OnOpenHeader: function () {
			this.getOwnerComponent().openHelloDialog();
		}
	});

});