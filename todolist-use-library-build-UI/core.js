export default function html([first, ...strings], ...values) {
  return values
    .reduce((acc, cur) => acc.concat(cur, strings.shift()), [first])
    .filter((x) => (x && x !== true) || x === 0)
    .join("");
}

export function createStore(reducer) {
  let state = reducer();

  // Render UI
  const roots = new Map();

  function render() {
    for (const [root, component] of roots) {
      const output = component();
      root.innerHTML = output;
    }
  }

  return {
    // Nhận view và đẩy ra root
    attach(component, root) {
      roots.set(root, component);
      render();
    },
    // Kết nối giữa store và view
    connect(selector = (state) => state) {
      return (component) =>
        (props, ...args) =>
          component(Object.assign({}, props, selector(state), ...args));
    },
    // Dispatch thực hiện hành động
    dispatch(action, ...args) {
      state = reducer(state, action, args);
      render();
    },
  };
}
