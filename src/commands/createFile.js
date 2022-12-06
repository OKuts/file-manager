import {open} from 'node:fs/promises'
import {getColorText, outFlag} from '../utils/getColorText.js'

export const createFile = async (path, fileName) => {
  try {
    if (!fileName) throw new Error('Error: filename not specified')
    const file = await open(path, 'ax' )
    file.close()
  } catch (err) {
    console.log(getColorText(err.message, outFlag.ERROR))
  }
}
