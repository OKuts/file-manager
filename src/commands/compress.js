import {pipeline} from 'stream'
import {createReadStream, createWriteStream} from 'fs'
import {BrotliCompress} from 'zlib'
import {resolve, basename} from 'path'
import {outCurrentlyDir, outErrorCommandMessage} from '../utils/index.js'
export const compress = async (from, to) => {
  const base = basename(from)
  pipeline (
    createReadStream(resolve(from)),
    new BrotliCompress(),
    createWriteStream(resolve(to, base + '.br')),
    err => {
      err ? outErrorCommandMessage() : outCurrentlyDir()
    }
  )
}
