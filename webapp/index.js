sap.ui5.define([
	"sap/m/Text",
	"sap/ui/core/UIComponent",
	"sap/ui/Device"
	],
	function (Text) {
		
	new Text({
		text: "Hello Word"
	}).placeAt("content");

	});