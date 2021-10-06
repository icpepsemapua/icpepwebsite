<template>
  <div class="team">
    <div class="home-team-wrapper">
      <div class="home-team">
        <div class="dots">
          <div class="dots__circle dots__circle--red"></div>
          <div class="dots__circle dots__circle--green"></div>
          <div class="dots__circle dots__circle--yellow"></div>
        </div>
        <div class="board">
          <img
            class="profile-circle"
            src="../../public/participants/Yang.png"
          />
          <div class="profile-detail">
            <div class="detail-name">Thea Denisse C. Foronda</div>
            <div class="detail-title">WEB DEVELOPERS TEAM LEADER</div>
            <div class="details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vulputate vestibulum ante vitae tristique. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Duis tempor libero.
            </div>
            <div class="button-wrapper">
              <button class="to-officers">ICpEP.SE Officers</button>
              <button class="to-dev-team">Web Developers</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="second-container">
      <div class="art-used">
        <img src="../assets/ArtUsedText.svg" class="art-used-text" />
      </div>
      <div class="art-container">
        <img src="../assets/ArtUsed.png" class="art" />
        <p class="artist">Cristelle Corpuz</p>
      </div>
      <div class="divider"></div>
      <div class="officers-list">
        <div class="header-officer">ICPEP.SE OFFICERS</div>
        <div class="profile-officers-wrapper">
          <TeamProfiles
            v-for="officer in officersFromStore"
            :key="officer.id"
            :name="officer.name"
            :role="officer.role"
            :img="officer.img"
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="officers-list web">
        <div class="header-officer">WEB DEVELOPMENT TEAM</div>
        <div class="profile-officers-wrapper">
          <TeamProfiles
            v-for="officer in webdev"
            :key="officer.id"
            :name="officer.name"
            :img="officer.img"
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="end-text">
        JOIN AND BE THE NEXT BUILDERS OF ICpEP.SE - MAPÚA!
      </div>
    </div>
  </div>
</template>

