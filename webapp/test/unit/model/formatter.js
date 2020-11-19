sap.ui.define([
	"logaligroup/SAPUI5/model/formatter",
	"sap/ui/model/resource/ResourceModel"
	], function(formatter, ResourceModel ){
		QUnit.module("Formatting functions", {
			
			beforeEach: function() {
				
				this._oResourceModel = new ResourceModel({
					bundleUrl: sap.ui.require.toUrl("logaligroup/SAPUI5") + "/i18n/i18n.properties"
					
				});
			},
			
			afterEach: function(){
				
				this._oResourceModel.destroy();
			}
			
		}); 
		
		QUnit.test("Should retunr the translated text", function (assert ){
			
			var oModel = this.stub();
			oModel.withArgs("i18n").returns(this._oResourceModel);
			
			var oViewStub = {
				
				getModel: oModel 
			};
			
			var oControllerStub = {
				
				getView: this.stub().returns(oViewStub)
			};
			
			var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub);
			// Assert
			assert.strictEqual(fnIsolatedFormatter("A"), "New","The long text for status A is correct");
			assert.strictEqual(fnIsolatedFormatter("B"), "In Progress","The long text for status B is correct");
			assert.strictEqual(fnIsolatedFormatter("C"), "Done","The long text for status C is correct");
			
		});
		
	}) ;