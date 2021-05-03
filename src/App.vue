<template>
  <div id="app">
    <navbar />

    <router-view class="min" />

    <div class="container">
      <div class="row">
        <div class="text-center small text-muted mt-5">forghams.com ©</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Navbar from "./components/Navbar.vue"

export default {
  name: "App",
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters({
      isLoading: "getLoading",
    }),
  },
}
</script>

<style>
#app {
  font-family: "Heebo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f8f9fa;
}

.min {
  min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.card {
  border: 0 !important;
}

.card-header {
  background-color: #ffffff;
  border-bottom: 1px solid;
  border-color: #f8f9fa;
}

.form-control {
  border: 0;
  outline: 0;
  box-shadow: none;
}

.form-control:focus {
  border: 0;
  outline: 0;
  box-shadow: none;
}
</style>
