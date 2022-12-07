import {rm} from 'fs/promises'
import {resolve} from 'path'
import {getColorText, getCurrentDir, outFlag, printCurrentlyIn} from "../utils/index.js";

export const deleteFile = async ([file]) => {
  try {
    await rm(resolve(getCurrentDir(), file))
    printCurrentlyIn()
  } catch (e) {
    console.log(getColorText(e.message, outFlag.ERROR))
  }
}
