import { outErrorCommandMessage } from './utils/index.js'
import { commands } from './commands/index.js'

export const manager = async (line, rl) => {
  const [command, ...rest] = line.trim().split(' ')

  if (!command) {
    console.log('print commands and wait for results')
    return
  }

  const args = rest.filter(el => el !== '')

  if (command === '.exit') rl.emit('close')

  if (commands[command]) {
    commands[command](args)
  } else {
    outErrorCommandMessage()
  }
}
