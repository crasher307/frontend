<template>
  <footer>
    <div class="footer__left">
      <img class="logo" src="../assets/Logo.svg" alt="logo">
      <p>It is a long established fact that a reader will be distracted lookings.</p>
      <div class="footer__left_social">
        <img class="social" src="../assets/social/twitter.svg" alt="twitter">
        <img class="social" src="../assets/social/linkedin.svg" alt="linked in">
      </div>
    </div>
    <div class="footer__center">
      <h5>Pages</h5>
      <a href="#home">Home</a>
      <a href="#project">Project</a>
      <a href="#blog">Blog</a>
    </div>
    <div class="footer__right">
      <h5>Contact</h5>
      <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
      <a href="mailto:contact@interno.com">contact@interno.com</a>
      <a href="tel:(123) 456 - 7890">(123) 456 - 7890</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CFooter',
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
}
</script>

<style scoped lang="scss">
</style>
