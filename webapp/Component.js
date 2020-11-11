sap.ui.define([
		"sap/ui/core/UIComponent",
		"logaligroup/SAPUI5/model/models",
		"sap/ui/model/resource/ResourceModel"
	], function (UIComponent, models, ResourceModel) {

		return UIComponent.extend("logaligroup.SAPUI5.Components", {
			
			
			metadata:{
				manifest : "json"
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

			}

		});

	}

);