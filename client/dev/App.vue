<template lang="pug">
	.wrapper
		nav
			router-link(to='/page1') page 1
			router-link(to='/page2') page 2
		.content
			router-view
</template>

<style>
	body {
		margin: 0;
		padding: 0;
	}
	.wrapper {
		display: grid;
		grid-template-areas: "nav nav nav" ". main ."
	}
	nav {
		grid-area: nav;
		background-color: #ddd;
		min-height: 40px;
		display: flex;
	}
	a {
		line-height: 40px;
		text-decoration: none;
		padding: 0 10px;
		color: #000;
		transition: .3s background-color;
	}
	a:hover {
		background-color: #ccc;
	}
	.content {
		grid-area: main;
		border: 1px solid #ddd;
		border-radius: 3px;
		min-height: 300px;
		margin-top: 10px;
		display: flex;
		/*align-items: center;*/
		justify-content: center;
		font-size: 25px;
	}
	.router-link-active {
		background-color: #bbb;
	}
</style>

<script>
	export default {
		data() {
			return {
				message: 'msg'
			};
		}
	};
</script>
