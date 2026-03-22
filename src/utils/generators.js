function* generateId() {
  let id = 0;
  while (true) yield id++;
}

const id = generateId();

const getKeyId = (key = id) => key.next().value;

export { getKeyId };
