//TODO: // 1. change isInputValid value // 2. change method call // 3. change
animated value
<template>
  <div class="scroll-container night">
    <div class="scroll-area">
      <top-portion
        :temperature-value="body.current.temperature"
        :weather-description="weatherDescription"
        :location="body.location.name"
        :is-day="body.current.is_day"
        :local-time="body.location.localtime"
        :animated-state="animated"
      ></top-portion>
      <base-dialog v-if="inputIsInvalid === true" @close="locationEntered">
      </base-dialog>
      <bottom-portion
        :wind-speed="body.current.wind_speed"
        :humidity="body.current.humidity"
        :precip="body.current.precip"
        :animated-state="animated"
      ></bottom-portion>
    </div>
  </div>
</template>

<script>
// const request = require("request");
const axios = require("axios");

export default {
  data() {
    return {
      inputIsInvalid: true,
      weatherDescription: "haze",
      location: "",
      animated: false,
      body: {
        request: {
          type: "City",
          query: "Dhaka, Bangladesh",
          language: "en",
          unit: "m",
        },
        location: {
          name: "Dhaka",
          country: "Bangladesh",
          region: "",
          lat: "23.723",
          lon: "90.409",
          timezone_id: "Asia/Dhaka",
          localtime: "2021-06-03 14:27",
          localtime_epoch: 1622730420,
          utc_offset: "6.0",
        },
        current: {
          observation_time: "08:27 AM",
          temperature: 35,
          weather_code: 116,
          weather_icons: [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png",
          ],
          weather_descriptions: ["Partly cloudy"],
          wind_speed: 12,
          wind_degree: 199,
          wind_dir: "SSW",
          pressure: 1007,
          precip: 0,
          humidity: 53,
          cloudcover: 47,
          feelslike: 41,
          uv_index: 8,
          visibility: 10,
          is_day: "no",
        },
      },
    };
  },
  methods: {
    forecast() {
      const options = {
        method: "GET",
        url: "https://community-open-weather-map.p.rapidapi.com/weather",
        params: {
          q: "Dhaka",
          lat: "0",
          lon: "0",
          // callback: "test",
          id: "2172797",
          lang: "null",
          units: "metric",
        },
        headers: {
          "x-rapidapi-key":
            "8310eaa8b9msh6248ac934a9c125p113f23jsnabc21cd45808",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      };
      const thisRef = this;
      axios
        .request(options)
        .then(function(response) {
          console.log("description: " + response.data.weather[0].description);
          thisRef.weatherDescription = response.data.weather[0].description;
        })
        .catch(function(error) {
          console.error(error);
        });

      // alternate keys: 83aaa47d16cf0be5067a751b7f98fb25
      // 7804e5b26265f4c75b1588a89faf4542

      const url =
        "http://api.weatherstack.com/current?access_key=83aaa47d16cf0be5067a751b7f98fb25&query=" +
        this.location +
        "&units=m";
      axios
        .get(url, { json: true })
        .then((res) => {
          console.log(res);
          thisRef.body = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
      //api call with request
      // console.log(url);
      // request({ url, json: true }, (error, { body }) => {
      //   if (error) {
      //     callback("Unable to connect to weather service!", undefined);
      //   } else if (body.error) {
      //     //   callback("Unable to find location", undefined);
      //   } else {
      //     this.body = body;
      //     console.log(this.body);

      //     // callback(undefined, this.res);
      //   }
      // });
    },
    locationEntered(value) {
      this.location = value.replace(/\s+/g, "%20");
      console.log(this.location);
      this.forecast();
      this.animated = true;
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style>
body {
  font-family: "Varela Round";
  margin: 0;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  scroll-snap-align: start;
}

.day {
  background-color: #d1d8ec;
}
.night {
  background-color: #000918;
  color: aliceblue;
}
h1 {
  font-family: "Varela Round";
  font-size: 90px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 26.4px;
}
h2 {
  margin: 30px 0;
}
h3 {
  font-family: "Varela Round";
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 15.4px;
}
h6 {
  margin: 0%;
}
p {
  font-family: "Varela Round";
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 20px;
}
blockquote {
  font-family: "Varela Round";
  font-size: 21px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 30px;
}
pre {
  font-family: "Varela Round";
  font-size: 13px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 18.5714px;
}
#title {
  padding-left: 1rem;
}
.scroll-container,
.scroll-area {
  max-width: 100vw;
  height: 100vh;
  font-size: 60px;
}

.scroll-container {
  overflow: auto;
  scroll-snap-type: y mandatory;
}

.scroll-area {
  scroll-snap-align: start;
}

.scroll-container,
.scroll-area {
  margin: 0 auto;
}

.scroll-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
