const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const inpVal = document.querySelector("#search").value;
  //   const cityName =
  //   console.log(inpVal);

  //   my API key = 41f487404c8b6986c47917c1a510d838
  // url = https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=41f487404c8b6986c47917c1a510d838

  const APIKEY = "41f487404c8b6986c47917c1a510d838";
  const city = inpVal;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

  fetch(url).then((res) => {
    res.json().then((data) => {
      //   console.log(data);
      //   console.log(data.cod);
      if (data.cod === "404") {
        alert("city not found");
      }
      const kelwin = data.main.temp;
      const celsius = Math.round(kelwin - 273.15);

      document.querySelector("#cityName").innerHTML = data.name;
      document.querySelector("#temp").innerHTML = celsius + "°C";
      document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
      document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";
    });
  });
});
