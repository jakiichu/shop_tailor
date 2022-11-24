<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">главная</router-link>
          </li>
        </ul>
        <login/>
      </div>
    </div>
  </nav>
</template>

<script>
import Store from "@/store";
import login from "@/components/login";

export default {
  components: {
    login
  },
  name: "NavBar",

}
</script>

<style scoped>

</style>