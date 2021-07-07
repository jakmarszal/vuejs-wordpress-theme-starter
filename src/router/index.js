import { createRouter, createWebHistory } from 'vue-router'

// Components
import Home from '../components/Home.vue';
import Post from '../components/Post/Post.vue';
import Page from '../components/Page/Page.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      // Assuming you're using the default permalink structure for posts
      path: '/:year/:month/:day/:postSlug',
      name: 'Post',
      component: Post,
    },
    {
      path: '/:pageSlug',
      name: 'Page',
      component: Page,
    },
  ],

  // Prevents window from scrolling back to top
  // when navigating between components/views
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
});

router.afterEach((to) => { // (to, from)
  // Add a body class specific to the route we're viewing
  let body = document.querySelector('body');

  const slug = !(to.params.postSlug)
    ? to.params.pageSlug
    : to.params.postSlug;
  body.classList.add('vue--page--' + slug);
});

export default router;
