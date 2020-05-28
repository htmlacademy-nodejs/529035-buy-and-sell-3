'use strict';
import {Command} from "./command";

export class Help extends Command {
  constructor(name: string) {
    super(name);
  }

  run() {
    const text = `
    Программа запускает http-сервер и формирует файл с данными для api.
    Гайд:
      server <command>
      Команды:
      --version:            выводит номер версии
      --help:               печатает этот текст
      --generate <count>    формирует файл mocks.json
    `;

    console.log(text);

  }
}