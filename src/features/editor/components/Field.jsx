const createFieldData = (...fields) =>
  fields.map(([name, type]) => ({ key: crypto.randomUUID(), name, type }));

function Field({ name, type }) {
  return (
    <label className="field">
      {name}: <input type={type} name={name} />
    </label>
  );
}

export { createFieldData, Field };
