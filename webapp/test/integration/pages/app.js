sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press"

], function (Opa5, Press) {
	var sViewName = "logaligroup.SAPUI5.view.HelloPanel";
	Opa5.createPageObjects({
		onTheAppPage: {
			actions: {
				iSallyHelloDialogButton: function () {
					return this.waitFor({
						id: "helloDialogButton",
						viewName: sViewName,
						actions: new Press(),
						errorMessage: "Did not find the 'Say Hello Dialog Button' on the HelloPanel view"
					});
				}
			},

			assertions: {
				iSeeTheHelloDialog: function () {
					return this.waitFor({
						controlType: "sap.m.Dialog",
						success: function () {
							Opa5.assert.ok(true, "The dialog was opened");
						},
						errorMessage: "Did not find the dialog control"
					});
				}
			}
		}
	});
});