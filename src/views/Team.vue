<template>
  <div class="team">
    <div class="home-team-wrapper">
      <div class="home-team">
        <div class="dots">. . .</div>
        <div class="board">
          <img class="profile-circle" />
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
    <div class="art-used"></div>
    <div class="divider"></div>
    <div class="officers-list">
      <div class="header-officer">ICPEP.SE OFFICERS</div>
      <div class="profile-officers-wrapper">
        <TeamProfiles
          v-for="officer in officers"
          :key="officer.id"
          :name="officer.name"
          :role="officer.role"
        />
      </div>
    </div>
    <div class="divider"></div>
    <div class="officers-list web">
      <div class="header-officer">WEB DEVELOPMENT TEAM</div>
      <div class="profile-officers-wrapper">
        <TeamProfiles
          v-for="officer in officers"
          :key="officer.id"
          :name="officer.name"
          :role="officer.role"
        />
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
import TeamProfiles from "../components/TeamProfiles.vue";
import { officers } from "../assets/officers";
// import { reactive } from "vue";
export default {
  components: { TeamProfiles },
  setup() {
    // const state = reactive({
    //   officer: officers,
    // });
    return {
      officers,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
.home-team-wrapper {
  background: #f7e9a0;
  padding: 5vw 0;
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
        margin: 5vw;
        border: 5px solid #fff;
        box-sizing: border-box;
        min-height: 20vw;
        max-height: 20vw;
        min-width: 20vw;
        max-width: 20vw;
        @media only screen and (max-width: 1000px) {
          flex-direction: column;
          min-height: 50vw;
          max-height: 50vw;
          min-width: 50vw;
          max-width: 50vw;
        }
        border-radius: 50%;
        @media only screen and (max-width: 1000px) {
          margin-left: auto;
          margin-right: auto;
        }
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
            background: #ff268a;
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
.officers-list {
  &.web {
  }
  .header-officer {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 900;
    padding: 2vw;
    font-size: 5em;
    text-align: center;
    align-items: center;
    letter-spacing: 0.2em;
    @media only screen and (max-width: 800px) {
      font-size: 2em;
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
.web .divider {
  margin: 3vh auto;

  width: 50vw;
  border: 5px solid #a8d1e7;
}
</style>
