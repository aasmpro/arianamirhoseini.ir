import saadiGhazals from '../assets/data/saadiGhazals.json';
import { request } from './request';

const parseGanjoorHtmlText = (htmlText) => {
  return htmlText
    .match(/<p>(.*?)<\/p>/g)
    .map((val) => val.replace(/<\/?p>/g, ''));
};

export const ganjoorGetPoemId = (id) => {
  return request(
    `https://ganjgah.ir/api/ganjoor/poem/${id}?catInfo=false&catPoems=false&rhymes=false&recitations=false&images=false&songs=false&comments=false&verseDetails=false&navigation=false`
  );
};

export const randomSaadiGhazal = async () => {
  let data = await ganjoorGetPoemId(
    saadiGhazals[Math.floor(Math.random() * saadiGhazals.length)]
  );
  return {
    poet: "سعدی",
    name: data.title,
    fullName: data.fullTitle,
    text: parseGanjoorHtmlText(data.htmlText), 
    url: `https://ganjoor.net${data.fullUrl}`
  };
};
