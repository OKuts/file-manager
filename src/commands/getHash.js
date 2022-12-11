import {createHash} from 'crypto'
import {resolve} from 'path'
import {readFile} from 'fs/promises'
import {getColorText, isParams, outCurrentlyDir, outFlag} from '../utils/index.js'
export const getHash = async fileName => {
  if (!isParams([fileName], 'path_to_file')) return
  try {
    const content = await readFile(resolve(fileName))
    const hash = createHash('sha256').update(content)
    console.log(getColorText(hash.digest('hex'), outFlag.SUCCESS))
    outCurrentlyDir()
  } catch (err) {
    console.log(getColorText(err.message, outFlag.ERROR))
  }
};
