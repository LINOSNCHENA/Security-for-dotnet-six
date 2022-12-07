<template>
  <div
    class="container mx-auto flex-col text-center w-full shadow flex items-center bg-gray-300 mt-10"
  >
    <h1 class="text-black font-bold m-3">REGISTER</h1>
    <!-- <div class="p-10 m-10 flex w-full max-w-xs shadow"> -->
    <label class="font-bold text-black texxt-sm">UserName:</label>
    <input
      v-model="userName"
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
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      password: '',

      users: [],
    }
  },
  methods: {
    register() {
      this.$axios
        .post('/api/login', {
          userName: this.userName,
          password: this.password,
        })
        .then((res, err) => {
          if (res.data) {
            localStorage.setItem('authToken', res.data.token)
            console.log(res.data)
          } else {
            console.log(err)
          }
          this.userName = ''
          this.password = ''
        })
    },
  },
}
</script>
