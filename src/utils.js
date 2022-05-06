// resolvePath(window,'document.body.xyz', 1) => 1
export const resolvePath = (object, path, defaultValue) =>
  path.split(".").reduce((o, p) => (o ? o[p] : defaultValue), object);

// setPath(myVar, 'a.b.c', 42) => 42
export const setPath = (object, path, value) =>
  path
    .split(".")
    .reduce(
      (o, p, i) => (o[p] = path.split(".").length === ++i ? value : o[p] || {}),
      object
    );
