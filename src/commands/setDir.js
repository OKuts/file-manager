import {resolve} from 'path'

import {getColorText, isParams, outCurrentlyDir, outFlag} from '../utils/index.js'
export const setDir = async newDir => {
  if (!isParams([newDir], 'path_to_directory')) return
  try {
    process.chdir(resolve(newDir))
  } catch (err) {
    console.log(getColorText('path is not correct', outFlag.ERROR))
  }
  outCurrentlyDir(resolve('.'))
}
