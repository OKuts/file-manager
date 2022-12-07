import {homedir} from 'os'
import {resolve} from 'path'

import {printCurrentlyIn} from './index.js'

export const HOME_DIR = homedir()

export const getCurrentDir = () => process.cwd()

export const setDir = ([newDir]) => {
  process.chdir(resolve(newDir))
  printCurrentlyIn(getCurrentDir())
}

