export function uid() {
  // generate random unique id
  return Math.random()
    .toString(16)
    .slice(2);
}

export function saveStatePlugin(store) {
  store.subscribe((mutation, state) => {
    if (!state.user) return;
    localStorage.setItem(state.user.email, JSON.stringify(state.user));
  });
}
