import * as actions from './actions'
import * as getters from './getters'
import hub from './modules/hub'
import user from './modules/user'
import post from './modules/post'
import page from './modules/page'
import categories from './modules/categories'
import { createStore } from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  actions,
  getters,
  modules: {
    hub,
    user,
    post,
    page,
    categories
  },
  strict: debug
})

export default store;
