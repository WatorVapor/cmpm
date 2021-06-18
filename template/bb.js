const os = require('os');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
/*
console.log(':: os.type()=<',os.type(),'>');
console.log(':: os.platform()=<',os.platform(),'>');
console.log(':: os.arch()=<',os.arch(),'>');
*/
const platformDir = `${path.dirname(__dirname)}/builtin/platform/${os.platform()}-${os.arch()}`
//console.log(':: platformDir=<',platformDir,'>');
const platformPath = path.normalize(platformDir);
//console.log(':: platformPath=<',platformPath,'>');
const platform = require(`${platformPath}/platform.js`);
console.log(':: platform=<',platform,'>');
const pack = require(`${__dirname}/package.json`);
console.log(':: pack=<',pack,'>');


const objPath = './obj';
const createObjectPath = (src) => {
  const srcDir = path.dirname(src);
  console.log('createObjectPath:: srcDir=<',srcDir,'>');
  const objDir = `${objPath}/${srcDir}`
  fs.mkdirSync(objDir,{ recursive: true });
  const srcName = path.basename(src);
  console.log('createObjectPath:: srcName=<',srcName,'>');
  return path.normalize(`${objDir}/${srcName}.o`);
}


const ccCmds = [];
const cxxCmds = [];
const objectCollects = [];
for(const source_c of pack.source_c) {
  //console.log(':: source_c=<',source_c,'>');
  const objPath = createObjectPath(source_c);
  objectCollects.push(objPath);
  const cmd = `${platform.cc} -c ${source_c} -o ${objPath}`;
  ccCmds.push(cmd);
}
for(const source_cxx of pack.source_cxx) {
  //console.log(':: source_cxx=<',source_cxx,'>');
  const objPath = createObjectPath(source_cxx);
  objectCollects.push(objPath);
  const cmd = `${platform.cxx} -c ${source_cxx} -o ${objPath}`;
  cxxCmds.push(cmd);
}
console.log(':: ccCmds=<',ccCmds,'>');
console.log(':: cxxCmds=<',cxxCmds,'>');
console.log(':: objectCollects=<',objectCollects,'>');

const buildShell = './auto.commd.run.bat'
fs.writeFileSync(buildShell,'');

for(const cc of ccCmds) {
  fs.appendFileSync(buildShell,cc + '\n\r');
}
for(const cxx of cxxCmds) {
  fs.appendFileSync(buildShell,cxx + '\n\r');
}
fs.appendFileSync(buildShell,'pause\n\r');

