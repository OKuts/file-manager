import {rm} from 'fs/promises'
import {resolve} from 'path'
import {getColorText, outFlag, outCurrentlyDir} from '../utils/index.js'

export const deleteFile = async file => {
  try {
    console.log()
    await rm(resolve(file))
    outCurrentlyDir()
  } catch (e) {
    console.log(getColorText(e.message, outFlag.ERROR))
  }
}
