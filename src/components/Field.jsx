import { formatLabel } from '../utils/formatters.js';

function Field({ name, type }) {
  return (
    <div className="field">
      <label htmlFor={name}>{formatLabel(name)}: </label>
      <input type={type} name={name} id={name} />
    </div>
  );
}

export { Field };
