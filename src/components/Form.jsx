import { createFieldsetData, Fieldset } from './Fieldset.jsx';

function Form() {
  const personalDetails = [
    'Personal details',
    ['full-name', 'text'],
    ['email'],
    ['phone-number', 'tel'],
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
    ['position', 'text'],
    ['start-date', 'date'],
    ['end-date', 'date'],
    ['description', 'text'],
  ];

  const fieldsets = createFieldsetData(personalDetails, education, experience);

  const createFieldset = ({ key, legend, fields }) => (
    <Fieldset key={key} legend={legend} fields={fields} />
  );

  return <form>{fieldsets.map(createFieldset)}</form>;
}

export { Form };
