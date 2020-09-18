export default {
  methods: {
    scrollTo(sectionId) {
      document
        .getElementById(sectionId)
        .scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (typeof this.hideMenu !== 'undefined') {
        this.hideMenu();
      }
    },
  },
};
