<template>
  <teleport to="body">
    <div>
      <div></div>
      <dialog open>
        <header>
          <h2>Enter Location</h2>
        </header>
        <section id="input-section">
          <input type="text" class="css-input" v-model="location" />
        </section>
        <menu>
          <base-button @click="submitLocation">Enter</base-button>
        </menu>
      </dialog>
    </div>
  </teleport>
</template>

<script>
export default {
  emits: ["close"],
  data() {
    return {
      location: "",
    };
  },
  methods: {
    submitLocation: function() {
      this.$emit("close", this.location);
    },
  },
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
section {
  background-color: whitesmoke;
}
.css-input {
  padding: 5px;
  font-size: 16px;
  border-width: 1px;
  border-color: #cccccc;
  background-color: #ffffff;
  color: #000000;
  border-style: solid;
  border-radius: 50px;
  box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
}
.css-input:focus {
  outline: none;
}
dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
}
header {
  background-color: #32b3fc;
  color: whitesmoke;
  width: 100%;
  padding: 1rem;
}
header h2 {
  margin: 0;
}
section {
  padding: 1rem;
}
menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  background-color: whitesmoke;
}
@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
#input-section {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
