import { createFieldsetData, Fieldset } from './Fieldset.jsx';

export function Form() {
  const personalDetails = createFieldsetData(
    'Personal details',
    ['Full name', 'text'],
    ['Email', 'email'],
    ['Phone number', 'tel'],
  );

  const education = createFieldsetData(
    'Education',
    ['School', 'text'],
    ['Field of study', 'text'],
    ['Start date', 'date'],
    ['End date', 'date'],
  );

  const experience = createFieldsetData(
    'Experience',
    ['Company', 'text'],
    ['Position', 'text'],
    ['Start date', 'date'],
    ['End date', 'date'],
    ['Description', 'textarea'],
  );

  const fieldsets = [personalDetails, education, experience];

  const createFieldset = ({ key, legend, fields }) => (
    <Fieldset key={key} legend={legend} fields={fields} />
  );

  return <form>{fieldsets.map(createFieldset)}</form>;
}
