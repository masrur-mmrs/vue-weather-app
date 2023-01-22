<template>
  <div class="container">
    <transition name="growFadeIn">
      <div v-if="animated" class="location">
        <img
          id="location-icon"
          @click="changeLocation"
          src="../assets/icons/location.svg"
          alt="location icon"
        />
        <h6>{{ location }}</h6>
      </div>
    </transition>
    <transition name="growFadeIn">
      <div v-if="animated" class="icon">
        <img
          id="weather-icon"
          :src="require('../../public/icons' + weatherImg)"
          :alt="weather_descriptions"
        />
      </div>
    </transition>
    <transition name="growFadeIn">
      <div class="temperature" v-if="animated">
        <h1>{{ temperatureValue }}°C</h1>
      </div>
    </transition>
    <transition name="growFadeIn">
      <div class="description" v-if="animated">
        <p id="weather-description">{{ weatherDescription }}</p>
        <p id="date">{{ date }} {{ month }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: [
    "temperatureValue",
    "weatherDescription",
    "location",
    "isDay",
    "animatedState",
    "date",
    "monthNum",
  ],
  data() {
    return {
      month: null,
      monthInNum: this.monthNum,
    };
  },
  methods: {
    monthPicker() {
      switch (this.monthNum) {
        case "01":
          return (this.month = "January");
        case "02":
          return (this.month = "February");
        case "03":
          return (this.month = "March");
        case "04":
          return (this.month = "April");
        case "05":
          return (this.month = "May");
        case "06":
          return (this.month = "June");
        case "07":
          return (this.month = "July");
        case "08":
          return (this.month = "August");
        case "09":
          return (this.month = "September");
        case "10":
          return (this.month = "October");
        case "11":
          return (this.month = "November");
        case "12":
          return (this.month = "December");
        default:
          break;
      }
      console.log(this.month);
    },
    updateParentData() {
      this.$emit("updateAnimationState", this.animated);
    },
    changeLocation() {
      console.log("Clicked");
      this.$emit("changeLocation");
    },
  },
  computed: {
    weatherImg() {
      const temp = this.weatherDescription.toLowerCase();
      let resultImage = "35.png";
      console.log(this.is_day);

      if (this.is_day === "yes") {
        switch (temp) {
          //Basic
          case "clear sky":
            return (resultImage = "26.png");
          case "few clouds":
            return (resultImage = "27.png");
          case "scattered clouds":
            return (resultImage = "27.png");
          case "broken clouds":
            return (resultImage = "27.png");
          case "shower rain":
            return (resultImage = "8.png");
          case "rain":
            return (resultImage = "39.png");
          case "thunderstorm":
            return (resultImage = "17.png");
          case "mist":
            return (resultImage = "4.png");
          case "clear":
            return (resultImage = "26.png");
          case "light blowing widespread dust":
            return (resultImage = "4.png");
          case "sunny":
            return (resultImage = "26.png");
          case "overcast":
            return (resultImage = "4.png");
          case "partly cloudy":
            return (resultImage = "27.png");
          //Thunderstorm
          case "thunderstorm with light rain":
            return (resultImage = "16.png");
          case "thunderstorm with rain":
            return (resultImage = "17.png");
          case "thunderstorm with heavy rain":
            return (resultImage = "17.png");
          case "light thunderstorm":
            return (resultImage = "12.png");
          case "heavy thunderstorm":
            return (resultImage = "12.png");
          case "ragged thunderstorm":
            return (resultImage = "12.png");
          case "thunderstorm with light drizzle":
            return (resultImage = "17.png");
          case "thunderstorm with drizzle":
            return (resultImage = "17.png");
          case "thunderstorm with heavy drizzle":
            return (resultImage = "17.png");
          //Rain
          case "light rain":
            return (resultImage = "13.png");
          case "moderate rain":
            return (resultImage = "5.png");
          case "heavy intensity rain":
            return (resultImage = "7.png");
          case "very heavy rain":
            return (resultImage = "7.png");
          case "extreme rain":
            return (resultImage = "39.png");
          case "freezing rain":
            return (resultImage = "22.png");
          case "light intensity shower rain":
            return (resultImage = "5.png");
          case "light rain shower":
            return (resultImage = "5.png");
          case "heavy intensity shower rain":
            return (resultImage = "7.png");
          case "ragged shower rain":
            return (resultImage = "7.png");
          //dust storm
          case "dust storm":
            return (resultImage = "4.png");
          //Drizzle
          case "light intensity drizzle":
            return (resultImage = "5.png");
          case "drizzle":
            return (resultImage = "5.png");
          case "heavy intensity drizzle":
            return (resultImage = "5.png");
          case "light intensity drizzle rain":
            return (resultImage = "5.png");
          case "drizzle rain":
            return (resultImage = "7.png");
          case "heavy intensity drizzle rain":
            return (resultImage = "7.png");
          case "shower rain and drizzle":
            return (resultImage = "7.png");
          case "heavy shower rain and drizzle":
            return (resultImage = "7.png");
          case "shower drizzle":
            return (resultImage = "7.png");
          //Snow
          case "light snow":
            return (resultImage = "18.png");
          case "snow":
            return (resultImage = "36.png");
          case "heavy snow":
            return (resultImage = "36.png");
          case "sleet":
            return (resultImage = "23.png");
          case "light shower sleet":
            return (resultImage = "23.png");
          case "shower sleet":
            return (resultImage = "23.png");
          case "light rain and snow":
            return (resultImage = "22.png");
          case "rain and snow":
            return (resultImage = "22.png");
          case "light shower snow":
            return (resultImage = "22.png");
          case "shower snow":
            return (resultImage = "22.png");
          case "heavy shower snow":
            return (resultImage = "22.png");
          //Atmosphere
          case "smoke":
            return (resultImage = "6.png");
          case "haze":
            return (resultImage = "4.png");
          case "sand/ dust whirls":
            return (resultImage = "6.png");
          case "fog":
            return (resultImage = "4.png");
          case "sand":
            return (resultImage = "6.png");
          case "dust":
            return (resultImage = "6.png");
          case "volcanic ash":
            return (resultImage = "4.png");
          case "squalls":
            return (resultImage = "4.png");
          case "tornado":
            return (resultImage = "5.pngs");
          //default
          default:
            break;
        }
      } else {
        switch (temp) {
          case "clear sky":
            return (resultImage = "10.png");
          case "few clouds":
            return (resultImage = "14.png");
          case "scattered clouds":
            return (resultImage = "14.png");
          case "broken clouds":
            return (resultImage = "14.png");
          case "shower rain":
            return (resultImage = "8.png");
          case "rain":
            return (resultImage = "39.png");
          case "mist":
            return (resultImage = "4.png");
          case "clear":
            return (resultImage = "26.png");
          case "light blowing widespread dust":
            return (resultImage = "4.png");
          case "sunny":
            return (resultImage = "26.png");
          case "overcast":
            return (resultImage = "4.png");
          case "partly cloudy":
            return (resultImage = "27.png");
          //alternate
          case "light Blowing Widespread Dust":
            return (resultImage = "14.png");
          // thunderstorm
          case "thunderstorm with light rain":
            return (resultImage = "11.png");
          case "thunderstorm with rain":
            return (resultImage = "20.png");
          case "thunderstorm with heavy rain":
            return (resultImage = "20.png");
          case "light thunderstorm":
            return (resultImage = "12.png");
          case "thunderstorm":
            return (resultImage = "12.png");
          case "heavy thunderstorm":
            return (resultImage = "12.png");
          case "ragged thunderstorm":
            return (resultImage = "12.png");
          case "thunderstorm with light drizzle":
            return (resultImage = "17.png");
          case "thunderstorm with drizzle":
            return (resultImage = "17.png");
          case "thunderstorm with heavy drizzle":
            return (resultImage = "17.png");
          //Rain
          case "light rain":
            return (resultImage = "2.1.png");
          case "moderate rain":
            return (resultImage = "5.png");
          case "heavy intensity rain":
            return (resultImage = "7.png");
          case "very heavy rain":
            return (resultImage = "7.png");
          case "extreme rain":
            return (resultImage = "39.png");
          case "freezing rain":
            return (resultImage = "22.png");
          case "light intensity shower rain":
            return (resultImage = "5.png");
          case "light rain shower":
            return (resultImage = "5.png");
          case "heavy intensity shower rain":
            return (resultImage = "7.png");
          case "ragged shower rain":
            return (resultImage = "7.png");
          //Drizzle
          case "light intensity drizzle":
            return (resultImage = "5.png");
          case "drizzle":
            return (resultImage = "5.png");
          case "heavy intensity drizzle":
            return (resultImage = "5.png");
          case "light intensity drizzle rain":
            return (resultImage = "5.png");
          case "drizzle rain":
            return (resultImage = "7.png");
          case "heavy intensity drizzle rain":
            return (resultImage = "7.png");
          case "shower rain and drizzle":
            return (resultImage = "7.png");
          case "heavy shower rain and drizzle":
            return (resultImage = "7.png");
          case "shower drizzle":
            return (resultImage = "7.png");
          //dust storm
          case "dust storm":
            return (resultImage = "2.2.png");
          //Snow
          case "light snow":
            return (resultImage = "18.png");
          case "snow":
            return (resultImage = "36.png");
          case "heavy snow":
            return (resultImage = "36.png");
          case "sleet":
            return (resultImage = "23.png");
          case "light shower sleet":
            return (resultImage = "23.png");
          case "shower sleet":
            return (resultImage = "23.png");
          case "light rain and snow":
            return (resultImage = "22.png");
          case "rain and snow":
            return (resultImage = "22.png");
          case "light shower snow":
            return (resultImage = "22.png");
          case "shower snow":
            return (resultImage = "22.png");
          case "heavy shower snow":
            return (resultImage = "22.png");
          //Atmosphere
          case "smoke":
            return (resultImage = "2.2.png");
          case "haze":
            return (resultImage = "2.2.png");
          case "sand/ dust whirls":
            return (resultImage = "9.png");
          case "fog":
            return (resultImage = "2.2.png");
          case "sand":
            return (resultImage = "9.png");
          case "dust":
            return (resultImage = "9.png");
          case "volcanic ash":
            return (resultImage = "9.png");
          case "squalls":
            return (resultImage = "9.png");
          case "tornado":
            return (resultImage = "5.pngs");
          // default
          default:
            break;
        }
      }
      return resultImage;
    },
    animated() {
      return this.animatedState;
    },
    weather_descriptions() {
      return this.weatherDescription;
    },
    is_day() {
      return this.isDay;
    },
  },
  beforeUpdate: function () {
    this.monthPicker();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 100vw;
  min-height: 75vh;
  background: linear-gradient(0deg, #1265f3 0%, #33b4fc 100%);
  background: -moz-linear-gradient(0deg, #1265f3 0%, #33b4fc 100%);
  background: -webkit-linear-gradient(0deg, #1265f3 0%, #33b4fc 100%);
  border-radius: 0px 0px 25px 25px;
  box-shadow: 0px 15px 15px #073e8d;
}
.location {
  display: flex;
  flex-direction: row;
  height: 3rem;
  margin-top: 1rem;
  align-items: center;
}
.icon {
  display: flex;
  align-items: center;
}

.description {
  text-align: center;
}
.growFadeIn-enter-active {
  animation: ease-out growFadeIn 0.65s;
  -webkit-animation: ease-out growFadeIn 0.65s;
  -moz-animation: ease-out growFadeIn 0.65s;
  -o-animation: ease-out growFadeIn 0.65s;
  -ms-animation: ease-out growFadeIn 0.65s;
}
#date {
  margin-top: 0%;
  text-align: center;
}
#weather-icon {
  max-height: 15rem;
  max-width: 15rem;
  animation: float 1.5s ease-in-out infinite;
}
#weather-description {
  margin-bottom: 0%;
}
#location-icon {
  align-items: center;
  filter: invert(1);
  margin-right: 1rem;
  border-radius: 1rem;
  height: 2rem;
  width: 2rem;
  -webkit-animation: glowing 1500ms infinite;
  -moz-animation: glowing 1500ms infinite;
  -o-animation: glowing 1500ms infinite;
  animation: glowing 1500ms infinite;
}
@keyframes growFadeIn {
  0% {
    transform: scale(0.75);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@-moz-keyframes growFadeIn {
  0% {
    transform: scale(0.75);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@-webkit-keyframes growFadeIn {
  0% {
    transform: scale(0.75);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@-o-keyframes growFadeIn {
  0% {
    transform: scale(0.75);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@-ms-keyframes growFadeIn {
  0% {
    transform: scale(0.75);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
}

@-webkit-keyframes glowing {
  0% {
    background-color: #b20000;
    -webkit-box-shadow: 0 0 3px #b20000;
  }
  50% {
    background-color: #ff0000;
    -webkit-box-shadow: 0 0 40px #ff0000;
  }
  100% {
    background-color: #b20000;
    -webkit-box-shadow: 0 0 3px #b20000;
  }
}

@-moz-keyframes glowing {
  0% {
    background-color: #b20000;
    -moz-box-shadow: 0 0 3px #b20000;
  }
  50% {
    background-color: #ff0000;
    -moz-box-shadow: 0 0 40px #ff0000;
  }
  100% {
    background-color: #b20000;
    -moz-box-shadow: 0 0 3px #b20000;
  }
}

@-o-keyframes glowing {
  0% {
    background-color: #b20000;
    box-shadow: 0 0 3px #b20000;
  }
  50% {
    background-color: #ff0000;
    box-shadow: 0 0 40px #ff0000;
  }
  100% {
    background-color: #b20000;
    box-shadow: 0 0 3px #b20000;
  }
}

@keyframes glowing {
  0% {
    background-color: #b20000;
    box-shadow: 0 0 3px #b20000;
  }
  50% {
    background-color: #ff0000;
    box-shadow: 0 0 40px #ff0000;
  }
  100% {
    background-color: #b20000;
    box-shadow: 0 0 3px #b20000;
  }
}
</style>
