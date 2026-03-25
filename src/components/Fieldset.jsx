import { Save, SquarePen } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/Button.jsx';
import { createFieldData, Field } from './ui/Field.jsx';

export function Fieldset({ legend, fields }) {
  const [isFieldSaved, setIsFieldSaved] = useState(false);

  const [buttonLabel, setButtonLabel] = useState('Save');
  const [buttonIcon, setButtonIcon] = useState(<Save />);

  const switchButtonRole = (label) => {
    setButtonLabel(label === 'Save' ? 'Edit' : 'Save');
    setButtonIcon(label === 'Save' ? <SquarePen /> : <Save />);
  };

  const handleFieldSave = () => {
    setIsFieldSaved(!isFieldSaved);
    switchButtonRole(buttonLabel);
  };

  const createField = ({ key, label, type }) => (
    <Field key={key} label={label} type={type} isReadOnly={isFieldSaved} />
  );

  return (
    <fieldset>
      <legend>{legend}</legend>
      {fields.map(createField)}
      <Button handler={handleFieldSave}>
        {buttonIcon}
        {buttonLabel}
      </Button>
    </fieldset>
  );
}

export function createFieldsetData(legend, ...fields) {
  const state = {
    legend,
    fields: fields.map(createFieldData),
    key: crypto.randomUUID(),
  };

  return Object.freeze({ ...state });
}
