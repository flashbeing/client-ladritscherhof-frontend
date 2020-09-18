export default {
  data() {
    return {
      cachedElements: [],
    };
  },

  methods: {
    animateDocumentOnScroll(elementsList) {
      this.buildElementsIndexes(elementsList);
      this.bindScrollEvents();
    },

    bindScrollEvents() {
      const self = this;
      document.addEventListener('scroll', function() {
        self.handleScroll();
      });
    },

    buildElementsIndexes(elementsList) {
      this.cachedElements = [];

      for (const [className, animationType] of Object.entries(elementsList)) {
        for (const element of document.getElementsByClassName(className)) {
          const topOffset =
            window.scrollY + element.getBoundingClientRect().top;

          this.cachedElements.push({
            element,
            start: topOffset,
            end: topOffset + element.offsetHeight,
            animationType,
          });

          element.classList.add('pre-show');
        }
      }
    },

    animateShow(element) {
      element.classList.add('animate-show');
    },

    handleScroll() {
      const so = window.scrollY;

      // Perform specific elements animations
      for (const elData of this.cachedElements) {
        if (so + window.innerHeight >= elData.start && so <= elData.end) {
          switch (elData.animationType) {
            case 'animateShow':
              this.animateShow(elData.element);
              break;
          }
        }
      }
    },
  },
};
