import {getColorText, outFlag} from '../utils/getColorText.js'
import {getCurrentDir, HOME_DIR, setDir} from '../utils/dirOperations.js'
import path from 'path'
import {ls, cat, add} from "../commamds/index.js"


export const manager = async (line, rl) => {
  if (!line.trim()) {
    console.log('print commands and wait for results')
    return
  }

  const [command, ...rest] = line.trim().split(' ')
  const args = rest.filter(el => el !== '')
  const currentDir = getCurrentDir()

  switch (command) {
    case 'add':
      add(path.resolve(currentDir, args[0]), args[0])
      break
    case 'cat':
      cat(path.resolve(currentDir, args[0]))
      break
    case 'ls':
      await ls(currentDir)
      break
    case 'cd':
      setDir(path.resolve(currentDir, args[0]))
      break
    case 'up':
      setDir(path.resolve(currentDir, '..'))
      break
    case '.exit':
      rl.emit('close')
      break
    default:
      console.log(getColorText('Command error', outFlag.ERROR))
  }
  console.log('You are currently in ', currentDir, HOME_DIR)
}
