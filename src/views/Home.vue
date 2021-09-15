<template>
  <div class="home">
    <div>This is for the Video</div>
    <div class="img-container">
      <div class="current-event">
        <img id="event" src="../assets/EECE_Colloq.png" />
        <div class="event-container">
          <h1>40TH EECE Thesis Colloquium</h1>
          <p>
            Greetings to all 2Q2021 Thesis 2 and Thesis 3 students!
          </p>

          <p>
            The School of Electrical, Electronics and Computer Engineering is
            glad to announce this term’s 40th EECE Thesis Colloquium.
          </p>

          <p>
            You can register by clicking the button below. Kindly join the
            Facebook group as well for further announcements:
            www.facebook.com/groups/40theececolloqium/
          </p>
          <div class="event-date">
            <p>Deadline of Pre-Registration:</p>
            <p>January 22, 2020 (Week 7, Friday)</p>
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
