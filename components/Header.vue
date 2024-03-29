<!--
  Header element
  ©2020 Ladritscherhof - Developed by Matteo Biasi
-->
<template>
  <header>
    <div class="center">
      <nuxt-link class="logo" to="/" tag="div"></nuxt-link>
      <div class="nav-ct">
        <nav :class="{ visible: visibleMenu }">
          <div
            v-for="section in sections"
            :key="section.ref"
            class="clickable"
            @click="scrollTo(section.ref)"
          >
            {{ section.name }}
          </div>
          <!-- 'https://wa.me/' + PHONE_NUMBER -->
          <a :href="'tel:+' + PHONE_NUMBER">
            <div class="whatsapp-bt clickable">
              <div class="logo"></div>
              <div class="number">{{ FORMATTED_PHONE_NUMBER }}</div>
            </div>
          </a>
          <div class="lang-selector">
            <nuxt-link
              class="language cursor-pointer"
              to="/"
              :class="{ underline: this.$i18n.locale === 'de' }"
              >DE</nuxt-link
            >
            |
            <nuxt-link
              class="language cursor-pointer"
              to="/it/"
              :class="{ underline: this.$i18n.locale === 'it' }"
              >IT</nuxt-link
            >
          </div>
        </nav>
        <div
          class="nav_bt clickable"
          :class="{ active: visibleMenu }"
          @click="toggleMenuVisibility()"
        >
          <div class="option menu">
            <svgicon icon="menu"></svgicon>
          </div>
          <div class="option close">
            <svgicon icon="close"></svgicon>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import '~/assets/icons/bundle/menu';
import '~/assets/icons/bundle/close';

import utils from '~/mixins/utils.js';

import {
  GOOGLE_MAPS_URL,
  PHONE_NUMBER,
  FORMATTED_PHONE_NUMBER,
} from '~/config.js';

export default {
  mixins: [utils],

  data() {
    return {
      GOOGLE_MAPS_URL,
      PHONE_NUMBER,
      FORMATTED_PHONE_NUMBER,
      visibleMenu: false,
    };
  },

  computed: {
    sections() {
      return [
        {
          ref: 'location',
          name: this.$t('header.location'),
        },
        {
          ref: 'kitchen',
          name: this.$t('header.kitchen'),
        },
        {
          ref: 'timetable',
          name: this.$t('header.timetable'),
        },
      ];
    },
  },

  methods: {
    /**
     * Toggles the visibility of the navigation bar/menu on smartphones.
     */
    toggleMenuVisibility() {
      this.visibleMenu = !this.visibleMenu;
    },

    /**
     * Hides the navigation menu.
     */
    hideMenu() {
      this.visibleMenu = false;
    },
  },
};
</script>

<style lang="postcss" scoped>
header {
  @apply h-24 font-semibold select-none fixed top-0 left-0 right-0 z-20;

  background-color: rgba(179, 173, 157, 0.7);

  & > .center {
    & > .logo {
      @apply inline-block bg-contain bg-no-repeat;

      width: 250px;
      height: 75px;
      margin-top: 3px;
      background-image: url(~assets/image/logo.png);
      background-position: left center;
    }

    & .lang-selector {
      @apply mr-0 ml-4;

      & > .language {
        @apply mr-2;
      }

      &:hover {
        @apply no-underline;
      }
    }
  }

  & .nav-ct {
    @apply float-right mt-6;
  }

  & nav {
    @apply inline-block align-top font-medium text-white;

    & > div {
      @apply inline-block mr-6 text-base align-top;

      line-height: 48px;

      &:hover {
        @apply underline;
      }
    }
  }

  & .nav_bt {
    @apply hidden;
  }

  & .whatsapp-bt {
    @apply relative inline-block border-2 border-light-grey rounded-md px-10 font-medium text-white ml-6;

    top: -2px;
    height: 50px;
    line-height: 50px;

    & > .logo {
      @apply absolute bg-center bg-no-repeat bg-white;

      top: 3px;
      left: -20px;
      width: 40px;
      height: 40px;
      background-image: url(~assets/icons/phone-call.svg);
      background-size: 85% auto;
      border-radius: 50%;
    }
  }
}

@media only screen and (max-width: 980px) {
  header {
    @apply fixed bg-white h-16 mt-0 w-full;

    & > .center {
      margin: 0;

      & > .logo {
        @apply ml-4;

        width: 160px;
        height: 64px;
        margin-top: -3px;
        background-image: url(~assets/image/logo_black.png);
      }

      & .lang-selector {
        @apply ml-0;
      }
    }

    & nav {
      @apply fixed right-0 bottom-0 left-0 bg-white text-center text-black hidden pt-8;

      top: 60px;

      &.visible {
        @apply block;
      }

      & > div {
        @apply block mr-2;

        &.text.current {
          @apply border-0 !important;
        }
      }
    }

    & .whatsapp-bt {
      @apply mt-4 ml-0 text-black;
    }

    & .nav-ct {
      @apply mt-0;
    }

    & .nav_bt {
      @apply inline-block text-center align-top mx-3;

      width: 40px;
      height: 60px;

      & svg {
        width: 30px;
        height: 30px;
        margin-top: 18px;
        fill: #888;
      }

      & > .option.close {
        @apply hidden;

        & > svg {
          width: 24px;
          height: 24px;
          margin-top: 21px;
        }
      }

      &.active {
        & > .option.close {
          @apply block;
        }

        & > .option.menu {
          @apply hidden;
        }
      }
    }
  }
}
</style>
