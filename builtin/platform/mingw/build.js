const platform = require(`${__dirname}/platform.js`);
console.log('::platform=<',platform,'>');
platform.ccc('main.c')
platform.ld('main.o -o main.exe'); 
