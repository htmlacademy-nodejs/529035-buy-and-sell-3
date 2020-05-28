'use strict';

import {Help} from "./help";
import {Version} from "./version";
import {Generate} from "./generate";

const help = new Help(`--help`);
const generate = new Generate(`--generate`);
const version = new Version(`--version`);

export const Cli = {
  [generate.name]: generate,
  [help.name]: help,
  [version.name]: version,
};
