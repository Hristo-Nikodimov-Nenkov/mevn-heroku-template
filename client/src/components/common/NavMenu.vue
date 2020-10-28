<template>
  <nav>
    <div v-for="(link, index) in links" :key="index">
      <router-link :to="link.url">{{ link.text }}</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      links: [
        {
          text: "Home",
          url: "/"
        },
        {
          text: "About",
          url: "/about"
        }
      ]
    }
  }
}
</script>

<style scoped>
nav {
  background-color: #cccccc;
  padding: 5px 15px;
}

nav a {
  font-weight: bold;
  font-size: large;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@media screen and (max-width: 500px) {
  nav {
    display: flex;
    flex-direction: column;
    align-content: space-between;
  }
}

@media screen and (min-width: 501px) {
  nav {
    display: flex;
    justify-content: space-around;
    background-color: #cccccc;
    padding: 5px 15px;
  }
}
</style>
