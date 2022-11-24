<template>

  <div class="card align-items-center p-3 "
       style="width: 25rem;position: absolute;top: 50%;left: 50%;-moz-transform: translateX(-50%) translateY(-50%);-webkit-transform: translateX(-50%) translateY(-50%);transform: translateX(-50%) translateY(-50%);">
    <form>
      <div class="mb-3">
        <label for="form1" class="form-label">Email</label>
        <input type="text" class="form-control" id="form1" autocomplete="off" v-model="auth.email"
               placeholder="example@epm.com">
        <div id="emailHelp" class="form-text">Email должен быть уникальным.</div>
      </div>
      <div class="mb-3">
        <label autocomplete="off" for="form2" class="form-label">Пароль</label>
        <input type="password" class="form-control" id="form2" v-model="auth.password" placeholder="password">
      </div>
      <div class="mb-3 form-check">
        <router-link v-if="direction" to="/login">Уже зарегестрированны?</router-link>
        <router-link v-else to="/registration">Еще не зарегестрированны?</router-link>
      </div>

      <p @click="registration" v-if="direction" class="btn btn-primary">Зарегистрироваться</p>
      <p @click="login" v-else class="btn btn-primary">Авторизироваться</p>
    </form>
  </div>
</template>

<script>
import Store from "@/store";
import axios from "axios";
import router from "@/router/router";
import {useRouter} from "vue-router";

export default {
  name: "auth",
  data() {
    return {
      auth: {email: '', password: ''},
      response: '',
      direction: '',
    }
  },
  methods: {

    async registration() {
      this.response = await axios.post("http://localhost:5000/api/user/registration", this.auth)
      Store.state.setCookie('token', this.response.data.token)
      // this.getCookie('token')
      Store.state.setAuth(true)
      await router.push('/')

    },
    async login() {
      this.response = await axios.post("http://localhost:5000/api/user/login", this.auth)
      Store.state.setCookie('token', this.response.data.token)
      // this.getCookie('token')
      Store.state.setAuth(true)
      await router.push('/')

    },


  },
  updated() {
    if (useRouter().currentRoute.value.href == '/registration') {
      this.direction = true
    } else {
      this.direction = false
    }
  }
}

</script>

<style scoped>

</style>