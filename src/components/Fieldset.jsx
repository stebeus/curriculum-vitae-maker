import { createFieldData, Field } from './ui/Field.jsx';

const createFieldsetData = (...fieldsets) =>
  fieldsets.map(([legend, ...fields]) => ({
    key: crypto.randomUUID(),
    legend,
    fields: createFieldData(...fields),
  }));

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
