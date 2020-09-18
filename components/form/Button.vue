<template>
  <div
    class="bt_el"
    :class="{
      delete: type === 'delete',
      secondary: type === 'secondary',
      loading: loading,
    }"
  >
    {{ label }}
    <div v-if="loading" class="loader-ct">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(12px, 0);
  }
}

.bt_el {
  @apply relative inline-block bg-primary text-white text-xs uppercase cursor-pointer transition-opacity select-none;

  height: 30px;
  padding-right: 30px;
  padding-left: 30px;
  line-height: 30px;
  border-radius: 15px;

  &:hover {
    @apply bg-primaryhover;
  }

  &:active {
    @apply opacity-60 transition-none;
  }

  &.secondary {
    @apply bg-lightgrey text-black;

    &:hover {
      background-color: #e8e8e8;
    }
  }

  &.loading {
    @apply pointer-events-none;

    cursor: progress;
  }

  & > .loader-ct {
    @apply absolute w-full h-full top-0 left-0 bg-primary;

    border-radius: 15px;

    & > .lds-ellipsis {
      position: relative;
      width: 40px;
      height: 100%;
      margin: 0 auto;

      & > div {
        position: absolute;
        top: 10px;
        width: 7px;
        height: 7px;
        background: #fff;
        border-radius: 50%;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);

        &:nth-child(1) {
          left: 4px;
          animation: lds-ellipsis1 0.6s infinite;
        }

        &:nth-child(2) {
          left: 4px;
          animation: lds-ellipsis2 0.6s infinite;
        }

        &:nth-child(3) {
          left: 16px;
          animation: lds-ellipsis2 0.6s infinite;
        }

        &:nth-child(4) {
          left: 18px;
          animation: lds-ellipsis3 0.6s infinite;
        }
      }
    }
  }
}
</style>
