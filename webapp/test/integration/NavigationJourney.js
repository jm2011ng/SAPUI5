sap.ui.define([
	"logaligroup/SAPUI5/localService/mockserver",
	"sap/ui/test/opaQunit",
	"./pages/app"
], function (mockserver) {

	QUnit.module("Navigation");

	opaTest("Should open the Hello Dialog", function (Given, When, Then) {
		// initialize mock server
		mockserver.init();

		//Arrangements

		Given.iStartMyUIComponent({
			componentConfig: {

				name: "logaligroup.SAPUI5"
			}

		});

		//Actions

		When.onTheAppPage.iSallyHelloDialogButton();

		//Assertions

		Then.onTheAppPage.iSeeTheHelloDialog();

		//Cleanup
		Then.iTeardownMyApp();

	});

});