<template>
  <div class="events">
    <div class="events__container">
      <EventItem
        v-for="eventArticle in eventsFromStore"
        :key="eventArticle.id"
        :img="eventArticle.img"
        :title="eventArticle.title"
        :type="eventArticle.type"
        :desc="eventArticle.desc"
        :date="eventArticle.date"
        :endDate="eventArticle.endDate"
        :showEventButton="eventArticle.showEventButton"
      />
    </div>
    <div class="events__carousel">
      <carousel
        :items-to-show="carouselNumber"
        class="carousel-inner-container"
      >
        <slide v-for="slide in eventsBottomFromStore" :key="slide">
          <EventItemBottom
            :key="slide.id"
            :img="slide.img"
            :title="slide.title"
          />
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import EventItem from "../components/EventItem.vue";
import EventItemBottom from "../components/EventBottomItem.vue";
// import { eventsBottom } from "../assets/eventsBottom";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  data() {
    return {
      carouselNumber: 2,
    };
  },
  components: {
    EventItem,
    EventItemBottom,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  computed: {
    eventsFromStore() {
      return this.$store.getters.getEvents;
    },
    eventsBottomFromStore() {
      return this.$store.getters.getBottomEvents;
    },
  },
  methods: {
    windowSizeChange() {
      if (window.innerWidth <= 1450) {
        this.carouselNumber = 1;
      } else {
        this.carouselNumber = 2;
      }
    },
  },
  mounted() {
    this.windowSizeChange();
    window.addEventListener("resize", this.windowSizeChange);
    this.$store.dispatch("obtainEventsRows");
    this.$store.dispatch("obtainBottomEventsRows");
  },
  // setup() {
  //   return {
  //     eventsBottom,
  //   };
  // },
};
</script>

<style lang="scss" scoped>
body {
  background: #bcc9f8;
}
.events {
  .events__container {
    display: inline-grid;
    grid-template-columns: auto auto auto;
    grid-gap: 30px 50px;
    @media only screen and (max-width: 1000px) {
      grid-template-columns: auto auto;
    }
    @media only screen and (max-width: 870px) {
      grid-template-columns: auto;
    }
    padding-top: 30px;
    padding-bottom: 40px;
  }
  .events__carousel {
    width: 100%;
    background: #25315a;
    .carousel-inner-container {
      margin-right: 30px;
      margin-left: 30px;
      padding-bottom: 30px;
    }
  }
}
</style>
