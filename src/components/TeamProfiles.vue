<template lang="">
  <div class="indiv-profile">
    <div class="indiv-picture"></div>
    <div class="name">{{ name }}</div>
    <div class="title">{{ role }}</div>
  </div>
</template>
<script>
export default {
  name: "TeamProfiles",
  props: {
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
  padding-top: 0.7em;
  padding-bottom: 0.7em;
  margin: 1em;
  width: 18em;
  max-height: 7em;
  background: #fffceb;
  border: 5px solid #24315e;
  box-sizing: border-box;
  .name {
    font-size: 1.4em;
    color: #f76d6d;
    font-family: "Roboto", sans-serif;
    padding-top: 0.8em;
    font-weight: 900;
  }
  .title {
    font-size: 0.9rem;
    color: #24315e;
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
    padding-top: 0.3em;
    padding-bottom: 0.8em;
  }
}
</style>
