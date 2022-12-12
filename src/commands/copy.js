import {copyFile} from 'fs/promises'
import {resolve, basename} from 'path'
import {outCurrentlyDir, getColorText, outFlag, isParams} from '../utils/index.js'

export const copy = async (from, to) => {
  if (!isParams([from, to], 'path_to_file path_to_new_directory')) return
  try {
    await copyFile(resolve(from), resolve(to, basename(from)), 1)
    outCurrentlyDir()
  } catch (e) {
    console.log(getColorText(e.message, outFlag.ERROR))
  }
}
