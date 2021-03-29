<template>
  <div class="news">
    <h1 class="page-title">NEWS</h1>
    <div class="card-container">
      <NewsCard
        v-for="data in NewsData"
        :key="data.key"
        :image="data.image"
        :headline="data.headline"
        :content="data.content"
      />
    </div>
  </div>
</template>

<script>
import NewsCard from "../components/NewsCard";
import { NewsData } from "../assets/NewsData";
export default {
  name: "News",
  components: { NewsCard },
  setup() {
    return {
      NewsData
    };
  }
};
</script>

<style lang="scss" scoped>
.news {
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
}
.page-title {
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 83px;

  color: #000000;
  margin-bottom: 50px;
}
.card-container {
  display: flex;
  flex-direction: column;
}
</style>
