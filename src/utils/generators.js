function* generateId() {
  let id = 0;
  while (true) yield id++;
}

const keyId = generateId();

export { keyId };
