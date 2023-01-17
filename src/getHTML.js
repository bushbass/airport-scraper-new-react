import axios from 'axios';
const url =
  'https://cors-lmy0.onrender.com/https://tracker.flightview.com/FVAccess3/tools/fids/fidsDefault.asp?ffState=2&accCustId=PANYNJ&fidsId=20001&ffId=fA&ffAcid=&ffAl=&ffSimplestatus=&ffDepap=&ffArrap=EWR&ffDepdate=&ffArrdate=NOW&ffDephr=&ffArrhr=NOW&ffSortColumn=ArrivalDateTimeUpdated&ffSortDirection=ascending&ffSortPrevColumn=ArrivalOriginalDateTimeScheduled&ffSortPrevDirection=ascending&ffFilterAl=&ffFilterDepap=&ffFilterArrap=';

// gets the raw HTML from the website via axios
export const getHTML = async () => {
  const { data: html } = await axios.get(url);
  return html;
};
