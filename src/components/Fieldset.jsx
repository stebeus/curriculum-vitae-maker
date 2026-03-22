import { getKeyId } from '../utils/generators.js';
import { createFieldData, Field } from './ui/Field.jsx';

function createFieldsetData(...fieldsets) {
  const createFieldset = ([legend, ...fields]) => ({
    legend,
    fields: createFieldData(...fields),
  });

  return fieldsets.map(createFieldset);
}

function Fieldset({ legend, fields }) {
  const createField = ({ label, type }) => (
    <Field key={getKeyId()} label={label} type={type} />
  );

  return (
    <fieldset>
      <legend>{legend}</legend>
      {fields.map(createField)}
    </fieldset>
  );
}

export { createFieldsetData, Fieldset };
