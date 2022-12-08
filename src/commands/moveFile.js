import {pipeline} from 'stream'
import {ReadStream, WriteStream} from 'fs'
import {resolve, basename} from 'path'
import {getColorText, getCurrentDir, outFlag} from "../utils/index.js";
import {deleteFile} from "./index.js";

export const moveFile = async (from, to) => {
  try {
    const base = basename(from)
    pipeline(
      new ReadStream(resolve(getCurrentDir(), from)),
      new WriteStream(resolve(getCurrentDir(), to, base), {flags: 'ax+'}),
      err => {
        if (err) {
          console.log(getColorText(err.message, outFlag.ERROR))
        } else {
          deleteFile(from)
        }
      }
    )
  } catch (e) {
    console.log(getColorText(e.message, outFlag.ERROR))
  }
}