import {pipeline} from 'stream'
import {createReadStream, createWriteStream} from 'fs'
import {BrotliCompress} from 'zlib'
import {resolve, basename} from 'path'
import {getColorText, isParams, outCurrentlyDir, outFlag} from '../utils/index.js'
export const compress = async (from, to) => {
  if (!isParams([from, to], 'path_to_file path_to_destination')) return

  const base = basename(from)
  pipeline (
    createReadStream(resolve(from)),
    new BrotliCompress(),
    createWriteStream(resolve(to, base + '.br')),
    err => {
      err ? console.log(getColorText(err.message, outFlag.ERROR))  : outCurrentlyDir()
    }
  )
}
