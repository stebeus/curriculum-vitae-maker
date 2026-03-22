import { createFieldData, Field } from './ui/Field.jsx';

function createFieldsetData(...fieldsets) {
  const createFieldset = ([legend, ...fields]) => ({
    key: crypto.randomUUID(),
    legend,
    fields: createFieldData(...fields),
  });

  return fieldsets.map(createFieldset);
}

function Fieldset({ legend, fields }) {
  const createField = ({ key, label, type }) => (
    <Field key={key} label={label} type={type} />
  );

  return (
    <fieldset>
      <legend>{legend}</legend>
      {fields.map(createField)}
    </fieldset>
  );
}

export { createFieldsetData, Fieldset };
