export default {
  methods: {
    notifyGenericError() {
      this.$notify({
        group: 'main',
        text: 'Spiacenti, sì è verificato un errore. Riprova.',
        duration: 3000,
        type: 'error',
      });
    },

    notifySavedChanges() {
      this.$notify({
        group: 'main',
        text: 'Modifiche salvate.',
        duration: 3000,
        type: 'success',
      });
    },
  },
};
