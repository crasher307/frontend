<template>
  <div class="container">
    <header-block class="header-block" title="Our Project" desc="Home / Project" background="/images/project/Header.png"/>
    <div class="page-block">
      <div class="sort">
        <div
            class="item"
            :class="{'active': item === selectedCategory}"
            v-for="(item, idx) in categories"
            :key="idx"
            @click="selectedCategory = item"
        >
          {{ item }}
        </div>
      </div>
      <div class="items">
        <div class="left">
          <page-project-item
              class="item"
              v-for="(item, idx) in itemsData"
              :key="idx"
              :title="item.title"
              :desc="item.desc"
              :image="item.image"
              v-show="idx % 2 === 0"
          />
        </div>
        <div class="right">
          <page-project-item
              class="item"
              v-for="(item, idx) in itemsData"
              :key="idx"
              :title="item.title"
              :desc="item.desc"
              :image="item.image"
              v-show="idx % 2 !== 0"
          />
        </div>
      </div>
      <div class="pages">
        <!--        <div class="page prev" v-if="currentPage > 1"></div>-->
        <!--        <div class="page" :class="{'active': idx === currentPage}" v-for="idx in pages" :key="idx">-->
        <!--          {{ String(idx).padStart(2, '0') }}-->
        <!--        </div>-->
        <!--        <div class="page next" v-if="currentPage < pages"></div>-->
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBlock from "@/components/UI/HeaderBlock.vue";
import PageProjectItem from "@/components/UI/PageProjectItem.vue";

export default {
  name: 'PageBlog',
  components: {
    PageProjectItem,
    HeaderBlock,
  },
  props: {},
  data() {
    return {
      selectedCategory: '',
      items: [
        {
          category: 'Bathroom',
          image: '/images/project/Image-1.png',
          title: '-',
          desc: '-',
        },
        {
          category: 'Bed Room',
          image: '/images/project/Image-1.png',
          title: 'Minimal Bedroom',
          desc: 'Decor / Artchitecture',
        },
        {
          category: 'Bed Room',
          image: '/images/project/Image-2.png',
          title: 'Minimal Bedroom',
          desc: 'Decor / Artchitecture',
        },
        {
          category: 'Bed Room',
          image: '/images/project/Image-3.png',
          title: 'Classic Minimal Bedroom',
          desc: 'Decor / Artchitecture',
        },
        {
          category: 'Bed Room',
          image: '/images/project/Image-4.png',
          title: 'Modern Bedroom',
          desc: 'Decor / Artchitecture',
        },
        {
          category: 'Bed Room',
          image: '/images/project/Image-5.png',
          title: 'Minimal Bedroom table',
          desc: 'Decor / Artchitecture',
        },
        {
          category: 'Bed Room',
          image: '/images/project/Image-6.png',
          title: 'System Table',
          desc: 'Decor / Artchitecture',
        },
        {
          category: 'Bed Room',
          image: '/images/project/Image-7.png',
          title: 'Modern Bedroom',
          desc: 'Decor / Artchitecture',
        },
        {
          category: 'Bed Room',
          image: '/images/project/Image-8.png',
          title: 'Modern Bedroom',
          desc: 'Decor / Artchitecture',
        },
        {
          category: 'Kitchan',
          image: '/images/project/Image-2.png',
          title: '-',
          desc: '-',
        },
        {
          category: 'Living Area',
          image: '/images/project/Image-3.png',
          title: '-',
          desc: '-',
        },
      ],
    };
  },
  computed: {
    categories() {
      return Array.from(new Set(this.items.map(e => e.category)));
    },
    itemsData() {
      return this.items.filter(e => e.category === this.selectedCategory);
    },
  },
  watch: {
    categories() {
      this.selectedCategory = this.categories[0];
    },
  },
  mounted() {
    this.selectedCategory = this.categories[0];
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/functions";

.container {
  gap: 150px;
}
.header-block, .page-block {
  margin-bottom: 50px;
}
.sort {
  @include flexRow(center, center, 10px);
  margin: 0 auto -100px;
  padding: 0;
  border: 2px solid $color-fourth;
  border-radius: 18px;
  overflow: hidden;

  .item {
    @include flexRow(center, center);
    @include textTitle(18px, 600);
    font-family: $font-second;
    padding: 20px;
    cursor: pointer;
    border-radius: 14px;

    &.active {
      background: $color-fourth;
      color: $color-clear;
    }
  }
}
.items {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  //@include flexRow(space-between, stretch, 30px);
  //@include flexRow();
  //flex-wrap: nowrap;

  & > * {
    @include flexColumn(stretch, start, 30px);
    //width: calc(50% - 15px);
  }
}
</style>
