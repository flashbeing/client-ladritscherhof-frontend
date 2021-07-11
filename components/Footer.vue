<!--
  Footer element
  ©2020 Ladritscherhof - Developed by Matteo Biasi
-->
<template>
  <footer>
    <div class="center">
      <div class="column-ct">
        <div class="column logo">
          <div class="logo"></div>
        </div>
        <div class="column details">
          <h3>Ladritscher Hof</h3>
          <a :href="GOOGLE_MAPS_URL" target="_blank">
            <div class="info underline">{{ $t('footer.streetName') }} →</div>
          </a>
          <p class="info my-4 pr-16">{{ $t('footer.streetInfo') }}</p>
          <a href="mailto:info@ladritscherhof.com">info@ladritscherhof.com</a>
          <a :href="'tel:+' + PHONE_NUMBER" class="mb-3"
            >+39 {{ FORMATTED_PHONE_NUMBER }}</a
          >
          <p>{{ $t('footer.vat') }}: 02484590217</p>
          <!--<p>SDI: XXXXXXXXX</p>-->
          <div class="languages">
            <nuxt-link
              class="language cursor-pointer"
              to="/"
              :class="{ underline: this.$i18n.locale === 'it' }"
              >Italiano</nuxt-link
            >
            <nuxt-link
              class="language cursor-pointer"
              to="/de/"
              :class="{ underline: this.$i18n.locale === 'de' }"
              >Deutsch</nuxt-link
            >
          </div>
        </div>
        <div id="timetable" class="column timetable">
          <p class="mb-2">{{ $t('footer.weAreOpenedUpInfo') }}</p>
          <p class="mb-2">
            {{ $t('footer.dayStart') }} - {{ $t('footer.dayEnd') }}: 11:00 -
            18:00
          </p>
          <p>
            {{ $t('footer.restDayInfo') }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import scrollAnimator from '~/mixins/scrollAnimator.js';

import {
  GOOGLE_MAPS_URL,
  PHONE_NUMBER,
  FORMATTED_PHONE_NUMBER,
} from '~/config.js';

export default {
  mixins: [scrollAnimator],
  data() {
    return {
      GOOGLE_MAPS_URL,
      PHONE_NUMBER,
      FORMATTED_PHONE_NUMBER,
      ANIMABLE_ELEMENTS: {
        fadeable: 'animateShow',
      },
    };
  },

  mounted() {
    this.animateDocumentOnScroll(this.ANIMABLE_ELEMENTS);
  },
};
</script>

<style lang="postcss" scoped>
footer {
  @apply text-base pt-16 pb-6 border-primary bg-primary;

  border-bottom-width: 25px;

  & > .center {
    & > .column-ct {
      @apply py-5;

      font-size: 0;
    }

    & .map-desc {
      @apply font-semibold text-xs !important;

      & a {
        @apply underline;

        display: initial !important;
        font-size: inherit !important;
      }
    }

    & .column {
      @apply inline-block text-base align-top text-white;

      &.logo {
        @apply bg-contain bg-left bg-no-repeat mr-24;

        width: 200px;
        height: 70px;
        background-image: url(~assets/image/logo.png);
      }

      &.details {
        width: 380px;
      }

      &.timetable {
        width: 200px;
      }

      & h3 {
        @apply mb-3 text-lg font-medium;
      }

      & p,
      & a:not(.language) {
        @apply block text-sm;
      }

      & a:hover {
        @apply underline;
      }
    }
  }

  & .languages {
    @apply mt-4;

    & > .language {
      @apply mr-2 text-sm;
    }
  }
}

@media only screen and (max-width: 980px) {
  footer {
    @apply pt-0;

    & .center {
      & .feature,
      & .column {
        @apply block w-auto;
      }

      & .column {
        @apply mt-8;

        &.location {
          @apply relative top-0 w-full mb-0 ml-0;

          & .map {
            height: 80vw;
          }

          & > .carousel {
            margin-bottom: 10px;

            & > .image {
              height: 50vw;
            }
          }
        }
      }
    }
  }
}
</style>
