const os = require('os');
const path = require('path');

/*
console.log(':: os=<',os,'>');
console.log(':: os.type()=<',os.type(),'>');
console.log(':: os.platform()=<',os.platform(),'>');
console.log(':: os.arch()=<',os.arch(),'>');
console.log(':: __dirname=<',__dirname,'>');
console.log(':: __filename=<',__filename,'>');
*/

const platformDir = `${path.dirname(__dirname)}/builtin/platform/${os.platform()}-${os.arch()}`
//console.log(':: platformDir=<',platformDir,'>');
const platformPath = path.normalize(platformDir);
//console.log(':: platformPath=<',platformPath,'>');
const platform = require(`${platformPath}/platform.js`);
console.log(':: platform=<',platform,'>');
