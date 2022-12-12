import {pipeline} from 'stream'
import {createReadStream, createWriteStream} from 'fs'
import {BrotliDecompress} from 'zlib'
import {resolve, parse} from 'path'
import {getColorText, isParams, outCurrentlyDir, outFlag} from '../utils/index.js'
export const decompress = async (from, to) => {
  if (!isParams([from, to], 'path_to_file path_to_destination')) return

  pipeline (
    createReadStream(resolve(from)),
    new BrotliDecompress(),
    createWriteStream(resolve(to, parse(from).name)),
    err => {
      err ? console.log(getColorText(err.message, outFlag.ERROR)) : outCurrentlyDir()
    }
  )
}
