fetch("https://kea2semester-c983.restdb.io/rest/iceland", {
  method: "GET",
  headers: {
    "x-apikey": "615322a8dfa7346e2f96912a",
  },
})
  .then((response) => {
    console.log(response);
  })
  .then((data) => {
    //We have the data
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
