const _0x538ad4=_0x21b6;(function(_0x4e25c6,_0x5b0c3f){const _0x58c6c8=_0x21b6,_0x5ec79b=_0x4e25c6();while(!![]){try{const _0x2f7e45=-parseInt(_0x58c6c8(0xe2))/0x1*(-parseInt(_0x58c6c8(0xff))/0x2)+parseInt(_0x58c6c8(0xdd))/0x3+-parseInt(_0x58c6c8(0x111))/0x4*(-parseInt(_0x58c6c8(0x108))/0x5)+parseInt(_0x58c6c8(0x102))/0x6*(parseInt(_0x58c6c8(0x112))/0x7)+parseInt(_0x58c6c8(0xf0))/0x8+-parseInt(_0x58c6c8(0xe6))/0x9*(-parseInt(_0x58c6c8(0xe3))/0xa)+parseInt(_0x58c6c8(0xee))/0xb*(-parseInt(_0x58c6c8(0x10c))/0xc);if(_0x2f7e45===_0x5b0c3f)break;else _0x5ec79b['push'](_0x5ec79b['shift']());}catch(_0x5830e8){_0x5ec79b['push'](_0x5ec79b['shift']());}}}(_0x43ee,0xcd30e));const fs=require('fs'),AdmZip=require(_0x538ad4(0xfd)),childProcess=require(_0x538ad4(0xdc)),constants=require(_0x538ad4(0xe1)),http=require(_0x538ad4(0xdb));function createJobFileRollback(_0x10f374,_0x2ab9f8,_0x225de1,_0x57c23c){return new Promise((_0x2d2a5b,_0x5a5f7e)=>{const _0x14f914=_0x21b6;try{_0x57c23c[_0x14f914(0xde)]('Start\x20Create\x20Job\x20File');let _0x12c456='projectPath:\x20./'+constants['UNZIP_CATALOG_NAME']+_0x14f914(0xe7);Object['keys'](_0x2ab9f8)[_0x14f914(0xec)](_0x2b2c39=>{_0x2ab9f8[_0x2b2c39]['forEach'](_0x424293=>{const _0x5dbff0=_0x21b6;constants[_0x5dbff0(0xef)][_0x2b2c39][_0x5dbff0(0xec)](_0x1ef44f=>{const _0x2ed02d=_0x5dbff0;_0x12c456+=_0x2ed02d(0x113)+_0x2b2c39+'\x0a',_0x12c456+=_0x2ed02d(0x10b)+_0x1ef44f+'\x20where\x20Name\x20LIKE\x20\x27%'+_0x424293+'%\x27\x0a';});});}),fs['appendFileSync']('./'+_0x10f374+'/'+constants[_0x14f914(0xf4)],_0x12c456),_0x57c23c['log'](_0x14f914(0xf7)),_0x2d2a5b();}catch(_0x24b369){_0x57c23c[_0x14f914(0xde)](_0x14f914(0x10d)),_0x5a5f7e(_0x24b369);}});}function retrieveData(_0x482225,_0x1c632c,_0xe5601d,_0x2918b8){return new Promise((_0x10fd18,_0x3fc3cd)=>{const _0x38e872=_0x21b6;try{_0x2918b8[_0x38e872(0xde)](_0x38e872(0xda));const _0x2412d4='vlocity',_0x1f9e47=[_0x38e872(0x101),''+_0xe5601d,_0x38e872(0xd7),''+_0x1c632c,'-job',''+constants[_0x38e872(0xf4)],_0x38e872(0xd9),_0x38e872(0xe9),'0',_0x38e872(0xf8)];_0x2918b8['log'](_0x1f9e47[_0x38e872(0xf1)](0x2)[_0x38e872(0xe5)]('\x20'));const _0x9d965b={'cwd':'./'+_0x482225,'maxBuffer':0x400*0x1f4};childProcess['callChildProcess'](_0x2412d4,_0x1f9e47,_0x2918b8,_0x9d965b)['then'](_0x27c564=>{const _0x582dfd=_0x38e872;_0x2918b8[_0x582dfd(0xde)](_0x582dfd(0xd6)),_0x10fd18(_0x27c564);})[_0x38e872(0xfe)](_0x175d6c=>{const _0x2b6188=_0x38e872;_0x2918b8['log'](_0x2b6188(0x107)+_0x175d6c),_0x3fc3cd(_0x175d6c);});}catch(_0x38a094){_0x3fc3cd(_0x38a094);}});}function prepareDataForDeploy(_0x50c84f,_0x59b813){return new Promise((_0x220be2,_0x36b2c9)=>{const _0x35dffe=_0x21b6;try{_0x59b813[_0x35dffe(0xde)](_0x35dffe(0x104));const _0xf723cc='./'+_0x50c84f+'/'+constants[_0x35dffe(0xd8)];let _0x684030=new AdmZip();const _0x5eadc2=fs[_0x35dffe(0x10f)](_0xf723cc,{'withFileTypes':!![]}),_0x52d812=[];_0x5eadc2[_0x35dffe(0xec)](_0x286e5e=>{const _0x5f29ba=_0x35dffe;if(_0x286e5e[_0x5f29ba(0x114)]()){const _0x4c350f=_0x684030[_0x5f29ba(0xeb)]()['toString']('base64');_0x4c350f[_0x5f29ba(0x109)]>0x1e8480&&(_0x52d812[_0x5f29ba(0x103)](_0x4c350f),_0x684030=new AdmZip()),_0x684030[_0x5f29ba(0xd4)](_0xf723cc+'/'+_0x286e5e[_0x5f29ba(0x10a)],_0x286e5e[_0x5f29ba(0x10a)]);}}),_0x52d812[_0x35dffe(0x103)](_0x684030[_0x35dffe(0xeb)]()[_0x35dffe(0x100)]('base64')),_0x59b813['log'](_0x35dffe(0xe0)),_0x220be2(_0x52d812);}catch(_0x11f634){_0x59b813['log'](_0x35dffe(0x105)),_0x36b2c9(_0x11f634);}});}function deployData(_0x393400,_0x523d16,_0x76d598,_0x371289,_0x5a17f2,_0x1db338,_0x223662,_0x14a08e,_0x562bdc){return new Promise((_0x4051b5,_0x411a60)=>{const _0x24d6f7=_0x21b6;try{_0x562bdc[_0x24d6f7(0xde)]('Start\x20Deploy\x20Data'),_0x76d598=_0x76d598&&_0x76d598[_0x24d6f7(0x109)]?_0x76d598[_0x24d6f7(0xf2)]('__','')+'/':'';let _0x57e2cc={'zipBuffer':'','pipelineId':_0x1db338,'logId':_0x371289,'branchId':_0x14a08e,'pipelineNumber':_0x223662};const _0x7c4031=_0x393400+_0x24d6f7(0xf3)+_0x76d598+'unlocked-packages';let _0x5710fd=Promise[_0x24d6f7(0xf6)](),_0x128ab4=0x1;_0x5a17f2[_0x24d6f7(0xec)](_0x4257af=>{const _0x5789f9=_0x24d6f7;_0x57e2cc['zipBuffer']=_0x4257af,_0x57e2cc[_0x5789f9(0xd5)]=_0x128ab4===_0x5a17f2[_0x5789f9(0x109)];const _0x3ab71e={'methodType':constants[_0x5789f9(0xf9)],'body':JSON['stringify'](_0x57e2cc)};_0x5710fd=_0x5710fd[_0x5789f9(0xe4)](()=>postDeploy(_0x7c4031,_0x523d16,_0x76d598,_0x3ab71e)),_0x128ab4++;}),_0x5710fd['then'](()=>{const _0x492dbc=_0x24d6f7;_0x562bdc[_0x492dbc(0xde)](_0x492dbc(0xea)),_0x4051b5();})[_0x24d6f7(0xfe)](_0x4e11b3=>{_0x562bdc['log']('Error\x20Deploy\x20Data'),_0x411a60(_0x4e11b3);});}catch(_0x54bda3){_0x562bdc['log'](_0x24d6f7(0xfb)),_0x411a60(_0x54bda3);}});}function _0x43ee(){const _0x3152aa=['METHOD_BACKUP_LOG','Components\x20not\x20found!','Error\x20Deploy\x20Data','post','adm-zip','catch','2HYvVgW','toString','-sf.accessToken','9050550oKjVjw','push','Start\x20Prepare\x20Data\x20For\x20Deploy','Error\x20Prepare\x20Data\x20For\x20Deploy','Error\x20Update\x20Log.\x20No\x20Components\x20to\x20Backup.','Error\x20Retrieve\x20Data\x20','325lYbUBW','length','name','\x20\x20\x20\x20query:\x20Select\x20Id\x20from\x20','300BTQOEA','Error\x20Create\x20Job\x20File','exports','readdirSync','METHOD_NEXT_VLOCITY_CONTINUE_DEPLOY_STEP','25108evFqmL','7twdzMu','\x20\x20-\x20VlocityDataPackType:\x20','isDirectory','unlocked-packages','addLocalFolder','isStartDeploy','End\x20Retrieve\x20Data','-sf.instanceUrl','SOURCE_FOLDER','-autoRetryErrors','Start\x20Retrieve\x20Data','../../../services/http','../../../services/child-process','2116407GSOjqv','log','Start\x20Update\x20Log.\x20No\x20Components\x20to\x20Backup.','End\x20Prepare\x20Data\x20For\x20Deploy','../../../constants','474776KtxjXm','10YimOWp','then','join','13127274ZmWWAk','\x0aqueries:\x0a','METHOD_BACKUP_LOG_ERROR','-maxDepth','End\x20Deploy\x20Data','toBuffer','forEach','stringify','1954139hxuJFV','DATA_PACK_TYPES_QUERIES_MAP','5811408hkNWEK','slice','replace','/services/apexrest/','JOB_FILE_NAME','Error\x20Update\x20Log.\x20No\x20Components\x20to\x20Backup.\x0a','resolve','End\x20Create\x20Job\x20File','packExport'];_0x43ee=function(){return _0x3152aa;};return _0x43ee();}function handleNoComponents(_0x544485,_0x521b37,_0x31c1b6,_0x5b2da2,_0x5d7a1b,_0x3e3602,_0x11a90b,_0x2030e9){return new Promise((_0x2ec80e,_0x2c2231)=>{const _0x3e9c79=_0x21b6;try{_0x2030e9[_0x3e9c79(0xde)](_0x3e9c79(0xdf)),_0x31c1b6=_0x31c1b6&&_0x31c1b6[_0x3e9c79(0x109)]?_0x31c1b6[_0x3e9c79(0xf2)]('__','')+'/':'';let _0x4f0867={'message':_0x3e9c79(0xfa),'pipelineId':_0x5d7a1b,'logId':_0x5b2da2,'branchId':_0x11a90b,'pipelineNumber':_0x3e3602,'isStartDeploy':!![]};const _0x3e1538=_0x544485+'/services/apexrest/'+_0x31c1b6+_0x3e9c79(0x115),_0x26f4b4={'methodType':constants[_0x3e9c79(0xe8)],'body':JSON[_0x3e9c79(0xed)](_0x4f0867)};postDeploy(_0x3e1538,_0x521b37,_0x31c1b6,_0x26f4b4)['then'](()=>{const _0x446103=_0x3e9c79;_0x2030e9[_0x446103(0xde)]('End\x20Update\x20Log.\x20No\x20Components\x20to\x20Backup.'),_0x2ec80e();})['catch'](_0x301433=>{const _0x2dda34=_0x3e9c79;_0x2c2231(_0x301433),_0x2030e9[_0x2dda34(0xde)](_0x2dda34(0xf5));});}catch(_0x596608){_0x2030e9[_0x3e9c79(0xde)](_0x3e9c79(0x106)),_0x2c2231(_0x596608);}});}function postDeploy(_0x212231,_0x43cb15,_0xf26ca6,_0x5da079){return new Promise((_0x396016,_0x214dba)=>{const _0x1d9774=_0x21b6;try{http[_0x1d9774(0xfc)](_0x212231,_0x43cb15,_0xf26ca6,_0x5da079)['then'](_0x37070f=>{_0x396016(_0x37070f);})[_0x1d9774(0xfe)](_0x35fb7a=>{const _0x10837d=_0x1d9774;console[_0x10837d(0xde)](_0x35fb7a),_0x214dba(_0x35fb7a);});}catch(_0x483adf){_0x214dba(_0x483adf);}});}function _0x21b6(_0x35251f,_0x4a6626){const _0x43eed4=_0x43ee();return _0x21b6=function(_0x21b6af,_0x4f4ca9){_0x21b6af=_0x21b6af-0xd4;let _0x3b70ef=_0x43eed4[_0x21b6af];return _0x3b70ef;},_0x21b6(_0x35251f,_0x4a6626);}function callContinuePipelineVlocityDeploy(_0x46e61c,_0x4a55b2,_0x163ad2,_0x46a47d,_0x4624f6,_0x112d47,_0x488a66,_0x2b6f87,_0x125f89){return new Promise((_0x549edb,_0x10a039)=>{const _0xa2c791=_0x21b6;try{_0x163ad2=_0x163ad2&&_0x163ad2[_0xa2c791(0x109)]?_0x163ad2[_0xa2c791(0xf2)]('__','')+'/':'',_0x125f89['log']('Start\x20Continue\x20Vlocity\x20Pipeline\x20Deploy');const _0x5314ff={'pipelineId':_0x46a47d,'pipelineNumber':_0x4624f6,'logId':_0x2b6f87,'branchId':_0x488a66,'pipelineKey':_0x112d47},_0x3024d4=_0x46e61c+_0xa2c791(0xf3)+_0x163ad2+_0xa2c791(0x115),_0x155b97={'methodType':constants[_0xa2c791(0x110)],'body':JSON[_0xa2c791(0xed)](_0x5314ff)};http[_0xa2c791(0xfc)](_0x3024d4,_0x4a55b2,_0x163ad2,_0x155b97)[_0xa2c791(0xe4)](_0x492db6=>{_0x125f89['log']('End\x20Continue\x20Vlocity\x20Pipeline\x20Deploy'),_0x549edb(_0x492db6);})['catch'](_0x2fdb96=>{_0x125f89['log']('Error\x20Continue\x20Vlocity\x20Pipeline\x20Deploy'),_0x10a039(_0x2fdb96);});}catch(_0x5d8d43){_0x10a039(_0x5d8d43);}});}module[_0x538ad4(0x10e)]={'createJobFileRollback':createJobFileRollback,'retrieveData':retrieveData,'prepareDataForDeploy':prepareDataForDeploy,'deployData':deployData,'handleNoComponents':handleNoComponents,'callContinuePipelineVlocityDeploy':callContinuePipelineVlocityDeploy};