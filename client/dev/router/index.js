import Vue from 'vue';
import Router from 'vue-router';
import Page1 from '@/components/pages/Page1';
import Page2 from '@/components/pages/Page2';

Vue.use(Router);

export default new Router({
	routes: [
		{ path: '/', redirect: '/page1' },
		{ path: '/page1', component: Page1 },
		{ path: '/page2', component: Page2 }
	],
	mode: 'history'
});
