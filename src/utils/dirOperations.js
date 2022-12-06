import {chdir, cwd} from 'process'
import {homedir} from 'os'
import {resolve} from 'path'

import {printCurrentlyIn} from './index.js'

export const HOME_DIR = homedir()

export const getCurrentDir = () => cwd()

export const setDir = ([newDir]) => {
  chdir(resolve(newDir))
  printCurrentlyIn(getCurrentDir())
}

