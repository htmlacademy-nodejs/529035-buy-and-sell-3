'use strict';
import {Command} from "./command";

export class Version extends Command {
  packageJsonFile: {[key: string]: string};

  constructor(name: string) {
    super(name);
    this.packageJsonFile = require(`../../../package.json`);
  }

  run() {
    const version:string = this.packageJsonFile.version;
    console.info(version);
  }

}
