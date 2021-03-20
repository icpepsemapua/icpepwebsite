<template lang="">
  <div class="indiv-profile">
    <img class="picture" :src="img" />
    <div class="name">{{ name }}</div>
    <div class="title">{{ role }}</div>
  </div>
</template>
<script>
export default {
  name: "TeamProfiles",
  props: {
    img: {
      type: String,
    },
    name: {
      type: String,
    },
    role: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap");

.indiv-profile {
  padding-bottom: 11px;
  margin: 16px;
  width: 288px;
  min-height: 122px;
  background: #fffceb;
  border: 5px solid #24315e;
  box-sizing: border-box;

  .picture {
    width: 100%;
    height: auto;
  }
  .name {
    font-size: 22px;
    color: #f76d6d;
    font-family: "Roboto", sans-serif;
    padding-top: 13px;
    font-weight: 900;
  }
  .title {
    font-size: 15px;
    color: #24315e;
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
    padding-top: 5px;
    padding-bottom: 13px;
  }
}
</style>
