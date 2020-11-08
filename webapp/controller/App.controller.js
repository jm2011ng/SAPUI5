sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"logaligroup/SAPUI5/model/models"

], function (Controller, MessageToast, models) {
	"use strict";

	return Controller.extend("logaligroup.SAPUI5.controller.App", {

		onInit: function () {

			this.getView().setModel(models.createRecipient());

		},

		OnShowHello: function () {
			MessageToast.show("Hello Word");
		}

	});

});