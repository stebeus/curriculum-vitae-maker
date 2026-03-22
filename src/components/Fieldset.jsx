import { keyId } from '../utils/generators.js';
import { createManyFields, Field } from './ui/Field.jsx';

function createFieldsetData([legend, ...fieldsData]) {
  const fields = createManyFields(...fieldsData);
  const state = { legend, fields };
  return { ...state };
}

const createManyFieldsets = (...fieldsets) => fieldsets.map(createFieldsetData);

function Fieldset({ legend, fields }) {
  const createField = ({ label, id, type }) => (
    <Field key={keyId.next().value} label={label} id={id} type={type} />
  );

  return (
    <fieldset>
      <legend>{legend}</legend>
      {fields.map(createField)}
    </fieldset>
  );
}

export { createManyFieldsets, Fieldset };
