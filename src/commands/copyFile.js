import {copyFile as copy} from 'node:fs/promises'
import {resolve, basename} from 'path'
import {printCurrentlyIn, getCurrentDir, getColorText, outFlag} from '../utils/index.js'

export const copyFile = async ([from, to]) => {
  try {
    if ( !from || !to) throw new Error('Params error')
    await copy(resolve(getCurrentDir(), from), resolve(to, basename(from)))
    printCurrentlyIn()
  } catch (e) {
    console.log(getColorText(e.message, outFlag.ERROR))
  }
}
