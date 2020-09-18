<template>
  <div class="checkbox">
    <input v-model="selected" :value="value" type="checkbox" />
    {{ label }}
  </div>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change',
  },

  props: {
    label: {
      type: String,
      default: '',
    },
    checked: {
      type: [Array, Boolean],
      default: false,
    },
    value: {
      type: String,
      default: null,
    },
  },

  computed: {
    selected: {
      get() {
        return this.checked;
      },
      set(val) {
        this.$emit('change', val);
      },
    },
  },
};
</script>

<style lang="postcss" scoped>
.checkbox {
  @apply text-sm text-black;

  height: 20px;
  line-height: 20px;

  & > input {
    @apply rounded-md border-1 border-green mr-1 align-top cursor-pointer;

    width: 20px;
    height: 20px;
    background-image: url(~assets/icons/colored/check_white.svg);
    background-repeat: none;
    background-position: center;
    background-size: 15px auto;
    -webkit-appearance: none;

    &:checked {
      @apply text-white bg-green;
    }

    &:focus {
      @apply outline-none;
    }
  }
}
</style>
