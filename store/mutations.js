export default {
  SET_AUTHUSER: (state, authUser) => {
    state.authUser = authUser
  },
  SET_USER: (state, user) => {
    state.user = user
  },
  SET_URL: (state, path) => {
    state.url = path
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  }

}
