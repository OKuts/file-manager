import {open} from 'fs/promises'
import {getColorText, outFlag, outCurrentlyDir, isParams} from '../utils/index.js'
import {resolve} from 'path'

export const createFile = async fileName => {
  if (!isParams([fileName], 'new_file_name')) return
  try {
    const file = await open(resolve(fileName), 'ax')
    await file.close()
    outCurrentlyDir()
  } catch (err) {
    console.log(getColorText(err.message, outFlag.ERROR))
  }
}
