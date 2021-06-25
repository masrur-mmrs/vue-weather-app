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
        @change-location="changeLocation"
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
      inputIsInvalid: true,
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
    changeLocation() {
      this.animated = false;
      this.inputIsInvalid = true;
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
