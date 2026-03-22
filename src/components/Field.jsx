function createFieldData([name, type]) {
  const state = { name, type };
  return { ...state };
}

const createManyFields = (...fields) => fields.map(createFieldData);

function Field({ label, id, type }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}: </label>
      <input type={type} id={id} />
    </div>
  );
}

export { createManyFields, Field };
