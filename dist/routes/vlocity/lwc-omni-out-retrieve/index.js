const a33_0x79fff8=a33_0xe1f2;(function(_0x36374f,_0x3c917d){const _0x570b0c=a33_0xe1f2,_0x2c12b7=_0x36374f();while(!![]){try{const _0x1eb6d9=parseInt(_0x570b0c(0x15b))/0x1*(parseInt(_0x570b0c(0x15c))/0x2)+-parseInt(_0x570b0c(0x152))/0x3+-parseInt(_0x570b0c(0x15a))/0x4*(parseInt(_0x570b0c(0x169))/0x5)+parseInt(_0x570b0c(0x153))/0x6+-parseInt(_0x570b0c(0x161))/0x7*(-parseInt(_0x570b0c(0x156))/0x8)+parseInt(_0x570b0c(0x151))/0x9+-parseInt(_0x570b0c(0x163))/0xa*(parseInt(_0x570b0c(0x15f))/0xb);if(_0x1eb6d9===_0x3c917d)break;else _0x2c12b7['push'](_0x2c12b7['shift']());}catch(_0x526da7){_0x2c12b7['push'](_0x2c12b7['shift']());}}}(a33_0x4770,0x69c2a));const {Router}=require('express'),logger=require(a33_0x79fff8(0x155)),constants=require(a33_0x79fff8(0x164)),controller=require('./controller'),utils=require(a33_0x79fff8(0x15e)),router=new Router();function a33_0xe1f2(_0x3d1f78,_0x357a2a){const _0x477037=a33_0x4770();return a33_0xe1f2=function(_0xe1f2db,_0x583266){_0xe1f2db=_0xe1f2db-0x14f;let _0x161494=_0x477037[_0xe1f2db];return _0x161494;},a33_0xe1f2(_0x3d1f78,_0x357a2a);}function a33_0x4770(){const _0x1d1989=['1600326jTqhjH','2268624Snwyfa','status','../../../services/logger','32WvoFHD','createLog','exports','post','2020Dpzsmi','139ILtIMA','10354nrRBPj','checkRequiredFields','../../../services/utils','451wlAAbw','x-request-id','1154454WSnWBu','log','242390nzNfzM','../../../constants','REQUIRED_FIELDS_ERROR','vlocity:lwc-omni-out-retrieve:','headers','REQUIRED_FIELDS_LWC_OMNI_OUT','25cmVagR','length','The\x20process\x20of\x20pack\x20retry\x20started.','1850085bVEgmx'];a33_0x4770=function(){return _0x1d1989;};return a33_0x4770();}router[a33_0x79fff8(0x159)]('/',(_0x33d314,_0x285447)=>{const _0x3740c3=a33_0x79fff8,_0x4dfe24=logger[_0x3740c3(0x157)](_0x3740c3(0x166)+_0x33d314[_0x3740c3(0x167)][_0x3740c3(0x160)]);_0x4dfe24[_0x3740c3(0x162)](constants['START_LWC_OMNI_OUT']);const _0xa7a6b4=utils[_0x3740c3(0x15d)](_0x33d314['body'],constants[_0x3740c3(0x168)]);if(_0xa7a6b4[_0x3740c3(0x14f)]){_0x4dfe24[_0x3740c3(0x162)](constants[_0x3740c3(0x165)]);const _0x305469={'status':constants['ERROR'],'error':{'message':constants[_0x3740c3(0x165)],'missingFields':_0xa7a6b4}};return _0x4dfe24[_0x3740c3(0x162)](_0x305469),_0x285447[_0x3740c3(0x154)](0x190)['send'](_0x305469);}return controller['lwcOmniOut'](_0x33d314['body'],_0x4dfe24)['catch'](_0x3427bb=>_0x4dfe24['log'](_0x3427bb)),_0x285447['status'](0xc8)['send'](_0x3740c3(0x150));}),module[a33_0x79fff8(0x158)]=router;