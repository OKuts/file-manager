import { resolve } from 'path'
import { setDir } from '../utils/index.js'
export const upDir = () => {
  setDir(resolve('..'))
}
