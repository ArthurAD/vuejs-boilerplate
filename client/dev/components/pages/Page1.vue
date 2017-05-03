<template lang="pug">
	div
		h1 form
		div
			label email
			input(type="text", @change="changeEmail($event)", :value="email")
		div
			label password
			input(type="password", @change="changePassword($event)", :value="pass")
</template>

<style scoped>
	h1 {
		text-align: center;
	}
	label {
		min-width: 100px;
		display: inline-block;
		text-align: right;
		padding-right: 5px;
	}
</style>

<script>
	import { mapState } from 'vuex';

	export default {
		computed: {
			...mapState({
				email: state => state.page1.email,
				pass: state => state.page1.password
			})
		},
		methods: {
			changeEmail(e) {
				this.$store.commit('page1/changeEmail', e.target.value);
			},
			changePassword(e) {
				this.$store.commit('page1/changePassword', e.target.value);
			}
		}
	};
</script>
