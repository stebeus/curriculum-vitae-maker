import { generateId } from '../utils/generators.js';
import { createManyFields, Field } from './Field.jsx';

function createFieldsetData([legend, ...fieldsData]) {
  const fields = createManyFields(fieldsData);
  const state = { legend, fields };
  return { ...state };
}

const createManyFieldsets = (...fieldsets) => fieldsets.map(createFieldsetData);

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

export { createManyFieldsets, Fieldset };
