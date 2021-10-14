<template>
  <div class="home">
    <div>This is for the Video</div>
    <div class="img-container">
      <div class="current-event">
        <img id="event" src="../assets/EECE_Colloq.png" />
        <div class="event-container">
          <h1>{{ mainEventFromStore.title }}</h1>
          <p>
            {{ mainEventFromStore.description }}
          </p>
          <div class="event-date">
            <p>Deadline of Pre-Registration:</p>
            <p v-if="mainEventFromStore.deadline">
              <!-- method doesnt exist on null or undefined, 
              the initial calling of the states are empty i.e. {}.
              so v-if will check if it has loaded
               -->
              {{ months[mainEventFromStore.deadline.getMonth()] }}
              {{ mainEventFromStore.deadline.getDate() }},
              {{ mainEventFromStore.deadline.getFullYear() }}
            </p>
          </div>
          <div class="event-button">GO TO EVENT</div>
        </div>
      </div>
    </div>
    <div id="footer-image"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  computed: {
    mainEventFromStore() {
      return this.$store.getters.getMainEvent;
    },
    months() {
      return [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    },
  },
  mounted() {
    this.$store.dispatch("obtainMainEvent");
  },
};
</script>

<style lang="scss">
html,
body {
  max-width: 100%;
  overflow-x: hidden;
}
h1 {
  color: white;
  font-size: 50px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  line-height: 57.45px;
  letter-spacing: -1.5%;
}

p {
  color: white;
  font-size: 16px;
  letter-spacing: -1.5%;
  line-height: 20px;
  font-family: "Ubuntu", sans-serif;
}

.home {
  .img-container {
    padding: 130px 0;
    position: relative;
    background-image: url("../assets/Mapua.png");
    min-height: 964px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .current-event {
      left: 0;
      right: 0;
      text-align: center;
      background: rgba(0, 0, 0, 0.486);
      display: flex;
      justify-content: space-around;
      padding-left: 15vw;
      padding-right: 15vw;
      @media only screen and (max-width: 1500px) {
        padding-left: 0;
        padding-right: 0;
      }
      @media only screen and (max-width: 700px) {
        flex-direction: column;
      }

      #event {
        height: 100%;
        display: block;
        margin: auto;
        @media only screen and (max-width: 700px) {
          width: 40%;
          margin-top: 20px;
        }
      }
      .event-container {
        text-align: left;
        padding: 30px;
        width: 60vw;
        @media only screen and (max-width: 700px) {
          width: 100%;
        }
        .event-date {
          border-left: 4px solid white;
          padding-left: 13px;
        }
        .event-button {
          color: white;
          padding: 10px;
          background: #24315e;
          border-radius: 13px;
          width: 170px;
          text-align: center;
        }
      }
    }
  }
  #footer-image {
    background-image: url("../assets/Flag.png");
    // background-color: green;
    height: 154px;
    background-size: 100% 154px;
    background-repeat: no-repeat;
    background-position: center center;
    // margin-bottom: -91px;
    margin-top: -130px;
    position: absolute;
    // right: 0;
    // left: 0;
    // bottom: 0;
    opacity: 0.95;
    mix-blend-mode: darken;
    object-fit: fill;
    width: 100%;
  }
}
</style>
