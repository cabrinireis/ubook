<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <b-button @click="clickMe">Click Me</b-button></router-link
      >
      |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    clickMe() {
      console.log(this.$buefy);
      this.$buefy.notification.open("Clicked!!");
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
