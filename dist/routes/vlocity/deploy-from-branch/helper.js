const a16_0x5e6a94=a16_0x498a;function a16_0x38f0(){const _0x5e5cb3=['base64','vlocity','split','addDeploymentStatusAttachments','vlocityUrl','join','SOURCE_FOLDER','isSeparateMatrixVersions','projectPath','6733044lhXJMx','then','974746mDhZNf','attachLogId','Error\x20\x20Retrieve\x20Vlocity\x20Attachments\x20','branchId','retrieveData','UNZIP_CATALOG_NAME','job-yaml-','create','isSeparateCalculationProcedureVersions','143BCRjUs','jsforce','flosumToken','includes','nameSpacePrefix','Error\x20Deploy\x20Data\x20','-separateMatrixVersions','logId','Retrieved:\x20','CalculationProcedureVersion','\x20Chunks\x20From\x20','replace','deployBackup','Error\x20Backup\x20Data\x20','getFolderSize','length','callBranchComponentList','../../../services/http','41373vWTDYm','unlocked-packages','Start\x20Backup\x20Data','VLOCITY_TEMP_CATALOG','callUpdateLog','\x20Deployed.','readdirSync','1XnfPSX','-sf.instanceUrl','1457603FlnxSy','resolve','updateAttachmentLog','End\x20Create\x20Vlocity\x20Temp\x20Zip','108XWMMUt','End\x20Create\x20Backup\x20Chunks,\x20size\x20=\x20','154895kmdVTL','toBuffer','Start\x20Deploy\x20Backup\x20Chunks','post','../../../services/storage','componentIdListJson','1691650tcyPur','Start\x20Create\x20Backup\x20Chunks','timestamp','filter','/services/apexrest/','appendFileSync','createBackupJobYamlFile','flosumUrl','../../../services/child-process','MAX_SIZE_UNZIP_ATTACHMENT','retrieveBranchComponents','sendVlocityTemp','CalculationMatrixVersion','Connection','/logs','Failure','packDeploy','BACKUP_FOLDER','errorMessage','Error\x20Add\x20Deployment\x20Status\x20Attachments\x20','errors','createBackupChunks','lastComponentId','isDirectory','apexCode','End\x20Add\x20Deployment\x20Status\x20Attachments','vlocityToken','adm-zip','catch','Error\x20Deploy\x20Backup\x20Chunks\x20','attachmentPackage','existsSync','idList','completeDeployment','push','callComponentList','CREATED','Error\x20Send\x20Vlocity\x20Temp\x20Zip\x20','application/zip','Start\x20Deploy\x20Data','forEach','slice','projectPath:\x20./','size','2184ugQWDC','exports','Backup\x20Chunk\x20prepared,\x20size\x20=\x20','status','backupData','Start\x20Send\x20Vlocity\x20Temp','parseFloat','parse','Error\x20update\x20metadata\x20log\x20','Error\x20add\x20deployment\x20status\x20','Start\x20Add\x20Deployment\x20Status\x20Attachments','Success','lstatSync','addLocalFolder','sobject','Vlocity\x20Temp','readFile','toString','logger','currentStatus','componentsCount','End\x20Backup\x20Data','Start\x20Create\x20Vlocity\x20Temp\x20Zip','createVlocityTempZip','callChildProcess','\x20\x20-\x20','3433644bbXVjB','Attachment','End\x20Deploy\x20Backup\x20Chunks','stringify','-Export.yaml','End\x20Send\x20Vlocity\x20Temp','isLWCActivation','jsForceConnection','isEnabledApexPostDeploy','../retrieve/helper','manifest:\x0a','log','result','createProjectDirectory'];a16_0x38f0=function(){return _0x5e5cb3;};return a16_0x38f0();}function a16_0x498a(_0x1efd3e,_0x4990a6){const _0x38f0a1=a16_0x38f0();return a16_0x498a=function(_0x498a5f,_0x501713){_0x498a5f=_0x498a5f-0xe3;let _0x2b37ad=_0x38f0a1[_0x498a5f];return _0x2b37ad;},a16_0x498a(_0x1efd3e,_0x4990a6);}(function(_0x2e6e2f,_0x5cdeb5){const _0x5a80c3=a16_0x498a,_0x3c2936=_0x2e6e2f();while(!![]){try{const _0x4cee5e=parseInt(_0x5a80c3(0x148))/0x1*(parseInt(_0x5a80c3(0x126))/0x2)+-parseInt(_0x5a80c3(0x10d))/0x3+-parseInt(_0x5a80c3(0x14e))/0x4*(parseInt(_0x5a80c3(0x150))/0x5)+parseInt(_0x5a80c3(0x124))/0x6+parseInt(_0x5a80c3(0x14a))/0x7+-parseInt(_0x5a80c3(0xf3))/0x8*(parseInt(_0x5a80c3(0x141))/0x9)+-parseInt(_0x5a80c3(0x156))/0xa*(-parseInt(_0x5a80c3(0x12f))/0xb);if(_0x4cee5e===_0x5cdeb5)break;else _0x3c2936['push'](_0x3c2936['shift']());}catch(_0x316ab4){_0x3c2936['push'](_0x3c2936['shift']());}}}(a16_0x38f0,0xbea9f));const fs=require('fs'),AdmZip=require(a16_0x5e6a94(0x171)),childProcess=require(a16_0x5e6a94(0x15e)),constants=require('../../../constants'),http=require(a16_0x5e6a94(0x140)),storage=require(a16_0x5e6a94(0x154)),jsForce=require(a16_0x5e6a94(0x130)),{RetrieveHelper}=require(a16_0x5e6a94(0x116));class DeployHelper{constructor(_0x502ff0,_0x4427bc,_0x467901){const _0x18e446=a16_0x5e6a94;this[_0x18e446(0x123)]=_0x502ff0,this['flosumUrl']=_0x4427bc['flosumUrl'],this['flosumToken']=_0x4427bc['flosumToken'],this[_0x18e446(0x129)]=_0x4427bc['branchId'],this[_0x18e446(0x133)]=_0x4427bc['nameSpacePrefix'],this['vlocityUrl']=_0x4427bc[_0x18e446(0x11f)],this[_0x18e446(0x170)]=_0x4427bc[_0x18e446(0x170)],this[_0x18e446(0x136)]=_0x4427bc[_0x18e446(0x136)],this['isSeparateMatrixVersions']=_0x4427bc['isSeparateMatrixVersions'],this['isSeparateCalculationProcedureVersions']=_0x4427bc[_0x18e446(0x12e)],this[_0x18e446(0x113)]=_0x4427bc[_0x18e446(0x113)],this[_0x18e446(0x107)]=_0x4427bc[_0x18e446(0x107)],this[_0x18e446(0x155)]=_0x4427bc[_0x18e446(0x155)],this['attachLogId']=_0x4427bc[_0x18e446(0x127)],this['isEnabledApexPostDeploy']=!!_0x4427bc['isEnabledApexPostDeploy'],this[_0x18e446(0x16e)]=_0x4427bc[_0x18e446(0x16e)],this[_0x18e446(0x158)]=_0x4427bc[_0x18e446(0x158)],this['logger']=_0x467901,this[_0x18e446(0x114)]=new jsForce[(_0x18e446(0x163))]({'instanceUrl':this[_0x18e446(0x15d)],'accessToken':this['flosumToken']});}[a16_0x5e6a94(0x160)](){return new Promise((_0x302fe4,_0x2e736e)=>{const _0x497c1c=a16_0x498a;try{this[_0x497c1c(0x105)]['log']('Start\x20Retrieve\x20Vlocity\x20Attachments'),this[_0x497c1c(0x13f)]()[_0x497c1c(0x125)](_0x3a3888=>{const _0x4c2eb8=_0x497c1c;this['logger'][_0x4c2eb8(0x118)]('End\x20\x20Retrieve\x20Vlocity\x20Attachments'),_0x302fe4(_0x3a3888);})[_0x497c1c(0xe3)](_0x3a0e76=>{const _0x55b2dc=_0x497c1c;this[_0x55b2dc(0x105)][_0x55b2dc(0x118)]('Error\x20\x20Retrieve\x20Vlocity\x20Attachments\x20'+_0x3a0e76),_0x2e736e(_0x3a0e76);});}catch(_0x3f8339){this[_0x497c1c(0x105)][_0x497c1c(0x118)](_0x497c1c(0x128)+_0x3f8339),_0x2e736e(_0x3f8339);}});}[a16_0x5e6a94(0x13f)](_0x22f2c2='',_0xdbbb1a=[]){return new Promise((_0x4eab3a,_0x4caa1d)=>{const _0xa52dd0=a16_0x498a;try{const _0x1d1beb=this['nameSpacePrefix']?this[_0xa52dd0(0x133)]['replace']('__','')+'/':'',_0x1bbc46=this[_0xa52dd0(0x15d)]+_0xa52dd0(0x15a)+_0x1d1beb+'unlocked-packages',_0x4f00f6={'branchId':this[_0xa52dd0(0x129)],'lastComponentId':_0x22f2c2,'componentIdListJson':this['componentIdListJson']},_0x45f11f={'methodType':constants['METHOD_TYPE_GET_BRANCH_ATTACHMENTS'],'body':JSON['stringify'](_0x4f00f6)};http[_0xa52dd0(0x153)](_0x1bbc46,this[_0xa52dd0(0x131)],this[_0xa52dd0(0x133)],_0x45f11f)['then'](_0x326cef=>{const _0x4d9a85=_0xa52dd0;let {data:_0x2a9adb}=_0x326cef;_0x2a9adb=JSON[_0x4d9a85(0xfa)](_0x2a9adb),this[_0x4d9a85(0x105)][_0x4d9a85(0x118)](_0x4d9a85(0x137)+Number[_0x4d9a85(0xf9)](''+_0xdbbb1a['length']/this['componentsCount']*0x64)['toFixed'](0x2)+'%'),_0xdbbb1a[_0x4d9a85(0xe9)](..._0x2a9adb[_0x4d9a85(0xe5)]['recordList']),_0x2a9adb[_0x4d9a85(0x16c)]!=='-1'?_0x2a9adb['attachmentPackage'][_0x4d9a85(0xe7)]&&_0x2a9adb[_0x4d9a85(0xe5)][_0x4d9a85(0xe7)][_0x4d9a85(0x13e)]?http[_0x4d9a85(0xea)](this[_0x4d9a85(0x15d)],this[_0x4d9a85(0x131)],_0x2a9adb[_0x4d9a85(0xe5)]['idList'],this['nameSpacePrefix'],this['componentsCount'],this[_0x4d9a85(0x105)],_0xdbbb1a)[_0x4d9a85(0x125)](_0x2a409c=>this[_0x4d9a85(0x13f)](_0x2a9adb['lastComponentId'],_0x2a409c))['then'](_0x1077fb=>_0x4eab3a(_0x1077fb))[_0x4d9a85(0xe3)](_0x40ad39=>_0x4caa1d(_0x40ad39)):this['callBranchComponentList'](_0x2a9adb['lastComponentId'],_0xdbbb1a)[_0x4d9a85(0x125)](_0x259bf4=>_0x4eab3a(_0x259bf4))[_0x4d9a85(0xe3)](_0x3dd368=>{_0x4caa1d(_0x3dd368);}):_0x4eab3a(_0xdbbb1a);})[_0xa52dd0(0xe3)](_0x49c617=>{_0x4caa1d(_0x49c617);});}catch(_0x13a08e){_0x4caa1d(_0x13a08e);}});}async[a16_0x5e6a94(0xf7)](){const _0x5c8970=a16_0x5e6a94;try{this[_0x5c8970(0x105)][_0x5c8970(0x118)](_0x5c8970(0x143)),await storage[_0x5c8970(0x11a)](this[_0x5c8970(0x123)]+'/'+constants[_0x5c8970(0x167)]),this[_0x5c8970(0x15c)]();const _0x32ce1c=fs[_0x5c8970(0x147)](this[_0x5c8970(0x123)]+'/'+constants[_0x5c8970(0x121)]),_0x2c7b30=new RetrieveHelper(this[_0x5c8970(0x123)]+'/'+constants[_0x5c8970(0x167)],{'isNotIncludeDependencies':!![],'isSeparateMatrixVersions':_0x32ce1c[_0x5c8970(0x132)](_0x5c8970(0x162)),'isSeparateCalculationProcedureVersions':_0x32ce1c[_0x5c8970(0x132)](_0x5c8970(0x138)),'authFlosum':{'instanceUrl':this[_0x5c8970(0x15d)],'accessToken':this[_0x5c8970(0x131)]},'authVlosityOrg':{'instanceUrl':this[_0x5c8970(0x11f)],'accessToken':this[_0x5c8970(0x170)]},'attachLogId':this[_0x5c8970(0x127)],'selectedDataPackTypes':'[]'},this['logger']);await _0x2c7b30[_0x5c8970(0x12a)]();const _0x3a23ef=await this[_0x5c8970(0x16b)]();await this[_0x5c8970(0x13b)](_0x3a23ef),this[_0x5c8970(0x105)][_0x5c8970(0x118)](_0x5c8970(0x108));}catch(_0x4c7015){this['logger'][_0x5c8970(0x118)](_0x5c8970(0x13c)+_0x4c7015);throw _0x4c7015;}}[a16_0x5e6a94(0x15c)](){const _0x54a748=a16_0x5e6a94;try{let _0x142d7b=_0x54a748(0xf1)+constants[_0x54a748(0x12b)]+'\x0a';_0x142d7b+=_0x54a748(0x117);const _0x3ce663=fs[_0x54a748(0x147)](this[_0x54a748(0x123)]+'/'+constants[_0x54a748(0x121)]);for(const _0x2e7fe8 of _0x3ce663){const _0x117da7=fs[_0x54a748(0x147)](this[_0x54a748(0x123)]+'/'+constants[_0x54a748(0x121)]+'/'+_0x2e7fe8);for(const _0x5cbbf2 of _0x117da7){_0x142d7b+=_0x54a748(0x10c)+_0x2e7fe8+'/'+_0x5cbbf2+'\x0a';}}fs[_0x54a748(0x15b)](this[_0x54a748(0x123)]+'/'+constants[_0x54a748(0x167)]+'/'+constants['JOB_FILE_NAME'],_0x142d7b);}catch(_0x24b535){this['logger'][_0x54a748(0x118)]('Error\x20Backup\x20Data\x20'+_0x24b535);throw _0x24b535;}}['getFolderSize'](_0x20f8ac){const _0x406002=a16_0x5e6a94;let _0x56ef8e=0x0;const _0x24e94d=fs[_0x406002(0x147)](_0x20f8ac);return _0x24e94d[_0x406002(0xef)](_0xcdd8af=>{const _0x5698f7=_0x406002,_0x572cb5=fs[_0x5698f7(0xff)](_0x20f8ac+'/'+_0xcdd8af);_0x572cb5[_0x5698f7(0x16d)]()?_0x56ef8e+=this[_0x5698f7(0x13d)](_0x20f8ac+'/'+_0xcdd8af):_0x56ef8e+=_0x572cb5[_0x5698f7(0xf2)];}),_0x56ef8e;}[a16_0x5e6a94(0x16b)](){return new Promise((_0x453b1e,_0xa25b3c)=>{const _0x593037=a16_0x498a;try{this[_0x593037(0x105)]['log'](_0x593037(0x157));const _0x106338=[],_0x1ba16a=this['projectPath']+'/'+constants['BACKUP_FOLDER']+'/'+constants[_0x593037(0x121)];!fs['existsSync'](_0x1ba16a)&&_0x453b1e([]);let _0x3ea642=new AdmZip(),_0x1dda45=0x0;const _0x4803db=fs['readdirSync'](_0x1ba16a);_0x4803db[_0x593037(0xef)](_0x5219f5=>{const _0x59eee8=_0x593037,_0x357928=fs[_0x59eee8(0x147)](_0x1ba16a+'/'+_0x5219f5);_0x357928[_0x59eee8(0xef)](_0x4de251=>{const _0x5951e3=_0x59eee8,_0x4b5e94=_0x1ba16a+'/'+_0x5219f5+'/'+_0x4de251,_0x1ad903=this[_0x5951e3(0x13d)](_0x4b5e94);_0x1dda45+_0x1ad903>constants[_0x5951e3(0x15f)]?(_0x106338[_0x5951e3(0xe9)](_0x3ea642[_0x5951e3(0x151)]()['toString']('base64')),_0x3ea642=new AdmZip(),_0x3ea642['addLocalFolder'](_0x4b5e94,_0x5219f5+'/'+_0x4de251),this[_0x5951e3(0x105)]['log'](_0x5951e3(0xf5)+_0x1dda45),_0x1dda45=_0x1ad903):(_0x1dda45+=_0x1ad903,_0x3ea642[_0x5951e3(0x100)](_0x4b5e94,_0x5219f5+'/'+_0x4de251));});}),_0x106338['push'](_0x3ea642[_0x593037(0x151)]()[_0x593037(0x104)](_0x593037(0x11b))),this[_0x593037(0x105)][_0x593037(0x118)](_0x593037(0x14f)+_0x106338[_0x593037(0x13e)]),_0x453b1e(_0x106338);}catch(_0x507e33){this[_0x593037(0x105)][_0x593037(0x118)]('Error\x20Create\x20Backup\x20Chunks\x20'+_0x507e33),_0xa25b3c(_0x507e33);}});}[a16_0x5e6a94(0x13b)](_0x1be603){return new Promise((_0x1cf240,_0x1c11d9)=>{const _0x11bd50=a16_0x498a;try{this[_0x11bd50(0x105)][_0x11bd50(0x118)](_0x11bd50(0x152));const _0x594d19=this[_0x11bd50(0x133)]?.['length']?this[_0x11bd50(0x133)][_0x11bd50(0x13a)]('__','')+'/':'',_0x1f928c=this[_0x11bd50(0x15d)]+_0x11bd50(0x15a)+_0x594d19+_0x11bd50(0x142);let _0x5459a5=Promise[_0x11bd50(0x14b)]();_0x1be603[_0x11bd50(0xef)]((_0xf63738,_0x289d79)=>{const _0x4b86e4=_0x11bd50;_0x5459a5=_0x5459a5[_0x4b86e4(0x125)](()=>{const _0x34633e=_0x4b86e4,_0x36e45c={'vlocityBackupZip':_0xf63738,'metadataLogId':this['logId']},_0x109fc1={'methodType':constants['METHOD_VLOCITY_BACKUP'],'body':JSON[_0x34633e(0x110)](_0x36e45c)};return http['post'](_0x1f928c,this['flosumToken'],this[_0x34633e(0x133)],_0x109fc1)[_0x34633e(0x125)](()=>this[_0x34633e(0x105)]['log'](_0x289d79+0x1+_0x34633e(0x139)+_0x1be603['length']+_0x34633e(0x146)));});}),_0x5459a5['then'](()=>{const _0x10b99c=_0x11bd50;this[_0x10b99c(0x105)][_0x10b99c(0x118)](_0x10b99c(0x10f)),_0x1cf240();})['catch'](_0x2b8fe1=>{const _0x221e6e=_0x11bd50;this['logger'][_0x221e6e(0x118)]('Error\x20Deploy\x20Backup\x20Chunks\x20'+_0x2b8fe1),_0x1c11d9(_0x2b8fe1);});}catch(_0x17bab8){this[_0x11bd50(0x105)][_0x11bd50(0x118)](_0x11bd50(0xe4)+_0x17bab8),_0x1c11d9(_0x17bab8);}});}['deployData'](_0x5a1918,_0x4c18bd){return new Promise((_0x2a081b,_0x87b2f)=>{const _0x8c99df=a16_0x498a;try{this[_0x8c99df(0x105)]['log'](_0x8c99df(0xee));const _0x47eac4=_0x8c99df(0x11c),_0x5744a7=['-sf.accessToken',this[_0x8c99df(0x170)],_0x8c99df(0x149),this['vlocityUrl'],'-job',constants['JOB_FILE_NAME'],'-autoRetryErrors'];this[_0x8c99df(0x122)]&&_0x5744a7[_0x8c99df(0xe9)](_0x8c99df(0x135));this[_0x8c99df(0x12e)]&&_0x5744a7[_0x8c99df(0xe9)]('-separateCalculationProcedureVersions');_0x5744a7['push'](_0x8c99df(0x166));this[_0x8c99df(0x115)]&&(_0x5744a7[_0x8c99df(0xe9)]('runApex'),_0x5744a7[_0x8c99df(0xe9)]('-apex'),_0x5744a7[_0x8c99df(0xe9)](_0x5a1918));this[_0x8c99df(0x105)]['log'](_0x5744a7[_0x8c99df(0xf0)](0x2)[_0x8c99df(0x120)]('\x20'));const _0x41d9c8=()=>{const _0x9e9663=_0x8c99df;http[_0x9e9663(0x14c)](this['projectPath'],this[_0x9e9663(0x114)],this[_0x9e9663(0x127)],this[_0x9e9663(0x105)],![]);},_0x4b9176={'cwd':this[_0x8c99df(0x123)],'maxBuffer':0x400*0x1f4};childProcess[_0x8c99df(0x10b)](_0x47eac4,_0x5744a7,this[_0x8c99df(0x105)],_0x4b9176,_0x4c18bd,_0x41d9c8)[_0x8c99df(0x125)](_0x460927=>{const _0x5098da=_0x8c99df;this[_0x5098da(0x105)]['log']('End\x20Deploy\x20Data'),_0x2a081b(_0x460927);})[_0x8c99df(0xe3)](_0x1738c8=>{const _0x345b54=_0x8c99df;this[_0x345b54(0x105)][_0x345b54(0x118)](_0x345b54(0x134)+_0x1738c8),_0x87b2f(_0x1738c8);});}catch(_0x5cbd8c){this[_0x8c99df(0x105)][_0x8c99df(0x118)]('Error\x20Deploy\x20Data\x20'+_0x5cbd8c),_0x87b2f(_0x5cbd8c);}});}async['addDeploymentStatusAttachments'](_0x27c3c2){const _0x4c5e6d=a16_0x5e6a94;try{if(!_0x27c3c2)return 0x0;_0x27c3c2=JSON[_0x4c5e6d(0xfa)](_0x27c3c2),this['logger']['log'](_0x4c5e6d(0xfd));const _0x3479bd=[];for(const _0x56f929 in _0x27c3c2[_0x4c5e6d(0x106)]){const _0x39c527=_0x56f929[_0x4c5e6d(0x11d)]('/');if(_0x39c527[_0x4c5e6d(0x13e)]!==0x2)continue;const [_0x464350,_0x40cb5e]=_0x39c527,_0x296096={'componentType':_0x464350,'componentName':_0x40cb5e},_0x150811=_0x27c3c2['currentStatus'][_0x56f929];_0x150811===_0x4c5e6d(0xfe)?(_0x296096['status']=_0x4c5e6d(0xfe),_0x296096[_0x4c5e6d(0x119)]=_0x4c5e6d(0xeb)):(_0x296096[_0x4c5e6d(0xf6)]=_0x4c5e6d(0x165),_0x296096[_0x4c5e6d(0x168)]=_0x150811),_0x3479bd[_0x4c5e6d(0xe9)](_0x296096);}const _0x4f0c8d={'deploymentResultList':_0x3479bd,'metadataLogId':this['logId']},_0x5bf3c8={'methodType':constants['METHOD_ADD_DEPLOYMENT_STATUS_ATTACHMENTS'],'body':JSON['stringify'](_0x4f0c8d)},_0x17eda7=this[_0x4c5e6d(0x133)]?.['length']?this[_0x4c5e6d(0x133)]['replace']('__','')+'/':'',_0x42c566=this[_0x4c5e6d(0x15d)]+_0x4c5e6d(0x15a)+_0x17eda7+_0x4c5e6d(0x142);return await http[_0x4c5e6d(0x153)](_0x42c566,this['flosumToken'],this['nameSpacePrefix'],_0x5bf3c8),this[_0x4c5e6d(0x105)][_0x4c5e6d(0x118)](_0x4c5e6d(0x16f)),_0x3479bd[_0x4c5e6d(0x159)](_0x5c632f=>!_0x5c632f[_0x4c5e6d(0x168)])[_0x4c5e6d(0x13e)];}catch(_0x3291f9){this[_0x4c5e6d(0x105)][_0x4c5e6d(0x118)](_0x4c5e6d(0x169)+_0x3291f9);throw _0x3291f9;}}['resolvePromise'](_0x173fdd){return new Promise((_0x502435,_0x4a80e9)=>{const _0x1e6b89=a16_0x498a;try{_0x173fdd[_0x1e6b89(0x125)](_0x502435)[_0x1e6b89(0xe3)](_0x502435);}catch(_0x9df284){_0x4a80e9(_0x9df284);}});}[a16_0x5e6a94(0x10a)](){return new Promise((_0x14674b,_0x33e23d)=>{const _0x16aad8=a16_0x498a;try{this[_0x16aad8(0x105)][_0x16aad8(0x118)](_0x16aad8(0x109));const _0x4e0854=this[_0x16aad8(0x123)]+'/'+constants['VLOCITY_TEMP_CATALOG'];if(fs[_0x16aad8(0xe6)](_0x4e0854)){const _0x2b790d=_0x4e0854+_0x16aad8(0x164);if(this[_0x16aad8(0x105)]['errors'][_0x16aad8(0x13e)]&&fs[_0x16aad8(0xe6)](_0x2b790d)){const _0x4552f0=fs[_0x16aad8(0x147)](_0x2b790d);if(_0x4552f0&&_0x4552f0[_0x16aad8(0x13e)]){const _0x505225=_0x4552f0[0x0];if(_0x505225[_0x16aad8(0x132)](_0x16aad8(0x12c))&&_0x505225[_0x16aad8(0x132)](_0x16aad8(0x111))){const _0x2c25ba='FlosumErrors:\x20'+JSON[_0x16aad8(0x110)](this['logger'][_0x16aad8(0x16a)]);fs[_0x16aad8(0x15b)]('./'+_0x2b790d+'/'+_0x505225,_0x2c25ba);}}}const _0x54ec9c=new AdmZip();_0x54ec9c[_0x16aad8(0x100)](_0x4e0854,constants[_0x16aad8(0x144)]),this[_0x16aad8(0x105)][_0x16aad8(0x118)](_0x16aad8(0x14d)),_0x14674b(_0x54ec9c[_0x16aad8(0x151)]()[_0x16aad8(0x104)](_0x16aad8(0x11b)));}else this[_0x16aad8(0x105)][_0x16aad8(0x118)]('Error\x20Create\x20Vlocity\x20Temp\x20Zip,\x20Vlocity\x20Temp\x20not\x20found'),_0x14674b();}catch(_0x500271){this[_0x16aad8(0x105)]['log']('Error\x20Create\x20Vlocity\x20Temp\x20Zip\x20'+_0x500271),_0x14674b();}});}[a16_0x5e6a94(0x161)](_0xacde1){return new Promise((_0x130c33,_0x3895a3)=>{const _0x688113=a16_0x498a;try{this[_0x688113(0x105)][_0x688113(0x118)](_0x688113(0xf8));const _0x1bbf2c={'Name':_0x688113(0x102),'ContentType':_0x688113(0xed),'Description':_0x688113(0x102),'ParentId':this[_0x688113(0x136)],'Body':_0xacde1};this[_0x688113(0x114)][_0x688113(0x101)](_0x688113(0x10e))[_0x688113(0x12d)](_0x1bbf2c)[_0x688113(0x125)](()=>{const _0x154684=_0x688113;this[_0x154684(0x105)][_0x154684(0x118)](_0x154684(0x112)),_0x130c33();})[_0x688113(0xe3)](_0x5c8cfd=>{const _0x1714d2=_0x688113;this[_0x1714d2(0x105)][_0x1714d2(0x118)](_0x1714d2(0xec)+_0x5c8cfd),_0x3895a3(_0x5c8cfd);});}catch(_0x112453){this[_0x688113(0x105)][_0x688113(0x118)](_0x688113(0xec)+_0x112453),_0x3895a3(_0x112453);}});}async[a16_0x5e6a94(0xe8)](_0xe499c0,_0x50074=![]){const _0x555357=a16_0x5e6a94,_0x5aab37=await this['createVlocityTempZip']();_0x5aab37&&await this['sendVlocityTemp'](_0x5aab37);let _0x4c6276=this[_0x555357(0x107)];try{const _0x7e72ea=await storage[_0x555357(0x103)](this[_0x555357(0x123)],constants[_0x555357(0x144)]+'/'+constants['VLOCITY_JOB_INFO'],this[_0x555357(0x105)]);_0x4c6276=await this[_0x555357(0x11e)](_0x7e72ea);}catch(_0x38c7e5){this['logger']['log'](_0x555357(0xfc)+_0x38c7e5);}const _0x29a6e8=await http['updateAttachmentLog'](this[_0x555357(0x123)],this[_0x555357(0x114)],this[_0x555357(0x127)],this[_0x555357(0x105)],_0x50074,!![]);try{await http[_0x555357(0x145)](this[_0x555357(0x114)],this[_0x555357(0x136)],this[_0x555357(0x133)],_0xe499c0&&_0x4c6276>0x0,this[_0x555357(0x105)],_0x29a6e8||_0x4c6276!==this[_0x555357(0x107)]);}catch(_0x27b26d){this['logger'][_0x555357(0x118)](_0x555357(0xfb)+_0x27b26d);}}}module[a16_0x5e6a94(0xf4)]={'DeployHelper':DeployHelper};