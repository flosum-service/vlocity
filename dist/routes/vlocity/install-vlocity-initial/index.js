const _0xec9575=_0x1623;(function(_0x265dc0,_0x575c24){const _0x34b5f5=_0x1623,_0x5d3ac6=_0x265dc0();while(!![]){try{const _0x54560b=parseInt(_0x34b5f5(0x8b))/0x1*(parseInt(_0x34b5f5(0x78))/0x2)+parseInt(_0x34b5f5(0x8c))/0x3+parseInt(_0x34b5f5(0x81))/0x4+parseInt(_0x34b5f5(0x93))/0x5*(parseInt(_0x34b5f5(0x7b))/0x6)+parseInt(_0x34b5f5(0x8a))/0x7*(-parseInt(_0x34b5f5(0x8f))/0x8)+-parseInt(_0x34b5f5(0x80))/0x9*(-parseInt(_0x34b5f5(0x86))/0xa)+-parseInt(_0x34b5f5(0x94))/0xb;if(_0x54560b===_0x575c24)break;else _0x5d3ac6['push'](_0x5d3ac6['shift']());}catch(_0x2e36fe){_0x5d3ac6['push'](_0x5d3ac6['shift']());}}}(_0x458c,0x60bbf));function _0x458c(){const _0x32bff8=['18szRbbH','x-request-id','checkRequiredFields','91932IXLpNG','installVlocityInitial','catch','START_INSTALL_VLOCITY_INITIAL','../../../constants','961803PAnfMK','1218344iVvmIs','express','The\x20process\x20of\x20install\x20Vlocity\x20Initial\x20started.','../../../services/logger','./controller','20eOpLXc','send','../../../services/utils','log','456743TdIDGP','4211fPuRKd','610047fyCvJt','headers','createLog','80ImxOaU','length','REQUIRED_FIELDS_ERROR','status','240yueitj','4909421eezCou','vlocity:install-vlocity-initial:','ERROR','exports'];_0x458c=function(){return _0x32bff8;};return _0x458c();}const {Router}=require(_0xec9575(0x82)),logger=require(_0xec9575(0x84)),constants=require(_0xec9575(0x7f)),controller=require(_0xec9575(0x85)),utils=require(_0xec9575(0x88)),router=new Router();function _0x1623(_0x5e9e59,_0x5f0f83){const _0x458cf2=_0x458c();return _0x1623=function(_0x16232d,_0xf20fe8){_0x16232d=_0x16232d-0x75;let _0x5c08b9=_0x458cf2[_0x16232d];return _0x5c08b9;},_0x1623(_0x5e9e59,_0x5f0f83);}router['post']('/',(_0x2f30e2,_0x4b6cd3)=>{const _0x3091b9=_0xec9575,_0x5bdc2e=logger[_0x3091b9(0x8e)](_0x3091b9(0x75)+_0x2f30e2[_0x3091b9(0x8d)][_0x3091b9(0x79)]);_0x5bdc2e['log'](constants[_0x3091b9(0x7e)]);const _0x2ede20=utils[_0x3091b9(0x7a)](_0x2f30e2['body'],constants['REQUIRED_FIELDS_CLEAN_ORG_DATA']);if(_0x2ede20[_0x3091b9(0x90)]){_0x5bdc2e[_0x3091b9(0x89)](constants[_0x3091b9(0x91)]);const _0x36218f={'status':constants[_0x3091b9(0x76)],'error':{'message':constants[_0x3091b9(0x91)],'missingFields':_0x2ede20}};return _0x5bdc2e[_0x3091b9(0x89)](_0x36218f),_0x4b6cd3[_0x3091b9(0x92)](0x190)[_0x3091b9(0x87)](_0x36218f);}return controller[_0x3091b9(0x7c)](_0x2f30e2['body'],_0x5bdc2e)[_0x3091b9(0x7d)](_0x387601=>_0x5bdc2e[_0x3091b9(0x89)](_0x387601)),_0x4b6cd3[_0x3091b9(0x92)](0xc8)[_0x3091b9(0x87)](_0x3091b9(0x83));}),module[_0xec9575(0x77)]=router;