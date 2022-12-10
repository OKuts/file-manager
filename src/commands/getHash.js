import {createHash} from 'crypto'
import {resolve} from 'path'
import {readFile} from 'fs/promises'
import {outCurrentlyDir, outErrorCommandMessage} from "../utils/index.js";
export const getHash = async file => {
  try {
    const content = await readFile(resolve(file))
    const hash = createHash('sha256').update(content)
    console.log(hash.digest('hex'))
    outCurrentlyDir()
  } catch (err) {
    outErrorCommandMessage()
  }
};
