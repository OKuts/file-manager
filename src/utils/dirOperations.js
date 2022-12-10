import {homedir} from 'os'
import {resolve} from 'path'

import {outCurrentlyDir} from './index.js'

export const HOME_DIR = homedir()

export const getCurrentDir = () => process.cwd()

export const setDir = (newDir) => {
  process.chdir(resolve(newDir))
  outCurrentlyDir(getCurrentDir())
}

