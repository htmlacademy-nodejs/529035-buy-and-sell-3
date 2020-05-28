'use strict';

type ExitCode = {
  success: number,
  error: number,
};

export const DEFAULT_COMMAND: string = '--help';
export const USER_ARGV_INDEX: number = 2;

export const ExitCode: ExitCode = {
  success: 0,
  error: 1,
};
