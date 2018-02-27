export default function ({ store,route, redirect }) {
    if (!store.state.user&&route.path!="/getuserInfo") {
        return redirect('/api/login?url='+ route.path);
    }
  }