import {rename} from 'node:fs/promises'
import {resolve, dirname} from 'path'
import {getColorText, outFlag, outCurrentlyDir, isParams} from '../utils/index.js'

export const renameFile = async (oldFileName, newFileName) => {
  if (!isParams([oldFileName, newFileName], 'path_to_file new_filename')) return
  const dir = dirname(resolve(oldFileName))
  try {
    await rename(oldFileName, resolve(dir, newFileName))
    outCurrentlyDir()
  } catch (e) {
    console.log(getColorText(e.message, outFlag.ERROR))
  }
}
