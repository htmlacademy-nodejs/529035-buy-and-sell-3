'use strict';
import {Command} from "./command";

const packageJsonFile: {[key: string]: string} = require(`../../../package.json`);

export class Version implements Command {
  name = `--version`;

  run() {
    const version:string = packageJsonFile.version;
    console.info(version);
  }

}
