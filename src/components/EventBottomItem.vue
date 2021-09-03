<template lang="">
  <div class="eventBottom">
    <img class="eventBottom__item eventBottom__item--image" :src="img" />
    <div class="eventBottom__item eventBottom__item--title">{{ title }}</div>
  </div>
</template>
<script>
export default {
  name: "EventItemBottom",
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.eventBottom {
  background: #24315e;
  padding: 40px;
  &__item {
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    text-align: left;
    &--image {
      max-width: 696px;
      @media only screen and (max-width: 1000px) {
        max-width: 80%;
      }
      @media only screen and (max-width: 700px) {
        max-width: 95%;
      }
      object-fit: fill;
      border-radius: 35px;
    }
    &--title {
      font-family: "Ubuntu", sans-serif;
      font-size: 24px;
      font-weight: bold;
      color: #f7e9a0;
      text-align: center;
    }
  }
}
</style>
