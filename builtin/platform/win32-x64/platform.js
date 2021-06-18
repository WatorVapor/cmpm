const path = require('path');
//console.log(':: __dirname=<',__dirname,'>');
//console.log(':: __filename=<',__filename,'>');
const llvmBin = `${__dirname}/LLVM12/bin/`;
exports.cc = path.normalize(`${llvmBin}/clang.exe`);
exports.cxx = path.normalize(`${llvmBin}/clang++.exe`);
exports.ld = path.normalize(`${llvmBin}/ld.exe`);
