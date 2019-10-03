'use strict'; //oké, hogy mindig odaírom, de amúgy ez micsoda?

const fs = require ('fs'); //ez micsoda?
const args: string[] = process.argv; 

const printTxt: string = fs.readFileSync('printusage.txt', 'utf-8');
let listTask: string = fs.readFileSync('listtask.txt', 'utf-8');
let newArray: string[] = [];
newArray.push(listTask)

let mainProcess = () => {
  if (args.length == 2) {
    console.log(printTxt);
  } 
  else if (args[2] == '-l') {
    for(let i = 1; i<newArray.length+1; i++){
    
    }
    console.log(' ' + listTask);
  }
}

mainProcess();
