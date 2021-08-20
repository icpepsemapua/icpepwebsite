<template lang="">
  <div class="news">
    <img class="news__item news__item--image" :src="img" />
    <div class="news__item news__item--title">{{ title }}</div>
    <div class="news__item news__item--type">{{ type }}</div>
    <div class="news__item news__item--desc">{{ desc }}</div>
    <div class="news__item news__item--date">
      <!-- div is a block element -->
      <!-- div doesnt help continue the line for text -->
      <span>
        <!-- use span element for in-line, cuz they are a single line, and used mostly for text-->
        <!-- span is mainly used for text -->
        {{ months[date.getMonth()] }} {{ date.getDate() }},
        {{ date.getFullYear() }} |

        <span v-if="date.getHours() % 12 === 0">12</span>
        <span v-else>{{ date.getHours() % 12 }}</span>
        :{{ date.getMinutes() > 0 ? date.getMinutes() : "00" }}
        {{ date.getHours() >= 12 ? " PM" : " AM" }}

        -
        <span v-if="endDate.getHours() % 12 === 0">12</span>
        <span v-else>{{ endDate.getHours() % 12 }}</span>
        :{{ endDate.getMinutes() > 0 ? endDate.getMinutes() : "00" }}
        {{ endDate.getHours() >= 12 ? " PM" : " AM" }}
      </span>
    </div>
    <div class="news__item news__item--info" v-if="showNewsButton">
      More Information
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsItem",
  computed: {
    months() {
      return [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    },
  },
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    type: {
      type: String,
    },
    desc: {
      type: String,
    },
    date: {
      type: String,
    },
    showNewsButton: {
      type: Boolean,
    },
    endDate: {
      type: Object,
    },
  },
};
</script>
<style lang="scss" scoped>
.news {
  height: 550px;
  width: 400px;
  background: #24315e;
  border-radius: 35px;
  padding: 40px;
  // box-shadow: 10px 10px 0px rgb(247, 233, 160);
  filter: drop-shadow(10px 10px 0px #f7e9a0);
  &__item {
    padding-top: 15px;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    text-align: left;
    &--image {
      width: 100%;
      object-fit: fill;
    }
    &--type {
      color: #f76d6d;
    }
    &--desc {
      color: #97bdd6;
    }
    &--title {
      font-family: "Ubuntu", sans-serif;
      font-size: 24px;
      font-weight: bold;
      color: #f7e9a0;
    }
    &--date {
      font-weight: 500;
      color: #a8d1e7;
      display: flex;
      &--startDate {
        display: flex;
      }
      &--endDate {
        display: flex;
      }
    }
    &--info {
      color: #a8d1e7;
      cursor: pointer;
      font-size: 12px;
      text-align: center;
      text-decoration-line: underline;
    }
  }
}
</style>
