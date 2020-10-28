<template>
  <div id="app">
    <nav-menu id="nav-menu"/>
    <router-view id="app-page"/>
    <app-footer id="app-footer"/>
  </div>
</template>

<script>
import NavMenu from "@/components/common/NavMenu";
import AppFooter from "@/components/common/AppFooter";

export default {
  components: {
    NavMenu,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-areas: "navigation" "content" "footer";
  grid-template-rows: max-content auto max-content;
  height: 96vh;
}

#nav-menu{
  grid-area: navigation;
}

#app-page{
  grid-area: content;
}

#app-footer{
  grid-area: footer;
}
</style>
