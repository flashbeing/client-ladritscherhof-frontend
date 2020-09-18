<template>
  <div class="text_input">
    <label v-if="label !== ''" class="label">
      {{ label }}
    </label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :class="getClass"
      :required="required"
      @keypress="keypress($event)"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
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
      return this.width ? 'w-' + this.width : 'w-200';
    },
  },

  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },

    /**
     * Handles the keypress event
     *
     * @param {object} event The dom keypress event.
     */
    keypress(event) {
      switch (event.keyCode) {
        case 13:
          this.$emit('onEnter');
          break;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.text_input {
  & > label {
    margin-bottom: 2px;
  }

  & > input {
    @apply text-black text-sm p-button rounded border-2 border-lightgrey;

    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 15px;

    &:focus {
      @apply border-grey;

      outline: none;
    }

    &[type='search'] {
      padding-right: 30px;
      background-image: url(~assets/icons/colored/search_grey.svg);
      background-repeat: no-repeat;
      background-position: calc(100% - 10px) center;
      background-size: 17px auto;
    }
  }
}
</style>
