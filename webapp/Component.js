sap.ui.define([
	"sap/ui/core/UIComponent",
	"logaligroup/SAPUI5/model/models",
	"sap/ui/model/resource/ResourceModel",
	"./controller/HelloDialog",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"

], function (UIComponent, models, ResourceModel, HelloDialog, JSONModel, Device) {

	return UIComponent.extend("logaligroup.SAPUI5.Components", {

		metadata: {
			manifest: "json"
		},

		init: function () {

			// call the init function of the parent

			UIComponent.prototype.init.apply(this, arguments);

			//set model on view
			this.setModel(models.createRecipient());

			//set i18n on model view
			var i18nModel = new ResourceModel({
				bundleName: "logaligroup.SAPUI5.i18n.i18n"

			});

			this.setModel(i18nModel, "i18n");

			// set device model
			var oDeviceModel = new JSONModel(Device);

			this.setModel(oDeviceModel, "device");

			this._helloDialog = new HelloDialog(this.getRootControl());

			// create the views based
			this.getRouter().initialize();

		},

		exit: function () {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog: function () {
			this._helloDialog.open();
		},

		getContentDensityClass: function () {
			if (!Device.support.touch) {

				this._sContentDensityClass = "sapUiSizeCompact";
			} else {
				this._sContentDensityClass = "sapUiSizeCozy";
			}
			return this._sContentDensityClass;

		}

	});
});