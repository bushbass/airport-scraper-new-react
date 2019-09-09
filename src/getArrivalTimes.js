import cheerio from 'cheerio';
import { convertTime12to24 } from './convertTime12to24';

// takes the html from getHTML function and manipulates it to produce our object
export const getArrivalTimes = async html => {
  const $ = cheerio.load(html);

  // get flight times from cheerio object and save them to flightArray
  let rawFlightTimesList = [];
  $('.c7').each((i, element) => {
    let temp = element.children[1] ? element.children[1].data : null;
    rawFlightTimesList = [...rawFlightTimesList, temp];
  });

  //remove duplicate times by making it a set
  // then assign de-duplicated set to a new array

  const singledFlightTimesList = [...new Set(rawFlightTimesList)];

  //  convert 12 to 24 hour time
  const HourList = singledFlightTimesList.map(item =>
    item ? convertTime12to24(item) : null
  );

  const justHoursList = HourList.map(item =>
    item ? item.slice(-8, -6) : null
  );

  const countObj = {};
  for (let i = 0; i < justHoursList.length; i++) {
    !countObj[justHoursList[i]]
      ? (countObj[justHoursList[i]] = 1)
      : countObj[justHoursList[i]]++;
  }
  console.log(countObj);
  return countObj;
};
