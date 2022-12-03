import {getColorText, outFlag} from '../utils/getColorText.js'
import {getCurrentDir, HOME_DIR, setDir} from '../utils/dirOperations.js';
import path from 'path'
import {ls} from "../commamds/ls.js";

export const manager = async (line, rl) => {
  if (!line.trim()) {
    console.log('print commands and wait for results')
    return
  }

  const [command, ...add] = line.trim().split(' ')
  const args = add.filter(el => el !== '')

  switch (command) {
    case 'ls':
      ls(getCurrentDir())
      break
    case 'cd':
      setDir(path.resolve(getCurrentDir(), args[0]))
      break
    case 'up':
      setDir(path.resolve(getCurrentDir(), '..'))
      break
    case '.exit':
      rl.emit('close')
      break
    default:
      console.log(getColorText('Command error', outFlag.ERROR))
  }
  console.log('You are currently in ', getCurrentDir(), HOME_DIR)
}
