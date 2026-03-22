import { createFieldsetData, Fieldset } from './Fieldset.jsx';

function Form() {
  const personalDetails = [
    'Personal details',
    ['full-name', 'text'],
    ['email', 'email'],
    ['phone-number', 'tel'],
    ['address', 'text'],
  ];

  const education = [
    'Education',
    ['school', 'text'],
    ['field-of-study', 'text'],
    ['start-date', 'date'],
    ['end-date', 'date'],
  ];

  const experience = [
    'Experience',
    ['company', 'text'],
    ['position-title', 'text'],
    ['responsibilities', 'text'],
    ['start-date', 'date'],
    ['end-date', 'date'],
  ];

  const fieldsets = createFieldsetData(personalDetails, education, experience);

  const createFieldset = ({ key, legend, fields }) => (
    <Fieldset key={key} legend={legend} fields={fields} />
  );

  return <form> {fieldsets.map(createFieldset)}</form>;
}

export { Form };
