import { resolve } from 'path'
import { setDir } from './index.js'
export const upDir = () => {
  setDir(resolve('..'))
}
