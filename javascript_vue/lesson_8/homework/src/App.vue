<template>
  <div id="app">
    <c-header>
      <nav class="menu">
        <a class="link" :class="{'active': currentPage === idx}"
           v-for="(item, idx) in pages" :key="idx"
           @click.prevent="currentPage = item.comp"
           :href="`#${idx}`"
        >
          {{ item.name }}
        </a>
      </nav>
    </c-header>
    <c-main>
      <component :is="currentPage"/>
    </c-main>
    <c-footer/>
  </div>
</template>

<script>
import CHeader from "@/components/CHeader.vue";
import CFooter from "@/components/CFooter.vue";
import PageHome from "@/components/pages/PageHome.vue";
import PageProject from "@/components/pages/PageProject.vue";
import PageBlog from "@/components/pages/PageBlog.vue";
import CMain from "@/components/CMain.vue";

export default {
  name: 'App',
  components: {
    CHeader,
    CMain,
    CFooter,
  },
  data() {
    return {
      currentPage: PageHome,
      pages: {
        home: {name: 'Home', comp: PageHome},
        project: {name: 'Project', comp: PageProject},
        blog: {name: 'Blog', comp: PageBlog},
      },
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
}
</script>

<style lang="scss" src="./styles/style.scss"></style>
<style lang="scss" scoped>
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;
  //margin-top: 60px;
}
</style>
