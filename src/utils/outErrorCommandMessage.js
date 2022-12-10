import {EOL} from 'os'
import {getColorText, outFlag} from './getColorText.js'

export const outErrorCommandMessage = () => {
  console.log(
    getColorText(`Invalid input${EOL}`, outFlag.ERROR),
    getColorText(`Use: 
      up 
      ls
      cd path_to_directory
      cat path_to_file
      rn path_to_file new_filename
      cp path_to_file path_to_new_directory
      mv path_to_file path_to_new_directory
      rm path_to_file
      hash path_to_file
      compress path_to_file path_to_destination
      decompress path_to_file path_to_destination
      os --EOL | --cpus | --homedir | --username | --architecture
      `, outFlag.IMPORTANT)
  )
}
