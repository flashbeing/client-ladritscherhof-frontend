<!--
  Menu redirect
  ©2020 Ladritscherhof - Developed by Matteo Biasi
-->
<template>
  <div class="mt-32 mb-10 text-xl">
    <div class="center">...</div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.location = this.$route.query.localized
      ? '/pdf/menu-' + this.$i18n.locale + '.pdf'
      : '/pdf/menu-all.pdf';
  },
};
</script>
