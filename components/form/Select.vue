<template>
  <select v-model="selected" :class="getClass" :required="required">
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.text }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getClass() {
      return this.width ? 'w-' + this.width : 'w-150';
    },
    selected: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>

<style lang="postcss" scoped>
select {
  @apply bg-lightgrey text-black text-xs p-button rounded font-medium cursor-pointer;

  height: 30px;
  padding: 0 20px 0 20px;
  line-height: 30px;
  border-radius: 15px;
  -webkit-appearance: none;
}
</style>
