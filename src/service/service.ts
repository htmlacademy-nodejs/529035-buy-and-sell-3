'use strict';

import {Cli} from "./cli";
import {DEFAULT_COMMAND, USER_ARGV_INDEX, ExitCode} from "../constants";

const userArguments: Array<any> = process.argv.slice(USER_ARGV_INDEX);
const [userCommand] = userArguments;

if (userArguments.length === 0 || !Cli[userCommand]) {
  Cli[DEFAULT_COMMAND].run();
  process.exit(ExitCode.success);
}

Cli[userCommand].run(userArguments.slice(1));
