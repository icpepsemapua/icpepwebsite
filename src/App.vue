<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/news">News</router-link> |
    <router-link to="/team">Team</router-link> |
    <router-link to="/events">Events</router-link>
  </div>
  <router-view />
  <div class="footer">
    <img class="footer__icons" src="./assets/discord.svg" />
    <img
      class="footer__icons"
      src="./assets/facebook.svg"
      @click="linkToWeb('fb')"
    />
    <img class="footer__icons" src="./assets/gmail.svg" />
    <img
      class="footer__icons"
      src="./assets/instagram.svg"
      @click="linkToWeb('inst')"
    />
    <img
      class="footer__icons"
      src="./assets/twitter.svg"
      @click="linkToWeb('twtr')"
    />
    <img class="footer__icons" src="./assets/message.svg" />
  </div>
</template>

<script>
export default {
  methods: {
    linkToWeb(link) {
      switch (link) {
        case "fb":
          window.open("https://www.facebook.com/ICpEPseMapua");
          break;
        case "twtr":
          window.open("https://twitter.com/icpepsemapua");
          break;
        case "inst":
          window.open("https://www.instagram.com/icpepsemapua/?hl=en");
          break;
        default:
      }
    },
  },
};
</script>

<style lang="scss">
@import "./scaffolding/sass/main.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.footer {
  height: 370px;
  background: #555555;
  &__icons {
    padding: 25px;
    padding-top: 40px;
    transition: transform 0.1s;
  }
  &__icons:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
}
</style>
