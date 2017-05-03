import Vue from 'vue';

import App from './App';
import router from './router';
import store from './store';

// eslint-disable-next-line
new Vue({
	router,
	store,
	el: '#app',
	template: '<App />',
	components: { App }
});
