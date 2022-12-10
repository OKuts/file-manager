import {open} from 'fs/promises'
import {getColorText, outFlag, outCurrentlyDir} from '../utils/index.js'
import {resolve} from 'path'

export const createFile = async fileName => {
  try {
    const file = await open(resolve(fileName), 'ax' )
    file.close()
    outCurrentlyDir()
  } catch (err) {
    console.log(getColorText(err.message, outFlag.ERROR))
  }
}
