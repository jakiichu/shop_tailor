<template>
  <ul class="navbar-nav d-flex"  v-if="isAuth">
    <li class="nav-item">
      <router-link class="nav-link" to="/profile">Личный кабинет</router-link>
    </li>
    <li class="nav-item">
      <a class="nav-link" style="cursor: pointer" @click="logout">Выход</a>
    </li>
  </ul>
  <ul class="navbar-nav d-flex" v-else>
    <li class="nav-item">
      <router-link class="nav-link" to="/registration">Регистрация</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/login">Авторизация</router-link>
    </li>
  </ul>
</template>

<script>
import Store from "@/store";

export default {

  name: "login",
  data() {
    return {
      isAuth: false
    }

  },
  async beforeCreate() {
    setTimeout(() => this.getCookie(), 200);
  },
  async updated() {
    setTimeout(() => this.getCookie(), 200);
  },
  methods:{
    async logout(){
      Store.state.deleteCookie('token')
      this.isAuth = false
    },
    getCookie(){
      if (Store.state.getCookie('token')){
        this.isAuth = true
        console.log(Store.state.getCookie('token'))

      }
      else {
        this.isAuth = false

      }
    }
  }
}
</script>

<style scoped>

</style>