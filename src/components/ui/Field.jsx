function createFieldData(...fields) {
  const createField = ([label, type]) => ({ label, type });
  return fields.map(createField);
}

function Field({ label, type }) {
  return (
    <label>
      {label}: <input type={type} name={label} />
    </label>
  );
}

export { createFieldData, Field };
