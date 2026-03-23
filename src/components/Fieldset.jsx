import { Button } from './ui/Button.jsx';
import { createFieldData, Field } from './ui/Field.jsx';

function Fieldset({ legend, fields }) {
  const createField = ({ key, name, type }) => (
    <Field key={key} name={name} type={type} />
  );

  return (
    <fieldset>
      <legend>{legend}</legend>
      {fields.map(createField)}
      <Button label="Save" />
    </fieldset>
  );
}

const createFieldsetData = (...fieldsets) =>
  fieldsets.map(([legend, ...fields]) => ({
    key: crypto.randomUUID(),
    legend,
    fields: createFieldData(...fields),
  }));

export { createFieldsetData, Fieldset };
