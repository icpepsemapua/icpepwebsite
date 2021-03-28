<template>
  <div>
    <div>{{ imageUrl }}</div>
    <div>{{ headline }}</div>
    <div>{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    imageUrl: String,
    headline: String,
    content: String
  }
};
</script>
