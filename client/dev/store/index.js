import Vue from 'vue';
import Vuex from 'vuex';

import page1 from './modules/page1';
import page2 from './modules/page2';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	modules: {
		page1,
		page2
	},
	strict: debug
});
