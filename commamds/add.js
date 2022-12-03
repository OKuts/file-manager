import {open} from 'node:fs/promises'
import {getColorText, outFlag} from '../utils/getColorText.js'

export const add = async (path, file) => {
  try {
    const file = await open(path, 'ax' )
    file.close()
  } catch (err) {
    console.log(
      'File',
      getColorText(file, outFlag.IMPORTANT),
      getColorText('exist in current directory', outFlag.ERROR))
  }
}
