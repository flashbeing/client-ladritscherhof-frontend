<!--
  Homepage
  ©2020 Ladritscherhof - Developed by Matteo Biasi
-->
<template>
  <div class="overflow-hidden">
    <section class="main">
      <div class="gallery-ct">
        <client-only>
          <vue-flux
            ref="slider"
            :options="sliderOptions"
            :images="sliderImages"
            :transitions="sliderTransitions"
          />
        </client-only>
      </div>
      <h1>{{ $t('home.coverTitle') }}</h1>
      <div class="scroll-ico">
        <div class="ico clickable" @click="scrollTo('location')"></div>
      </div>
    </section>
    <section id="location" class="location">
      <div class="center">
        <div class="column-ct">
          <div class="column etxended">
            <div class="image fadeable"></div>
          </div>
          <div class="column compact">
            <h2>{{ $t('home.locationTitle') }}</h2>
            <p>{{ $t('home.locationDesc') }}</p>
            <a :href="GOOGLE_MAPS_URL" target="_blank">
              <div class="button clickable">{{ $t('home.reachUsNow') }} →</div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="kitchen" class="food">
      <div class="center">
        <div class="column-ct">
          <div class="column compact">
            <h2>{{ $t('home.foodTitle') }}</h2>
            <p>{{ $t('home.foodDesc') }}</p>
            <nuxt-link
              :to="($i18n.locale !== 'it' ? '/' + $i18n.locale : '') + '/menu'"
            >
              <div class="button contrast clickable">
                {{ $t('home.menu') }} →
              </div>
            </nuxt-link>
          </div>
          <div class="column etxended">
            <div class="image-grid">
              <div
                v-for="index in 6"
                :key="index"
                class="image fadeable"
                :style="{
                  backgroundImage:
                    'url(' +
                    require('@/assets/image/home/food_' + index + '.jpg') +
                    ')',
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="friday" class="friday">
      <div class="center">
        <h2>{{ $t('home.fridayTitle') }}</h2>
        <div class="stars-list">
          <div v-for="index in 3" :key="index" class="star"></div>
        </div>
        <p>{{ $t('home.fridayDesc') }}</p>
        <div class="image fadeable"></div>
      </div>
    </section>
    <section id="kitchen" class="food">
      <div class="center">
        <div class="column-ct">
          <div class="column compact">
            <h2>{{ $t('home.specialOccasions') }}</h2>
            <p>{{ $t('home.specialOccasionsDesc') }}</p>
            <a :href="'tel:+' + PHONE_NUMBER">
              <div class="button contrast clickable">
                {{ $t('home.bookNow') }}
              </div>
            </a>
          </div>
          <div class="column etxended">
            <div class="full-image fadeable"></div>
          </div>
        </div>
      </div>
    </section>
    <section id="friday" class="friday torggelen">
      <div class="center">
        <h2>{{ $t('home.torggelen') }}</h2>
        <p class="pt-4">{{ $t('home.torggelenDesc') }}</p>
        <div class="text-center mt-4 mb-16">
          <a :href="'tel:+' + PHONE_NUMBER">
            <div class="button contrast clickable">
              {{ $t('home.bookNow') }}
            </div>
          </a>
        </div>
        <div class="image fadeable"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { VueFlux } from 'vue-flux/dist-ssr/vue-flux.umd.min.js';
import 'vue-flux/dist-ssr/vue-flux.css';
import scrollAnimator from '~/mixins/scrollAnimator.js';
import utils from '~/mixins/utils.js';

import {
  GOOGLE_MAPS_URL,
  PHONE_NUMBER,
  FORMATTED_PHONE_NUMBER,
} from '~/config.js';