<script>
import TeamProfiles from "../components/TeamProfiles.vue";
// import { officers } from "../assets/officers";
import { webdev } from "../assets/webdev";
// import { reactive } from "vue";
export default {
  components: { TeamProfiles },
  setup() {
    // const state = reactive({
    //   officer: officers,
    // });
    return {
      // officers,
      webdev,
    };
  },
  computed: {
    officersFromStore() {
      console.log(this.$store.getters.getOfficers);
      return this.$store.getters.getOfficers;
    },
  },
  mounted() {
    this.$store.dispatch("obtainOfficersRows");
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  max-width: 100%;
  overflow-x: hidden;
}
.home-team-wrapper {
  background-color: #f7e9a0;
  position: relative;
  padding: 5vw 0;
  z-index: 2;
  @media only screen and (max-width: 900px) {
    padding: 3vw;
  }

  .home-team {
    margin: 0 21vw;
    background-color: #f7e9a0;
    padding: 1em;
    background: #f76d6d;
    border-radius: 50px;
    box-shadow: 30px 30px #c3cd92;
    @media only screen and (max-width: 1400px) {
      margin: 0 1vw;
      box-shadow: 5px 5px #c3cd92;
    }

    .dots {
      height: 3em;
      display: flex;

      &__circle {
        height: 32px;
        width: 32px;
        margin: 10px;
        margin-right: 16px;
        border-radius: 15px;

        &--red {
          background: #860519;
        }
        &--green {
          background: #c3cd92;
        }
        &--yellow {
          background: #ffe600;
        }
      }
    }

    .board {
      display: flex;
      flex-direction: row;
      @media only screen and (max-width: 1400px) {
        flex-direction: column;
      }
      @media only screen and (max-width: 1000px) {
        margin: 0;
        padding: 0;
      }
      background: #24315e;
      box-sizing: border-box;
      border-radius: 3px 3px 40px 40px;
      padding: 3em;

      .profile-circle {
        background: #c4c4c4;
        border: 5px solid #fff;
        box-sizing: border-box;
        min-height: 350px;
        max-height: 350px;
        min-width: 350px;
        max-width: 350px;
        @media only screen and (max-width: 1000px) {
          flex-direction: column;
          min-height: 45vw;
          max-height: 45vw;
          min-width: 45vw;
          max-width: 45vw;
          margin-left: auto;
          margin-right: auto;
          margin-top: 20px;
        }
        @media only screen and (max-width: 500px) {
          min-height: 55vw;
          max-height: 55vw;
          min-width: 55vw;
          max-width: 55vw;
        }
        border-radius: 50%;
      }
      .profile-detail {
        padding-left: 3em;
        text-align: left;
        display: block;
        margin-top: auto;
        margin-bottom: auto;
        @media only screen and (max-width: 1000px) {
          padding: 1em;
        }

        .detail-name {
          font-family: "Ubuntu", sans-serif;
          letter-spacing: 0.01em;
          // font-family: "Anton", sans-serif;
          font-size: 3rem;
          color: #ffffff;
        }

        .detail-title {
          font-family: "Roboto", sans-serif;
          font-style: normal;
          font-weight: 900;
          letter-spacing: 0.3rem;

          padding-top: 1.5vw;
          padding-bottom: 1.5vw;

          color: #ffe600;
        }

        .details {
          font-family: "Ubuntu", sans-serif;
          text-align: justify;
          color: #fff;
          line-height: 1.5em;
          padding-right: 3em;
          @media only screen and (max-width: 1000px) {
            padding-right: 1em;
          }
        }

        .button-wrapper {
          padding-top: 1.5vw;
          .to-officers {
            margin-right: 1.5vw;
            background: #5879eb;
            font-family: "Roboto", sans-serif;
            font-style: normal;
            font-weight: bold;
            color: #ffffff;
            border: none;
            padding: 1rem;
            border-radius: 50px;
            margin-bottom: 2vh;
          }
          .to-dev-team {
            margin-right: 1.5vw;
            background: #3b3bfe;
            font-family: "Roboto", sans-serif;
            font-style: normal;
            font-weight: bold;
            color: #ffffff;
            border: none;
            padding: 1rem;
            border-radius: 50px;
            margin-bottom: 2vh;
          }
        }
      }
    }
  }
}
.home-team-wrapper::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #f7e9a0;
  transform: skewY(-3.87deg);
  transform-origin: top right;
  z-index: -1;
}
.second-container {
  z-index: -2;
  background: white;

  .art-used {
    display: flex;
    position: relative;
    justify-content: center;
    @media only screen and (max-width: 1400px) {
      bottom: -20px;
    }
    @media only screen and (max-width: 500px) {
      bottom: -10px;
    }
  }
  .art-used-text {
    position: relative;
    width: 100%;
    height: 16vw;
    object-fit: cover;
    transform: skewY(-3.87deg);
    transform-origin: top right;
    margin-bottom: 60px;
  }
  .art-container {
    display: flex;
    flex-direction: column;
    max-width: 80%;
    margin: 0 auto;
    padding-top: 30px;
    @media only screen and (max-width: 1400px) {
      max-width: 90%;
    }
  }
  .artist {
    font-family: "VT323", monospace;
    color: #f76d6d;
    font-size: 70px;
    width: 90%;
    margin: 0;
    text-align: left;
  }
  .officers-list {
    // &.web {}
    .header-officer {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 900;
      padding: 2vw;
      font-size: 5rem;
      text-align: center;
      align-items: center;
      letter-spacing: 0.2em;
      @media only screen and (max-width: 800px) {
        font-size: 2rem;
      }
      color: #24315e;
    }
    .profile-officers-wrapper {
      justify-items: center;
      margin: 0 15vw;
      display: grid;
      grid-template-columns: auto auto auto auto;
      @media only screen and (max-width: 1700px) {
        grid-template-columns: auto auto auto;
        margin: 0 10vw;
      }
      @media only screen and (max-width: 1500px) {
        grid-template-columns: auto auto;
        margin: 0 8vw;
      }
      @media only screen and (max-width: 600px) {
        grid-template-columns: auto;
        margin: 0 2vw;
      }
    }
  }
  .divider {
    margin: 3vw auto;
    width: 70vw;
    border: 5px solid #a8d1e7;
  }
  .end-text {
    /* JOIN AND BE THE NEXT BUILDERS OF ICpEP.SE - MAPUA! */
    margin-bottom: 30px;
    padding-bottom: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    /* identical to box height, or 120% */
    display: flex;
    justify-content: center;
    letter-spacing: 0.1em;

    color: #24315e;

    text-shadow: 2px 2px 0px #f7e9a0;
  }
}
</style>
