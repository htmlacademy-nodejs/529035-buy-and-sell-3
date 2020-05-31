'use strict';

import {Help} from "./help";
import {Version} from "./version";
import {Generate} from "./generate";

const help = new Help;
const generate = new Generate;
const version = new Version;

export const Cli = {
  [generate.name]: generate,
  [help.name]: help,
  [version.name]: version,
};
