import { generateId } from '../utils/generators.js';
import { Field } from './Field.jsx';

function Fieldset({ legend, fields }) {
  const createField = ({ name, type }) => {
    const id = generateId();
    return <Field key={id.next().value} name={name} type={type} />;
  };

  return (
    <fieldset>
      <legend>{legend}</legend>
      {fields.map(createField)}
    </fieldset>
  );
}

export { Fieldset };
