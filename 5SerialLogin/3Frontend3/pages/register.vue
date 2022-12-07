<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Register!</h2>

          <div
            class="container mx-auto flex-col text-center w-full shadow flex items-center bg-gray-300 mt-10"
          >
            <h1 class="text-black font-bold m-3">REGISTER</h1>
            <!-- <div class="p-10 m-10 flex w-full max-w-xs shadow"> -->
            <label class="font-bold text-black texxt-sm">UserName:</label>
            <input
              v-model="username"
              class="w-8/12 border h-8 p-2"
              type="text"
              placeholder="Enter your Username"
            />
            <label class="font-bold text-black texxt-sm">Email:</label>
            <input
              v-model="email"
              class="w-8/12 border h-8 p-2"
              type="text"
              placeholder="Enter your Username"
            />
            <label class="font-bold text-black texxt-sm">Password:</label>
            <input
              v-model="password"
              class="w-8/12 border h-8 p-2"
              type="password"
              placeholder="Enter your Password"
            />

            <button class="w-4/12 bg-blue-400 text-white" @click="register">
              Register
            </button>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Notification from '~/components/Notification'

export default {
  //   components: {
  //     Notification,
  //   },

  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: null,
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('register', {
          username: this.username,
          email: this.email,
          password: this.password,
        })

        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>
