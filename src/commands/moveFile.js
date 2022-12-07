import {pipeline} from 'stream'
import {ReadStream, WriteStream} from 'fs'
import {open} from 'fs/promises'
import {resolve, basename} from 'path'
import {getColorText, getCurrentDir, outFlag} from "../utils/index.js";
import {deleteFile} from "./index.js";

export const moveFile = async ([from, to]) => {
  try {
    const base = basename(from)
    await open(resolve(getCurrentDir(), resolve(to, base)), 'ax' )
    await pipeline(
      new ReadStream(resolve(getCurrentDir(),from)),
      new WriteStream(resolve(getCurrentDir(),resolve(to, base))),
      (err) => {
        throw new Error(err.message)
      }
    )
    await deleteFile(from)
  } catch (e) {
    console.log(getColorText(e.message, outFlag.ERROR))
  }
}
