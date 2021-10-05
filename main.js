const urlParams = new URLSearchParams(window.location.search);
const locations = urlParams.get("locations");
//console.log(locations);

const url = `https://kea2semester-c983.restdb.io/rest/iceland?q={"locations" : {"$in" : ["${locations}"]}}`;
console.log(url);

const options = {
  headers: {
    "x-apikey": "615322a8dfa7346e2f96912a",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    // we have the data
    gotData(data);
  })
  .catch((e) => {
    // Something went wrong
    console.error("An error occured:", e.message);
  });

function gotData(data) {
  data.forEach(showPlace);
}

function showPlace(place) {
  console.log(place);
  //create templates
  const template = document.querySelector("#places_template").content;
  // clone the template
  const copy = template.cloneNode(true);
  //make the place page match the place we are gonna click
  copy
    .querySelector("a")
    .setAttribute("href", "place.html?place=" + place.name);

  //change dynamic data
  copy.querySelector("h2").textContent = place.name;
  copy.querySelector("img").setAttribute("src", place.img);
  copy.querySelector("img").setAttribute("alt", place.name);
  //append it to main
  const elemParent = document.querySelector("main");
  elemParent.appendChild(copy);
}
