import  readline from 'node:readline'
import { manager } from './src/manager.js'
import {getUser} from './src/getUser.js'
import {getColorText, outFlag} from "./utils/getColorText.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const userName = getUser();
console.log(`Welcome to the File Manager, ${getColorText(userName, userName !== "Anonymous" && outFlag.IMPORTANT)}!`)

rl.on('line', line => manager(line, rl))

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${getColorText(userName,outFlag.IMPORTANT)}!`);
  process.exit()
});

