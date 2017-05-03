<template lang="pug">
	div
		h1 counter
		.counter {{count}}
</template>

<style>
	.counter {
		text-align: center;
		color: red;
	}
</style>

<script>
	import { mapState } from 'vuex';

	export default {
		computed: {
			...mapState({
				count: state => state.page2.count
			})
		},
		mounted() {
			this.$store.commit('page2/increment');
		}
	};
</script>
