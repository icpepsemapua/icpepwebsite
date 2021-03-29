<template>
  <div class="container">
    <div class="image-container">
      <img class="image" v-bind:src="image" v-bind:alt="image" />
    </div>
    <div class="text-container">
      <h2 class="headline">{{ headline }}</h2>
      <p v-snip="6" class="content">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    image: String,
    headline: String,
    content: String
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  margin: 50px;
  max-height: 450px;
}
.text-container {
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-top: auto;
  margin-bottom: auto;
  text-align: left;
}
.image {
  width: 650px;
  height: 400px;
}
.headline {
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 41px;
  color: #000000;
  margin: 0px;
}
.content {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 50px;
  letter-spacing: -0.015em;
  color: rgba(0, 0, 0, 0.8);
  text-align: justify;

  margin-top: 15px;
}
</style>
