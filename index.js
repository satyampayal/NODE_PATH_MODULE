const path=require('path');

//const filePath1="D:/nodeLearnBypw/path-module/index.js";

console.log('sep>',path.sep);

//console.log("process.env.PATH>",process.env.PATH);


console.log("delipeter>",path.delimiter);

// current file path

const currentFilePath=__filename;
console.log("current file path>",currentFilePath);


// base name 
console.log("base name>",path.basename(currentFilePath));

// base name without extension
console.log('base name without extension>',path.basename(currentFilePath,'.js'));

// dir name 
console.log("Dir name>",path.dirname(currentFilePath));

// extension 
console.log("extensyion>",path.extname(currentFilePath));
console.log("extensyion>",path.extname('index.km.js'));


const pathToFile=path.format({
    dir:'/public/home',
    base:'index.html'
});
console.log("pathToFile>",pathToFile);

// relative or absolute
console.log("currentFilePatt >",path.isAbsolute(currentFilePath));
console.log(path.isAbsolute("/pwbatach/index.js"));

// join
console.log('join>',path.join('/home','swap','satyamFiles','index.json'));
//parse
console.log("parse>",path.parse(currentFilePath));

// relative go
console.log("realtive>",path.relative("/home/user/hp/config","/home/user/hp/js"));

//resolve 
console.log("resolve>",path.resolve(),__dirname);