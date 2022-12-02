import { chdir, cwd } from 'process';
import { homedir } from 'os';

export const HOME_DIR = homedir();

export const setDir = (dir) => chdir(dir);

export const getCurrentDir = () => cwd();
