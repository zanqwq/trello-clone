export function uid() {
  // 生成随机唯一 id
  return Math.random()
    .toString(16)
    .slice(2);
}

// export function saveStatePlugin(store) {
//   store.subscribe(
//     (mutation, state) => {
//       localStorage.setItem(undefined, JSON.stringify(state));
//     }
//   );
// }
