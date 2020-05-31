import * as fs from 'fs';
import * as typings from '../../typings';
import { Command } from "./command";
import { getRandomInt, shuffle, getRandomArray } from "../../utils";

const DEFAULT_COUNT: number = 1;
const FILE_NAME: string = `../mocks.json`;

const TITLES: string[] = [
  `Продам книги Стивена Кинга`,
  `Продам новую приставку Sony Playstation 5`,
  `Продам отличную подборку фильмов на VHS`,
  `Куплю антиквариат`,
  `Куплю породистого кота`,
];

const SENTENCES: string[] = [
  `Товар в отличном состоянии.`,
  `Пользовались бережно и только по большим праздникам.`,
  `Продаю с болью в сердце...`,
  `Бонусом отдам все аксессуары.`,
  `Даю недельную гарантию.`,
  `Если товар не понравится — верну всё до последней копейки.`,
  `Это настоящая находка для коллекционера!`,
  `Если найдёте дешевле — сброшу цену.`,
  `Таких предложений больше нет!`,
  `При покупке с меня бесплатная доставка в черте города.`,
];

const CATEGORIES: string[] = [
  `Книги`,
  `Разное`,
  `Посуда`,
  `Игры`,
  `Животные`,
  `Журналы`,
];

const OfferType: {[key: string]: string} = {
  offer: `offer`,
  sale: `sale`,
};


const SumRestrict: {[key: string]: number} = {
  min: 1000,
  max: 100000,
};

const PictureRestrict: {[key: string]: number} = {
  min: 1,
  max: 16,
};

const getPictureFileName = (number: number): string => {
  return number > 10 ? `item${ number }.jpg` : `item0${ number }.jpg`;
};

const generateOffers = (count:number): Array<typings.Offer> => (
  Array(count).fill({}).map(() => ({
    categories: getRandomArray(CATEGORIES).join(`, `),
    description: shuffle(SENTENCES).slice(1, 5).join(` `),
    picture: getPictureFileName(getRandomInt(PictureRestrict.min, PictureRestrict.max)),
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    type: Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)],
    sum: getRandomInt(SumRestrict.min, SumRestrict.max),
  }))
);

export class Generate implements Command {
  name = `--generate`;

  run(args?: any) {
    const [count] = args;
    const countOffer: number = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content: string = JSON.stringify(generateOffers(countOffer));

    fs.writeFile(FILE_NAME, content, (err) => {
      if (err) {
        return console.error(`Can't write data to file...`);
      }

      return console.log(`Operation success. File created.`);
    });
  }
}
