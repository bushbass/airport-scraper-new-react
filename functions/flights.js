exports.handler = async (event) => {
  const axios = require('axios');
  const response = await axios.get(
    'https://tracker.flightview.com/FVAccess3/tools/fids/fidsDefault.asp?ffState=2&accCustId=PANYNJ&fidsId=20001&ffId=fA&ffAcid=&ffAl=&ffSimplestatus=&ffDepap=&ffArrap=EWR&ffDepdate=&ffArrdate=NOW&ffDephr=&ffArrhr=NOW&ffSortColumn=ArrivalDateTimeUpdated&ffSortDirection=ascending&ffSortPrevColumn=ArrivalOriginalDateTimeScheduled&ffSortPrevDirection=ascending&ffFilterAl=&ffFilterDepap=&ffFilterArrap='
  );
  console.log(response);

  return {
    statusCode: 200,
    body: `Hello ${response.data.name}!`,
  };
};
