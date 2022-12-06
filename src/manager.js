import {getColorText, setDir, outFlag} from './utils/index.js'
import {createFile, renameFile, readFile, copyFile, listDir, upDir} from './commands/index.js'

const config = {
  up: upDir,
  ls: listDir,
  cp: (args) => copyFile(args),
  cd: (args) => setDir(args),
  rn: (args) => renameFile(args),
  add: (args) => createFile(args),
  cat: (args) => readFile(args),
}

export const manager = async (line, rl) => {
  if (!line.trim()) {
    console.log('print commands and wait for results')
    return
  }

  const [command, ...rest] = line.trim().split(' ')
  const args = rest.filter(el => el !== '')

  if (command === '.exit') rl.emit('close')

  if (config[command]) {
    config[command](args)
  } else {
    console.log(getColorText('Command error', outFlag.ERROR))
  }
}
