import {ReadStream} from 'fs'
import {getColorText, outFlag} from "../utils/index.js";
import {printCurrentlyIn} from "../utils/index.js";

export const readFile = async ([file]) => {
  const stream = new ReadStream(file)

  stream.on('readable', () => {
    const data = stream.read()
    if (data) console.log(getColorText(data.toString(), outFlag.IMPORTANT))
  })

  stream.on('close', () => {
    printCurrentlyIn()
  })

  stream.on('error', () => {
    console.log(getColorText('Error fileName', outFlag.ERROR))
  })
}
