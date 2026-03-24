import { useState } from 'react';
import { Button } from './ui/Button.jsx';
import { createFieldData, Field } from './ui/Field.jsx';

export function Fieldset({ legend, fields }) {
  const [isFieldSaved, setIsFieldSaved] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('Save');

  const handleFieldSave = () => {
    setIsFieldSaved(!isFieldSaved);
    setButtonLabel(buttonLabel === 'Save' ? 'Edit' : 'Save');
  };

  const createField = ({ key, label, type }) => (
    <Field key={key} label={label} type={type} isReadOnly={isFieldSaved} />
  );

  return (
    <fieldset>
      <legend>{legend}</legend>
      {fields.map(createField)}
      <Button label={buttonLabel} handler={handleFieldSave} />
    </fieldset>
  );
}

export const createFieldsetData = (...fieldsets) =>
  fieldsets.map(([legend, ...fields]) => ({
    key: crypto.randomUUID(),
    legend,
    fields: createFieldData(...fields),
  }));
