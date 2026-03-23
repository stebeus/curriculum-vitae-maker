const createFieldData = (...fields) =>
  fields.map(([label, type]) => ({
    key: crypto.randomUUID(),
    label,
    type,
  }));

function Field({ label, type }) {
  return (
    <label className="field">
      {label}: <input type={type} name={label} />
    </label>
  );
}

export { createFieldData, Field };
