function createFieldData(...fields) {
  const createField = ([label, type]) => ({
    key: crypto.randomUUID(),
    label,
    type,
  });

  return fields.map(createField);
}

function Field({ label, type }) {
  return (
    <label className="field">
      {label}: <input type={type} name={label} />
    </label>
  );
}

export { createFieldData, Field };
