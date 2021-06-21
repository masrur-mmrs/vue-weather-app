//TODO: // 1. change isInputValid value // 2. change method call // 3. change
animated value
<template>
  <div class="scroll-container night">
    <div class="scroll-area">
      <top-portion
        :temperature-value="temperature"
        :weather-description="weatherDescription"
        :location="name"
        :is-day="is_day"
        :date="date"
        :month-num="month"
        :animated-state="animated"
      ></top-portion>
      <base-dialog v-if="inputIsInvalid === true" @close="locationEntered">
      </base-dialog>
      <bottom-portion
        :wind-speed="windSpeed"
        :humidity="humidity"
        :pressure="pressure"
        :animated-state="animated"
      ></bottom-portion>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      inputIsInvalid: true,
      weatherDescription: "haze",
      temperature: "",
      windSpeed: "",
      humidity: "",
      pressure: "",
      date: "",
      month: "",
      location: "",
      name: "",
      sunset: null,
      dt: null,
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
  computed: {
    is_day() {
      console.log(this.dt);
      console.log(this.sunset);
      console.log(this.dt > this.sunset);

      return this.dt > this.sunset ? "no" : "yes";
    },
  },
  methods: {
    forecast() {
      const thisRef = this;
      const URL =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        thisRef.location +
        "&APPID=48644d9725e33dad3a0c4d70795f6619&units=metric";
      axios
        .get(URL)
        .then((res) => {
          console.log("description: " + res.data.weather[0].description);
          thisRef.weatherDescription = res.data.weather[0].description;
          thisRef.temperature = Math.trunc(res.data.main.temp);
          thisRef.windSpeed = res.data.wind.speed;
          thisRef.humidity = res.data.main.humidity;
          thisRef.pressure = res.data.main.pressure;
          thisRef.sunset = res.data.sys.sunset;
          thisRef.name = res.data.name;
          thisRef.dt = res.data.dt;
        })
        .catch((err) => {
          console.error(err);
        });
      var today = new Date();
      this.date = String(today.getDate()).padStart(2, "0");
      this.month = String(today.getMonth() + 1).padStart(2, "0");
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
