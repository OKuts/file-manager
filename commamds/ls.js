import { readdir } from 'fs/promises';

export const ls = async (dir) => {
  const fileNames = []
  const dirNames = []
  const list = await readdir(dir, {withFileTypes: true})

  for (const file of list) {
    file.isDirectory()
      ? dirNames.push({Name: file.name, Type: 'directory'})
      : fileNames.push({Name: file.name, Type: 'file'})
  }

  console.table([...dirNames, ...fileNames])
}
