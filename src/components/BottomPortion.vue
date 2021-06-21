<template>
  <div class="container">
    <transition name="slideFadeIn">
      <div class="wind-details" v-if="animated">
        <img class="icon" src="../assets/icons/wind-icon.png" alt="wind icon" />
        <p class="title">{{ windSpeed }}km/h</p>
        <p class="subtitle">Wind</p>
      </div>
    </transition>
    <transition name="slideFadeIn">
      <div class="humidity" v-if="animated">
        <img
          class="icon"
          src="../assets/icons/humidity.png"
          alt="humidity icon"
        />
        <p class="title">{{ humidity }}%</p>
        <p class="subtitle">Humidity</p>
      </div>
    </transition>
    <transition name="slideFadeIn">
      <div class="precip" v-if="animated">
        <img
          class="icon"
          src="../assets/icons/pressure.png"
          alt="pressure icon"
        />
        <p class="title">{{ pressure }}hPa</p>
        <p class="subtitle">Precipitation</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["windSpeed", "humidity", "pressure", "animatedState"],
  methods: {
    updateParentData() {
      this.$emit("updateAnimationState", this.animated);
    },
  },
  computed: {
    animated() {
      return this.animatedState;
    },
  },
};
</script>

<style scoped>
image {
  margin: 0%;
}
.container {
  min-width: 100vw;
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.wind-details {
  text-align: center;
  animation: ease-out slideFadeIn 0.65s;
  -webkit-animation: ease-out slideFadeIn 0.65s;
  -moz-animation: ease-out slideFadeIn 0.65s;
  -o-animation: ease-out slideFadeIn 0.65s;
  -ms-animation: ease-out slideFadeIn 0.65s;
}
.humidity {
  text-align: center;
  animation: ease-out slideFadeIn 0.65s;
  -webkit-animation: ease-out slideFadeIn 0.65s;
  -moz-animation: ease-out slideFadeIn 0.65s;
  -o-animation: ease-out slideFadeIn 0.65s;
  -ms-animation: ease-out slideFadeIn 0.65s;
}
.precip {
  text-align: center;
  animation: ease-out slideFadeIn 0.65s;
  -webkit-animation: ease-out slideFadeIn 0.65s;
  -moz-animation: ease-out slideFadeIn 0.65s;
  -o-animation: ease-out slideFadeIn 0.65s;
  -ms-animation: ease-out slideFadeIn 0.65s;
}
.subtitle {
  color: #95a5a6;
  margin-top: 0%;
}
.title {
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 0%;
  margin-top: 0%;
}
.icon {
  filter: invert(0.7);
  height: 1.5rem;
  margin: 0%;
}
.slideFadeIn-enter-active {
  animation: ease-out slideFadeIn 0.65s;
  -webkit-animation: ease-out slideFadeIn 0.65s;
  -moz-animation: ease-out slideFadeIn 0.65s;
  -o-animation: ease-out slideFadeIn 0.65s;
  -ms-animation: ease-out slideFadeIn 0.65s;
}
@keyframes slideFadeIn {
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
}
</style>
