export default {
	namespaced: true,
	state: {
		email: '',
		password: ''
	},
	mutations: {
		changeEmail(state, newEmail) {
			state.email = newEmail;
		},
		changePassword(state, newPassword) {
			state.password = newPassword;
		}
	}
};
