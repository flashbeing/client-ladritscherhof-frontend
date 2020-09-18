export const state = () => ({
  locales: ['it', 'de'],
  locale: 'it',
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  },
};
