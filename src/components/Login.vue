<template>
    <div>
      <button @click="login">点击登录</button>
    </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login: function () {
      this.$router.push({
        path: '/index'
      })
    }
  }
}
</script>

<style scoped>

</style>
