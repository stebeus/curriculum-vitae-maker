function Field({ name, type }) {
  return (
    <label className="field">
      {name}: <input type={type} name={name} required />
    </label>
  );
}

const createFieldData = (...fields) =>
  fields.map(([name, type = name]) => ({
    key: crypto.randomUUID(),
    name,
    type,
  }));

export { createFieldData, Field };
