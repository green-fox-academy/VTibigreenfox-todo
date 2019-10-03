'use strict'; //oké, hogy mindig odaírom, de amúgy ez micsoda?

const fs = require ('fs'); //ez micsoda?
const args: string[] = process.argv; 

const printTxt: string = fs.readFileSync('printusage.txt', 'utf-8');
let mainProcess = () => {
  if (args.length == 2) {
    console.log('this is without arguments, help me!');
  } else if (args[2] == '-l') {
    console.log(printTxt);
  }
   
}

mainProcess();
