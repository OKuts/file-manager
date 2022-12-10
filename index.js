import {homedir} from 'os'
import  readline from 'readline'
import { manager } from './src/manager.js'
import {getUser, getColorText, outFlag, outCurrentlyDir, setDir} from './src/utils/index.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const userName = getUser();
console.log(
  `Welcome to the File Manager, ${getColorText(userName, userName !== "Anonymous" && outFlag.IMPORTANT)}!`
)
// setDir(homedir())
console.log('print commands and wait for results')

rl.on('line', line => manager(line, rl))

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${getColorText(userName,outFlag.IMPORTANT)}!`);
  process.exit()
});
