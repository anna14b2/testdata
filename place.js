const urlParams = new URLSearchParams(window.location.search);
const place = urlParams.get("place");
console.log(place);

const url = `https://kea2semester-c983.restdb.io/rest/iceland?q={"name" : {"$in" : ["${place}"]}}`;
console.log(url);

const options = {
  headers: {
    "x-apikey": "615322a8dfa7346e2f96912a",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => showPlace(data));

function getPlace(place) {
  place.forEach(showPlace);
}

function showPlace(dr) {
  const place = dr[0];
  document.querySelector("h2").innerHTML = "<h2>" + place.name + "</h2>";
  document.querySelector("h3").innerHTML = "<h3>" + place.located + "</h3>";
  document.querySelector("h4").innerHTML = "<h4>" + place.type + "</h4>";

  document.querySelector("img").setAttribute("src", place.img);
  document.querySelector("img").setAttribute("alt", place.name);
}
