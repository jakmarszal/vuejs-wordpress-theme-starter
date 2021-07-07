<template>
  <div class="page page--home">
    <a href="https://vuewordpress.com">
      <img :src="heroImg" />
    </a>
    <h1 class="mt-6">Welcome!</h1>
    <p>
      You'll probably want to remove all  of this stuff, but hey it at least it
      works!!
    </p>
    <p class="lol">
      If you'd like to edit THE contents of this page take a look at
      <code>src/components/Home.vue</code>
    </p>
    <p class="mb-10">
      ~
      <a href="https://evanagee.com/">Evan Agee</a>
    </p>
    <recent-posts-widget limit="5" class="mb-10"
      >Recent Posts</recent-posts-widget
    >
    <pages-widget limit="5">Pages</pages-widget>
  </div>
</template>

<script>
import heroImg from './../assets/images/hero.png';
import RecentPostsWidget from "./widgets/RecentPosts.vue";
import PagesWidget from "./widgets/Pages.vue";

export default {
  components: {
    RecentPostsWidget,
    PagesWidget,
  },
  data() {
    return {
      heroImg: heroImg,
    }
  }
};
</script>

<style type="postcss">
.lol {
  color: blanchedalmond;
}
</style>
