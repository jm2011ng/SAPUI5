sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, History, UIComponent, MessageToast, JSONModel) {

	return Controller.extend("logaligroup.SAPUI5.controller.Detail", {

		onInit: function () {

			var oRouter = UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
			this.getView().setModel(new JSONModel({currency: "EUR"}),  "view");
		},

		_onObjectMatched: function (oEvent) {
			this.byId("rating").reset();
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
				model: "invoices"

			});
		},

		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {

				window.history.go(-1);

			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("overview", {}, true);
			}

		},
		
		OnRatingChange: function(oEvent) {
			var fValue = oEvent.getParameter("value");
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			
			MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue])); 
			
		}

	});
});