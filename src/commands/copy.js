import { copyFile } from 'fs/promises'
import { resolve, basename } from 'path'
import { outCurrentlyDir, getColorText, outFlag } from '../utils/index.js'
export const copy = async (from, to) => {
  try {
    await copyFile(resolve(from), resolve(to, basename(from)), 1)
    outCurrentlyDir()
  } catch (e) {
    console.log(getColorText(e.message, outFlag.ERROR))
  }
}
