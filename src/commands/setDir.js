import {resolve} from 'path'

import {outCurrentlyDir} from '../utils/index.js'
export const setDir = (newDir) => {
  process.chdir(resolve(newDir))
  outCurrentlyDir(resolve('.'))
}