export default {
  components: {
    VueFlux,
  },

  mixins: [scrollAnimator, utils],

  data() {
    return {
      GOOGLE_MAPS_URL,
      PHONE_NUMBER,
      FORMATTED_PHONE_NUMBER,
      ANIMABLE_ELEMENTS: {
        fadeable: 'animateShow',
      },
      SLIDER_IMAGES_NUM: 31,

      sliderOptions: {
        autoplay: true,
        delay: 2000,
        lazyLoadAfter: 1,
      },
      sliderTransitions: ['fase'], // Was kenburn > Removed due poor performance
    };
  },

  computed: {
    sliderImages() {
      const images = [];

      new Array(this.SLIDER_IMAGES_NUM - 1).fill(1).forEach((value, index) => {
        images.push('/gallery/img-' + (index + 1) + '.jpeg');
      });

      return images;
    },
  },

  mounted() {
    this.animateDocumentOnScroll(this.ANIMABLE_ELEMENTS);
  },

  head() {
    return {
      title: this.$t('home.pageTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('home.pageDescription'),
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('home.pageKeywords'),
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
@keyframes mousescroll {
  from {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-7px);
  }

  to {
    transform: translateY(0);
  }
}

body {
  @apply overflow-hidden;
}

h1,
h2 {
  @apply text-4xl font-semibold leading-tight mb-6;
}

h1 {
  @apply mt-32;
}

p {
  @apply text-lg mb-10;
}

section {
  @apply py-24;

  &.main {
    @apply relative bg-cover bg-center bg-no-repeat bg-grey mb-4;

    height: 90vh;
    background-image: url(/gallery/img-1.jpeg);

    & .gallery-ct {
      @apply absolute top-0 left-0 w-full h-full;

      & .vue-flux {
        @apply h-full !important;

        & .flux-image {
          @apply h-full bg-cover !important;
        }
      }
    }

    & > h1 {
      @apply absolute text-4xl text-white text-center z-10;

      bottom: 90px;
      left: 50%;
      width: 700px;
      margin-left: -350px;
    }

    & > .scroll-ico {
      @apply absolute bg-white;

      right: 50%;
      bottom: -40px;
      z-index: 3;
      width: 80px;
      height: 80px;
      margin-right: -40px;
      border-radius: 50%;

      & > .ico {
        @apply w-full h-full bg-center bg-no-repeat;

        background-image: url(~assets/icons/colored/black/scroll_mouse_ico.svg);
        background-size: 24px auto;
        animation: mousescroll 2s ease-out infinite;
      }
    }
  }

  &.location {
    & .image {
      @apply float-right bg-light-grey bg-cover bg-center bg-no-repeat mr-12;

      width: 1200px;
      height: 500px;
      background-image: url(~assets/image/home/location.jpg);
    }
  }

  &.food {
    @apply bg-primary text-white;

    & .image-grid {
      @apply ml-16;

      width: 1000px;
      height: 620px;

      & .image {
        @apply inline-block bg-light-grey bg-cover bg-center bg-no-repeat;

        width: calc(33% - 20px);
        margin: 0 20px 20px 0;
        padding-top: calc(33% - 20px);
      }
    }

    & .full-image {
      @apply bg-light-grey bg-cover bg-center bg-no-repeat ml-10;

      width: 800px;
      height: 500px;
      background-image: url(~assets/image/home/special-occasion.jpg);
    }
  }

  &.friday {
    & h2,
    & p {
      @apply text-center;

      max-width: 650px;
      margin: 0 auto;
    }

    & .stars-list {
      @apply text-center py-3;

      width: 250px;
      margin: 0 auto;

      & > .star {
        @apply inline-block bg-cover bg-center bg-no-repeat mx-2;

        width: 20px;
        height: 20px;
        background-image: url(~assets/icons/colored/yellow/star.svg);
      }
    }

    & .center {
      & > .image {
        @apply bg-light-grey bg-cover bg-center bg-no-repeat mt-8;

        height: 500px;
        background-image: url(~assets/image/home/friday.jpg);
      }
    }

    &.torggelen {
      & .center {
        & > .image {
          background-image: url(~assets/image/home/torggelen.jpg);
        }
      }
    }
  }
}

.button {
  @apply inline-block px-5 text-lg text-white bg-primary rounded-md;

  height: 45px;
  line-height: 45px;

  &.contrast {
    @apply bg-primary-hover;
  }

  &:hover {
    @apply bg-primary-hover;

    &.contrast {
      background-color: #c0baac;
    }
  }
}

@media only screen and (max-width: 980px) {
  h2 {
    @apply text-2xl;
  }

  section {
    @apply py-16;

    &.main {
      & > h1 {
        @apply w-full ml-0 text-xl left-0 px-4;

        bottom: 30px;
      }
    }

    &.location {
      & .image {
        @apply mb-6;

        width: 120vw;
        height: 100vw;
      }
    }

    &.food {
      & .image-grid {
        @apply ml-0 mt-12;

        width: 130vw;
        height: 190vw;

        & .image {
          width: calc(50% - 10px);
          margin: 0 10px 10px 0;
          padding-top: calc(50% - 10px);
        }
      }

      & .full-image {
        @apply ml-0 mt-16;
      }
    }

    &.friday {
      & .center {
        & > .image {
          height: 70vw;
        }
      }
    }
  }
}
</style>
