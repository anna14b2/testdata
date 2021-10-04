const urlParams = new URLSearchParams(window.location.search);
const spirit = urlParams.get("location");
console.log(location);

const url = `https://kea2semester-c983.restdb.io/rest/iceland?q={"location" : {"$in" : ["${location}"]}}`;
console.log(url);

const options = {
  headers: {
    "x-apikey": "615322a8dfa7346e2f96912a",
  },
};

// .catch((err) => {
//     console.error(err);
//   });

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    // we have the data
    getIcelandPlaces(data);
  })
  .catch((e) => {
    // Something went wrong
    console.error("An error occured:", e.message);
  });

function getIcelandPlaces(place) {
  place.forEach(showPlace);
}

function showPlace(place) {
  console.log(place);
  //create templates
  const template = document.querySelector(".places_template").content;
  // clone the template
  const copy = template.cloneNode(true);
  // make the place page match the place we are gonna click
  //   copy.querySelector("a").setAttribute("href", "list.html?iceland=" + iceland.Name);
  //   console.log(iceland.Name);
  //change dynamic data
  document.querySelector("h2").textContent = iceland.name;
  copy.querySelector("img").setAttribute("src", img);
  copy.querySelector("img").setAttribute("alt", iceland.Name);
  //append it to main
  const elemParent = document.querySelector("main");
  elemParent.appendChild(copy);
}
