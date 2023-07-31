let container = document.querySelector(".data");
let inp = document.getElementById("search-box");
let form = document.querySelector("form");

form.onsubmit = (e) => {
  e.preventDefault();
  let countryName = inp.value;
  fetchData(countryName);
  inp.value = "";
}

const fetchData = async (countryName) => {
  if (countryName === "israel") {
    countryName = "palestine";
  }

  try {
    let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
    let data = await response.json();
    console.log(data);
    viewData(data);
  } catch(err) {
    throw new Error(err);
  }
}

const viewData = (data) => {
  let myImg = document.getElementById("img");
  myImg.src = data[0].flags.png;

  let countryFullName = document.querySelector(".country-name");
  countryFullName.innerHTML = data[0].altSpellings[data[0].altSpellings.length - 1]; // last name in the API is the valid  one

  let continent = document.querySelector(".continent");
  continent.innerHTML = data[0].continents;

  let capital = document.querySelector(".capital");
  capital.innerHTML = data[0].capital;

  let population = document.querySelector(".population");
  population.innerHTML = data[0].population;

  console.log(data);
  console.log(data[0].flags.png);
}