var btn = document.getElementById("my-btn");
var container = document.querySelector(".data");
let inp = document.getElementById("search-box");

inp.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    btn.click();
  }
});

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let countryName = inp.value;

  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((response) => response.json())
    .then((data) => {
      let myImg = document.getElementById("img");
      myImg.src = data[0].flags.png;
      //   container.prepend(myImg);

      let countryFullName = document.querySelector(".country-name");
      countryFullName.innerHTML = data[0].altSpellings[1];

      let continent = document.querySelector(".continent");
      continent.innerHTML = data[0].continents;

      let capital = document.querySelector(".capital");
      capital.innerHTML = data[0].capital;

      let population = document.querySelector(".population");
      population.innerHTML = data[0].population;

      console.log(data);
      console.log(data[0].flags.png);
    });
});
