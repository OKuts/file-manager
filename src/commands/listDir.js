import { readdir } from 'fs/promises'
import {printCurrentlyIn, getCurrentDir} from "../utils/index.js";

export const listDir = async () => {
  const fileNames = []
  const dirNames = []
  const list = await readdir(getCurrentDir(), {withFileTypes: true})

  for (const file of list) {
    file.isDirectory()
      ? dirNames.push({Name: file.name, Type: 'directory'})
      : fileNames.push({Name: file.name, Type: 'file'})
  }

  console.table([...dirNames, ...fileNames])
  printCurrentlyIn()
}
