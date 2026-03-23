import { useState } from 'react';
import { Button } from './ui/Button.jsx';
import { createFieldData, Field } from './ui/Field.jsx';

function Fieldset({ legend, fields }) {
  const [IsReadonly, setIsReadonly] = useState(false);

  const handleSetIsReadonly = () => {
    setIsReadonly(!IsReadonly);
  };

  const createField = ({ key, name, type }) => (
    <Field key={key} name={name} type={type} hasReadOnlyProp={IsReadonly} />
  );

  return (
    <fieldset>
      <legend>{legend}</legend>
      {fields.map(createField)}
      <Button label="Save" handler={handleSetIsReadonly} />
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
