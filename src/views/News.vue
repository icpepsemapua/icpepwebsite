<template>
  <div class="news">
    <h1>NEWS</h1>
    <div class="card-container">
      <NewsCard
        imageUrl="https://picsum.photos/200/300"
        headline="Headline"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus molestie dapibus. Nulla quis pellentesque nulla, posuere vulputate orci. Nam fringilla turpis sapien, eget pretium lorem auctor ac. Mauris et accumsan justo. Curabitur eget turpis purus. Fusce cursus id justo sit amet bibendum. Quisque iaculis felis nec ullamcorper hendrerit."
      />
      <NewsCard
        imageUrl="https://picsum.photos/200/300"
        headline="Headline"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus molestie dapibus. Nulla quis pellentesque nulla, posuere vulputate orci. Nam fringilla turpis sapien, eget pretium lorem auctor ac. Mauris et accumsan justo. Curabitur eget turpis purus. Fusce cursus id justo sit amet bibendum. Quisque iaculis felis nec ullamcorper hendrerit."
      />
    </div>
  </div>
</template>

<script>
import NewsCard from "../components/NewsCard";
export default {
  name: "News",
  components: { NewsCard }
};
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-direction: column;
}
</style>
