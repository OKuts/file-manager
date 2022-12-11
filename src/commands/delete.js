import {rm} from 'fs/promises'
import {resolve} from 'path'
import {getColorText, outFlag, outCurrentlyDir, isParams} from '../utils/index.js'

export const deleteFile = async fileName => {
  if (!isParams([fileName], 'path_to_file')) return
  try {
    console.log()
    await rm(resolve(fileName))
    outCurrentlyDir()
  } catch (e) {
    console.log(getColorText(e.message, outFlag.ERROR))
  }
}
