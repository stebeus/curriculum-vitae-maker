function* generateId() {
  let id = 0;
  while (true) yield id++;
}

const id = generateId();

export { id };
