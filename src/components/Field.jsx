import { formatLabel } from '../utils/formatters.js';

function createFieldData(name, type) {
  const state = { name, type };
  return { ...state };
}

function Field({ name, type }) {
  return (
    <div className="field">
      <label htmlFor={name}>{formatLabel(name)}: </label>
      <input type={type} name={name} id={name} />
    </div>
  );
}

export { Field };
