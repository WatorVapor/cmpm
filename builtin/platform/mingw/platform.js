const sysroot = `${__dirname}\\x86_64-8.1.0-posix-seh-rt_v6-rev0\\mingw64`;
//console.log('::sysroot=<',sysroot,'>');
const ccBase = ` clang --target=x86_64-pc-windows-gnu --sysroot=${sysroot}`;
const ccc = ` clang --target=x86_64-pc-windows-gnu --sysroot=${sysroot} -c `;
const ccv = ` clang -v --target=x86_64-pc-windows-gnu --sysroot=${sysroot}`;
const ldBase = `${__dirname}\\x86_64-w64-mingw32\\bin\\ld.exe --sysroot=${sysroot}`;
//console.log('::ldBase=<',ldBase,'>');

let ldOptionB = '';
ldOptionB += '-m i386pep -Bdynamic';
ldOptionB += `${sysroot}\\lib\\gcc\\x86_64-w64-mingw32\\8.1.0\\crtbegin.o`;
ldOptionB += ` -L${sysroot}\\lib\\gcc\\x86_64-w64-mingw32\\8.1.0`;
ldOptionB += ` -L${sysroot}\\x86_64-w64-mingw32\\lib`;

let ldOptionE = '';
/*
ldOptionE += ' -lmingw32 -lgcc -lgcc_eh -lmoldname -lmingwex';
ldOptionE += ' -lmsvcrt -ladvapi32 -lshell32 -luser32 ';
ldOptionE += ' -lkernel32 -lmingw32 -lgcc -lgcc_eh';
ldOptionE += ' -lmoldname -lmingwex -lmsvcrt -lkernel32 -lshlwapi';
*/
ldOptionE += ` -lmingw32 -lgcc -lgcc_eh -lmoldname -lmingwex -lmsvcrt -lpthread -ladvapi32 -lshell32 -luser32 -lkernel32 -liconv -lmingw32 -lgcc -lgcc_eh -lmoldname -lmingwex -lmsvcrt`;
ldOptionE += `${sysroot}\\lib\\gcc\\x86_64-w64-mingw32\\8.1.0\\crtend.o`;

module.exports = {
  cc: (param) => { execCCBase(param);},
  ccc:(param) => { execCCC(param);},
  ccv:(param) => { execCCV(param);},
  ld:(param) => { execLD(param);}
}

const execCCBase = (param) => {
  const cmd = `${ccBase} ${param} `;
  execCmd(cmd);
}

const execCCC = (param) => {
  const cmd = `${ccc} ${param} `;
  execCmd(cmd);
}

const execCCV = (param) => {
  const cmd = `${ccv} ${param} `;
  execCmd(cmd);
}

const execLD = (param) => {
  const cmd = `${ldBase} ${ldOptionB} ${param} ${ldOptionE}`;
  console.log('execLD::cmd=<',cmd,'>');
  execCmd(cmd);
}


const child_process = require('child_process');
const execCmd =(cmd) => { 
  try {
    const result = child_process.execSync(cmd);
    console.log('::result=<',result,'>');
  } catch(err) {
    console.log('::err=<',err,'>');
  }
}

