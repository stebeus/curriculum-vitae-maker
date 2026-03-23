import { Button } from './ui/Button.jsx';
import { createFieldData } from './ui/Field.jsx';

function Fieldset({ legend, fields }) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {fields}
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
