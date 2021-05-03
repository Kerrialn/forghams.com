<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <div class="forgahms">Forghams</div>
        <div class="cuisine">cuisine</div>
      </router-link>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="bi bi-list fs-3"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              tag="a"
              class="nav-link"
              active-class="active"
              :to="{ name: 'Services' }"
              >Services</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              tag="a"
              class="nav-link"
              active-class="active"
              :to="{ name: 'About' }"
              >About</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style scoped>
.navbar-brand div {
  line-height: 1;
}

.forgahms {
  font-weight: bold;
}
.cuisine {
  font-size: 16px;
}
</style>
