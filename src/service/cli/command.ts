export interface Command {
  name: string;
  run(args?: any): any;
}
