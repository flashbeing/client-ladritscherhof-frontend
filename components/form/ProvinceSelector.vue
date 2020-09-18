<template>
  <div>
    <Select
      v-model="region"
      class="mr-4"
      :options="regionsList"
      :width="width"
      @input="onInput()"
    />
    <Select
      v-model="province"
      :options="provincesList"
      :width="width"
      @input="onInput()"
    />
  </div>
</template>

<script>
import Select from '~/components/form/Select.vue';

export default {
  components: {
    Select,
  },
  props: {
    width: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      region: '',
      province: '',
    };
  },
  computed: {
    regionsList() {
      const list = [
        {
          text: 'Regione...',
          value: '',
        },
      ];

      for (const region of this.$store.getters['regions/getRegions']) {
        list.push({
          text: region.name,
          value: region.id,
          selected: this.region === region.id,
        });
      }

      return list;
    },

    provincesList() {
      let list = [
        {
          text: '-',
          value: '',
        },
      ];

      if (this.region) {
        list = [
          {
            text: 'Provincia...',
            value: '',
          },
        ];

        for (const province of this.$store.getters['regions/getProvinces'][
          this.region
        ]) {
          list.push({
            text: province.name,
            value: province.id,
            selected: this.provinces === province.id,
          });
        }
      }

      return list;
    },
  },
  methods: {
    onInput(value) {
      this.$emit(
        'input',
        this.region + (this.region ? '-' + this.province : '')
      );
    },
  },
};
</script>
