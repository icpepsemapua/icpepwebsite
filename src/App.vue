<template>
  <div id="nav">
    <div class="org__container">
      <img class="logo" src="./assets/logo.svg" />
      <p class="name">ICPEP.SE - Mapúa</p>
    </div>
    <div class="router__container">
      <div class="router__buttons">
        <router-link class="router__button" to="/">Home</router-link>
        <router-link class="router__button" to="/about">About</router-link>
        <router-link class="router__button" to="/news">News</router-link>
        <router-link class="router__button" to="/team">Team</router-link>
        <router-link class="router__button" to="/events">Events</router-link>
      </div>
    </div>
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
    homeClicked(e) {
      this.$emit(e, "hello");
    },
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
  watch: {
    $route(to, from) {
      console.log("to, ", JSON.stringify({ to, from }));
      switch (to.path) {
        default: {
          document.body.className = (to.path || "").replace("/", "");
        }
      }
    },
  },
};
</script>
<style lang="scss">
@import "./scaffolding/sass/main.scss";

body {
  &.about {
    background-color: #fffcf3;
  }
  &.news {
    background-color: #364d9b;
  }
  &.team {
    background-color: #f7e9a0;
  }
  &.events {
    background-color: #bcc9f8;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.56);
  padding: 10px 25px;
  display: grid;
  grid-template-columns: 298px 1fr;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr 3fr;
  }
  align-content: center;
  .org__container {
    margin-right: 30px;
    display: flex;
    align-items: center;
    .logo {
      width: 70px;
      height: 70px;
      margin: 0 auto;
    }
    .name {
      font-family: "Ubuntu", sans-serif;
      font-size: 24px;
      color: rgb(255, 255, 255);
      margin-left: 10px;
      @media only screen and (max-width: 900px) {
        display: none;
      }
    }
  }
  .router__container {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: right;
    .router__buttons {
      max-width: 600px;
      display: flex;
      justify-content: space-around;
      flex: 1;
      a {
        font-size: 24px;
        color: #c8bcbc;
        font-weight: bold;
        margin: 10px;
        transition: 0.5s;
        &.router-link-exact-active {
          color: #ffffff;
          font-weight: bold;
          text-decoration: underline;
          transition: 0.5s;
        }
      }
      :hover {
        color: #ffffff;
        text-decoration: none;
      }
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
