QUnit.config.autostart = false;

sap.ui.define([
	"sap/ui/test/Opa5",
    "ns/myfioriapp/test/integration/pages/Common",
	"sap/suite/ui/generic/template/integration/testLibrary/ListReport/pages/ListReport",
	"sap/suite/ui/generic/template/integration/testLibrary/ObjectPage/pages/ObjectPage",
	"ns/myfioriapp/test/integration/ListTest"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ns.myfioriapp.view",
		testLibs: {
			fioriElementsTestLibrary: {
				Common: {
					appId: "ns.myfioriapp",
					entitySet: "SEPMRA_C_PD_Product"
				}
			}
		}
	});
});