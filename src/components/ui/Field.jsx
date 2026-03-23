function Field({ name, type }) {
  return (
    <label>
      {name}: <input type={type} name={name} required />
    </label>
  );
}

const createFieldData = (...fields) =>
  fields.map(([name, type = name]) => ({
    keyId: crypto.randomUUID(),
    name,
    type,
  }));

export { createFieldData, Field };
