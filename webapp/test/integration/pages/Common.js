sap.ui.define([
    "sap/ui/test/Opa5",
    "ns/myfioriapp/localService/mockserver"
  ], function (Opa5, mockserver) {
    "use strict";
  
    return Opa5.extend("ns.myfioriapp.test.integration.pages.Common", { 
        iStartMyApp: function () {
            var sPath = sap.ui.require.toUrl("ns/myfioriapp/test");
            return this.iStartMyAppInAFrame(sPath + "/flpSandboxMockServer.html#masterDetail-display");
        }
    });
  }
);