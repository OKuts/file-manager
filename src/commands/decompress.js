import {pipeline} from 'stream'
import {createReadStream, createWriteStream} from 'fs'
import {BrotliDecompress} from 'zlib'
import {resolve, parse} from 'path'
import {outCurrentlyDir, outErrorCommandMessage} from '../utils/index.js'
export const decompress = async (from, to) => {

  pipeline (
    createReadStream(resolve(from)),
    new BrotliDecompress(),
    createWriteStream(resolve(to, parse(from).name)),
    err => {
      err ? outErrorCommandMessage() : outCurrentlyDir()
    }
  )
}
