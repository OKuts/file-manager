import {EOL, homedir, cpus, userInfo, machine} from 'os'
import {
  copy, createFile, deleteFile, getOsParams, listDir, getHash, setDir,
  moveFile, readFile, renameFile, upDir, compress, decompress
} from './index.js'

export const commands = Object.freeze({
  up: upDir,
  ls: listDir,
  cp: args => copy(...args),
  cd: args => setDir(...args),
  rn: args => renameFile(...args),
  add: args => createFile(...args),
  cat: args => readFile(...args),
  rm: args => deleteFile(...args),
  mv: args => moveFile(...args),
  os: args => getOsParams(...args),
  hash: args => getHash(...args),
  compress: args => compress(...args),
  decompress: args => decompress(...args),
})

export const osData = Object.freeze({
  '--EOL': () => EOL === '\r\n' ? '\\r\\n' :  '\\n',
  '--homedir': () => homedir(),
  '--cpus': () => cpus(),
  '--username': () => userInfo().username,
  '--architecture': () => machine(),
})
