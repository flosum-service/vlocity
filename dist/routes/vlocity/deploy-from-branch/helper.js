const a18_0x517d2c=a18_0x47e3;(function(_0x116313,_0x36fc69){const _0x1d3b7b=a18_0x47e3,_0x1c4b2c=_0x116313();while(!![]){try{const _0x33db80=parseInt(_0x1d3b7b(0x12c))/0x1*(parseInt(_0x1d3b7b(0x14e))/0x2)+-parseInt(_0x1d3b7b(0x13c))/0x3+parseInt(_0x1d3b7b(0x176))/0x4+parseInt(_0x1d3b7b(0x11e))/0x5*(parseInt(_0x1d3b7b(0xfa))/0x6)+parseInt(_0x1d3b7b(0x103))/0x7*(parseInt(_0x1d3b7b(0x106))/0x8)+-parseInt(_0x1d3b7b(0x16e))/0x9+-parseInt(_0x1d3b7b(0x172))/0xa*(-parseInt(_0x1d3b7b(0x14f))/0xb);if(_0x33db80===_0x36fc69)break;else _0x1c4b2c['push'](_0x1c4b2c['shift']());}catch(_0x479150){_0x1c4b2c['push'](_0x1c4b2c['shift']());}}}(a18_0x374d,0xc3eb4));const fs=require('fs'),AdmZip=require(a18_0x517d2c(0x134)),jsForce=require(a18_0x517d2c(0x137)),childProcess=require(a18_0x517d2c(0x101)),constants=require(a18_0x517d2c(0x10d)),http=require(a18_0x517d2c(0x175)),storage=require(a18_0x517d2c(0x141)),{RetrieveHelper}=require(a18_0x517d2c(0x122));function a18_0x47e3(_0x17bd0f,_0x3459c6){const _0x374da8=a18_0x374d();return a18_0x47e3=function(_0x47e32b,_0x4cfa23){_0x47e32b=_0x47e32b-0xeb;let _0x23f82a=_0x374da8[_0x47e32b];return _0x23f82a;},a18_0x47e3(_0x17bd0f,_0x3459c6);}class DeployHelper{constructor(_0x824145,_0xb988bd,_0x5f01b2){const _0x4a9eb0=a18_0x517d2c;this[_0x4a9eb0(0x152)]=_0x824145,this[_0x4a9eb0(0x13d)]=_0xb988bd[_0x4a9eb0(0x13d)],this['flosumToken']=_0xb988bd['flosumToken'],this['branchId']=_0xb988bd[_0x4a9eb0(0x168)],this[_0x4a9eb0(0x11a)]=_0xb988bd[_0x4a9eb0(0x11a)],this[_0x4a9eb0(0x126)]=_0xb988bd['vlocityUrl'],this[_0x4a9eb0(0x171)]=_0xb988bd['vlocityToken'],this[_0x4a9eb0(0x164)]=_0xb988bd[_0x4a9eb0(0x164)],this['isSeparateMatrixVersions']=_0xb988bd[_0x4a9eb0(0x15d)],this[_0x4a9eb0(0x14d)]=_0xb988bd[_0x4a9eb0(0x14d)],this[_0x4a9eb0(0x166)]=_0xb988bd[_0x4a9eb0(0x166)],this[_0x4a9eb0(0x153)]=_0xb988bd[_0x4a9eb0(0x153)],this[_0x4a9eb0(0x170)]=_0xb988bd[_0x4a9eb0(0x170)],this[_0x4a9eb0(0x12e)]=_0xb988bd[_0x4a9eb0(0x12e)],this[_0x4a9eb0(0x105)]=!!_0xb988bd[_0x4a9eb0(0x105)],this['apexCode']=_0xb988bd[_0x4a9eb0(0x114)],this[_0x4a9eb0(0x14b)]=_0xb988bd[_0x4a9eb0(0x14b)],this[_0x4a9eb0(0x119)]=_0x5f01b2,this[_0x4a9eb0(0x135)]=new jsForce['Connection']({'instanceUrl':this[_0x4a9eb0(0x13d)],'accessToken':this[_0x4a9eb0(0x133)]});}[a18_0x517d2c(0xf9)](){return new Promise((_0x1775e9,_0x145ef1)=>{const _0x40dc1d=a18_0x47e3;try{this[_0x40dc1d(0x119)][_0x40dc1d(0x16d)](_0x40dc1d(0x150)),this[_0x40dc1d(0x110)]()[_0x40dc1d(0x167)](_0x4823e0=>{const _0x239ede=_0x40dc1d;this['logger']['log'](_0x239ede(0x154)),_0x1775e9(_0x4823e0);})['catch'](_0x3b6907=>{const _0x5363d2=_0x40dc1d;this[_0x5363d2(0x119)][_0x5363d2(0x16d)](_0x5363d2(0xef)+_0x3b6907),_0x145ef1(_0x3b6907);});}catch(_0x32c7e1){this[_0x40dc1d(0x119)][_0x40dc1d(0x16d)](_0x40dc1d(0xef)+_0x32c7e1),_0x145ef1(_0x32c7e1);}});}[a18_0x517d2c(0x110)](_0x4d7299='',_0x293f4f=[]){return new Promise((_0x3f30c8,_0x132ceb)=>{const _0x23d949=a18_0x47e3;try{const _0x27237d=this[_0x23d949(0x11a)]?this[_0x23d949(0x11a)][_0x23d949(0x146)]('__','')+'/':'',_0x14b9a6=this[_0x23d949(0x13d)]+_0x23d949(0x116)+_0x27237d+_0x23d949(0x173),_0x1d48ff={'branchId':this['branchId'],'lastComponentId':_0x4d7299,'componentIdListJson':this['componentIdListJson']},_0x58fbba={'methodType':constants['METHOD_TYPE_GET_BRANCH_ATTACHMENTS'],'body':JSON['stringify'](_0x1d48ff)};http[_0x23d949(0x132)](_0x14b9a6,this[_0x23d949(0x133)],this[_0x23d949(0x11a)],_0x58fbba)['then'](_0x903043=>{const _0x49a254=_0x23d949;let {data:_0x3e6eca}=_0x903043;_0x3e6eca=JSON[_0x49a254(0x174)](_0x3e6eca),this['logger'][_0x49a254(0x16d)]('Retrieved:\x20'+Number[_0x49a254(0x147)](''+_0x293f4f[_0x49a254(0x144)]/this['componentsCount']*0x64)[_0x49a254(0xee)](0x2)+'%'),_0x293f4f[_0x49a254(0x15b)](..._0x3e6eca[_0x49a254(0x112)]['recordList']),_0x3e6eca[_0x49a254(0x11d)]!=='-1'?_0x3e6eca[_0x49a254(0x112)][_0x49a254(0x100)]&&_0x3e6eca[_0x49a254(0x112)][_0x49a254(0x100)][_0x49a254(0x144)]?http[_0x49a254(0x117)](this['flosumUrl'],this['flosumToken'],_0x3e6eca[_0x49a254(0x112)][_0x49a254(0x100)],this[_0x49a254(0x11a)],this[_0x49a254(0x153)],this['logger'],_0x293f4f)[_0x49a254(0x167)](_0x39f0b8=>this[_0x49a254(0x110)](_0x3e6eca['lastComponentId'],_0x39f0b8))[_0x49a254(0x167)](_0x2e5cb3=>_0x3f30c8(_0x2e5cb3))[_0x49a254(0xec)](_0x35a85b=>_0x132ceb(_0x35a85b)):this[_0x49a254(0x110)](_0x3e6eca[_0x49a254(0x11d)],_0x293f4f)[_0x49a254(0x167)](_0x919468=>_0x3f30c8(_0x919468))[_0x49a254(0xec)](_0x2ac4dd=>{_0x132ceb(_0x2ac4dd);}):_0x3f30c8(_0x293f4f);})[_0x23d949(0xec)](_0x1070ef=>{_0x132ceb(_0x1070ef);});}catch(_0x5c4b55){_0x132ceb(_0x5c4b55);}});}async['backupData'](){const _0x565cfd=a18_0x517d2c;try{this[_0x565cfd(0x119)][_0x565cfd(0x16d)](_0x565cfd(0x161)),await storage[_0x565cfd(0x127)](this['projectPath']+'/'+constants[_0x565cfd(0x16b)]),this[_0x565cfd(0x151)]();const _0x33ab70=fs['readdirSync'](this['projectPath']+'/'+constants['SOURCE_FOLDER']),_0x38c1ce=new RetrieveHelper(this[_0x565cfd(0x152)]+'/'+constants['BACKUP_FOLDER'],{'isNotIncludeDependencies':!![],'isSeparateMatrixVersions':_0x33ab70['includes'](_0x565cfd(0x13b)),'isSeparateCalculationProcedureVersions':_0x33ab70[_0x565cfd(0xf6)]('CalculationProcedureVersion'),'authFlosum':{'instanceUrl':this[_0x565cfd(0x13d)],'accessToken':this[_0x565cfd(0x133)]},'authVlosityOrg':{'instanceUrl':this[_0x565cfd(0x126)],'accessToken':this['vlocityToken']},'attachLogId':this[_0x565cfd(0x12e)],'selectedDataPackTypes':'[]'},this[_0x565cfd(0x119)]);await _0x38c1ce['retrieveData']();const _0x10fd2d=await this[_0x565cfd(0x10f)]();await this['deployBackup'](_0x10fd2d),this[_0x565cfd(0x119)][_0x565cfd(0x16d)](_0x565cfd(0x139));}catch(_0x3b83cc){this['logger'][_0x565cfd(0x16d)]('Error\x20Backup\x20Data\x20'+_0x3b83cc);throw _0x3b83cc;}}[a18_0x517d2c(0x151)](){const _0x1f7e24=a18_0x517d2c;try{let _0x557c30=_0x1f7e24(0x159)+constants[_0x1f7e24(0x143)]+'\x0a';_0x557c30+=_0x1f7e24(0xf4);const _0x2cc3ca=fs[_0x1f7e24(0x138)](this[_0x1f7e24(0x152)]+'/'+constants[_0x1f7e24(0xf8)]);for(const _0x342209 of _0x2cc3ca){const _0x3551aa=fs['readdirSync'](this[_0x1f7e24(0x152)]+'/'+constants[_0x1f7e24(0xf8)]+'/'+_0x342209);for(const _0x23f12b of _0x3551aa){_0x557c30+='\x20\x20-\x20'+_0x342209+'/'+_0x23f12b+'\x0a';}}fs[_0x1f7e24(0x149)](this['projectPath']+'/'+constants[_0x1f7e24(0x16b)]+'/'+constants[_0x1f7e24(0x11c)],_0x557c30);}catch(_0x18ca9b){this[_0x1f7e24(0x119)]['log'](_0x1f7e24(0x104)+_0x18ca9b);throw _0x18ca9b;}}[a18_0x517d2c(0xf2)](_0x57185c){const _0x2d7013=a18_0x517d2c;let _0x5bc25c=0x0;const _0x119381=fs[_0x2d7013(0x138)](_0x57185c);return _0x119381['forEach'](_0x5178d7=>{const _0x197847=_0x2d7013,_0x13c679=fs[_0x197847(0xfc)](_0x57185c+'/'+_0x5178d7);_0x13c679[_0x197847(0x156)]()?_0x5bc25c+=this[_0x197847(0xf2)](_0x57185c+'/'+_0x5178d7):_0x5bc25c+=_0x13c679[_0x197847(0x162)];}),_0x5bc25c;}[a18_0x517d2c(0x10f)](){return new Promise((_0xfebbea,_0x3c73f2)=>{const _0x20d5e8=a18_0x47e3;try{this['logger'][_0x20d5e8(0x16d)](_0x20d5e8(0x12a));const _0x2acca4=[],_0x5af2f6=this[_0x20d5e8(0x152)]+'/'+constants[_0x20d5e8(0x16b)]+'/'+constants[_0x20d5e8(0xf8)];!fs['existsSync'](_0x5af2f6)&&_0xfebbea([]);let _0x2d586d=new AdmZip(),_0x15bd40=0x0;const _0x13a7d2=fs['readdirSync'](_0x5af2f6);_0x13a7d2[_0x20d5e8(0x130)](_0x276fd9=>{const _0x3b5cab=_0x20d5e8,_0x5820d1=fs[_0x3b5cab(0x138)](_0x5af2f6+'/'+_0x276fd9);_0x5820d1[_0x3b5cab(0x130)](_0x1e821b=>{const _0x4e1be9=_0x3b5cab,_0x7d92ea=_0x5af2f6+'/'+_0x276fd9+'/'+_0x1e821b,_0x11e243=this[_0x4e1be9(0xf2)](_0x7d92ea);_0x15bd40+_0x11e243>constants[_0x4e1be9(0xed)]?(_0x2acca4[_0x4e1be9(0x15b)](_0x2d586d[_0x4e1be9(0x136)]()['toString'](_0x4e1be9(0x15f))),_0x2d586d=new AdmZip(),_0x2d586d['addLocalFolder'](_0x7d92ea,_0x276fd9+'/'+_0x1e821b),this[_0x4e1be9(0x119)][_0x4e1be9(0x16d)](_0x4e1be9(0x13a)+_0x15bd40),_0x15bd40=_0x11e243):(_0x15bd40+=_0x11e243,_0x2d586d[_0x4e1be9(0x123)](_0x7d92ea,_0x276fd9+'/'+_0x1e821b));});}),_0x2acca4[_0x20d5e8(0x15b)](_0x2d586d[_0x20d5e8(0x136)]()[_0x20d5e8(0xf5)]('base64')),this['logger']['log'](_0x20d5e8(0xeb)+_0x2acca4['length']),_0xfebbea(_0x2acca4);}catch(_0x4c1969){this[_0x20d5e8(0x119)][_0x20d5e8(0x16d)](_0x20d5e8(0x102)+_0x4c1969),_0x3c73f2(_0x4c1969);}});}[a18_0x517d2c(0x10b)](_0x584bcc){return new Promise((_0x4e14e7,_0x391a06)=>{const _0x57c837=a18_0x47e3;try{this[_0x57c837(0x119)][_0x57c837(0x16d)]('Start\x20Deploy\x20Backup\x20Chunks');const _0x20d6a3=this[_0x57c837(0x11a)]?.[_0x57c837(0x144)]?this[_0x57c837(0x11a)][_0x57c837(0x146)]('__','')+'/':'',_0xfebc73=this['flosumUrl']+_0x57c837(0x116)+_0x20d6a3+_0x57c837(0x173);let _0x198acb=Promise[_0x57c837(0x140)]();_0x584bcc[_0x57c837(0x130)]((_0x4a54f4,_0x3db0a2)=>{const _0x4f7b63=_0x57c837;_0x198acb=_0x198acb[_0x4f7b63(0x167)](()=>{const _0x444861=_0x4f7b63,_0x4e6438={'vlocityBackupZip':_0x4a54f4,'metadataLogId':this[_0x444861(0x164)]},_0x20f5b7={'methodType':constants[_0x444861(0x107)],'body':JSON[_0x444861(0x111)](_0x4e6438)};return http['post'](_0xfebc73,this[_0x444861(0x133)],this['nameSpacePrefix'],_0x20f5b7)['then'](()=>this['logger'][_0x444861(0x16d)](_0x3db0a2+0x1+_0x444861(0x148)+_0x584bcc[_0x444861(0x144)]+_0x444861(0x165)));});}),_0x198acb[_0x57c837(0x167)](()=>{const _0x265b29=_0x57c837;this[_0x265b29(0x119)][_0x265b29(0x16d)](_0x265b29(0xfb)),_0x4e14e7();})[_0x57c837(0xec)](_0x2f380f=>{const _0x5f1f03=_0x57c837;this[_0x5f1f03(0x119)][_0x5f1f03(0x16d)]('Error\x20Deploy\x20Backup\x20Chunks\x20'+_0x2f380f),_0x391a06(_0x2f380f);});}catch(_0x200178){this[_0x57c837(0x119)]['log'](_0x57c837(0x16c)+_0x200178),_0x391a06(_0x200178);}});}['deployData'](_0x5aec33,_0x6e5820){return new Promise((_0x381fe7,_0x39180e)=>{const _0x382437=a18_0x47e3;try{this[_0x382437(0x119)][_0x382437(0x16d)](_0x382437(0xff));const _0x528384=_0x382437(0x131),_0x255a6e=[_0x382437(0x11b),this[_0x382437(0x171)],'-sf.instanceUrl',this[_0x382437(0x126)],'-job',constants['JOB_FILE_NAME'],_0x382437(0x121)];this[_0x382437(0x15d)]&&_0x255a6e[_0x382437(0x15b)](_0x382437(0x10c));this[_0x382437(0x14d)]&&_0x255a6e[_0x382437(0x15b)]('-separateCalculationProcedureVersions');_0x255a6e[_0x382437(0x15b)](_0x382437(0x15a));this[_0x382437(0x105)]&&(_0x255a6e[_0x382437(0x15b)]('runApex'),_0x255a6e[_0x382437(0x15b)](_0x382437(0x13f)),_0x255a6e[_0x382437(0x15b)](_0x5aec33));this[_0x382437(0x119)][_0x382437(0x16d)](_0x255a6e[_0x382437(0x14c)](0x2)[_0x382437(0x169)]('\x20'));const _0x200b6c=()=>{const _0x5e96d6=_0x382437;http[_0x5e96d6(0x120)](this[_0x5e96d6(0x152)],this['jsForceConnection'],this[_0x5e96d6(0x12e)],this[_0x5e96d6(0x119)],![]);},_0x2c4edd={'cwd':this[_0x382437(0x152)],'maxBuffer':0x400*0x1f4};childProcess['callChildProcess'](_0x528384,_0x255a6e,this[_0x382437(0x119)],_0x2c4edd,_0x6e5820,_0x200b6c)[_0x382437(0x167)](_0x459862=>{const _0x4985df=_0x382437;this['logger'][_0x4985df(0x16d)](_0x4985df(0xfd)),_0x381fe7(_0x459862);})[_0x382437(0xec)](_0x2642a2=>{const _0x206d1a=_0x382437;this[_0x206d1a(0x119)]['log'](_0x206d1a(0x129)+_0x2642a2),_0x39180e(_0x2642a2);});}catch(_0x1ea2a5){this[_0x382437(0x119)][_0x382437(0x16d)]('Error\x20Deploy\x20Data\x20'+_0x1ea2a5),_0x39180e(_0x1ea2a5);}});}async['addDeploymentStatusAttachments'](_0x24e660){const _0x336c93=a18_0x517d2c;try{if(!_0x24e660)return 0x0;_0x24e660=JSON['parse'](_0x24e660),this[_0x336c93(0x119)][_0x336c93(0x16d)](_0x336c93(0x15e));const _0x3f46e6=[];for(const _0x2444b7 in _0x24e660['currentStatus']){const _0x2988c7=_0x2444b7['split']('/');if(_0x2988c7[_0x336c93(0x144)]!==0x2)continue;const [_0x3d8ee1,_0x144dba]=_0x2988c7,_0x5a0a27={'componentType':_0x3d8ee1,'componentName':_0x144dba},_0x43cffe=_0x24e660[_0x336c93(0x158)][_0x2444b7];_0x43cffe===_0x336c93(0xfe)?(_0x5a0a27[_0x336c93(0xf1)]=_0x336c93(0xfe),_0x5a0a27['result']=_0x336c93(0x12f)):(_0x5a0a27[_0x336c93(0xf1)]='Failure',_0x5a0a27[_0x336c93(0x128)]=_0x43cffe),_0x3f46e6[_0x336c93(0x15b)](_0x5a0a27);}const _0x5d2aab={'deploymentResultList':_0x3f46e6,'metadataLogId':this['logId']},_0x76dec3={'methodType':constants['METHOD_ADD_DEPLOYMENT_STATUS_ATTACHMENTS'],'body':JSON['stringify'](_0x5d2aab)},_0x4fc894=this[_0x336c93(0x11a)]?.[_0x336c93(0x144)]?this[_0x336c93(0x11a)][_0x336c93(0x146)]('__','')+'/':'',_0x568b46=this[_0x336c93(0x13d)]+'/services/apexrest/'+_0x4fc894+'unlocked-packages';return await http[_0x336c93(0x132)](_0x568b46,this[_0x336c93(0x133)],this[_0x336c93(0x11a)],_0x76dec3),this['logger'][_0x336c93(0x16d)](_0x336c93(0x11f)),_0x3f46e6['filter'](_0x5bf9bb=>!_0x5bf9bb[_0x336c93(0x128)])[_0x336c93(0x144)];}catch(_0x1be21d){this[_0x336c93(0x119)][_0x336c93(0x16d)](_0x336c93(0x163)+_0x1be21d);throw _0x1be21d;}}[a18_0x517d2c(0x10a)](_0x2b946a){return new Promise((_0x4dd82c,_0x33566c)=>{const _0x5105c4=a18_0x47e3;try{_0x2b946a[_0x5105c4(0x167)](_0x4dd82c)[_0x5105c4(0xec)](_0x4dd82c);}catch(_0x3b28db){_0x33566c(_0x3b28db);}});}['createVlocityTempZip'](){return new Promise((_0x478e07,_0x429316)=>{const _0x1e7657=a18_0x47e3;try{this[_0x1e7657(0x119)][_0x1e7657(0x16d)](_0x1e7657(0x124));const _0xe93285=this[_0x1e7657(0x152)]+'/'+constants['VLOCITY_TEMP_CATALOG'];if(fs[_0x1e7657(0x160)](_0xe93285)){const _0x3069b9=_0xe93285+'/logs';if(this[_0x1e7657(0x119)][_0x1e7657(0x13e)][_0x1e7657(0x144)]&&fs[_0x1e7657(0x160)](_0x3069b9)){const _0x7adba9=fs[_0x1e7657(0x138)](_0x3069b9);if(_0x7adba9&&_0x7adba9[_0x1e7657(0x144)]){const _0x882f3c=_0x7adba9[0x0];if(_0x882f3c[_0x1e7657(0xf6)]('job-yaml-')&&_0x882f3c[_0x1e7657(0xf6)](_0x1e7657(0x14a))){const _0x1ab46f='FlosumErrors:\x20'+JSON[_0x1e7657(0x111)](this['logger'][_0x1e7657(0x13e)]);fs[_0x1e7657(0x149)]('./'+_0x3069b9+'/'+_0x882f3c,_0x1ab46f);}}}const _0xd19036=new AdmZip();_0xd19036[_0x1e7657(0x123)](_0xe93285,constants[_0x1e7657(0x12b)]),this['logger'][_0x1e7657(0x16d)](_0x1e7657(0x16a)),_0x478e07(_0xd19036[_0x1e7657(0x136)]()[_0x1e7657(0xf5)](_0x1e7657(0x15f)));}else this[_0x1e7657(0x119)][_0x1e7657(0x16d)]('Error\x20Create\x20Vlocity\x20Temp\x20Zip,\x20Vlocity\x20Temp\x20not\x20found'),_0x478e07();}catch(_0x1014e6){this[_0x1e7657(0x119)][_0x1e7657(0x16d)](_0x1e7657(0x15c)+_0x1014e6),_0x478e07();}});}[a18_0x517d2c(0x155)](_0x1a5d4d){return new Promise((_0x5d3b86,_0x144d16)=>{const _0x5de152=a18_0x47e3;try{this['logger'][_0x5de152(0x16d)](_0x5de152(0x109));const _0x2ad08a={'Name':_0x5de152(0x108),'ContentType':_0x5de152(0xf3),'Description':_0x5de152(0x108),'ParentId':this[_0x5de152(0x164)],'Body':_0x1a5d4d};this['jsForceConnection'][_0x5de152(0x10e)]('Attachment')['create'](_0x2ad08a)[_0x5de152(0x167)](()=>{const _0x1c58e2=_0x5de152;this[_0x1c58e2(0x119)][_0x1c58e2(0x16d)](_0x1c58e2(0x12d)),_0x5d3b86();})['catch'](_0x22a088=>{const _0x3709f6=_0x5de152;this[_0x3709f6(0x119)][_0x3709f6(0x16d)](_0x3709f6(0x113)+_0x22a088),_0x144d16(_0x22a088);});}catch(_0x5c3451){this[_0x5de152(0x119)][_0x5de152(0x16d)]('Error\x20Send\x20Vlocity\x20Temp\x20Zip\x20'+_0x5c3451),_0x144d16(_0x5c3451);}});}async[a18_0x517d2c(0x145)](_0x23c857,_0x4068e3=![]){const _0x3b9f9c=a18_0x517d2c,_0x240e90=await this[_0x3b9f9c(0x115)]();_0x240e90&&await this[_0x3b9f9c(0x155)](_0x240e90);let _0x3066c5=this[_0x3b9f9c(0x153)];try{const _0x4bfbf4=await storage[_0x3b9f9c(0xf7)](this[_0x3b9f9c(0x152)],constants[_0x3b9f9c(0x12b)]+'/'+constants[_0x3b9f9c(0x125)],this[_0x3b9f9c(0x119)]);_0x3066c5=await this[_0x3b9f9c(0x118)](_0x4bfbf4);}catch(_0x51ab74){this['logger']['log'](_0x3b9f9c(0x142)+_0x51ab74);}const _0x1458d3=await http[_0x3b9f9c(0x120)](this[_0x3b9f9c(0x152)],this[_0x3b9f9c(0x135)],this[_0x3b9f9c(0x12e)],this['logger'],_0x4068e3,!![]);try{await http[_0x3b9f9c(0x157)](this[_0x3b9f9c(0x135)],this[_0x3b9f9c(0x164)],this[_0x3b9f9c(0x11a)],_0x23c857&&_0x3066c5>0x0,this['logger'],_0x1458d3||_0x3066c5!==this['componentsCount']);}catch(_0x21ef38){this['logger'][_0x3b9f9c(0x16d)](_0x3b9f9c(0xf0)+_0x21ef38);}}}module[a18_0x517d2c(0x16f)]={'DeployHelper':DeployHelper};function a18_0x374d(){const _0x54b843=['End\x20\x20Retrieve\x20Vlocity\x20Attachments','sendVlocityTemp','isDirectory','callUpdateLog','currentStatus','projectPath:\x20./','packDeploy','push','Error\x20Create\x20Vlocity\x20Temp\x20Zip\x20','isSeparateMatrixVersions','Start\x20Add\x20Deployment\x20Status\x20Attachments','base64','existsSync','Start\x20Backup\x20Data','size','Error\x20Add\x20Deployment\x20Status\x20Attachments\x20','logId','\x20Deployed.','isLWCActivation','then','branchId','join','End\x20Create\x20Vlocity\x20Temp\x20Zip','BACKUP_FOLDER','Error\x20Deploy\x20Backup\x20Chunks\x20','log','9775863KhIesj','exports','componentIdListJson','vlocityToken','180poDJOs','unlocked-packages','parse','../../../services/http','188488gQfVUC','End\x20Create\x20Backup\x20Chunks,\x20size\x20=\x20','catch','MAX_SIZE_UNZIP_ATTACHMENT','toFixed','Error\x20\x20Retrieve\x20Vlocity\x20Attachments\x20','Error\x20update\x20metadata\x20log\x20','status','getFolderSize','application/zip','manifest:\x0a','toString','includes','readFile','SOURCE_FOLDER','retrieveBranchComponents','1052376GDRzPk','End\x20Deploy\x20Backup\x20Chunks','lstatSync','End\x20Deploy\x20Data','Success','Start\x20Deploy\x20Data','idList','../../../services/child-process','Error\x20Create\x20Backup\x20Chunks\x20','112EadRma','Error\x20Backup\x20Data\x20','isEnabledApexPostDeploy','346696GQJTtC','METHOD_VLOCITY_BACKUP','Vlocity\x20Temp','Start\x20Send\x20Vlocity\x20Temp','resolvePromise','deployBackup','-separateMatrixVersions','../../../constants','sobject','createBackupChunks','callBranchComponentList','stringify','attachmentPackage','Error\x20Send\x20Vlocity\x20Temp\x20Zip\x20','apexCode','createVlocityTempZip','/services/apexrest/','callComponentList','addDeploymentStatusAttachments','logger','nameSpacePrefix','-sf.accessToken','JOB_FILE_NAME','lastComponentId','25pAyvPF','End\x20Add\x20Deployment\x20Status\x20Attachments','updateAttachmentLog','-autoRetryErrors','../retrieve/helper','addLocalFolder','Start\x20Create\x20Vlocity\x20Temp\x20Zip','VLOCITY_JOB_INFO','vlocityUrl','createProjectDirectory','errorMessage','Error\x20Deploy\x20Data\x20','Start\x20Create\x20Backup\x20Chunks','VLOCITY_TEMP_CATALOG','1pnZeEq','End\x20Send\x20Vlocity\x20Temp','attachLogId','CREATED','forEach','vlocity','post','flosumToken','adm-zip','jsForceConnection','toBuffer','jsforce','readdirSync','End\x20Backup\x20Data','Backup\x20Chunk\x20prepared,\x20size\x20=\x20','CalculationMatrixVersion','2791110KqXrzi','flosumUrl','errors','-apex','resolve','../../../services/storage','Error\x20add\x20deployment\x20status\x20','UNZIP_CATALOG_NAME','length','completeDeployment','replace','parseFloat','\x20Chunks\x20From\x20','appendFileSync','-Export.yaml','timestamp','slice','isSeparateCalculationProcedureVersions','2339738DIDWNn','19371aAtJDe','Start\x20Retrieve\x20Vlocity\x20Attachments','createBackupJobYamlFile','projectPath','componentsCount'];a18_0x374d=function(){return _0x54b843;};return a18_0x374d();}