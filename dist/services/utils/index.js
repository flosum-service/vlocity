const _0x30c1bf=_0x3582;(function(_0x4b5d62,_0x48bc2f){const _0x53731d=_0x3582,_0x6cdc3c=_0x4b5d62();while(!![]){try{const _0x201afb=parseInt(_0x53731d(0x172))/0x1+parseInt(_0x53731d(0x17a))/0x2*(-parseInt(_0x53731d(0x169))/0x3)+-parseInt(_0x53731d(0x173))/0x4+-parseInt(_0x53731d(0x171))/0x5*(parseInt(_0x53731d(0x164))/0x6)+parseInt(_0x53731d(0x170))/0x7+-parseInt(_0x53731d(0x176))/0x8+parseInt(_0x53731d(0x16a))/0x9;if(_0x201afb===_0x48bc2f)break;else _0x6cdc3c['push'](_0x6cdc3c['shift']());}catch(_0x2b0e42){_0x6cdc3c['push'](_0x6cdc3c['shift']());}}}(_0x3ea6,0x284b1));const constants=require('../../constants');function _0x3582(_0x7227,_0x54ee66){const _0x3ea6d9=_0x3ea6();return _0x3582=function(_0x3582c1,_0x3d0375){_0x3582c1=_0x3582c1-0x161;let _0x52d48c=_0x3ea6d9[_0x3582c1];return _0x52d48c;},_0x3582(_0x7227,_0x54ee66);}function _0x3ea6(){const _0xcdb8d6=['88808UkMNLQ','push','prototype','match','forEach','getOwnPropertyNames','object','888918alxHgI','exports','indexOf','length','stringify','6ccNiSk','5056875kHEyVE','toString','parse','undefined','array','includes','83804fZaSfP','5heGiqu','81964jckFxk','793568KhQFEv','some','***','443336XhOxRy','keys','toLowerCase','call'];_0x3ea6=function(){return _0xcdb8d6;};return _0x3ea6();}function checkRequiredFields(_0x571b3f,_0x19e252,_0x3a52ac=null){const _0xc732cd=_0x3582,_0x2d0f73=[];return _0x19e252[_0xc732cd(0x161)](_0x133748=>{const _0xafc63c=_0xc732cd;(_0x571b3f[_0x133748]===undefined||_0x571b3f[_0x133748]===null)&&_0x2d0f73[_0xafc63c(0x17b)](_0x133748);}),_0x3a52ac&&_0x3a52ac[_0xc732cd(0x161)](_0x1d5044=>{const _0x411011=_0xc732cd;_0x19e252[_0x411011(0x161)](_0x308170=>{const _0x1614f6=_0x411011;_0x571b3f[_0x1d5044]&&_0x571b3f[_0x1d5044][_0x308170]&&(_0x2d0f73[_0x1614f6(0x16f)](_0x308170)&&_0x2d0f73['splice'](_0x2d0f73[_0x1614f6(0x166)](_0x308170),0x1));});}),_0x2d0f73;}function type(_0x1112b0){const _0x416a74=_0x3582,_0x4859d9=/^\[object (\S+?)\]$/,_0x487e46=Object[_0x416a74(0x17c)][_0x416a74(0x16b)][_0x416a74(0x179)](_0x1112b0)[_0x416a74(0x17d)](_0x4859d9)||[];return(_0x487e46[0x1]||_0x416a74(0x16d))[_0x416a74(0x178)]();}function removeSensitiveData(_0x1bb7a7){const _0x26a852=_0x3582;if(_0x1bb7a7&&(type(_0x1bb7a7)===_0x26a852(0x163)||type(_0x1bb7a7)===_0x26a852(0x16e))){const _0x233499=JSON[_0x26a852(0x16c)](JSON[_0x26a852(0x168)](_0x1bb7a7));return Object[_0x26a852(0x162)](_0x233499)[_0x26a852(0x167)]&&Object[_0x26a852(0x177)](_0x233499)['map'](_0x361216=>{const _0x3ddb02=_0x26a852;if(_0x233499[_0x361216]&&type(_0x233499[_0x361216])!=='object'&&type(_0x233499[_0x361216])!==_0x3ddb02(0x16e))constants['FIELDS_TO_ENCRYPT'][_0x3ddb02(0x174)](_0x24feff=>{const _0x107bd5=_0x3ddb02;if(_0x361216===_0x24feff)return _0x233499[_0x361216]=_0x107bd5(0x175),!![];return![];});else _0x233499[_0x361216]&&(_0x233499[_0x361216]=removeSensitiveData(_0x233499[_0x361216]));return _0x233499[_0x361216];}),_0x233499;}return _0x1bb7a7;}module[_0x30c1bf(0x165)]={'checkRequiredFields':checkRequiredFields,'removeSensitiveData':removeSensitiveData};