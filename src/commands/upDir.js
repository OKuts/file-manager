import path from 'path'
import {getCurrentDir, setDir} from '../utils/index.js'

export const upDir = () => {
  setDir([path.resolve(getCurrentDir(), '..')])
}
